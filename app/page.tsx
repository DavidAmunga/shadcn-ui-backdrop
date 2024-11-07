"use client";
import { ClipboardIcon, GithubIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Backdrop } from "@/components/ui/backdrop";
import Prism from "@/lib/prism";
import "@/styles/prism.css";
function Home() {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!", { position: "top-center" });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { setTheme, theme } = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">shadcn-ui-backdrop</h1>
            <h2 className="text-xl">
              A React component that narrows the user&apos;s focus to a
              particular element on the screen
            </h2>
            <p className="italic text-md">
              Inspired by{" "}
              <a
                className="underline"
                href="https://mui.com/material-ui/react-backdrop/"
              >
                Material UI Backdrop
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                window.open(
                  "https://github.com/DavidAmunga/shadcn-ui-backdrop",
                  "_blank"
                )
              }
            >
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold tracking-tight">Demo</h2>
          <p className="text-muted-foreground">
            Click the button below to show the backdrop with a loading indicator
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setOpen(true)} variant="default">
              Show Backdrop
            </Button>
          </div>

          <Backdrop open={open} onClose={() => setOpen(false)} variant="blur">
            <div className="animate-pulse">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          </Backdrop>

          <div className="relative">
            <pre className="rounded-lg m-0 p-0 bg-muted overflow-x-auto">
              <code className="relative text-sm block m-0 p-4 overflow-auto language-tsx">
                {`
import { Backdrop } from "@/components/ui/backdrop"

<Backdrop 
open={open} 
onClose={handleOpen}
variant="blur"
>
<div className="animate-pulse">
  <Loader className="h-12 w-12 animate-spin text-primary" />
</div>
</Backdrop>`}
              </code>
            </pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() =>
                copyToClipboard(
                  `<Backdrop 
open={open} 
onClose={() => setOpen(false)}
variant="blur"
>
<div className="animate-pulse">
  <Loader className="h-12 w-12 animate-spin text-primary" />
</div>
</Backdrop>`
                )
              }
            >
              <ClipboardIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
