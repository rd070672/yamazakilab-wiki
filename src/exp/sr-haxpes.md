# 放射光 HAXPES（Hard X-ray Photoelectron Spectroscopy）の基礎

## 参考ドキュメント

- Hard X-ray Photoemission: An Overview and Future Perspective（C. Fadley, in “Hard X-ray Photoelectron Spectroscopy”, ed. J. C. Woicik）  
  https://fadley.physics.ucdavis.edu/HAXPES.Book.Woicik.Fadley.reprint.final.pdf
- Hard x-ray photoelectron spectroscopy: a snapshot of the present and thoughts for the future（C. Kalha et al., J. Phys.: Condens. Matter 33, 233001, 2021）  
  https://pubmed.ncbi.nlm.nih.gov/33647896/
- X-ray photoelectron spectroscopy using hard X-rays（L. Kövér et al., J. Electron Spectrosc. Relat. Phenom. 178–179, 2010）  
  https://www.sciencedirect.com/science/article/abs/pii/S0368204809002746
- BL09XU: an advanced hard X-ray photoelectron spectroscopy beamline of SPring-8（A. Yasui et al., J. Synchrotron Rad. 30, 2023）  
  https://journals.iucr.org/paper?ok5097=
- 実験室系硬 X 線光電子分光（山瑞拡路 ほか, 表面科学 37, 2016）    
  https://www.researchgate.net/publication/301572437_Laboratory_Hard_X-ray_Photoelectron_Spectroscopy

## 概要

- HAXPES が通常 XPS とどこが違うか
- 放射光 HAXPES の実験配置と特徴
- 何が見えるのか（測定対象・代表的応用）
- 利点・限界
- 放射光 HAXPES と実験室系 HAXPES の関係

## 1. HAXPES とは何か

HAXPES（Hard X-ray Photoelectron Spectroscopy）は、

- hν ≈ 2～10 keV 程度の硬 X 線を励起源として用いる
- X 線光電子分光（XPS／PES）の一種

であり、従来の軟 X 線 XPS に比べて

- 光電子の運動エネルギーが高く
- 物質内部からの光電子がより多く検出される

ため、「バルク敏感」「埋もれた界面・多層構造の評価」に優れた手法である。

基本原理自体は通常の XPS と同じく

- 光電効果  
- 結合エネルギー = hν − 運動エネルギー − 仕事関数

に基づくが、「使う光のエネルギー領域」と「情報深さ」が大きく異なる点が HAXPES の特徴となる。

## 2. 通常 XPS との違いと情報深さ

典型的な違いは次の通り。

- 励起光
  - 通常 XPS: Al Kα (1486.6 eV), Mg Kα (1253.6 eV) など
  - HAXPES: シンクロトロン放射光や高エネルギー X 線管を用いた 2～10 keV 領域の X 線

- 情報深さ（情報を運ぶ光電子の脱出深さ）
  - 通常 XPS: 数 Å ～ 数 nm 程度（最表面数原子層に敏感）
  - HAXPES: 10 nm 前後から場合によっては数十 nm まで（バルクや埋もれた層にも感度）

- 取り出せる情報の性格
  - XPS: 「表面・界面」の化学状態・バンドベンディング・吸着種などに強い
  - HAXPES: 「バルクに近い化学状態」「埋もれた界面や電極/絶縁膜界面」「多層構造の内部状態」の評価に強い

このため HAXPES は、

- 表面汚染や酸化層の影響をある程度回避しつつ
- 内部の化学状態・バンド構造・バンドアライメント

を評価したい場合に特に有効となる。

## 3. 放射光 HAXPES の実験配置と特徴

放射光施設での HAXPES は、主に次のような構成をとる。

- 光源
  - 高輝度シンクロトロンのアンジュレータなどを用い、数 keV の X 線を供給。
  - モノクロメータで高分解能かつ可変エネルギーの単色 X 線を生成。

