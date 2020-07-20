import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from 'react-markdown'
import { StateProvider } from "./state";
import App from "./app";
import './index.scss'

import * as bank from './bank'
import * as blog from './components/routes/posts/blogposts'

export function Index() {
  const trueDarkState = localStorage.getItem('theme') === 'true'
  let initialState = {
    darkState: trueDarkState,
    theTheme: {},
    projects: [
      {
        title: 'React-Draggable-Array',
        snippet: `(NPM Package) - Wrapper Component that utilizes the native browser drag API, giving endless functionality to its children`,
        writing: {
          process: `Workin on it..`,
          processSub: ``,
          conclusion: [
            'Learned Reacts Top-Level API and how to render components with it',
            'Developed better understanding of what JSX does under the hood',
            'Progressed TypeScript skills and building professional code bases',
          ],
        },
        stack: ['React with TypeScript', 'React Top Level API', 'Browser Drag API', 'NPM', 'SASS'],
        tags: ['TypeScript', 'React', 'NPM', '2020'],
        thumb: bank.DRAGGABLE_NPM,
        slides: [
          bank.DRAGGABLE_VISUAL,
          bank.DRAGGABLE_GIT,
          bank.DRAGGABLE_NPM
        ],
        link: 'https://github.com/capriok/react-draggable-array',
        demo: 'https://codesandbox.io/s/react-draggable-array-2kdql',
        resources: [
          'https://reactjs.org/docs/react-api.html',
          'https://www.typescriptlang.org/docs/home.html',
          'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
          'https://www.npmjs.com/'
        ],
        route: '/react-draggable-array'
      },
      {
        title: 'Cash Flow',
        snippet: `Mobile budgeting application featuring induvidual user accounts with multiple budget sheets, interface 
        customization and more`,
        writing: {
          process: `Building many web applications with JavaScript has brought me to love the language. I have also come 
          to understand the quirks and shortcomings of the language. With this application, I wanted to build something 
          I could use in my daily life. Using TypeScript, I had the perfect opportunity to dive into something that would 
          also challenge my skills along the way. Learning about why it has become so popular so quickly inspired me to 
          learn everything about it.`,
          processSub: `As programmers, we strive to write better structured and organized code with less 
          bugs. React and TypeScript are a match made in heaven for that purpose, in my opinion. In very little time, 
          I realized how TypeScript expedites the building process and maintains a better structured code base. I also 
          learned a lot about how React works under the hood when learning about type assertions and generics. This is 
          something I feel is very important to know while developing in the React framework Building. This app has 
          fueled my passion to keep learning and progressing my programmatic skills.`,
          conclusion: [
            'Learned TypeScript fundementals ( Interfaces, Type Assertion, Generics, Unions and Intersections )',
            'Expanded knowledge about how React works under the hood',
            'Progressed experience with debugging and error handling',
            'Improved skills working with and manipulating deeply nested object properties',
            'Became far more confident in writing code without reference',
          ],
        },
        stack: ['React with TypeScript', 'SASS'],
        tags: ['TypeScript', 'React', 'SASS', '2020'],
        thumb: bank.CASHFLOW_DATASHEET,
        slides: [
          bank.CASHFLOW_GREETING,
          bank.CASHFLOW_DATASHEET,
          bank.CASHFLOW_NEWBUDGET,
          bank.CASHFLOW_DELETE
        ],
        link: 'https://github.com/capriok/CashFlow',
        demo: 'https://cashflow.kylecaprio.dev',
        resources: [
          'https://www.typescriptlang.org/docs/home.html'
        ],
        route: '/cashflow'
      },
      {
        title: 'Keith Phillingane Construction',
        snippet: `Small business client’s contractor portfolio showcasing services offered, 
        area of expertise and highlighting past endeavors`,
        writing: {
          process: `Referred by a friend and previous client, a small contracting business owner reached out to me 
          to build his website. He previously used HomeAdvisor for marketing but wanted more customizability of the 
          content displayed to promote his business. He specified three must-have features: an eye-catching landing 
          page, list of services and a gallery to showcase previous work. He allowed me free-range creativity with 
          the rest. The content from his previous marketing page was used to populate the website I built for him.`,
          processSub: `Once I implemented features he requested, I started getting creative with the layout and user 
          experience. Some features I added include a testimonial section showcasing positive reviews and an inquiry 
          email server to allow clients the ability to reach out directly from within the site. I continue to honor 
          any requests for alterations and additions to the website. His appreciation and excitement about the 
          finished product motivated my drive to continue doing freelance work.`,
          conclusion: [
            'Improved UI/UX design skills',
            'Learned about and implemented a reusable email server with express',
            'Progressed customer service skills and ability to meet cuctomer expectations',
            'Acquired more possibility for referrals for new clients',
          ],
        },
        stack: ['React', 'SASS', 'Netlify Serveless Fucntions', 'Express.js', 'NodeMailer'],
        tags: ['JavaScript', 'React', 'SASS', '2020'],
        thumb: bank.KPCON_INTRO,
        slides: [
          bank.KPCON_SHOWCASE,
          bank.KPCON_INTRO,
          bank.KPCON_DETAIL,
          bank.KPCON_GALLERY,
          bank.KPCON_EMAIL,
          bank.KPCON_HTML,
          bank.KPCON_SERVER
        ],
        link: 'https://github.com/capriok/KPCon-Client',
        demo: 'https://www.keithphillingane.com/',
        resources: [
          'https://nodemailer.com/about/'
        ],
        route: '/kpconstruction'
      },
      {
        title: 'SQLifting',
        snippet: 'Personalized exercise and workout plan application with PostgreSQL backend',
        writing: {
          process: `When starting this project I had one goal in mind, to expand my abilities working with structured 
          databases. I chose PostgreSQL because of the tried and true user experience. Additionally, this project 
          allowed me to explore more services in the AWS cloud ecosystem. For this project, I utilized the Relational 
          Database Service (RDS) service.`,
          processSub: `To start, I designed a simple front-end interface to display the data I would be rendering. 
          Next, I spun up my express server, connected the database and started writing my first queries. Hitting 
          the server routes and seeing my queries run for the first time was empowering. I developed much more 
          appreciation for backend development. Throughout my work, I realized how to optimize my queries and 
          improve how I architect the database, which is the most important aspect to me. This app, originally 
          meant to practice querying with SQL, became one I use daily.`,
          conclusion: [
            'Developed skills working with a structured database',
            'Learned more about the AWS cloud ecosystem and services it offers',
            'Improved skills writing dynamic functions that do more with less code',
            'Became more fluent with data manipulation and working with complex objects',
          ],
        },
        stack: ['React', 'SASS', 'Netlify Serveless Fucntions', 'Express.js', 'AWS RDS', 'PostgreSQL'],
        tags: ['JavaScript', 'React', 'SQL', '2020'],
        thumb: bank.SQLIFTING_MANAGER,
        slides: [
          bank.SQLIFTING_SHOWCASE,
          bank.SQLIFTING_GREETING,
          bank.SQLIFTING_MANAGER,
          bank.SQLIFTING_EXBUILDER,
          bank.SQLIFTING_WOBUILDER,
          bank.SQLIFTING_INPROGRESS
        ],
        link: 'https://github.com/capriok/SQLifting',
        demo: 'https://sqlifting.kylecaprio.dev',
        demoAcc: 'Username: demo | Password: admin',
        resources: [
          'https://www.postgresql.org',
          'https://aws.amazon.com/rds'
        ],
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
          emphasizing vanilla JavaScript for-loops and array manipulation methods rather than React hook state setters.`,
          processSub: `I began by forming the logic to create a game tick and draw the grid. Next, I randomly assigned the 
          “food” and rendered the snake to the grid. This was fairly straight forward due to the amount of brainstorming 
          and planning I did before writing any code. At first, the snake was merely a color-filled grid tile followed by 
          other color-filled grid tiles acting as its tail. I knew this was not the end result, so I started planning how 
          to implement sprites into my game. This was the most difficult code I've had to write while working with 
          game-style code. But man, it was so fun and rewarding. It involved writing a function to check the snake’s head 
          position and which direction it was facing on the grid. Another function checked the tail pieces’ previous and 
          subsequent position and direction in order to render the correct sprite for a specific piece. The complexity of 
          rendering corner pieces revealed to be pretty difficult. While I spend time finishing this feature, the game may 
          look unfinished but continues to serve as a reminder of how far my skills have come.`,
          conclusion: [
            'Improved skills in writing iterative functions with vanilla JavaScript',
            'Learned a lot about game loops and what goes on behind the scenes',
            'Realization of my adept abilities writing complex JavaScript without using references',
          ],
        },
        stack: ['React', 'JavaScript', 'SASS'],
        tags: ['JavaScript', 'React', 'SASS', '2020'],
        thumb: bank.SNEKKEL_SPRITE,
        slides: [
          bank.SNEKKEL_SHOWCASE,
          bank.SNEKKEL_GREETING,
          bank.SNEKKEL_SPRITE,
          bank.SNEKKEL_DIFFICULTY
        ],
        link: 'https://github.com/capriok/Snekkel',
        demo: 'https://snekkel.kylecaprio.dev',
        resources: [],
        route: '/snekkel'
      },
      {
        title: 'Godspeed',
        snippet: '(NPM Package) - React UI Component and toolkit library',
        writing: {
          process: `With my earliest experiences working in React, I found component design to be the most intersting. 
          This led me to the utilization of Material-UI, which I love. Using the library accelerated the process of building 
          great looking components. However, when it came simple customization, which is important to me, the complexity 
          and amount of code needed was detrimental to the process.`,
          processSub: `Every developer knows styling components can be very 
          tedious, so I set out to make my own styled component library. I used Styled-Components as the foundation because 
          of how lightweight and functional the library is. After making my first buttons and inputs, I felt a very 
          high level of satisfaction. Next, I started the process of cleaning up code and creating a more professional base 
          for my soon to be NPM package. This quickly became, and remains to be, one of my favorite and most prized 
          endeavors to work on.`,
          conclusion: [
            'Expanded my knowledge about the inner workings of which NPM packages are made',
            'Developed a comfort with working inside complex enterprise tailored code bases',
            'Learned a lot about prop-types and error handling to esure correct use opf the package',
            'Learned Gatsby.js to make the documention website'
          ],
        },
        stack: ['Styled-Components', 'React', 'JavaScript', 'NPM', 'Gatsby', 'SASS'],
        tags: ['Gatsby', 'React', 'JavaScript', 'NPM', '2020'],
        thumb: bank.GODSPEED_HOME,
        slides: [
          bank.GODSPEED_SHOWCASE,
          bank.GODSPEED_HOME,
          bank.GODSPEED_BUTTON,
          bank.GODSPEED_INPUT,
          bank.GODSPEED_MODAL,
        ],
        link: 'https://github.com/capriok/Godspeed-Docs',
        demo: 'https://godspeed.netlify.com',
        resources: [
          'https://www.styled-components.com',
          'https://www.npmjs.com'
        ],
        route: '/godspeed'
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
        stack: ['React', 'SASS', 'Netlify Serverless Functions', 'Express.js', 'MongoDB'],
        tags: ['JavaScript', 'React', 'SASS', 'MongoDB', '2020'],
        thumb: bank.DISARRAY_START,
        slides: [
          bank.DISARRAY_SHOWCASE,
          bank.DISARRAY_GREETING,
          bank.DISARRAY_START,
          bank.DISARRAY_SOLVED,
          bank.DISARRAY_LEADERBOARD,
          bank.DISARRAY_LOGIC
        ],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://disarray.kylecaprio.dev',
        resources: [],
        route: '/disarray'
      },
      {
        title: 'Portfolio',
        snippet: 'Version One of my sofware developer portfolio',
        writing: {
          process: `The main goal was to create a space for people to visually see my skills and experience clearly. 
          I strongly believe showcasing personal projects and professional endeavors is key for any software developer. 
          After building the website structure, it came time to reflect on myself and what I've learned and accomplished 
          over the years. This portfolio is something I hold dear to my heart as it is the forefront of what will land me 
          my first job as a developer and change my life forever. This is who I am and what I love doing, take a look.`,
          conclusion: [],
        },
        stack: ['React', 'JavaScript', 'SASS', 'Netlify Serverless Functions', 'Express.js', 'NodeMailer'],
        tags: ['JavaScript', 'React', 'SASS', '2020'],
        thumb: bank.PORTFOLIO_HOME,
        slides: [
          bank.PORTFOLIO_SHOWCASE,
          bank.PORTFOLIO_HOME,
          bank.PORTFOLIO_ABOUT,
          bank.PORTFOLIO_PROJECTS,
          bank.PORTFOLIO_PROJECT,
          bank.PORTFOLIO_RESUME
        ],
        link: 'https://github.com/capriok/DisArray',
        demo: 'https://kylecaprio.dev',
        resources: ['https://nodemailer.com/about/'],
        route: '/portfolio'
      },
      {
        title: 'NeetChat',
        snippet: `Harnessing the power of socket.io to create a chatroom application. Fully functional with 
        induvidual rooms, typing alerts and private messages.`,
        writing: {
          process: `This was one of the first complex collaborative projects I have done, two main contributors being 
          Jordan Riley and Hunter Foulk. We had a vision in mind to make a modern remake of an old school styled chat 
          room application. Socket.io and Express in Node were the foundation of this application. Learning about web 
          sockets was extremely intriguing to me and taught me a lot about how countless other web applications work.`,
          processSub: `The most difficult feature was the implementation of private messaging. After long sessions of 
          brainstorming, discussing and planning we realized quite a few key foundations of code needed to be rewritten. 
          We pushed through, and were very thankful we did, because the end result of this project and the chemistry 
          built with eachother was something to be very proud of.`,
          conclusion: [
            'Developed a proficient understanding of web sockets and server based applications',
            'Progressed my teamwork skills working in professional-style environments',
            'Stronger comprehension of server code and advanced web applications',
          ],
        },
        stack: ['React', 'JavaScript', 'SASS', 'Netlify Serverless Functions', 'Express.js', 'Socket.io'],
        tags: ['JavaScript', 'Socket.io', 'React', 'SASS', '2019'],
        thumb: bank.NEETCHAT_HOME,
        slides: [
          bank.NEETCHAT_HOME,
          bank.NEETCHAT_CHAT
        ],
        link: 'https://github.com/hunterfoulk/Neet-Chat',
        demo: 'https://github.com/hunterfoulk/Neet-Chat',
        resources: [
          'https://socket.io'
        ],
        route: '/neet-chat'
      },
      {
        title: 'MyTube Music',
        snippet: 'Youtube Data API consumed to create a client-sided music streaming application wrapped in Electron',
        writing: {
          process: `I had a vision to develop a music streaming application inspired by YouTube Music. This being 
          the most complex endeavor of mine I knew the importance of keeping a clean code base. The Youtube Data API 
          is the foundation of the application. Core functionality consisted of user authentication, which led to 
          managing complex user objects. The amount of user data started becoming 
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
        stack: ['React', 'JavaScript', 'CSS', 'Electron', 'Netlify Serverless Functions', 'Express.js', 'Youtube Data API v3'],
        tags: ['JavaScript', 'React', 'Electron', 'CSS', '2019'],
        thumb: bank.MTMUSIC_PLAYER,
        slides: [
          bank.MTMUSIC_SHOWCASE,
          bank.MTMUSIC_GOOGLE,
          bank.MTMUSIC_PLAYER,
          bank.MTMUSIC_PLAYLISTS
        ],
        link: 'https://github.com/capriok/MyTube',
        demo: 'https://mytube-music.kylecaprio.dev',
        resources: [
          'https://developers.google.com/youtube/v3'
        ],
        route: '/mytube-music'
      },
      {
        title: 'Arte Bella Engraving',
        snippet: `Small business client’s single page website to showcase the company mission statement, services 
        offered and previous work.`,
        writing: {
          process: `The client's desires consisted of two main objectives: simplicity and accessibility. First, I 
          created the foundation, a simple single page website that is easily navigable. The next process was to 
          optimize the website to be fully responsive for any device and or screen size. I found that using React 
          was perfect for this application. Designing the skeleton with only filler content to work with, until 
          the client provided their own, allowed me to create a structure that was extremely dynamic and versatile.
           When the content was supplied, I thanked myself for creating such an adaptable architecture.`,
          conclusion: [
            'Built time management, self-assurance and negotiation skills',
            'Learned about domain management, web hosting and application deployment',
            'Crafted fully responsive web design ( markup, styling, querying )',
            'Improved React conditional component rendering',
          ],
        },
        stack: ['React', 'JavaScript', 'SASS', 'Netlify Serveless Fucntions', 'Express.js', 'NodeMailer'],
        tags: ['JavaScript', 'React', 'SASS', '2019'],
        thumb: bank.ARTE_BELLA_HOME,
        slides: [
          bank.ARTE_BELLA_SHOWCASE,
          bank.ARTE_BELLA_HOME,
          bank.ARTE_BELLA_HOME,
          bank.ARTE_BELLA_HOME
        ],
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
          During the development process, I greatly improved my JavaScript and Web Development skills. Teaching 
          myself React was the big challenge of this project. My lack of knowledge about state management and 
          lifecycles quickly changed as I devoted myself to this learning framework. I fell in love with React and 
          have been using it exclusively ever since.`,
          conclusion: [
            'Learned React from the ground up',
            'Developed knowledge about state management, lifecycles, and the virtual DOM',
            'Improved my skills in dealing with HTTP request methods',
          ],
        },
        stack: ['React', 'JavaScript', 'Electron', 'CSS', 'NewsAPI'],
        tags: ['JavaScript', 'React', 'Electron', 'CSS', '2018'],
        thumb: bank.TOOKFEED_HOME,
        slides: [
          bank.TOOKFEED_SHOWCASE,
          bank.TOOKFEED_HOME,
          bank.TOOKFEED_REGISTER,
          bank.TOOKFEED_OPTIONS,
          bank.TOOKFEED_PROFILE,
          bank.TOOKFEED_SERVER
        ],
        link: 'https://github.com/capriok/TookFeed',
        demo: 'https://tookfeed.kylecaprio.dev',
        resources: [
          'https://newsapi.org',
          'https://www.electronjs.org'
        ],
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
        stack: ['HTML', 'CSS', 'Jquery', 'Tumblr Theme Editor'],
        tags: ['HTML', 'CSS', 'Jquery', '2014'],
        thumb: bank.THEMESFK_HOME,
        slides: [
          bank.THEMESFK_HOME,
          bank.THEMESFK_PREV1,
          bank.THEMESFK_PREV2,
          bank.THEMESFK_PREV3,
          bank.THEMESFK_CODE
        ],
        link: 'https://themesfromkyle.tumblr.com',
        demo: 'https://themesfromkyle.tumblr.com',
        resources: [
          'https://www.jquery.com'
        ],
        route: '/theme-template-distribution'
      }
    ],
    blogs: [
      {
        title: 'Introduction to database relationships',
        date: '07-17-2020',
        category: 'React',
        body: <ReactMarkdown className="blogmd" source={blog.blogOne} />,
        route: '/blogone',
      },
      {
        title: 'Getting started with PostgreSQL',
        date: '07-14-2020',
        category: 'PostgreSQL',
        body: <ReactMarkdown className="blogmd" source={blog.blogTwo} />,
        route: '/blogtwo',
      },
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
