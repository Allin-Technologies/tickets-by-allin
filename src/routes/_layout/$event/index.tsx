import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout/$event/")({
  component: Event,
});

function Event() {
  const navigate = useNavigate();
  const { event } = useParams({ from: "/_layout/$event" });

  return (
    <>
      <div className="container flex flex-col gap-20 *:w-full *:grow md:flex-row">
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
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white shadow-sm">
            <div className="h-[12.3rem] bg-red-100" />
            <div className="flex h-36 items-start gap-5 p-5">
              <p className="flex flex-col items-center font-bold">
                <span className="text-allin-primary">AUG</span>
                <span className="text-allin-text text-3xl">14</span>
              </p>
              <div>
                <h3 className="text-allin-text text-lg font-bold">
                  Wonder Girls 2010 Wonder Girls World Tour San Francisco
                </h3>
                <p className="text-allin-gray-light">
                  Directly seated and inside for you to enjoy the show.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white shadow-sm">
            <div className="h-[12.3rem] bg-red-100" />
            <div className="flex h-36 items-start gap-5 p-5">
              <p className="flex flex-col items-center font-bold">
                <span className="text-allin-primary">AUG</span>
                <span className="text-allin-text text-3xl">14</span>
              </p>
              <div>
                <h3 className="text-allin-text text-lg font-bold">
                  Wonder Girls 2010 Wonder Girls World Tour San Francisco
                </h3>
                <p className="text-allin-gray-light">
                  Directly seated and inside for you to enjoy the show.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white shadow-sm">
            <div className="h-[12.3rem] bg-red-100" />
            <div className="flex h-36 items-start gap-5 p-5">
              <p className="flex flex-col items-center font-bold">
                <span className="text-allin-primary">AUG</span>
                <span className="text-allin-text text-3xl">14</span>
              </p>
              <div>
                <h3 className="text-allin-text text-lg font-bold">
                  JYJ 2011 JYJ Worldwide Concert Barcelona
                </h3>
                <p className="text-allin-gray-light">
                  Directly seated and inside for you to enjoy the show.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
