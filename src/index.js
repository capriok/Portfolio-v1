import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import './index.scss'

import NULL from './gallery/projects/404.png'

import SQLIFTING_GREETING from './gallery/projects/SQLIFTING-GREETING.PNG'
import SQLIFTING_MANAGER from './gallery/projects/SQLIFTING-MANAGER.PNG'
import SQLIFTING_EXBUILDER from './gallery/projects/SQLIFTING-EXBUILDER.PNG'
import SQLIFTING_WOBUILDER from './gallery/projects/SQLIFTING-WOBUILDER.PNG'
import SQLIFTING_INPROGRESS from './gallery/projects/SQLIFTING-INPROGRESS.PNG'
import SNEKKEL_GREETING from './gallery/projects/SNEKKEL-GREETING.PNG'
import SNEKKEL_SPRITE from './gallery/projects/SNEKKEL-SPRITE.PNG'
import SNEKKEL_DIFFICULTY from './gallery/projects/SNEKKEL-DIFFICULTY.PNG'
import GODSPEED_HOME from './gallery/projects/GODSPEED-HOME.PNG'
import GODSPEED_BUTTON from './gallery/projects/GODSPEED-BUTTON.PNG'
import GODSPEED_INPUT from './gallery/projects/GODSPEED-INPUT.PNG'
import GODSPEED_MODAL from './gallery/projects/GODSPEED-MODAL.PNG'
import DISARRAY_GREETING from './gallery/projects/DISARRAY-GREETING.PNG'
import DISARRAY_START from './gallery/projects/DISARRAY-START.PNG'
import DISARRAY_SOLVED from './gallery/projects/DISARRAY-SOLVED.PNG'
import DISARRAY_LOGIC from './gallery/projects/DISARRAY-LOGIC.PNG'
import DISARRAY_LEADERBOARD from './gallery/projects/DISARRAY-LEADERBOARD.PNG'
import PORTFOLIO_HOME from './gallery/projects/PORTFOLIO-HOME.PNG'
import PORTFOLIO_ABOUT from './gallery/projects/PORTFOLIO-ABOUT.PNG'
import PORTFOLIO_PROJECTS from './gallery/projects/PORTFOLIO-PROJECTS.PNG'
import PORTFOLIO_PROJECT from './gallery/projects/PORTFOLIO-PROJECT.PNG'
import PORTFOLIO_RESUME from './gallery/projects/PORTFOLIO-RESUME.PNG'
import MTMUSIC_GOOGLE from './gallery/projects/MTM-GOOGLE.PNG'
import MTMUSIC_INIT from './gallery/projects/MTM-INIT.PNG'
import MTMUSIC_PLAYER from './gallery/projects/MTM-PLAYER.PNG'
import MTMUSIC_PLAYLISTS from './gallery/projects/MTM-PLAYLISTS.PNG'
import NEETCHAT_HOME from './gallery/projects/NEETCHAT-HOME.PNG'
import NEETCHAT_CHAT from './gallery/projects/NEETCHAT-CHAT.PNG'
import ARTEBELLA_HOME from './gallery/projects/ARTE-BELLA-HOME.PNG'
import TOOKFEED_HOME from './gallery/projects/TOOKFEED-HOME.PNG'
import TOOKFEED_REGISTER from './gallery/projects/TOOKFEED-REGISTER.PNG'
import TOOKFEED_PROFILE from './gallery/projects/TOOKFEED-PROFILE.PNG'
import TOOKFEED_OPTIONS from './gallery/projects/TOOKFEED-OPTIONS.PNG'
import TOOKFEED_SERVER from './gallery/projects/TOOKFEED-SERVER.PNG'
import THEMESFK_HOME from './gallery/projects/TFK-HOME.PNG'
import THEMESFK_CODE from './gallery/projects/TFK-CODE.PNG'
import THEMESFK_PREV1 from './gallery/projects/TFK-PREV1.PNG'
import THEMESFK_PREV2 from './gallery/projects/TFK-PREV2.PNG'
import THEMESFK_PREV3 from './gallery/projects/TFK-PREV3.PNG'


