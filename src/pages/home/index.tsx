import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Shackw:
            <span className="block text-primary">Stablecoin-first wallet & store.</span>
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Shackw は JPYC / USDC / EURC だけにフォーカスした、 シンプルで安全なウォレット体験を提供します。
            チェーン選択や余計なトークンは一切なし。
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/wallet">Open ShackwWallet</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/store">Browse ShackwStore</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">Base チェーン固定 / Stablecoin のみ / ガスもステーブルで。</p>
        </div>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Quick glance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Supported chains</span>
              <span className="font-medium">Base only</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tokens</span>
              <span className="font-medium">JPYC / USDC / EURC</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Gas payment</span>
              <span className="font-medium">Stablecoins (via Paymaster)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">NFT / Ads</span>
              <span className="font-medium">Not supported. On purpose.</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">ShackwWallet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-muted-foreground">
            <p>
              モバイルフレンドリーな stablecoin ウォレット。初回起動時にスマートウォレットを自動作成し、
              以降はシームレスに再接続。
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/wallet">View details</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">ShackwStore</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-muted-foreground">
            <p>ShackwWallet で購入できるデジタルサービスのマーケット。 JPYC / USDC / EURC での支払いに最適化。</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/store">Explore store</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">For builders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs text-muted-foreground">
            <p>WalletConnect・Paymaster・DeFi 連携など、開発者向けの API / SDK も提供予定。</p>
            <p className="text-[11px]">Docs / API portal は今後このサイト配下に追加していくイメージ。</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
