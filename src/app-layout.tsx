import { Outlet, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

import type { ReactNode } from "react";

const navLinkBase = "text-sm font-medium transition-colors hover:text-foreground/80";
const navLinkActive = "text-foreground";
const navLinkInactive = "text-foreground/60";

const NavItem = ({ to, children }: { to: string; children: ReactNode }) => (
  <NavLink to={to} className={({ isActive }) => [navLinkBase, isActive ? navLinkActive : navLinkInactive].join(" ")}>
    {children}
  </NavLink>
);

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
              SH
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">Shackw</span>
              <span className="text-[11px] text-muted-foreground">Stable-first crypto experience</span>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/wallet">Wallet</NavItem>
            <NavItem to="/store">Store</NavItem>
          </nav>

          <div className="hidden sm:block">
            <Button size="sm" variant="outline">
              Open ShackwWallet
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Shackw</span>
          <span>Built for JPYC / USDC / EURC</span>
        </div>
      </footer>
    </div>
  );
};
