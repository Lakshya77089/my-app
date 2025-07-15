"use client";
import Image from "next/image";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../actions/wallet";
import { useTheme } from "next-themes";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight,Menu } from "lucide-react";
import Link from "next/link";
// import { useQueryClient } from '@tanstack/react-query';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const theme = useTheme().theme;
  // const qc = useQueryClient();
  // console.log('QueryClient in Navbar:', qc);

  const welcomeScreen = {
    title: "BFM Academy",
    subtitle: "where web3 wizards are made",
    img: {
      src: `${theme == "dark" ? "/logo-dark.png" : "/logo-light.png"}`,
      width: 200,
      height: 200,
    },
  };
  const [showEventLinks, setShowEventLinks] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="fixed  top-0 left-0 z-[150] w-full bg-transparent backdrop-blur-[10px] flex flex-row items-center justify-between px-14 pb-4 pt-7">
      <Link href="/" className="flex flex-row items-center gap-2 md:gap-4">
        <Image
          src="/logo-blue.png"
          alt="Logo"
          width={500}
          height={500}
          className="h-8 w-8 dark:hidden md:h-12 md:w-12"
        />
        <Image
          src="/logo-dark.png"
          alt="Logo"
          width={500}
          height={500}
          className="hidden h-8 w-8 dark:block md:h-12 md:w-12"
        />
        <h1 className="text-lg font-bold text-brandblue dark:text-foreground md:text-3xl">
          academy
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden flex-row items-center justify-between space-x-2 md:flex">
        {/* <ModeToggle /> */}
        <Link href="https://www.bfmacademy.in/early-access">
          <Button className="bg-brandblue p-5 text-white hover:bg-brandblue/90">
            Get Early Access
          </Button>
        </Link>
        <Suspense
  fallback={
    <Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
      <span className="translate-x-[12px] transition-all group-hover:translate-x-0">
        Enroll Now
      </span>
      <ArrowRight
        className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
        size={24}
      />
    </Button>
  }
>
  
  <div className="mr-2">
    <ConnectButton
      client={client}
      connectButton={{
        label: 'Connect Wallet',
        className: 'connect-wallet',
      }}
      connectModal={{
        welcomeScreen: welcomeScreen,
        title: 'Get started with BFMAcademy',
        titleIcon: '/page/logo-blue.png',
        privacyPolicyUrl: 'https://www.bfmacademy.in/privacy-policy',
        size: 'wide',
      }}
      theme={theme === 'dark' ? 'dark' : 'light'}
    />
  </div>
