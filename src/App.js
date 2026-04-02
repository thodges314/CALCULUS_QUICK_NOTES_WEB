import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import loadable from "@loadable/component";
import { MathJaxContext } from "better-react-mathjax";
import BackgroundPaper from "components/interface/BackgroundPaper";
import LoadingPage from "components/LoadingPage";

import { MenuDrawer, TopMenu } from "components";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";

const LoadablePage = loadable(
  ({ itm1, itm2 }) =>
    import(`pages/${toPascalCase(itm1.name)}/${toPascalCase(itm2)}`),
  {
    fallback: <LoadingPage />,
  }
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

  const pages = {};
  items.forEach((itm) => {
    itm.items.forEach(async (itm2) => {
      pages[`${toPascalCase(itm.name)}_${toPascalCase(itm2)}`] = (
        <LoadablePage itm1={itm} itm2={itm2} />
      );
    });
  });

  const HomePage = loadable(() => import(`pages/Home`), {
    fallback: <LoadingPage />,
  });

  const routes = [];
  items.forEach((itm, idx) => {
    itm.items.forEach((itm2, idx2) => {
      routes.push(
        <Route
          key={100 * idx + idx2}
          path={`/${toPascalCase(itm.name)}/${toPascalCase(itm2)}`}
          element={pages[`${toPascalCase(itm.name)}_${toPascalCase(itm2)}`]}
        />
      );
    });
  });

  routes.push(<Route key={9999999999} path={"/"} element={<HomePage />} />);

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
