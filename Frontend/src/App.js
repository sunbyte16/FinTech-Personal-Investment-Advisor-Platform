import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import HamburgerMenu from "./global/HamburgerMenu";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";
import WatchList from "./scenes/dashboard/watchlist";
import News from "./data/News/News";
import Details from "./scenes/dashboard/details";
import BuyStock from "./scenes/dashboard/buyStock";
import SellStock from "./scenes/dashboard/sellStock";
import LandingPage from "./global/LandingPage";
// import LandingPage from "./global/LandingPage"
import Newz from "./scenes/dashboard/news";
import { useState } from "react";

import IPO from "./scenes/dashboard/ipo";
import Copyright from "./global/Copyright";
import Portfolio from "./scenes/dashboard/Portfolio";
import Orders from "./scenes/dashboard/tradeHistory.js";
import Testimonials from "./global/Testimonials.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <HamburgerMenu /> */}
          <main className="context">
            {/* <Topbar className="abc">
          </Topbar> */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/home"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Dashboard />
                      </main>
                    </div>
                    <Copyright />
                  </>
                }
              />
              {/* <Route path="/dashboard" element = {<Dashboard />} /> */}
              <Route path="/register" element={<><Register/><Copyright /></>} />
              <Route
                path="/watchlist"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <WatchList />
                      </main>
                    </div>
                  </>
                }
              />

              <Route
                path="/details"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Details />
                      </main>
                    </div>
                  </>
                }
              />

              <Route
                path="/news"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Newz />
                      </main>
                    </div>
                  </>
                }
              />

              <Route
                path="/ipo"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <IPO />
                      </main>
                    </div>
                  </>
                }
              />
              <Route
                path="/buyStock"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <BuyStock />
                      </main>
                    </div>
                  </>
                }
              />
              <Route
                path="/sellStock"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <SellStock />
                      </main>
                    </div>
                  </>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Portfolio />
                      </main>
                    </div>
                  </>
                }
              />

            <Route
                path="/orders"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Orders />
                      </main>
                    </div>
                  </>
                }
              />

              <Route
                path="/testimonials"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Testimonials />
                      </main>
                    </div>
                  </>
                }
              />



              {/* <Route path="/details" element={<Details />} /> */}
              
              <Route path="/login" element={<><Login /> <Copyright /></>} />
              {/* <Route path="/news" element={<Newz />} /> */}

              {/* <Route path="/watchlist" element = {<Watchlist />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
