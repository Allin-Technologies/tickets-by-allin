import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container space-y-5">
      <h1>Home page</h1>
      <Button onClick={() => navigate({ to: "/$event", params: { event: "tedEx" } })}>
        TedEx Event page
      </Button>
    </div>
  );
}
