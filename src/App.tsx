import { Box, Divider, Grid, GridItem, Show } from "@chakra-ui/react";
import ToolBar from "./components/ToolBar";
import ActivityBar from "./components/ActivityBar";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TabsBar from "./components/TabsBar";
import { useState } from "react";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Theme from "./pages/Theme";
import Achievements from "./pages/Achievements";

function App() {
  const [selectedPage, setSelectedPage] = useState("home.js");
  return (
    <Grid
      templateAreas={{
        base: `"tool tool" "activity main" "footer footer"`,
        lg: `"tool tool tool" "activity explorer main" "footer footer footer"`,
      }}
      templateColumns={{
        base: "40px 1fr",
        lg: "70px 250px 1fr",
      }}
      templateRows="auto 1fr auto"
      height="100vh"
    >
      <GridItem area="tool" marginTop={2}>
        <ToolBar />
        <Divider orientation="horizontal" marginTop={1} />
      </GridItem>
      <GridItem area="activity" height="100%">
        <ActivityBar
          selectedPage={selectedPage}
          onSelectPage={setSelectedPage}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="explorer" height="100%">
          <Explorer
            selectedPage={selectedPage}
            onSelectPage={setSelectedPage}
          />
        </GridItem>
      </Show>
      <GridItem area="main" overflowX={"auto"}>
        <TabsBar selectedTab={selectedPage} onSelectTab={setSelectedPage} />
        <Box overflowY="auto" height="calc(100% - 40px)">
          <Routes>
            <Route path="/" element={<Home setPage={setSelectedPage} />} />
            <Route
              path="/about"
              element={<About setPage={setSelectedPage} />}
            />
            <Route
              path="/projects"
              element={<Projects setPage={setSelectedPage} />}
            />
            <Route
              path="/contact"
              element={<Contact setPage={setSelectedPage} />}
            />
            <Route
              path="/theme"
              element={<Theme setPage={setSelectedPage} />}
            />
            <Route
              path="/achievements"
              element={<Achievements setPage={setSelectedPage} />}
            />
          </Routes>
        </Box>
      </GridItem>

      <GridItem area="footer" marginX="2px">
        <Divider orientation="horizontal" />
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
