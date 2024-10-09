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
    <div className="container flex flex-col gap-10 py-10 text-allin-text md:gap-20">
      <div className="flex flex-col flex-wrap items-center justify-between gap-10 md:flex-row md:gap-x-10 md:gap-y-5">
        <h1 className="text-2xl font-bold md:text-4xl">Upcoming Events</h1>
        <div className="flex gap-3 *:w-24 md:ml-auto *:md:w-32">
          <Select>
            <SelectTrigger className="bg-allin-lilac/20 font-medium focus-visible:ring-0">
              <SelectValue placeholder="All events" />
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
              <SelectValue placeholder="Price" />
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
              <SelectValue placeholder="Date" />
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
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center gap-7 *:min-h-[341px]">
        {Array.from({ length: 5 }).map((item) => (
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
      <Button size="lg" variant="outline" className="mx-auto inline-flex items-center gap-3">
        Load more events <ArrowIcon />
      </Button>
    </div>
  );
}
