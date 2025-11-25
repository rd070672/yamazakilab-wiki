# Bader電荷解析のメモ

## 参考ドキュメント
- 公式サイト：[Code: Bader Charge Analysis](https://theory.cm.utexas.edu/henkelman/code/bader/)

## 概要
- Bader 解析は電子密度をゼロフラックス面で分割し、各原子に電子数を割り当てる手法。
- 電荷移動・結合性・酸化状態の定量評価に使用される。
- VASP などの第一原理計算の出力を入力として用いる。

## 必要ファイル（VASP の例）
- `CHGCAR`（電子密度）
- より正確な解析には以下を推奨：
  - `AECCAR0`
  - `AECCAR2`
  - `CHGCAR` と組み合わせてコア電子を補正

## 入手・インストール
- 公式サイト：https://theory.cm.utexas.edu/bader/
- 一般的なインストール手順（Linux）
  - `wget https://theory.cm.utexas.edu/vasp/bader_code.tar.gz`
  - `tar xzf bader_code.tar.gz`
  - `cd bader_code`
  - `make`
- 実行ファイルを PATH に追加（例）
  - `export PATH=$HOME/bader_code:$PATH`

## 実行手順（VASP の例）
- `CHGCAR` のあるディレクトリで実行
  - `bader CHGCAR`
- コア電子補正を行う場合（推奨）
  - `bader CHGCAR -ref AECCAR0 -ref AECCAR2`
- 実行後に生成される主な出力
  - `ACF.dat`：各原子の電子数・体積
  - `AVF.dat`：体積データ
  - `BCF.dat`：Bader 面情報

## 出力データの読み方
- `ACF.dat` に含まれる主項目
  - 原子番号
  - Bader 電子数
  - 体積
  - 電荷（名目電子数との差分で評価）
- 電荷移動量の算出例
  - `Δq = Z_valence − Bader_electrons`

## 応用例
- 結合性や電荷移動の定量解析
- ドーピング・欠陥の電荷状態評価
- 表面吸着・界面電荷分布の比較
- 構造最適化前後の電子数変化の追跡

## 注意点
- 電子密度メッシュが粗いと結果が不安定になるため精度確認が必須。
- `LAECHG = .TRUE.` を設定し AECCAR0/2 を取得することで精度向上。
- 表面・界面・軽元素系では分割面が不安定になる場合があるため注意。
- スピン偏極計算ではスピン密度は別途解析が必要。