export function Index() {
  const trueDarkState = localStorage.getItem('theme') === 'true'

  let initialState = {
    darkState: trueDarkState,
    theTheme: {},
    projects: [
      {
        title: 'SQLifting',
        snippet: 'Personalized workout building application with SQL backend',
        writing: {
          process: `...`,
          conclusion: [
            'Developed skills working with a structured database',
            'Improved skills writing dynamic functions that do more with less code',
            'Became mroe fluent with data manipulation and working with complex objects',
          ],
        },
        tags: ['Javascript', 'React', 'SQL', '2020'],
        thumb: SQLIFTING_MANAGER,
        slides: [SQLIFTING_GREETING, SQLIFTING_MANAGER, SQLIFTING_EXBUILDER, SQLIFTING_WOBUILDER, SQLIFTING_INPROGRESS],
        link: 'https://github.com/capriok/SQLifting',
        demo: 'https://sqlifting.kylecaprio.dev',
        resources: ['https://www.postgresql.org', 'https://aws.amazon.com/rds'],
        route: '/sqlifting'
      },
      {
        title: 'Snekkel',
        snippet: 'Grid based snake game featuring directional sprites and difficulty settings',
        writing: {
          process: `After making Disarray, my first JavaScript puzzle game, I was excited to make more nostalgia-inspired 
          games. I instantly thought of the classic game I grew up playing, Snake. I first thought of building this using 
          only vanilla JavaScript, which I knew would not be a problem for me, but I couldn't bring myself away from the 
          React ecosystem. It added such an elegant and modern factor to the game. So, I decided to use both while 
          emphasizing vanilla JavaScript for-loops and array manipulation methods rather than React hook state setters. 
          I began by forming the logic to create a game tick and draw the grid. Next, I randomly assigned the “food” and 
          rendered the snake to the grid. This was fairly straight forward due to the amount of brainstorming and planning 
          I did before writing any code. At first, the snake was merely a color-filled grid tile followed by other color-filled 
          grid tiles acting as its tail. I knew this was not the end result, so I started planning how to implement sprites 
          into my game. This was the most difficult code I've had to write while working with game-style code. But man, it 
          was so fun and rewarding. It involved writing a function to check the snake’s head position and which direction 
          it was facing on the grid. Another function checked the tail pieces’ previous and subsequent position and direction 
          in order to render the correct sprite for a specific piece. The complexity of rendering corner pieces revealed to 
          be pretty difficult. While I spend time finishing this feature, the game may look unfinished but continues to serve 
          as a reminder of how far my skills have come.`,
          conclusion: [
            'Improved skills in writing iterative functions with vanilla JavaScript',
            'Learned a lot about game loops and what goes on behind the scenes',
            'Realization of my adept abilities writing complex JavaScript without using references',
          ],
        },
        tags: ['Javascript', 'React', '2020'],
        thumb: SNEKKEL_GREETING,
        slides: [SNEKKEL_GREETING, SNEKKEL_SPRITE, SNEKKEL_DIFFICULTY],
        link: 'https://github.com/capriok/Snekkel',
        demo: 'https://snekkel.kylecaprio.dev',
        resources: [],
        route: '/snekkel'
      },
      {
        title: 'Godspeed',
        snippet: 'React UI Component and toolkit library',
        writing: {
          process: `With my earliest experiences working in React, I found component design to be the most intersting. 
          This led me to the utilization of Material-UI, which I love. Using the library accelerated the process of building 
          great looking components. However, when it came simple customization, which is important to me, the complexity 
          and amount of code needed was detrimental to the process. Every developer knows styling components can be very 
          tedious, so I set out to make my own styled component library. I used Styled-Components as the foundation because 
          of how lightweight and functional the library is. After making my first buttons and inputs, I felt a very 
          high level of satisfaction. Next, I started the process of cleaning up code and creating a more professional base for 
          my soon to be NPM package. This quickly became, and remains to be, one of my favorite and most prized 
          endeavors to work on.`,
          conclusion: [
            'Expanded my knowledge about the inner workings of which NPM packages are made',
            'Developed a comfort with working inside complex enterprise tailored code bases',
            'Learned a lot about prop-types and error handling to esure correct use opf the package',
            'Learned Gatsby.js to make the documention website'
          ],
        },
        tags: ['Gatsby', 'React', 'Javascript', '2020'],
        thumb: GODSPEED_HOME,
        slides: [GODSPEED_HOME, GODSPEED_BUTTON, GODSPEED_INPUT, GODSPEED_MODAL,],
        link: 'https://github.com/capriok/Godspeed-Docs',
        demo: 'https://godspeed.netlify.com',
        resources: ['https://www.styled-components.com', 'https://www.npmjs.com'],
        route: '/godspeed-docs'
      },
      {
        title: 'DisArray',
        snippet: 'Tile puzzle game challenging your strategic and critical thinking skills with an engouraged competitive aspect',
        writing: {
          process: `The #100DaysOfCode challenge all across social media inspired me to build a JavaScript game. 
          I Immediately had the perfect game in mind, a 16-tile sorting puzzle I had in my youth but could never truely 
          solve. Planning the code structure came to me rather quickly, which made me more excited to build this game. 
          The main challenge hit when it was time to write the tile movement and checking for wins. Once that was all 
          sorted out it was time to introduce the competitive aspect. This entailed writing a timer to track the current 
          game length, as well as writing the leaderboards server code to keep track of user wins and times.`,
          conclusion: [
            'Extensively improved my array and object manipulation skills',
            'Enhanced my fluency with iterative and recursive techniques',
            'Learned more about lambda functions for deployment for server',
            'Familiarized myself with serverless HTTP API use',
          ],
        },
        tags: ['Javascript', 'React', 'SASS', '2020'],
        thumb: DISARRAY_GREETING,
        slides: [DISARRAY_GREETING, DISARRAY_START, DISARRAY_SOLVED, DISARRAY_LEADERBOARD, DISARRAY_LOGIC],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://disarray.kylecaprio.dev',
        resources: [],
        route: '/disarray'
      },
      {
        title: 'Portfolio',
        snippet: 'Version One of my Sofware developer portfolio',
        writing: {
          process: `The main goal was to create a space for people to visually see my skills and experience clearly. 
          I strongly believe showcasing personal projects and professional endeavors is key for any software developer. 
          After building the website structure, it came time to reflect on myself and what I've learned and accomplished 
          over the years. This portfolio is something I hold dear to my heart as it is the forefront of what will land me 
          my first job as a developer and change my life forever. This is who I am and what I love doing, take a look.`,
          conclusion: [],
        },
        tags: ['Javascript', 'React', 'SASS', '2020'],
        thumb: PORTFOLIO_HOME,
        slides: [PORTFOLIO_HOME, PORTFOLIO_ABOUT, PORTFOLIO_PROJECTS, PORTFOLIO_PROJECT, PORTFOLIO_RESUME],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://kylecaprio.dev',
        resources: [],
        route: '/portfolio'
      },
      {
        title: 'NeetChat',
        snippet: `Harnessing the power of socket.io to create a chatroom application. Fully functional with induvidual rooms, typing alerts and private messages.`,
        writing: {
          process: `This was one of the first complex collaborative projects I have done, two main contributors being 
          Jordan Riley and Hunter Foulk. We had a vision in mind to make a modern remake of an old school styled chat 
          room application. Socket.io and Express in Node were the foundation of this application. Learning about web 
          sockets was extremely intriguing to me and taught me a lot about how countless other web applications work. 
          The most difficult feature was the implementation of private messaging. After long sessions of brainstorming, 
          discussing and planning we realized quite a few key foundations of code needed to be rewritten. 
          We pushed through, and were very thankful we did, because the end result of this project and the chemistry 
          built with eachother was something to be very proud of.`,
          conclusion: [
            'Developed a proficient understanding of web sockets and server based applications',
            'Progressed my teamwork skills working in professional-style environments',
            'Stronger comprehension of server code and advanced web applications',
          ],
        },
        tags: ['Javascript', 'Socket.io', 'React', 'SASS', '2019'],
        thumb: NEETCHAT_HOME,
        slides: [NEETCHAT_HOME, NEETCHAT_CHAT],
        link: 'https://github.com/hunterfoulk/Neet-Chat',
        demo: 'https://github.com/hunterfoulk/Neet-Chat',
        resources: ['https://socket.io'],
        route: '/neet-chat'
      },
      {
        title: 'MyTube Music',
        snippet: 'Youtube Data API consumed to create a client sided music streaming application wrapped in Electron',
        writing: {
          process: `I had a vision to develop a music streaming application inspired by YouTube Music. This being 
          the most complex endeavor of mine I knew the importance of keeping a clean code base. The Youtube Data API 
          is the foundation of the application. Core functionality consisted of user authentication, which led to 
          managing complex user objects. The ability to access the scope of an authenticated user to read and write 
          user data gave the application a personalized and familiar feel. The amount of user data started becoming 
          difficult to keep track of so I implemented global state management with the help of React hooks. Once 
          established this opened my eyes to how powerful React actually is. My love for this framework skyrocketed 
          during the development process of this app.`,
          conclusion: [
            'Became confident working with an API ( GET, POST, UPDATE, DELETE )',
            'Learned about user authentication and how to effectively use the state of authentication in my application',
            'Familiarized myself with complex state management via React hooks ( useContext, useReducer )',
            'Management of complex core application and component structure',
          ],
        },
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2019'],
        thumb: MTMUSIC_INIT,
        slides: [MTMUSIC_GOOGLE, MTMUSIC_INIT, MTMUSIC_PLAYER, MTMUSIC_PLAYLISTS],
        link: 'https://github.com/capriok/MyTube',
        demo: 'https://mytube-music.kylecaprio.dev',
        resources: ['https://developers.google.com/youtube/v3'],
        route: '/mytube-music'
      },
      {
        title: 'Arte Bella Engraving',
        snippet: 'Small business client, single page website',
        writing: {
          process: `The client's desires consisted of two main objectives: simplicity and accessibility. First, I 
          created the foundation, a simple single page website that is easily navigable. The next process was to optimize the website 
          to be fully responsive for any device and or screen size. I found that using React was perfect for 
          this application. Designing the skeleton with only filler content to work with, until the client provided 
          their own, allowed me to create a structure that was extremely dynamic and versatile. When the content was 
          supplied, I thanked myself for creating such an adaptable architecture.`,
          conclusion: [
            'Built time management, self-assurance and negotiation skills',
            'Learned about domain management, web hosting and application deployment',
            'Crafted fully responsive web design ( markup, styling, querying )',
            'Improved React conditional component rendering',
          ],
        },
        tags: ['Javascript', 'React', 'SASS', '2019'],
        thumb: ARTEBELLA_HOME,
        slides: [ARTEBELLA_HOME],
        link: 'https://github.com/capriok/Arte-Bella',
        demo: 'https://artebellaengraving.com',
        resources: [],
        route: '/arte-bella-engraving'
      },
      {
        title: 'TookFeed',
        snippet: 'Harnessing the power of News API to stay up to date on global or local news',
        writing: {
          process: `My goal of this project was to create a newsfeed application I could tailor to my own interests. 
          During the development process, I greatly improved my Javascript and Web Development skills. Teaching 
          myself React was the big challenge of this project. My lack of knowledge about state management and 
          lifecycles quickly changed as I devoted myself to this learning framework. I fell in love with React and 
          have been using it exclusively ever since.`,
          conclusion: [
            'Learned React from the ground up',
            'Developed knowledge about state management, lifecycles, and the virtual DOM',
            'Improved my skills in dealing with HTTP request methods',
          ],
        },
        tags: ['Javascript', 'React', 'Electron', 'CSS', '2018'],
        thumb: TOOKFEED_HOME,
        slides: [TOOKFEED_HOME, TOOKFEED_REGISTER, TOOKFEED_OPTIONS, TOOKFEED_PROFILE, TOOKFEED_SERVER],
        link: 'https://github.com/capriok/TookFeed',
        demo: 'https://tookfeed.kylecaprio.dev',
        resources: ['https://newsapi.org', 'https://www.electronjs.org'],
        route: '/tookfeed'
      },
      {
        title: 'Theme Template Distribution',
        snippet: 'Combining aesthetics with user customizability to provide easy to use but unique themes for any user',
        writing: {
          process: `My aspiration for this endeavor was to provide quality Tumblr themes to people who enjoy 
          customization of their blog without paying top dollar for a template. Combining aesthetics, simplicity, and 
          customizability, I became the go-to guy for themes among my peers. This is when I initially found my 
          passion for web development. Tinkering with code and teaching myself new techniques became the part of my 
          day I looked forward to the most.`,
          conclusion: [
            'Better understanding of how the web is structured and manipulated by the browser',
            'Acquisition of web development skills ( HTML, CSS, JQuery )',
            'Formed simple business and production style thinking habits',
            'Developed a brand for myself',
          ],
        },
        tags: ['HTML', 'CSS', 'Jquery', '2014'],
        thumb: THEMESFK_HOME,
        slides: [THEMESFK_HOME, THEMESFK_PREV1, THEMESFK_PREV2, THEMESFK_PREV3, THEMESFK_CODE],
        link: 'https://themesfromkyle.tumblr.com',
        demo: 'https://themesfromkyle.tumblr.com',
        resources: ['https://www.jquery.com'],
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
