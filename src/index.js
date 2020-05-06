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
  const Jordan = "<a href='https://github.com/jriley15'>Jordan Riley</a>"

  let initialState = {
    darkState: trueDarkState,
    theTheme: {},
    projects: [
      {
        title: 'Snekkel',
        snippet: 'Grid based snake game featuring directional sprites and difficulty settings',
        writing: {
          objective: `Writing in progress`,
          conclusion: [
            'Writing in progress',
          ],
        },
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
        writing: {
          objective: `Writing in progress`,
          conclusion: [
            'Writing in progress',
          ],
        },
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
        writing: {
          objective: `Writing in progress`,
          conclusion: [
            'Writing in progress',
          ],
        },
        tags: ['Javascript', 'React', 'SASS', '2020'],
        thumb: DISARRAY_UI,
        slides: [DISARRAY_1, DISARRAY_2, DISARRAY_3],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://disarray.kylecaprio.dev',
        route: '/disarray'
      },
      {
        title: 'Portfolio',
        snippet: 'Version One of my Sofware developer portfolio',
        writing: {
          objective: `The main goal in mind was to create a space for people to visually see my skills and experience clearly. 
          I strongly believe showcasing personal projects and professional endeavors is key for any software developer. 
          This is who I am and what I love doing, have a look. After building the website structure it came time to reflect on myself 
          and really dive deep into writing about what I've learned and accomplished over the years. This portfolio is 
          something I hold dear to my heart as it is the forefront of what will land me my first job as a developer and 
          change my life forever.
          `,
          conclusion: [],
        },
        tags: ['Javascript', 'React', 'SASS', '2020'],
        thumb: PORTFOLIO_UI,
        slides: [PORTFOLIO_1, PORTFOLIO_2, PORTFOLIO_3],
        link: 'https://github.com/capriok/Portfolio',
        demo: 'https://kylecaprio.dev',
        route: '/portfolio'
      },
      {
        title: 'NeetChat',
        snippet: `Harnessing the power of socket.io to create a chatroom application. Fully functional with induvidual rooms, 
        private messages and plenty more`,
        writing: {
          objective: `This was one of the first complex collaborative projects I have done. Two main contributors being 
          Jordan Riley and Hunter Foulk. We had a vision in mind to make a modern remake of and old school styled chat room application. 
          Socket.io and Express in Node were the foundation of this application. Learning about web sockets was extremely intriguing to me 
          and taught me alot about how countless other web applications work. The most difficult feature was the implementaion of private 
          messaging. After long sessions of brainstorming, discussion and planning together we realized quite a few key foundations of 
          code would have to be rewritten. We pushed through and were very thankful in doing so, because the end result of this project 
          and the chemistry built with eachother was something to be very proud of.`,
          conclusion: [
            'Developed a proficient understanding of web sockets and server applications',
            'Came out with a chemistry and skills working with others in development',
            'Stronger server code and theory behind more advanced web applications',
          ],
        },
        tags: ['Javascript', 'Socket.io', 'React', 'SASS', '2019'],
        thumb: NEETCHAT_1,
        slides: [NEETCHAT_1, NEETCHAT_2, NULL],
        link: 'https://github.com/hunterfoulk/Neet-Chat',
        demo: 'https://github.com/hunterfoulk/Neet-Chat',
        route: '/neet-chat'
      },
      {
        title: 'MyTube Music',
        snippet: 'Youtube Data API consumed to create a client sided music streaming application wrapped in Electron',
        writing: {
          objective: `I had a vision to develop a music streaming application inspired by YouTube Music. This being the 
          most complex endeavor of mine I knew keeping a clean code base was the most important aspect of the project. 
          The Youtube Data API would be the foundation of the application. Core functionality consisted of user authentication, 
          which led to managing complex user objects. The ability to access the scope of an authenticated user to 
          read and write user data gave the application a personalized and familiar feel. The amount of user data started 
          becoming hard to keep track of so I implemented global state management with help of React.js hooks. 
          Once established this opened my eyes to how powerful React.js actually is. My love for the framework 
          skyrocketed during the development process of this app.`,
          conclusion: [
            'Became confident working with an API ( GET, POST, DELETE )',
            'Learned about user authentication and how to effectively use the state of authentication in my application',
            'Familiarized with complex state management with React.js hooks ( useContext, useReducer )',
            'Management of complex core application and component structure',
          ],
        },
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2019'],
        thumb: YTM_UI,
        slides: [YTM_LOGIN, YTM_SEARCH, YTM_QUEUE],
        link: 'https://github.com/capriok/MyTube',
        demo: 'https://mytube-music.kylecaprio.dev',
        route: '/mytube-music'
      },
      {
        title: 'Arte Bella Engraving',
        snippet: 'Small business client, single page website',
        writing: {
          objective: `The clients desires consisted of two main objectives. First the foundation, a simple single page website 
          that is to the point and easily navigable. The next objective was to optimize the website to be fully responsive 
          for any device and or screen size. I found that using React.js was perfect for this application. Designing the 
          skeleton with only dummy content to work with, until the client provided content, allowed me to create a structure 
          that was extremely dynamic and versatile. When the client was ready to populate the site with the content I 
          thanked myself for creating such a versatile architecture.`,
          conclusion: [
            'Built Time management, Self-assurance and Negotiation skills',
            'Learned about domain management, web hosting and application deployment',
            'Responsive web design ( markup, styling, querying )',
            'Drastically improved React.js conditional component rendering',
          ],
        },
        tags: ['Javascript', 'React', 'SASS', '2019'],
        thumb: ARTE_BELLA_UI,
        slides: [ARTE_BELLA_1, NULL, NULL],
        link: 'https://github.com/capriok/Arte-Bella',
        demo: 'https://artebellaengraving.com',
        route: '/arte-bella-engraving'
      },
      {
        title: 'TookFeed',
        snippet: 'Harnessing the power of News API to stay up to date on global or local news',
        writing: {
          objective: `My goal of this project was to create a newsfeed application I could use for myself. 
          During the development process I greatly improved my Javascript and Web Development skills. 
          Teaching myself React.js was the big challenge of this project. My lack of knowledge about 
          state management and lifecycles changed very quickly as I devoted myself to this framework. 
          I fell in love with react.js and have been using it exclusively ever since.`,
          conclusion: [
            'Learned React.js from the ground up.',
            'Developed knowledge about state management, lifecycles, and the virtual DOM',
            'Improved my skills in dealing with HTTP request methods',
          ],
        },
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2018'],
        thumb: TF_UI,
        slides: [TF_FILTERS, TF_PROFILE, TF_ACC_DELETE],
        link: 'https://github.com/capriok/TookFeed',
        demo: 'https://tookfeed.kylecaprio.dev',
        route: '/tookfeed'
      },
      {
        title: 'Theme Template Distribution',
        snippet: 'Combining aesthetics with user customizability to provide easy to use but unique themes for any user',
        writing: {
          objective: `My goal for this endeavor was to provide quality Tumblr themes to people who enjoy customization of their 
          blog without paying top dollar for a template. Combining aesthetics, simplicity, and customizability quickly made me 
          the go to guy for themes among my peers. This is where I initially found my passion for web development. 
          Tinkering and teaching myself became the thing I looked forward to most everyday. 
          `,
          conclusion: [
            'Understanding of how the web is structured and manipulated by the browser',
            'Aquisition of web development skills ( HTML, CSS, JQuery )',
            'Formed simple business and production style thinking habits',
            'Developed a brand for myself',
          ],
        },
        tags: ['HTML', 'CSS', 'Jquery', '2014'],
        thumb: TFK_UI,
        slides: [TFK_1, TFK_2],
        link: 'https://themesfromkyle.tumblr.com',
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
