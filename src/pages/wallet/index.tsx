import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WalletPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">ShackwWallet</h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            Stablecoin-only / Base-only / Gas-in-stable。 ユーザーが迷わないよう、意図的に機能を削ぎ落としたウォレット。
          </p>
        </div>
        <Button asChild size="sm">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            Wallet principles
            <Badge variant="outline" className="text-[10px] font-normal">
              Philosophy
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          <ul className="space-y-2 list-disc pl-5">
            <li>チェーンは Base に固定。</li>
            <li>JPYC / USDC / EURC 以外のトークンは表示しない。</li>
            <li>NFT・広告・余計なタブは一切なし。</li>
            <li>トランザクション履歴はシンプルなリスト表示。</li>
          </ul>
          <ul className="space-y-2 list-disc pl-5">
            <li>ガスは Paymaster 経由でステーブル払い。</li>
            <li>初回起動時にスマートウォレット自動作成。</li>
            <li>秘密鍵のエクスポートは “後付け” 導線で提供。</li>
            <li>WalletConnect に「使われる側」として対応。</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-sm">UX mock (イメージ)</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-[2fr,3fr]">
          <div className="rounded-xl border bg-muted/40 p-4 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground">ShackwWallet</span>
              <span className="text-[11px] rounded-full bg-primary/10 px-2 py-0.5 text-primary">Base</span>
            </div>
            <div>
              <div className="text-[11px] text-muted-foreground">Total</div>
              <div className="text-lg font-semibold">¥120,000</div>
              <div className="text-[11px] text-muted-foreground">JPYC + USDC + EURC</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px]">
              <div className="rounded-lg bg-background p-2 border">
                <div className="text-muted-foreground">JPYC</div>
                <div className="font-semibold">80,000</div>
              </div>
              <div className="rounded-lg bg-background p-2 border">
                <div className="text-muted-foreground">USDC</div>
                <div className="font-semibold">260</div>
              </div>
              <div className="rounded-lg bg-background p-2 border">
                <div className="text-muted-foreground">EURC</div>
                <div className="font-semibold">150</div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              実際のアプリでは、このあたりに
              <code className="rounded bg-muted px-1 py-0.5">Send / Receive / History</code>
              などのアクションを配置。
            </p>
            <p>
              shackw.com 側のサイトでは、 ShackwWallet
              のスクリーンショットやチュートリアル動画へのリンクを貼るイメージ。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
