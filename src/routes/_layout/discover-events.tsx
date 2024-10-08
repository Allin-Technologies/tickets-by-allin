import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/icons/arrow.svg?react";

export const Route = createFileRoute("/_layout/discover-events")({
  component: DiscoverEvents,
});

function DiscoverEvents() {
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col gap-20 text-allin-text">
      <div className="flex gap-10">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <div className="ml-auto flex gap-3 *:w-40">
          <Select>
            <SelectTrigger className="bg-allin-lilac/20 font-medium focus-visible:ring-0">
              <SelectValue placeholder="Weekdays" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="item1">item1</SelectItem>
                <SelectItem value="item2">item2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-allin-lilac/20 font-medium focus-visible:ring-0">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="item1">item1</SelectItem>
                <SelectItem value="item2">item2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-allin-lilac/20 font-medium focus-visible:ring-0">
              <SelectValue placeholder="Any Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="item1">item1</SelectItem>
                <SelectItem value="item2">item2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
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
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
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
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
            <p className="flex flex-col items-center font-bold">
              <span className="text-allin-primary">AUG</span>
              <span className="text-3xl text-allin-text">14</span>
            </p>
            <div>
              <h3 className="text-lg font-bold text-allin-text">
                JYJ 2011 JYJ Worldwide Concert Barcelona
              </h3>
              <p className="text-allin-gray-light">
                Directly seated and inside for you to enjoy the show.
              </p>
            </div>
          </div>
        </button>
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
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
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
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
        <button
          type="button"
          onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}
          className="w-full min-w-[340px] overflow-hidden rounded-[19px] bg-white text-left shadow-sm"
        >
          <div className="h-[12.3rem] bg-red-100" />
          <div className="flex h-36 items-start gap-5 p-5">
            <p className="flex flex-col items-center font-bold">
              <span className="text-allin-primary">AUG</span>
              <span className="text-3xl text-allin-text">14</span>
            </p>
            <div>
              <h3 className="text-lg font-bold text-allin-text">
                JYJ 2011 JYJ Worldwide Concert Barcelona
              </h3>
              <p className="text-allin-gray-light">
                Directly seated and inside for you to enjoy the show.
              </p>
            </div>
          </div>
        </button>
      </div>
      <Button size="lg" variant="outline" className="mx-auto inline-flex items-center gap-3">
        Load more events <ArrowIcon />
      </Button>
    </div>
  );
}
