import type { MetaFunction } from "@remix-run/node";
import styleReset from "~/styles/reset.css?url";
import styleMain from "~/styles/main.scss?url";
import { useEffect, useState, useRef} from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Counter from "~/components/Counter"
import RunAwayButton from "~/components/RunAwayButton"
import MyCodeComponent from "~/components/MyCodeComponent"
import ReactDomServer from 'react-dom/server';
import reactToString from 'react-to-string';

const Index = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  // Rendering the component's JSX.
  return (
    <div id="root">
      {/* Link component to scroll to "test1" element with specified properties */}
      

      {/* Other Link and Button components for navigation, each with their unique properties and targets */}
      {/* ... */}

      {/* Element components that act as scroll targets */}
      
        <MainSlide handleSetActive={handleSetActive} />
        <SecondSlide handleSetActive={handleSetActive} />
        <ThirdSlide handleSetActive={handleSetActive} />
        <FourthSlide handleSetActive={handleSetActive} />
        <FifthSlide handleSetActive={handleSetActive} />
        <SixthSlide handleSetActive={handleSetActive} />
        <SeventhSlide handleSetActive={handleSetActive} />
        <EighthSlide handleSetActive={handleSetActive} />
        <NinthSlide handleSetActive={handleSetActive} />
        <TenthSlide handleSetActive={handleSetActive} />
        <EleventhSlide handleSetActive={handleSetActive} />
      {/* <div id="anchor" className="element">
        test 6 (anchor)
      </div> */}
{/* 
      Links to elements inside a specific container
      <Link to="firstInsideContainer" containerId="containerElement">
        Go to first element inside container
      </Link>
      <Link to="secondInsideContainer" containerId="containerElement">
        Go to second element inside container
      </Link> */}

      {/* Container with elements inside */}
      {/* <div className="element" id="containerElement">
        <Element name="firstInsideContainer">
          first element inside container
        </Element>
        <Element name="secondInsideContainer">
          second element inside container
        </Element>
      </div> */}

      {/* Anchors to trigger scroll actions */}
      {/* <a onClick={scrollToTop}>To the top!</a>
      <br />
      <a onClick={scrollToBottom}>To the bottom!</a>
      <br />
      <a onClick={scrollTo}>Scroll to 100px from the top</a>
      <br />
      <a onClick={scrollMore}>Scroll 100px more from the current position!</a> */}
    </div>
  );
};

export default Index;

export const MainSlide = ({handleSetActive}) => {
  const [titleActive, setTitleActive] = useState();
  setTimeout(() => setTitleActive(true), 800);
  return (
    <Element name="first-slide" className="first-slide">
        {/* <h1 className="main-page__title">Tervetuloa Remixiin</h1> */}
          <h2 className={`main-slide__title ${titleActive ? 'active' : ''}`}>
            <span>R</span>
            <span>E</span>
            <span>M</span>
            <span>I</span>
            <span>X</span>
          </h2>
        {/* <div className="main-page__img">
          <img src="/public/img/remix-logo.png" alt="" />
        </div> */}
        <Link 
          to="second-slide"
          className="round-button"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
      </Element>
  );
}

