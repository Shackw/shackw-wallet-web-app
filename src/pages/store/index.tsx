import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StoreItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  token: "JPYC" | "USDC" | "EURC";
  status?: "coming-soon" | "available";
};

const items: StoreItem[] = [
  {
    id: "monitoring",
    name: "Wallet monitoring dashboard",
    description: "ShackwWallet の利用状況を可視化する簡易ダッシュボード。",
    price: "1,000",
    token: "JPYC",
    status: "coming-soon"
  },
  {
    id: "priority-support",
    name: "Priority support",
    description: "技術的な質問への優先サポート（開発者向け）。",
    price: "50",
    token: "USDC"
  },
  {
    id: "sandbox-plan",
    name: "Sandbox access",
    description: "テスト用 Paymaster / Relay 環境へのアクセス。",
    price: "30",
    token: "EURC"
  }
];

export const StorePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">ShackwStore</h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            ShackwWallet で購入できる、開発者向けのサービスやプランをまとめたストア。 すべての決済は JPYC / USDC / EURC
            のみ。
          </p>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map(item => (
          <Card key={item.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-sm">
                <span>{item.name}</span>
                <Badge variant="outline" className="text-[10px]">
                  {item.token}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground">
              <p>{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px]">Price</span>
                <span className="text-sm font-semibold">
                  {item.price} {item.token}
                </span>
              </div>
              {item.status === "coming-soon" ? (
                <Button disabled size="sm" className="w-full">
                  Coming soon
                </Button>
              ) : (
                <Button size="sm" className="w-full">
                  Purchase with ShackwWallet
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
