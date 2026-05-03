import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SEOPage from "./pages/SEOPage";
import AdvertisingPage from "./pages/AdvertisingPage";
import ContentDesignPage from "./pages/ContentDesignPage";
import StrategyPage from "./pages/StrategyPage";
import LogoGeneratorPage from "./pages/LogoGeneratorPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import SupportPage from "./pages/SupportPage";
import HamsPage from "./pages/HamsPage";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/seo"} component={SEOPage} />
      <Route path={"/advertising"} component={AdvertisingPage} />
      <Route path={"/content-design"} component={ContentDesignPage} />
      <Route path={"/strategy"} component={StrategyPage} />
      <Route path={"/logo-generator"} component={LogoGeneratorPage} />
      <Route path={"/social-media"} component={SocialMediaPage} />
      <Route path={"/subscriptions"} component={SubscriptionPage} />
      <Route path={"/support"} component={SupportPage} />
      <Route path={"/hams"} component={HamsPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
