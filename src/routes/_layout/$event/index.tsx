import { createFileRoute, Link, useNavigate, useParams } from "@tanstack/react-router";
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

export const Route = createFileRoute("/_layout/$event/")({
  component: Event,
});

function Event() {
  const navigate = useNavigate();
  const { event } = useParams({ from: "/_layout/$event" });

  return (
    <>
      <div className="container flex gap-20 *:w-full *:grow">
        <div className="space-y-20">
          <div className="h-[604px] rounded-3xl border shadow-md" />
          <Button size="lg" onClick={() => navigate({ to: "/$event/tickets", params: { event } })}>
            Get Ticket Now
          </Button>
        </div>
        <div className="text-allin-text space-y-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              2011 Super Junior SM Town Live '10 World Tour New York City
            </h2>
            <p>Wednesday, September 18th 2024</p>
            <p>9:00 AM - 6:00 PM WAT</p>
            <p>Eko Convention Center | Eko Hotels & Suites</p>
          </div>
          <div className="space-y-5 font-medium">
            <h3 className="text-2xl font-semibold">About this event</h3>
            <p>
              Want to meet Africa’s biggest tech companies and 80+ world-class speakers in one
              place?
            </p>
            <p>
              Moonshot by TechCabal returns bigger and better this October. With 9 exciting content
              tracks—from AI to climate tech, government roundtables to the creative economy—plus
              TechCabal Battlefield, the ultimate startup pitch competition, the coolest demos and
              product showcases, and an audience of 3000+ global attendees, Moonshot will bring
              together the most audacious builders, funders, and thinkers in African tech.
            </p>
            <p>
              Through FUEL: The Investor Conference - a subsection dedicated to investors, its
              investor lounge and deal rooms; the conference offers an opportunity to gain a deeper
              understanding of the investment landscape by connecting with local VCs, find
              high-quality startups to invest in and engage  government officials from across the
              continent.
            </p>
          </div>
        </div>
      </div>
      <div className="container space-y-20">
        <h2 className="text-allin-text text-4xl font-semibold">Other Events You May Like</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white">
            <div className="h-44 bg-red-100" />
            <div className="h-32 p-5">
              <h3>JYJ 2011 JYJ Worldwide Concert Barcelona</h3>
              <p>
                Directly seated and inside for you to enjoy the show. kjdnakjdskamlksm sou to enjoy
                the show.
              </p>
            </div>
          </div>
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white">
            <div className="h-44 bg-red-100" />
            <div className="h-32 p-5">
              <h3>JYJ 2011 JYJ Worldwide Concert Barcelona</h3>
              <p>Directly seated and inside for you to enjoy the show.</p>
            </div>
          </div>
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white">
            <div className="h-44 bg-red-100" />
            <div className="h-32 p-5">
              <h3>JYJ 2011 JYJ Worldwide Concert Barcelona</h3>
              <p>Directly seated and inside for you to enjoy the show.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, #43dbdb33 0%, #43dbdb33 50%, #b9a6e81a 50%, #b9a6e81a 100%)",
        }}
      >
        <div className="container flex gap-40 *:w-full *:grow">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold">Contact us</h3>
            <p className="text-2xl">Have an inquiry? We’ll be happy to assist you</p>
            <div className="contents font-bold">
              <Link>+234 333 6527</Link>
              <Link>Tickets@all-in.com</Link>
              <Link>All-in Headquaters, GRA Port Harcourt, Nigeria</Link>
            </div>
          </div>
          <div className="">
            <h3 className="mb-10 text-2xl font-bold">Fill in your details</h3>
            <form className="flex flex-col gap-10">
              <div className="relative">
                <Label className="absolute -top-2 z-[1] text-xs text-[#222222]">Name</Label>
                <Input
                  type="text"
                  placeholder="Enter name"
                  className="h-12 rounded-none border-0 border-b border-gray-300 px-0 shadow-none"
                />
              </div>
              <div className="relative">
                <Label className="absolute -top-2 z-[1] text-xs text-[#222222]">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="h-12 rounded-none border-0 border-b border-gray-300 px-0 shadow-none"
                />
              </div>
              <div className="relative">
                <Label className="absolute -top-2 z-[1] text-xs text-[#222222]">
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
                <Label className="text-allin-lilac absolute -top-2 z-[1] text-xs">Message</Label>
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
    </>
  );
}
