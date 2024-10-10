import { useNavigate } from "@tanstack/react-router";
import { truncate } from "lodash";
import { format } from "date-fns";

interface EventCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  imgSrc: string;
  category: string;
}

const EventCard = ({
  slug,
  title,
  date,
  description,
  imgSrc,
  category,
}: EventCardProps): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate({ to: "/$event", params: { event: slug } })}
      onKeyDown={() => navigate({ to: "/$event", params: { event: slug } })}
      className="flex h-full flex-col overflow-hidden rounded-[19px] bg-white text-left shadow-sm transition-all duration-200 ease-in *:w-full hover:scale-[1.005] hover:shadow-md"
    >
      <div className="basis-7/12">
        <img src={imgSrc} alt={slug} className="h-full w-full object-cover" />
      </div>
      <div className="flex basis-5/12 items-start gap-5 p-5">
        <p className="flex flex-col items-center font-bold">
          <span className="uppercase text-allin-primary">{format(date, "MMM")}</span>
          <span className="text-3xl text-allin-text">{format(date, "dd")}</span>
        </p>
        <div>
          <h3 className="text-lg font-bold text-allin-text">{title}</h3>
          <p className="text-allin-gray-light">{truncate(description, { length: 100 })}</p>
          <p className="hidden">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
