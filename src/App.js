import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import CounterProject from "./react-counter-project/CounterProject";
import GithubUserProject from "./react-github-user-project/GithubUserProject";
import WebsiteProject from "./react-website-project/WebsiteProject";
import SlideshowProject from "./react-review-slideshow-project/SlideshowProject";
import AccordionProject from "./react-banking-accordion-project/accordionProject";
import McdonaldsProject from "./react-mcdonalds-menu-project/McdonaldsMenu";
import Promotions from "./react-mcdonalds-menu-project/components/Promotions";
import Family from "./react-mcdonalds-menu-project/components/Family";
import DiaryProject from "./react-diary-project/DiaryProject";
import ResumeProject from "./react-resume-project/Resume";
import ShootoutGame from "./js-shootout-game/ShootoutGame";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Project">
          <Project />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/CounterProject">
          <CounterProject />
        </Route>
        <Route path="/GithubUserProject">
          <GithubUserProject />
        </Route>
        <Route path="/WebsiteProject">
          <WebsiteProject />
        </Route>
        <Route path="/SlideshowProject">
          <SlideshowProject />
        </Route>
        <Route path="/AccordionProject">
          <AccordionProject />
        </Route>
        <Route path="/McdonaldsProject">
          <McdonaldsProject />
        </Route>
        <Route path="/promotion">
          <Promotions />
        </Route>
        <Route path="/family">
          <Family />
        </Route>
        <Route path="/menu">
          <McdonaldsProject />
        </Route>
        <Route path="/DiaryProject">
          <DiaryProject />
        </Route>
        <Route path="/ResumeProject">
          <ResumeProject />
        </Route>
        <Route path="/ShootoutGame">
          <ShootoutGame />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
