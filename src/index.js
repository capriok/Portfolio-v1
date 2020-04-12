import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import NULL from './gallery/projects/404.png'
import SNEKKEL_UI from './gallery/projects/SNEKKEL-UI.gif'
import SNEKKEL_FEAT from './gallery/projects/SNEKKEL-FEAT.gif'
import SNEKKEL_1 from './gallery/projects/SNEKKEL-1.PNG'
import SNEKKEL_2 from './gallery/projects/SNEKKEL-2.PNG'
import GODSPEED_1 from './gallery/projects/GODSPEED-1.PNG'
import DISARRAY_UI from './gallery/projects/DISARRAY-UI.gif'
import DISARRAY_1 from './gallery/projects/DISARRAY-1.PNG'
import DISARRAY_2 from './gallery/projects/DISARRAY-2.PNG'
import DISARRAY_3 from './gallery/projects/DISARRAY-3.PNG'
import NEETCHAT_1 from './gallery/projects/NEETCHAT-1.PNG'
import NEETCHAT_2 from './gallery/projects/NEETCHAT-2.PNG'
import PORTFOLIO_UI from './gallery/projects/PORTFOLIOV1-UI.gif'
import PORTFOLIO_1 from './gallery/projects/PORTFOLIOV1-1.PNG'
import PORTFOLIO_2 from './gallery/projects/PORTFOLIOV1-2.PNG'
import PORTFOLIO_3 from './gallery/projects/PORTFOLIOV1-3.PNG'
import YTM_LOGIN from './gallery/projects/YTM-LOGIN.gif'
import YTM_UI from './gallery/projects/YTM-UI.gif'
import YTM_SEARCH from './gallery/projects/YTM-SEARCH.gif'
import YTM_QUEUE from './gallery/projects/YTM-QUEUE.gif'
import ARTE_BELLA_UI from './gallery/projects/ARTE-BELLA-UI.gif'
import ARTE_BELLA_1 from './gallery/projects/ARTE-BELLA-1.PNG'
import TF_UI from './gallery/projects/TF-UI.gif'
import TF_FILTERS from './gallery/projects/TF-FILTERS.gif'
import TF_PROFILE from './gallery/projects/TF-PROFILE.gif'
import TF_ACC_DELETE from './gallery/projects/TF-ACC-DELETE.gif'
import TFK_UI from './gallery/projects/TFK-UI.gif'
import TFK_1 from './gallery/projects/TFK-1.PNG'
import TFK_2 from './gallery/projects/TFK-2.PNG'
import "./index.scss";

export function Index() {
  const trueDarkState = localStorage.getItem('theme') === 'true'

  let initialState = {
    darkState: trueDarkState,
    theTheme: {},
    projects: [
      {
        title: 'Snekkel',
        snippet: 'Snake game with directional sprites and difficulty settings',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Javascript', 'React', '2020'],
        thumb: SNEKKEL_UI,
        slides: [SNEKKEL_UI, SNEKKEL_FEAT, SNEKKEL_1, SNEKKEL_2],
        link: 'https://github.com/capriok/Snekkel',
        demo: 'https://snekkel.kylecaprio.dev',
        route: '/snekkel'
      },
      {
        title: 'Godspeed',
        snippet: 'React UI Component and toolkit library',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Gatsby', 'React', 'Javascript', '2020'],
        thumb: GODSPEED_1,
        slides: [GODSPEED_1, NULL, NULL],
        link: 'https://github.com/capriok/Godspeed-Docs',
        demo: 'https://godspeed.netlify.com',
        route: '/godspeed-docs'
      },
      {
        title: 'DisArray',
        snippet: 'Tile game challenging your strategic and critical thinking skills with an engouraged competitive aspect',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'SCSS', '2020'],
        thumb: DISARRAY_UI,
        slides: [DISARRAY_1, DISARRAY_2, DISARRAY_3],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://disarray.kylecaprio.dev',
        route: '/disarray'
      },
      {
        title: 'NeetChat',
        snippet: 'Harnessing the power of socket.io to create a chatroom application. Fully functional with induvidual rooms, private messages and plenty more.',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2020'],
        thumb: NEETCHAT_1,
        slides: [NEETCHAT_1, NEETCHAT_2, NULL],
        link: 'https://github.com/capriok/MyTube',
        demo: 'https://mytube-music.kylecaprio.dev',
        route: '/mytube-music'
      },
      {
        title: 'Portfolio',
        snippet: 'Sofware developer tailored portfolio',
        p1: `Then came the night of the first falling star. It was seen early in the morning, rushing over 
        Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for
        an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.`,
        p2: `Then came the night of the first falling star. It was seen early in the morning, rushing over 
        Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for
        an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'SCSS', '2020'],
        thumb: PORTFOLIO_UI,
        slides: [PORTFOLIO_1, PORTFOLIO_2, PORTFOLIO_3],
        link: 'https://github.com/capriok/Portfolio',
        demo: 'https://kylecaprio.dev',
        route: '/portfolio'
      },
      {
        title: 'MyTube Music',
        snippet: 'Youtube Data API consumed to create a client sided music streaming application wrapped in Electron',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2020'],
        thumb: YTM_UI,
        slides: [YTM_LOGIN, YTM_SEARCH, YTM_QUEUE],
        link: 'https://github.com/capriok/MyTube',
        demo: 'https://mytube-music.kylecaprio.dev',
        route: '/mytube-music'
      },
      {
        title: 'Arte Bella Engraving',
        snippet: 'Small business client, single page website',
        p1: `The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up 
        and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this
        moment she saw the irony of trying to fix the machine with violence.`,
        p2: `Then came the night of the first falling star. It was seen early in the morning, rushing over 
        Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for
        an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'SCSS', '2019'],
        thumb: ARTE_BELLA_UI,
        slides: [ARTE_BELLA_1, NULL, NULL],
        link: 'https://github.com/capriok/Arte-Bella',
        demo: 'https://artebellaengraving.com',
        route: '/arte-bella-engraving'
      },
      {
        title: 'TookFeed',
        snippet: 'Harnessing the power of News API to stay up to date on global or local news',
        p1: `She looked at her student wondering if she could ever get through. "You need to learn to think 
        for yourself," she wanted to tell him. "Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that meant a life of misery,
        he would never give them up.`,
        p2: `Then came the night of the first falling star. It was seen early in the morning, rushing over 
        Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for
        an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2019'],
        thumb: TF_UI,
        slides: [TF_FILTERS, TF_PROFILE, TF_ACC_DELETE],
        link: 'https://github.com/capriok/TookFeed',
        demo: 'https://tookfeed.kylecaprio.dev',
        route: '/tookfeed'
      },
      {
        title: 'Theme Template Distribution',
        snippet: 'Combining aesthetics with user customizability to provide easy to use but unique themes for any user',
        p1: `One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies 
        saved one two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks 
        burned with the silent imputation of parsimony that such close dealing implied. One dollar and
        eighty-seven cents. And the next day would be Christmas...`,
        p2: `She looked at her student wondering if she could ever get through. "You need to learn to think 
        for yourself," she wanted to tell him. "Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that meant a life of misery,
        he would never give them up.`,
        tags: ['HTML', 'CSS', 'Jquery', '2014'],
        thumb: TFK_UI,
        slides: [TFK_1, TFK_2],
        link: 'https://themesfromkyle.tumblr.com/',
        demo: 'https://themesfromkyle.tumblr.com',
        route: '/theme-template-distribution'
      }
    ]
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "flip":
        return {
          ...state,
          darkState: action.darkState
        };
      case "theme":
        return {
          ...state,
          theTheme: action.theTheme
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