- ビームライン光学
  - DCM（Double Crystal Monochromator）や高分解能モノクロメータで ΔE/E を最適化。
  - HAXPES 専用ビームラインでは、Wolter ミラーなどを用いて試料上に高フラックスかつ小ビーム径で集光する設計が多い。

- 分析器
  - 高電位対応のヘミスフェリカルアナライザー（例: R4000, EW4000 など）を用い、数 keV の光電子をエネルギー分析。
  - 近年は TOF（飛行時間）型やモメンタム顕微鏡との組合せも進んでおり、k 空間分解 HAXPES やスピン分解 HAXPES も開発されている。

- 測定環境
  - 通常は UHV（超高真空）下での固体試料測定が基本。
  - 一部では in-situ 成膜、熱処理、バイアス印加、電気測定との組合せも行われている。

SPring-8 の BL09XU, BL47XU などは HAXPES 専用・重視ビームラインとして設計されており、バルク敏感測定や埋もれた層・デバイス界面の研究が行われている。

## 4. 何が見えるか（測定対象と代表的な応用）

HAXPES で典型的に測定されるのは、通常の XPS と同様に

- コア準位スペクトル
- 価電子帯スペクトル
- バンドベンディング・化学シフト
- 多層構造・界面間でのエネルギーアライメント

などである。

代表的な応用例としては、

- 半導体デバイス・ゲート絶縁膜界面
  - MOS 構造における高 k 絶縁膜／半導体のバンドオフセット、界面欠陥、ドライエッチングダメージの評価。
- スピントロニクス・トンネル接合
  - 強磁性電極／トンネルバリア／電極からなる TMR 素子の埋もれた磁性層の化学状態・スピン依存バンド構造の評価。
- エネルギーデバイス
  - 全固体電池や触媒層における埋もれた界面の元素分布・化学状態。
- 機能性酸化物・超伝導体
  - 多層ヘテロ構造における界面再構成、電荷移動、バンドアライメント。

などが挙げられる。

特に「イオンスパッタで削ると壊れてしまう構造」「表面と内部で状態が大きく違う材料」では、HAXPES の非破壊・バルク敏感という特徴が大きなメリットになる。

## 5. HAXPES の利点と限界

利点:

- バルク敏感・界面敏感
  - 埋もれた層や界面の化学状態・バンド構造を非破壊で評価可能。
- 表面汚染の影響をある程度低減
  - 数 nm 程度の自然酸化層の影響を相対的に小さくし、内部情報に近いスペクトルを得やすい。
- 高エネルギーコア準位の励起
  - 深いコア準位（例えば 1s, 2p の高 Z 元素）を励起しやすく、内殻構造を詳細に評価できる。

限界・課題:

- 実験設備の要求が高い
  - 高輝度硬 X 線源と高電位対応分析器が必要であり、主に放射光施設や特殊なラボ装置に限定される。
- エネルギー分解能
  - 高エネルギー光子を用いるため、同等の分解能を得るには光学・分析器側の高度な設計が必要。
- 表面選択性が低い
  - 表面だけの情報を狙って取得したい場合には、逆に「深く見えすぎる」ことがデメリットになるケースもある。
- ビームタイムとデータ量
  - 多層構造・多条件測定ではデータ量が膨大になり、ビームタイムや解析リソースが必要。

## 6. 放射光 HAXPES と実験室系 HAXPES

HAXPES は元々、放射光施設での利用が中心であったが、

- 高エネルギー X 線源（Cr, Ga, InKα など）と高電位対応分析器を組み合わせた「実験室系 HAXPES」装置も開発されている。

放射光 HAXPES:

- 高い輝度と可変エネルギー
- 高いエネルギー分解能と k 分解・スピン分解など高度な機能
- ただしビームタイム申請が必要で、常時使用は難しい

実験室系 HAXPES:

- 固定波長が多いが、手元でいつでも測定できる
- デバイス評価・品質管理などへの応用が進展中

という補完的な関係にある。
