import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import NULL from './gallery/projects/404.png'
import PORTFOLIO_GIF1 from './gallery/projects/PORTFOLIOV1-GIF1.gif'
import PORTFOLIO_1 from './gallery/projects/PORTFOLIOV1-1.PNG'
import PORTFOLIO_2 from './gallery/projects/PORTFOLIOV1-2.PNG'
import PORTFOLIO_3 from './gallery/projects/PORTFOLIOV1-3.PNG'
import DISARRAY_GIF1 from './gallery/projects/DISARRAY-GIF1.gif'
import DISARRAY_1 from './gallery/projects/DISARRAY-1.PNG'
import DISARRAY_2 from './gallery/projects/DISARRAY-2.PNG'
import DISARRAY_3 from './gallery/projects/DISARRAY-3.PNG'
import TF_GIF1 from './gallery/projects/TF-GIF1.gif'
import TF_FILTERS from './gallery/projects/TF-FILTERS.gif'
import TF_PROFILE from './gallery/projects/TF-PROFILE.gif'
import TF_ACC_DELETE from './gallery/projects/TF-ACC-DELETE.gif'
import TFKGIF1 from './gallery/projects/TFK-GIF1.gif'
import TFK1 from './gallery/projects/TFK1.PNG'
import TFK2 from './gallery/projects/TFK2.PNG'
import "./index.scss";

export function Index() {
  const trueDarkState = localStorage.getItem('theme') === 'true'

  let initialState = {
    darkState: trueDarkState,
    theTheme: {},
    projects: [
      {
        title: 'Godspeed',
        snippet: 'React UI Component and toolkit library',
        p1: `He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? 
        It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and 
        again tried to imagine it was the first time.`,
        p2: `Your friends are holding you back and bringing you down." But
        she didn't because she knew his friends were all that he had and even if that It seemed that it fell to earth
        about one hundred miles east of him.`,
        tags: ['Javascript', 'React', 'Styled-Components', '2020'],
        thumb: NULL,
        slides: [NULL, NULL, NULL],
        link: 'https://github.com/capriok/Godspeed',
        route: '/disarray'
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
        thumb: DISARRAY_GIF1,
        slides: [DISARRAY_1, DISARRAY_2, DISARRAY_3],
        link: 'https://github.com/capriok/DisArray',
        route: '/disarray'
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
        thumb: NULL,
        slides: [NULL, NULL, NULL],
        link: 'https://github.com/capriok/MyTube',
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
        thumb: PORTFOLIO_GIF1,
        slides: [PORTFOLIO_1, PORTFOLIO_2, PORTFOLIO_3],
        link: 'https://github.com/capriok/Portfolio',
        route: '/portfolio'
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
        thumb: NULL,
        slides: [NULL, NULL, NULL],
        link: 'https://github.com/capriok/Arte-Bella',
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
        thumb: TF_GIF1,
        slides: [TF_FILTERS, TF_PROFILE, TF_ACC_DELETE],
        link: 'https://github.com/capriok/TookFeed',
        route: '/tookfeed'
      },
      {
        title: 'E-Commerce',
        snippet: 'High end fashion website inspired by Polo Ralph Lauren site',
        p1: `Where do they get a random paragraph?" he wondered as he clicked the generate button. Do they 
        just write a random paragraph or do they get it somewhere? At that moment he read the random paragraph
        and realized it was about random paragraphs and his world would never be the same.`,
        p2: `Then came the night of the first falling star. It was seen early in the morning, rushing over 
        Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for
        an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.`,
        tags: ['Javascript', 'HTML', 'CSS', '2019'],
        thumb: NULL,
        slides: [NULL, NULL, NULL],
        link: 'https://github.com/capriok',
        route: '/e-commerce'
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
        thumb: TFKGIF1,
        slides: [TFKGIF1, TFK1, TFK2],
        link: 'https://themesfromkyle.tumblr.com/',
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
