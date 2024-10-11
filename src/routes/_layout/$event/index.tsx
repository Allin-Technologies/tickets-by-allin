import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import MediaQuery from "react-responsive";

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
          <MediaQuery minWidth={768}>
            <Button
              size="lg"
              onClick={() => navigate({ to: "/$event/tickets", params: { event } })}
            >
              Get Ticket Now
            </Button>
          </MediaQuery>
        </div>
        <div className="space-y-20 text-allin-text">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold md:text-3xl">
              2011 Super Junior SM Town Live '10 World Tour New York City
            </h2>
            <p>Wednesday, September 18th 2024</p>
            <p>9:00 AM - 6:00 PM WAT</p>
            <p>Eko Convention Center | Eko Hotels & Suites</p>
          </div>
          <div className="space-y-5 font-medium">
            <div className="flex items-center gap-5">
              <h3 className="text-2xl font-semibold">About this event</h3>
              <p className="w-fit rounded-lg bg-allin-lilac/30 p-2 px-3 text-xs font-bold uppercase">
                Free Event
              </p>
            </div>
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
              high-quality startups to invest in and engage government officials from across the
              continent.
            </p>
          </div>
        </div>
        <MediaQuery maxWidth={768}>
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate({ to: "/$event/tickets", params: { event } })}
          >
            Get Ticket Now
          </Button>
        </MediaQuery>
      </div>
      <div className="container space-y-10 md:space-y-20">
        <h2 className="text-center text-2xl font-semibold text-allin-text md:text-left md:text-4xl">
          Other Events You May Like
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center gap-7 *:min-h-[341px]">
          {Array.from({ length: 3 }).map((item) => (
            <button
              key={item as number}
              type="button"
              onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
              className="flex h-full flex-col overflow-hidden rounded-[19px] bg-white text-left shadow-sm transition-all duration-200 ease-in *:w-full hover:scale-[1.005] hover:shadow-md"
            >
              <div className="basis-7/12 bg-red-100" />
              <div className="flex basis-5/12 items-start gap-5 p-5">
                <p className="flex flex-col items-center font-bold">
                  <span className="text-allin-primary">AUG</span>
                  <span className="text-3xl text-allin-text">14</span>
                </p>
                <div>
                  <h3 className="text-lg font-bold text-allin-text">
                    Wonder Girls 2010 Wonder Girls World Tour San Francisco
                  </h3>
                  <p className="text-allin-gray-light">
                    Directly seated and inside for you to enjoy the show.
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