</Suspense>

        <Link href="https://www.bfmacademy.in/business">
          <Button
            className="group rounded-lg bg-zinc-700 p-5 text-white transition-all hover:bg-zinc-700/90 dark:bg-secondary dark:hover:bg-secondary/90"
            variant="secondary"
          >
            Business
          </Button>
        </Link>
        <Link href="https://www.bfmacademy.in/roadmap">
          <Button
            className="group rounded-lg bg-zinc-700 p-5 text-white transition-all hover:bg-zinc-700/90 dark:bg-secondary dark:hover:bg-secondary/90"
            variant="secondary"
          >
            Roadmap
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="group rounded-lg bg-zinc-700 p-5 text-white transition-all hover:bg-zinc-700/90 dark:bg-secondary dark:hover:bg-secondary/90"
              variant="secondary"
            >
              Events
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-9 w-48 rounded-md border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            align="end"
          >
            <DropdownMenuItem asChild>
              <Link
                href="https://www.bfmacademy.in/event-archive"
                className="block rounded px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Event Archive
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://www.bfmacademy.in/networking"
                className="block rounded px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Future Xcon
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <div className="flex flex-row items-center gap-2">
            {/* <ModeToggle /> */}
            <Button
              variant="outline"
              size="icon"
              className="bg-brandblue text-white hover:bg-brandblue/90 hover:text-white"
              onClick={() => setIsSheetOpen((prev) => !prev)} // toggle manually
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <SheetContent
            side="bottom"
            className="h-dvh w-screen bg-brandblue text-white"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/page/logo-dark.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-white">academy</span>
                </div>
              </SheetTitle>
            </SheetHeader>

            <div className="mt-8 flex flex-col space-y-4">
              <Link
                href="https://www.bfmacademy.in/early-access"
                className="w-full"
                onClick={() => setIsSheetOpen(false)}
              >
                <Button className="w-full bg-brandblue py-6 text-base text-white hover:bg-brandblue/90">
                  Early Access
                </Button>
              </Link>

              {/* Events Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setShowEventLinks((prev) => !prev)}
                  className="w-full rounded-lg bg-brandblue py-6 text-base text-white transition-all hover:bg-brandblue/90"
                >
                  Events
                </button>
                {showEventLinks && (
                  <div className="mt-2 space-y-2 px-2 animate-slide-down">
                    <Link
                      href="https://www.bfmacademy.in/event-archive"
                      className="block w-full"
                      onClick={() => {
                        setShowEventLinks(false);
                        setIsSheetOpen(false);
                      }}
                    >
                      <Button className="w-full bg-brandblue/90 text-white hover:bg-brandblue/80">
                        Event Archive
                      </Button>
                    </Link>
                    <Link
                      href="https://www.bfmacademy.in/networking"
                      className="block w-full"
                      onClick={() => {
                        setShowEventLinks(false);
                        setIsSheetOpen(false);
                      }}
                    >
                      <Button className="w-full bg-brandblue/90 text-white hover:bg-brandblue/80">
                        Future Xcon
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              {[
                { href: "https://www.bfmacademy.in/business", label: "Business" },
                { href: "https://www.bfmacademy.in/roadmap", label: "Roadmap" },
                { href: "https://www.bfmacademy.in/privacy-policy", label: "Privacy Policy" },
                {
                  href: "https://www.bfmacademy.in/terms-and-conditions",
                  label: "Terms and Conditions",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-full"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <Button className="w-full bg-brandblue py-6 text-base text-white hover:bg-brandblue/90">
                    {label}
                  </Button>
                </Link>
              ))}
                            <Suspense
                fallback={
                  <Button className="w-full bg-foreground text-background">
                    Enroll Now
                  </Button>
                }
              >
                <SheetTrigger asChild>
                  <ConnectButton
                    client={client}
                    connectButton={{
                      label: "Connect Wallet",
                      className: "w-full",
                    }}
                    connectModal={{
                      welcomeScreen: welcomeScreen,
                      title: "Get started with BFMAcademy",
                      titleIcon: "/page/logo-blue.png",
                      privacyPolicyUrl:
                        "https://www.bfmacademy.in/privacy-policy",
                      size: "compact",
                    }}
                    theme={theme == "dark" ? "dark" : "light"}
                  />
                </SheetTrigger>
              </Suspense>
              {/* Social Icons */}
              <div className="flex flex-row items-center gap-0 max-md:justify-center md:flex-col md:space-y-1">
                <Link href="https://t.me/bfmacademyy" target="_blank">
                  <Button
                    variant="ghost"
                    className="group h-16 w-16 rounded-full p-0"
                  >
                    <IconBrandTelegram />
                  </Button>
                </Link>
                <Link
                  href="https://www.instagram.com/bfmacademia"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    className="group h-16 w-16 rounded-full p-0"
                  >
                    <IconBrandInstagram />
                  </Button>
                </Link>
                <Link href="https://x.com/BFMAcademy" target="_blank">
                  <Button
                    variant="ghost"
                    className="group h-16 w-16 rounded-full p-0"
                  >
                    <IconBrandTwitter />
                  </Button>
                </Link>
                <Link
                  href="https://www.reddit.com/u/BFMAcademy"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    className="group h-16 w-16 rounded-full p-0"
                  >
                    <IconBrandReddit />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/bfm-academy/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    className="group h-16 w-16 rounded-full p-0"
                  >
                    <IconBrandLinkedin />
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
