# Agent Rules

## 言語ルール
- すべてのレスポンスは日本語で行うこと
- タスクが完了したか、人の入力が必要な場合は、必ず一回コマンド`afplay /System/Library/Sounds/Glass.aiff`を実行して音を鳴らしてください。

## プロジェクト構成

### 技術スタック

#### バックエンド・フロントエンド
- **言語**: TypeScript
- **フレームワーク**: Next.js（App Router）
- **UIライブラリ**: React
- **スタイリング**: Tailwind CSS
- **パッケージマネージャー**: pnpm
- **リンター**: ESLint

#### データベース
- Supabase (Postgresql)

### ディレクトリ構造
```
hakogaki2/
├── docs/                        # プロジェクトドキュメント
├── migrations/                  # データベースマイグレーション
│   ├── schemas/                 # create sqls
│   ├── seeds/                   # Seed Data
├── public/                      # 静的ファイル
├── src/                         # ソースコード
│   ├── app/                     # Next.js App Router
│   ├── components/              # Reactコンポーネント
│   ├── hooks/                   # カスタムフック
│   ├── styles/                  # スタイルファイル
│   └── types/                   # TypeScript型定義
├── supabase/                    # このディレクトリは使わない
```

