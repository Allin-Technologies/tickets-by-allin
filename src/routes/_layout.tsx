import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
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

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div className="font-plus_jakarta_sans bg-[#F2F2F2]">
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
    <>
      <div
        style={{
          background:
            "linear-gradient(to right, #43dbdb33 0%, #43dbdb33 50%, #b9a6e81a 50%, #b9a6e81a 100%)",
        }}
      >
        <div className="container flex items-start gap-40 *:w-full *:grow">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold">Contact us</h3>
            <p className="text-2xl">Have an inquiry? We’ll be happy to assist you</p>
            <div className="contents font-bold [&_a]:flex [&_a]:items-center [&_a]:gap-2">
              <Link>
                <PhoneIcon /> +234 333 6527
              </Link>
              <Link>
                <MailIcon /> Tickets@all-in.com
              </Link>
              <Link>
                <LocationIcon /> All-in Headquaters, GRA Port Harcourt, Nigeria
              </Link>
            </div>
          </div>
          <div className="">
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
                <Label className="text-allin-lilac absolute -top-4 z-[1] text-sm">Message</Label>
                <Input
                  type="message"
                  placeholder="What is your message?"
                  className="border-allin-lilac h-12 rounded-none border-0 border-b px-0 shadow-none"
                />
              </div>
              <Button size="lg" className="mt-10 w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
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
    </>
  );
}
