import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { TanStackRouterDevtools } from "@/components/tanstack";
import { GlobalStateProvider } from "@/contexts/global-state";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <GlobalStateProvider>
      <Outlet />
      <Suspense fallback={null}>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </GlobalStateProvider>
  );
}
