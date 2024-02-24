import BmoClone from "../data/images/BmoClone.jpg";
import FlippClone from "../data/images/FlippClone.jpg";
import AnimeWebsiteProject from "../data/images/AnimeWebsiteProject.jpg";
import StickyNoteHomePage from "./images/StickyNoteHomePage.jpg";
import MaterialUIBootcamp from "../data/images/MaterialUIBootcamp.jpg";
import ChineseRadicalLookUp from "../data/images/ChineseRadicalLookUp.jpg";
import RickAndMortyProject from "../data/images/RickAndMortyProject.jpg";
import SpaceXProject from "../data/images/SpaceXProject.jpg";
import TranslatorWebsiteProject from "../data/images/TranslatorWebsiteProject.jpg";
import MaterialUIBankRegistration from "../data/images/MaterialUIBankRegistration.jpg";
import FakeECommerce from "../data/images/FakeECommerce.jpg";
import RandomAnimeQuotes from "../data/images/RandomAnimeQuotes.jpg";
import LightDarkTheme from "../data/images/LightDarkTheme.jpg";
import DiaryProjectHomePage from "../data/images/DiaryProjectHomePage.jpg";
import McDonaldsReplica from "../data/images/McDonaldsReplica.jpg";
import BankingWebpageReplica from "../data/images/BankingWebpageReplica.jpg";
import AccordionProject from "../data/images/AccordionProject.jpg";
import SlideshowProject from "../data/images/SlideshowProject.jpg";
import GithubUserProject from "../data/images/GithubUserProject.jpg";
import CounterProject from "../data/images/CounterProject.jpg";
import JSShootoutGame from "../data/images/JSShootoutGame.jpg";
import JSCardMatch from "../data/images/JSCardMatch.jpg";
import JSBankingWebpage from "../data/images/JSBankingWebpage.jpg";
import JavaCustomerFile from "./images/JavaCustomerFile.jpg";
import NoImageAvailable from "../data/images/NoImageAvailable.jpg";
const AllProjects = [
  {
    picture: BmoClone,
    title: "BMO Application (Frontend)",
    description: "The frontend portion of the Bank of Montreal web application",
    stacks: ["Angular"],
    libraries: ["Angular Material", "Typescript", "NgRx", "RxJs"],
    githubLink: "https://github.com/eugenehan94/bmo-app",
  },
  {
    picture: NoImageAvailable,
    title: "BMO Application (Backend)",
    description: "The backend portion of the Bank of Montreal web application",
    stacks: ["Node Js"],
    libraries: ["Express", "BCrypt", "Json Web Token"],
    githubLink: "https://github.com/eugenehan94/bmo-app-node",
  },
  {
    picture: FlippClone,
    title: "Flipp Clone",
    description: "A clone of the Flipp application using Next Js",
    stacks: ["Next Js"],
    libraries: ["React", "Node", "Typescript", "Tailwind Css", "Puppeteer"],
    githubLink: "https://github.com/eugenehan94/Affordable-Products-App",
  },
  {
    picture: AnimeWebsiteProject,
    title: "AniMan",
    description: "Various collection of Anime and Manga, sorted by categories.",
    stacks: ["React"],
    libraries: ["Material UI", "Redux", "Immer", "Router"],
    projectLink: "https://eugenehan94.github.io/React-Anime-Website-Project/",
    githubLink: "https://github.com/eugenehan94/React-Anime-Website-Project",
  },
  {
    picture: StickyNoteHomePage,
    title: "Sticky Notes",
    description:
      " A CRUD project where uses can stick sticky notes on a bulletin board",
    stacks: ["React", "Node Js", "MongoDB"],
    libraries: ["Express", "Mongoose"],
    projectLink:
      "https://github.com/eugenehan94/MERN-sticky-note-project#home-page-demo",
    githubLink: "https://github.com/eugenehan94/MERN-sticky-note-project",
  },
  {
    picture: NoImageAvailable,
    title: "Node Contact Manager",
    description: "A node application for storing contact information",
    stacks: ["Node Js", "MongoDB"],
    libraries: ["Express", "Mongoose"],
    githubLink:
      "https://github.com/eugenehan94/Node-Express-Contact-Manager-App",
  },
  {
    picture: NoImageAvailable,
    title: "Node Products API",
    description: "A node application with APIs related to products",
    stacks: ["Node Js", "MongoDB"],
    libraries: ["Express", "Mongoose"],
    githubLink: "https://github.com/eugenehan94/Node-Product-API",
  },
  {
    picture: NoImageAvailable,
    title: "Vanilla Node Movies API",
    description:
      "A plain Node application (no libraries used) with APIs related to movies",
    stacks: ["Node Js"],
    libraries: [],
    githubLink: "https://github.com/eugenehan94/Node-Vanilla-CRUD-API-Movies",
  },

  {
    picture: MaterialUIBootcamp,
    title: "Material UI Bootcamp",
    description:
      "  A bootcamp webpage created with React Js and Material UI framework.",
    stacks: ["React"],
    libraries: ["Material UI"],
    projectLink:
      "https://eugenehan94.github.io/React-Material-UI-Bootcamp-Website-Project/",
    githubLink:
      "https://github.com/eugenehan94/React-Material-UI-Bootcamp-Website-Project#home-page-demo",
  },
  {
    picture: ChineseRadicalLookUp,
    title: "Chinese Radical Look Up",
    description: "Finding Chinese characters based on radicals",
    stacks: ["React"],
    libraries: [
      "Router",
      "Redux ToolKit",
      "Material UI",
      "Styled Component",
      "Immer",
    ],
    projectLink:
      "https://github.com/eugenehan94/React-Chinese-Radical-Search-Project#demo",
    githubLink:
      "https://github.com/eugenehan94/React-Chinese-Radical-Search-Project#demo",
  },
  {
    picture: RickAndMortyProject,
    title: "Rick And Morty Database",
    description:
      "A Database of characters and locations from the hit series Rick And Morty",
    stacks: ["React"],
    libraries: ["Router", "Redux", "GraphQL", "Material UI", "Immer"],
    projectLink: "https://eugenehan94.github.io/React-GraphQL-Rick-And-Morty/",
    githubLink:
      "https://github.com/eugenehan94/React-GraphQL-Rick-And-Morty#demo-screenshot",
  },
  {
    picture: SpaceXProject,
    title: "Space X Database",
    description: "A collection of Space X vehicles",
    stacks: ["React"],
    libraries: ["Router", "Redux", "GraphQL", "Material UI", "Immer"],
    projectLink: "https://eugenehan94.github.io/React-GraphQL-SpaceX-App/",
    githubLink: "https://github.com/eugenehan94/React-GraphQL-SpaceX-App#demo",
  },
  {
    picture: TranslatorWebsiteProject,
    title: "Translator Website",
    description:
      " An translation website I developed, API provided by LibreTranslate at https://libretranslate.de/docs/",
    stacks: ["React"],
    libraries: ["Router", "Material UI"],
    projectLink:
      "https://eugenehan94.github.io/React-Translator-Website-Project/#/",
    githubLink:
      "https://github.com/eugenehan94/React-Translator-Website-Project#home-page-demo",
  },
  {
    picture: MaterialUIBankRegistration,
    title: "Bank Registration Form",
    description:
      "A bank registration form replica developed with React, Material UI and Formik",
    stacks: ["React"],
    libraries: ["Router", "Formik", "Material UI"],
    projectLink:
      "https://eugenehan94.github.io/React-Banking-Registration-MatUI-Formik/#/",
    githubLink:
      "https://github.com/eugenehan94/React-Banking-Registration-MatUI-Formik#home-page",
  },
  {
    picture: FakeECommerce,
    title: "Ecommerce Project",
    description:
      " An ecommerce website I developed using React redux, router and hooks. Performs HTTP request from API provided by FakeStoreAPI",
    stacks: ["React"],
    libraries: ["Redux", "Router"],
    projectLink: "https://eugenehan94.github.io/react-redux-estore-project/#/",
    githubLink:
      "https://github.com/eugenehan94/react-redux-estore-project#home-page-demo",
  },
  {
    picture: RandomAnimeQuotes,
    title: "Anime Random Quotes",
    description:
      "  A Project I created using React and Material UI. Performs HTTP request from API provided by Animechan and Jikan.",
    stacks: ["React"],
    libraries: ["Material UI", "Axios"],
    projectLink:
      "https://eugenehan94.github.io/React-Anime-Random-Quotes-Project/",
    githubLink:
      "https://github.com/eugenehan94/React-Anime-Random-Quotes-Project#anime-quotes-demo",
  },
  {
    picture: LightDarkTheme,
    title: "Light/Dark Theme",
    description: "A light/dark theme project created using styled components.",
    stacks: ["React"],
    libraries: ["Styled Components"],
    projectLink:
      "https://eugenehan94.github.io/React-light-dark-theme-project/",
    githubLink:
      "https://github.com/eugenehan94/React-light-dark-theme-project#lightdark-theme-demo",
  },
  {
    picture: DiaryProjectHomePage,
    title: "Diary Project",
    description: "A CRUD project where uses put how they are feeling",
    stacks: ["React"],
    libraries: ["Fetch API", "JSON Server"],
    projectLink: "https://github.com/eugenehan94/React-Diary-Project",
    githubLink: "https://github.com/eugenehan94/React-Diary-Project#home-page",
  },
  {
    picture: McDonaldsReplica,
    title: "Mcdonalds Replica",
    description: " A replica of Mcdonalds' menu, promotion and family page",
    stacks: ["React"],
    libraries: ["Router"],
    projectLink: "https://eugenehan94.github.io/React-McDonalds-Menu-Project",
    githubLink: "https://github.com/eugenehan94/React-McDonalds-Menu-Project",
  },
  {
    picture: BankingWebpageReplica,
    title: "Banking Webpage",
    description: "A webpage I created using React js",
    stacks: ["React"],
    libraries: [],
    projectLink: "https://eugenehan94.github.io/react-webpage-project/",
    githubLink: "https://github.com/eugenehan94/react-webpage-project",
  },
  {
    picture: AccordionProject,
    title: "Accordion Project",
    description:
      " An accordion inspired by the one found on Simplii Financial's website",
    stacks: ["React"],
    libraries: ["JSON Server"],
    projectLink:
      "https://eugenehan94.github.io/React-Banking-Accordion-Project/",
    githubLink:
      "https://github.com/eugenehan94/React-Banking-Accordion-Project",
  },
  {
    picture: SlideshowProject,
    title: "Slideshow Project",
    description:
      " A slide show of people's name, picture and comment. The data is read from a REST API in the original.",
    stacks: ["React"],
    libraries: ["Fetch API", "JSON Server"],
    projectLink:
      "https://eugenehan94.github.io/React-Reviews-Slideshow-Project/",
    githubLink:
      "https://github.com/eugenehan94/React-Reviews-Slideshow-Project",
  },
  {
    picture: GithubUserProject,
    title: "Github User Project",
    description:
      "  A project showing multiple Github Users. The information is fetched for an API provided by Github",
    stacks: ["React"],
    libraries: ["Fetch API"],
    projectLink:
      "https://eugenehan94.github.io/React-Github-User-List-Project/",
    githubLink: "https://github.com/eugenehan94/React-Github-User-List-Project",
  },
  {
    picture: CounterProject,
    title: "A Counter",
    description:
      "   A counter with different options, like add and subtract 100, random number, etc.",
    stacks: ["React"],
    libraries: [],
    projectLink: "https://eugenehan94.github.io/React-Counter-Project/",
    githubLink: "https://github.com/eugenehan94/React-Counter-Project",
  },
  {
    picture: JSShootoutGame,
    title: "Shootout Prediction Game",
    description:
      " A 2D soccer/football shootout game created with Vanilla Javascript, CSS and HTML.",
    stacks: ["Javascript"],
    libraries: [],
    projectLink: "https://eugenehan94.github.io/Shootout-Prediction-Game/",
    githubLink:
      "https://github.com/eugenehan94/Shootout-Prediction-Game#link-to-game-httpseugenehan94githubioshootout-prediction-game",
  },
  {
    picture: JSCardMatch,
    title: "Card Matching Game",
    description:
      " A 2D 2 player card matching game created with Vanilla Javascript, CSS and HTML.",
    stacks: ["Javascript"],
    libraries: [],
    projectLink: "https://eugenehan94.github.io/Card-Matching-Game/",
    githubLink:
      "https://github.com/eugenehan94/Card-Matching-Game#card-matching-game",
  },
  {
    picture: JSBankingWebpage,
    title: "Webpage Project",
    description: " A webpage I created using HTML, CSS and vanilla Javascript",
    stacks: ["Javascript"],
    libraries: [],
    projectLink: "https://eugenehan94.github.io/Banking-Website-Replica/",
    githubLink:
      "https://github.com/eugenehan94/react-webpage-project#react-webpage-project",
  },
  {
    picture: JavaCustomerFile,
    title: "Customer CRUD Project",
    description:
      "A Java Spring project which emulates real-life CRUD operations in handling new and existing customer/client files. Using mySQL as the database",
    stacks: ["Java"],
    libraries: ["Java Spring", "MySQL"],
    projectLink: "https://github.com/eugenehan94/CustomerFile",
    githubLink: "https://github.com/eugenehan94/CustomerFile",
  },
];

export default AllProjects;
