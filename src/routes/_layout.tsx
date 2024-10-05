import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div>
      <h1>nav</h1>
      <Outlet />
    </div>
  ),
});
