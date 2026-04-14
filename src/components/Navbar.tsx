import { Globe } from "lucide-react";

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Globe className="h-6 w-6 text-primary" />
        <div className="leading-tight">
          <span className="text-lg font-bold tracking-tight text-foreground">
            News2World
          </span>
          <p className="text-[11px] font-medium text-muted-foreground">
            From Headlines to Stories
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