export const SecondSlide = ({handleSetActive}) => {
  const items = ['1', '2', '3', '4', '5'];
  const [activeIndex, setActiveIndex] = useState();
  const [countdownComplete, setCountdownComplete] = useState(false);


  const [ hideQuestion, setHideQuestion ] = useState(false); //show question
  const [ hideCount, setHideCount ] = useState(false)
  const [ hidePay, setHidePay ] = useState(false)
  const [ hideAnswer, setHideAnswer ] = useState(false)

  const questionHandler = () => {
    setHideQuestion(true); //hide question
    setCountdownComplete(false);
    setHideCount(true)
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => {
        if (prevIndex === 5) {
          clearInterval(intervalId); // Stop the interval if activeIndex reaches 5
          setCountdownComplete(true);
          setHideCount(false);
          setHidePay(true); // Set hidePay to true when activeIndex is 5
          return prevIndex; // Return the same index
        } else {
          return prevIndex + 1; // Increment index if it's not 5 yet
        }
      });
    }, 1000);
    setTimeout(() => {
      setActiveIndex(0);
    }, 300);
    return () => clearInterval(intervalId);
  }

  return (
    <Element name="second-slide" className={`second-slide ${hidePay && 'pay'}`}>
      
      {/* <div className={`second-slide__answer ${!hideQuestion ? 'hidden' : ''}`}>
        <div className="second-slide__img">
          <img src="/public/img/pay-method.png" alt="" />
        </div>
      </div> */}
      <h2 className={`second-slide__title ${hidePay && 'pay'}`}>
        <span>
          {!hideQuestion && 'Mitä tämä on?'}
          {(hideQuestion && hideCount) && 'On the count of five...'}
          {(hideQuestion && hideCount && hidePay ) && 'Maksa 100€, kiitos'}
        </span>
      </h2>
      <div className="second-slide__wrapper">
        {/* question */}
        {!hideQuestion && (
          <div className="second-slide__question">
            {/* <p>Kyllä, se yksi uusi framework</p> */}
            <div className="second-slide__img">
              <img src="/public/img/pokemon.webp" alt="" />
            </div>
        </div>
        )}
        {/* answer */}
        {hideCount && (
          <div className="second-slide__count" >
            {items.map((item, index) => (
              <div
                key={index}
                className={`second-slide__number ${index === activeIndex ? 'open' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        {/* pay me */}
        {hidePay && (
          <div className="second-slide__pay">
            <div className="second-slide__pay-img">
              <img src="/public/img/pay-method.png" alt="" />
            </div>
            <Link 
              className="pay-later-button"
              to="third-slide"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={handleSetActive}
            >Maksan myöhemmin</Link>
            {/* <button className="pay-later-button">Maksan myöhemmin</button> */}
          </div>
        )}
        
      </div>
      {!hideQuestion && 
        (<button onClick={() => questionHandler()} className="button question">{!hideQuestion ? 'Haluan tietää!' : 'Lopeta esittely'}</button>) 
      }
      
      
      
      {/* //maksan myöhemmin Lopeta esittely*/}
     
      </Element>
  )
}

export const ThirdSlide = ({handleSetActive}) => {
  return (
    <Element name="third-slide" className="third-slide">
        {/* <div className="third-slide__logo">
          <img src="/public/img/remix-logo.png" alt="" />
        </div> */}
        <h2 className="third-slide__title">Aivan oikein, se on another JS framework!</h2>
        <div className="third-slide__img-no">
          <img src="/public/img/no-meme.gif" alt="" />
        </div>
        <Link 
            className="third-slide__button"
            to="fourth-slide"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={handleSetActive}
            >Lopeta esittely
          </Link>
    </Element>
  )
}


export const FourthSlide = ({handleSetActive}) => {
  const [startCount, setStartCount] = useState(false);
  const handleStart = () => {
    setStartCount(!startCount);
  };
  return (
    <Element name="fourth-slide" className="fourth-slide">
      <div onClick={() => handleStart()} className="fourth-slide__img">
        <img src="/public/img/js-framework-0.png" alt="" />
      </div>        
      <div className="counters">
        <Counter 
          text={"Joka päivä vapautettu JS framework määrä"}
          initialCount={0} endCount={150} started={startCount}/>
        <Counter 
          text={"Päivämäärä ilman vitsejä siitä"}
          initialCount={0} endCount={0} started={startCount}/>
        <Counter 
          text={"Kuinka nopeasti vanhentunut kehys on (päivissä)"}
          initialCount={0} endCount={90} started={startCount}/>
     </div>
        <Link 
          to="fifth-slide"
          activeClass="active"
          className="round-button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
    </Element>
  )
}

const FifthSlide = ({handleSetActive}) => {
  const [ title, setTitle ] = useState(false)
  const [ text, setText ] = useState(false)

  const handleTranslate = () => {
    setTitle(!title)
    setText(!text)
  }
  return (
    <Element name="fifth-slide" className="fifth-slide">
      <button className="fifth-slide__button translate-button " onClick={() => handleTranslate()}>{(!title && !text) ? "English" : "Finnish"}</button>
      <div className="fifth-slide__img">
        <img src="/public/img/remix-logo.png" alt="" />
      </div>
      <h2 className="fifth-slide__title">
        {!title ?
          "Keskittyy verkkostandardeihin ja moderniin verkkosovellukseen UX"
          :
          "Focused on web standards and modern web app UX"
        }
      </h2>
      
      <div className="fifth-slide__text">
        {!text ?
          "Remix on täyspinoinen verkkokehys, jonka avulla voit keskittyä käyttöliittymään ja työskennellä takaisin verkkostandardien läpi tarjotaksesi nopean, sulavan ja joustavan käyttökokemuksen." 
          : 
          "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience"
        }
      </div>
      <Link 
          to="sixth-slide"
          activeClass="active"
          className="round-button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
    </Element>
  )
}

const SixthSlide = ({handleSetActive}) => {
  const [ text, setText ] = useState(false)
  const handleTranslate = () => {
    setText(!text)
  }
  return (
    <Element name="sixth-slide" className="sixth-slide">
      <button className="sixth-slide__button translate-button " onClick={() => handleTranslate()}>{!text ? "English" : "Finnish"}</button>
      <div className="sixth-slide__text">
      <span>{text ? "Most web apps fetch inside of components, creating request waterfalls, slower loads, and jank." 
            : "Useimmat verkkosovellukset hakevat komponenttien sisällä luoden pyyntövesiputouksia, hitaampia latauksia ja roskaa."}
      </span>
      <span>{text ? "Remix loads data in parallel on the server and sends a fully formed HTML document. Way faster, jank free." 
            : "Remix lataa tietoja rinnakkain palvelimelle ja lähettää täysin muodostetun HTML-dokumentin. Paljon nopeampi, ilman roskaa."}
      </span>
      </div>
      <Link 
          to="seventh-slide"
          activeClass="active"
          className="round-button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
    </Element>
  )
}

const SeventhSlide = ({handleSetActive}) => {
  return (
    <Element name="seventh-slide" className="seventh-slide">
      <div className="seventh-slide__img">
        <img src="/public/img/lair.jpg" alt="" />
      </div>
      <div className="seventh-slide__title">ilman roskaa...</div>
      <div className="seventh-slide__subtitle">Minä uskoin...</div>
      <div className="seventh-slide__text">
        <span>Yleensä koodissani on aina paljon roskaa...</span>
        <span>Mutta toivon, että koodisi näyttää paljon puhtaammalta ja paremmalta! </span>

      </div>
      <Link 
          to="eighth-slide"
          activeClass="active"
          className="round-button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
    </Element>
  )
}

const EighthSlide = ({handleSetActive}) => {
  return (
    <Element name="eighth-slide" className="eighth-slide">
      <div className="eighth-slide__title">:)</div>
      <div className="eighth-slide__text">
        <span>Your websites run into problems, but with Remix they don’t need to be refreshed. Error handling is hard to remember and hard to do. That’s why it’s built in.</span>
        <span>Remix handles errors while Server Rendering. Errors while Client Rendering. Even errors in your server side data handling.</span>
      </div>
      <Link 
          to="ninth-slide"
          activeClass="active"
          className="eighth-slide__button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
        </Link>
    </Element>
  )
}

const NinthSlide = ({handleSetActive}) => {

  return (
    <Element name="ninth-slide" className="ninth-slide">
      <div className="ninth-slide__img">
        <img src="/public/img/19fq7c002w021.png" alt="" />
      </div>
      <div className="ninth-slide__title">Miten aloittaa?</div>
      <div className="ninth-slide__code">npx <span>create-remix@latest</span></div>
      <Link 
          to="tenth-slide"
          activeClass="active"
          className="round-button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <svg viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </Link>
      
    </Element>
  )
}
const TenthSlide = ({handleSetActive}) => {
  return (
    <Element name="tenth-slide" className="tenth-slide">
      <div className="tenth-slide__img">
        <img src="/public/img/19.webp" alt="" />
      </div>
      <RunAwayButton />
      <Link 
          to="eleventh-slide"
          activeClass="active"
          className="tenth-slide__button"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          Hyväksyn vain nähdäkseni kissan kuvan
        </Link>
    </Element>
  )
}
const EleventhSlide = ({handleSetActive}) => {
  return (
    <Element name="eleventh-slide" className="eleventh-slide">
      <div className="eleventh-slide__img">
        <img src="/public/img/kissa.jpg" alt="" />
      </div>
      <div className="eleventh-slide__title">Kiitos! ✨</div>
    </Element>
  )
}

export const meta: MetaFunction = () => {
  return [
    { title: "Remix" },
    { name: "description", content: "Welcome to Remix" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styleReset },
  { rel: "stylesheet", href: styleMain },
];
