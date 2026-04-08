import "./App.css";
import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { MathJaxContext } from "better-react-mathjax";
import BackgroundPaper from "components/interface/BackgroundPaper";
import LoadingPage from "components/LoadingPage";

import { MenuDrawer, TopMenu } from "components";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";

// Each page gets its own unique lazy() component so React treats them as
// distinct types. When navigating between pages, React fully unmounts the
// old page and mounts the new one — no stale content from the previous page.
const lazyPages = {};
items.forEach((itm) => {
  itm.items.forEach((itm2) => {
    const key = `${toPascalCase(itm.name)}_${toPascalCase(itm2)}`;
    lazyPages[key] = lazy(() =>
      import(`pages/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`)
    );
  });
});

const HomePageLazy = lazy(() => import("pages/Home"));

// Build route list once at module level
const routes = [];
items.forEach((itm, idx) => {
  itm.items.forEach((itm2, idx2) => {
    const key = `${toPascalCase(itm.name)}_${toPascalCase(itm2)}`;
    const LazyComp = lazyPages[key];
    routes.push(
      <Route
        key={100 * idx + idx2}
        path={`/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`}
        element={
          <Suspense fallback={<LoadingPage />}>
            <LazyComp />
          </Suspense>
        }
      />
    );
  });
});
routes.push(
  <Route
    key={9999999999}
    path="/"
    element={
      <Suspense fallback={<LoadingPage />}>
        <HomePageLazy />
      </Suspense>
    }
  />
);

const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <div className="App">
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: "#e7ebf0" } }} />
        <TopMenu toggleDrawer={() => setDrawerOpen(!drawerOpen)} />
        <MenuDrawer
          open={drawerOpen}
          toggleDrawer={() => setDrawerOpen(!drawerOpen)}
        />
        <BackgroundPaper>
          <Routes>{routes}</Routes>
        </BackgroundPaper>
      </div>
    </MathJaxContext>
  );
}

export default App;
