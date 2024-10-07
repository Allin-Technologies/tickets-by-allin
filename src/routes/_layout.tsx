import { Button } from "@/components/ui/button";
import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import Logo from "@/assets/icons/logo.svg?react";
import LogoPlain from "@/assets/icons/logo-plain.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import TwitterIcon from "@/assets/icons/Twitter.svg?react";
import LinkedInIcon from "@/assets/icons/Linkedin.svg?react";
import InstagramIcon from "@/assets/icons/Instagram.svg?react";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div className="bg-[#F2F2F2]">
      <Navbar />
      <main className="min-h-[calc(100dvh-250px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

function Navbar() {
  return (
    <header className="mx-auto flex h-[100px] w-full max-w-[1500px] items-center gap-10 px-20">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="text-allin-gray-dark contents font-semibold">
        <Link className="ml-auto">Discover Events</Link>
        <Link>How Tickets Work</Link>
        <Link>Pricing</Link>
        <Link>About</Link>
      </nav>
      <Button size="lg">Login</Button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-allin-gray-dark">
      <div className="mx-auto w-full max-w-[1500px] space-y-10 px-20 py-10">
        <LogoPlain />
        <div className="flex w-full items-center justify-between gap-10 text-white">
          <div className="flex gap-10 font-semibold">
            <Link>Discover Events</Link>
            <Link>How Tickets Work</Link>
            <Link>Pricing</Link>
            <Link>About</Link>
          </div>
          <div className="flex gap-10">
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <TwitterIcon />
            </Link>
            <Link>
              <LinkedInIcon />
            </Link>
            <Link>
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
