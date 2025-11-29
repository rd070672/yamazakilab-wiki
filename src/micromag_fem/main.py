from pathlib import Path

from src.core.config import load_config
from src.core.mesh import StructuredHexMesh
from src.core.fields import State
from src.core.io import OutputManager
from src.core.diagnostics import Diagnostics

from src.micromag.effective_field import EffectiveField
from src.micromag.integrators import get_integrator
from src.micromag.init import init_uniform

from src.micromag.terms.exchange import ExchangeTerm
from src.micromag.terms.zeeman import ZeemanTerm
from src.micromag.terms.anisotropy import UniaxialAnisotropyTerm

def main():
    cfg = load_config()  # 例: yaml/toml/json から読む想定

    # --- mesh / state ---
    mesh = StructuredHexMesh(cfg.grid).build()
    state = State(mesh=mesh, material=cfg.material)
    state.allocate_fields()  # m, H, (将来 u, sigma, phi)

    # --- initial condition ---
    init_uniform(state, m0=cfg.init.m0)

    # --- register terms ---
    terms = []
    terms.append(ExchangeTerm(A=cfg.material.A))
    terms.append(UniaxialAnisotropyTerm(Ku=cfg.material.Ku, u_axis=cfg.material.u_axis))
    terms.append(ZeemanTerm(Hext=cfg.field.Hext))

    # 将来用（この段階ではOFF）
    # if cfg.demag.enable:
    #     terms.append(DemagTerm(method=cfg.demag.method, ...))
    # if cfg.magnetoelastic.enable:
    #     terms.append(MagnetoElasticTerm(...))

    heff = EffectiveField(terms=terms)
    integrator = get_integrator(cfg.time.integrator, cfg.time.dt)

    out = OutputManager(out_dir=Path(cfg.output.dir), cfg=cfg.output)
    diag = Diagnostics(cfg=cfg.diagnostics)

    # --- time loop ---
    for step in range(cfg.time.n_steps):
        H = heff.compute(state)            # H_eff
        integrator.step(state, H)          # update m
        state.normalize_m()                # enforce |m|=1

        if step % cfg.output.every == 0:
            diag.update(state, H, terms, step)
            out.save_step(state, diag, step)

    out.finalize()

if __name__ == "__main__":
    main()