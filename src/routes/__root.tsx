import { Outlet, createRootRoute, useRouter } from "@tanstack/react-router";
import { Suspense } from "react";
import { TanStackRouterDevtools } from "@/components/tanstack";
import { GlobalStateProvider } from "@/contexts/global-state";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();

  // Scroll to the top when the route changes
  router.subscribe("onBeforeLoad", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <GlobalStateProvider>
      <Outlet />
      <Suspense fallback={null}>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
      <Toaster position="top-center" expand={true} richColors />
    </GlobalStateProvider>
  );
}
