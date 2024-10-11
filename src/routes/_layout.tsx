import React from "react";
import { createFileRoute, Outlet, Link, useLocation, useParams } from "@tanstack/react-router";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Twirl as Hamburger } from "hamburger-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneIcon from "@/assets/icons/phone.svg?react";
import LocationIcon from "@/assets/icons/map-pin.svg?react";
import MailIcon from "@/assets/icons/email.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import LogoPlain from "@/assets/icons/logo-plain.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import TwitterIcon from "@/assets/icons/Twitter.svg?react";
import LinkedInIcon from "@/assets/icons/Linkedin.svg?react";
import InstagramIcon from "@/assets/icons/Instagram.svg?react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div className="relative bg-[#F2F2F2] font-plus_jakarta_sans">
      <Navbar />
      <main className="min-h-[calc(100dvh-250px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

function Navbar() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navItems = [
    { title: "Discover Events", slug: "/discover-events" },
    { title: "How Tickets Work", slug: "/" },
    { title: "Pricing", slug: "/" },
    { title: "About", slug: "/" },
  ];

  return (
    <header className={cn({ "absolute left-0 right-0 z-[999] w-full": isHomePage })}>
      <nav
        className="relative mx-auto flex h-[70px] w-full max-w-[1500px] items-center justify-between gap-10 px-5 md:h-[100px] md:px-20"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Link to="/" className="scale-[.8] md:scale-[1]">
          {isHomePage ? <LogoPlain /> : <Logo />}
        </Link>
        <div
          className={cn(
            "absolute left-0 top-[70px] z-[999] flex h-[259.32px] w-full flex-col overflow-hidden transition-all duration-500 ease-in-out md:relative md:top-0 md:h-fit md:w-fit md:flex-row md:items-center md:justify-end md:gap-10",
            { "h-0": !isExpanded && isMobile, "backdrop-blur-lg": isExpanded && isMobile }
          )}
        >
          {navItems.map(({ title, slug }) => (
            <Link
              key={title}
              to={slug}
              className={cn(
                "border-b p-5 font-semibold text-allin-text transition-all md:border-none md:p-0 md:hover:text-allin-text/80 [&.active]:font-bold",
                {
                  "text-white md:hover:text-white/80": isHomePage,
                  "hover:bg-white/20": isExpanded && isMobile,
                }
              )}
            >
              {title}
            </Link>
          ))}
        </div>
        <MediaQuery maxWidth={768}>
          <Hamburger
            toggled={isExpanded}
            toggle={setIsExpanded}
            size={20}
            easing="ease-in"
            color={isHomePage ? "white" : "#2A254B"}
            duration={0.5}
          />
        </MediaQuery>
      </nav>
    </header>
  );
}

function Footer() {
  const params = useParams({ strict: false });

  return (
    <>
      {!params?.event && (
        <div className="md:bg-[linear-gradient(to_right,_#43dbdb33_0%,_#43dbdb33_50%,_#b9a6e81a_50%,_#b9a6e81a_100%)]">
          <div className="flex flex-col-reverse items-start md:container *:w-full *:grow md:flex-row md:gap-20 lg:gap-40">
            <div className="flex flex-col gap-7 bg-[#43dbdb33] px-10 py-16 md:gap-10 md:bg-transparent md:p-0">
              <h3 className="text-2xl font-bold">Contact us</h3>
              <p className="text-xl text-[#2C2B30] md:text-2xl">
                Have an inquiry? <br className="md:hidden" /> We’ll be happy to assist you
              </p>
              <div className="contents font-bold [&_a]:flex [&_a]:items-center [&_a]:gap-2">
                <Link>
                  <PhoneIcon /> +234 333 6527
                </Link>
                <Link>
                  <MailIcon /> tickets@all-in.com
                </Link>
                <Link>
                  <LocationIcon /> All-in Headquaters, GRA Port Harcourt, Nigeria
                </Link>
              </div>
            </div>
            <div className="bg-[#b9a6e81a] px-10 py-16 md:bg-transparent md:p-0">
              <h3 className="mb-10 text-2xl font-bold">Fill in your details</h3>
              <form className="flex flex-col gap-10">
                <div className="relative">
                  <Label className="absolute -top-4 z-[1] text-sm text-[#222222]">Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    className="h-12 rounded-none border-0 border-b border-gray-300 px-0 shadow-none"
                  />
                </div>
                <div className="relative">
                  <Label className="absolute -top-4 z-[1] text-sm text-[#222222]">Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="h-12 rounded-none border-0 border-b border-gray-300 px-0 shadow-none"
                  />
                </div>
                <div className="relative">
                  <Label className="absolute -top-4 z-[1] text-sm text-[#222222]">
                    Reason to contact
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-none border-0 border-b border-gray-300 px-0 shadow-none focus-visible:ring-0">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="item1">Lorem ispum</SelectItem>
                        <SelectItem value="item2">Lorem ispum</SelectItem>
                        <SelectItem value="item3">Lorem ispum</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <Label className="absolute -top-4 z-[1] text-sm text-allin-lilac">Message</Label>
                  <Input
                    type="message"
                    placeholder="What is your message?"
                    className="h-12 rounded-none border-0 border-b border-allin-lilac px-0 shadow-none"
                  />
                </div>
                <Button size="lg" className="w-full lg:mt-10">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-allin-gray-dark">
        <div className="mx-auto w-full max-w-[1500px] space-y-5 px-5 py-10 md:space-y-10 md:px-10">
          <Link to="/" className="block w-fit scale-[.7] md:scale-[1]">
            <LogoPlain />
          </Link>
          <div className="flex w-full flex-col justify-between gap-10 text-white md:flex-row md:items-center">
            <div className="flex flex-wrap gap-x-10 gap-y-5 font-semibold">
              <Link>Discover Events</Link>
              <Link>How Tickets Work</Link>
              <Link>Pricing</Link>
              <Link>About</Link>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
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
    </>
  );
}
