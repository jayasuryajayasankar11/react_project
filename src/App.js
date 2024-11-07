
import './App.css';
//hooks
import { useState, useRef, useEffect } from 'react';
//icons
import { AiFillHtml5, AiFillPlayCircle, AiFillUnlock } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaGift, FaPython, FaJava, FaFileExcel, FaDatabase, FaRProject, FaMapMarkedAlt, FaFileDownload } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsArrowUpCircleFill } from 'react-icons/bs';

//components
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal';
import Title from './components/Title';
import headerImg from './img/header-img.png';
//examples
import UseStateHooksEx from './Examples/UseStateHooksEx';
import Card from './components/Card';
import CategoriesCard from './components/page-components/CategoriesCard';
import Mylist from './Examples/Mylist';
import Offerscard from './components/page-components/Offerscard';
import TestimonialCard from './components/page-components/TestimonialCard';
import TestimonialsList from './components/List/TestimonialsList';
import UseEffectHooks from './Examples/UseEffectHooks';
import UseRefEx from './Examples/UseRefEx';
import LoginForm from './components/page-components/LoginForm';
import RegistrationForm from './components/page-components/RegistrationForm';
import ThrowError from './Examples/ThrowError';




function App() {
  // state
  // modal State
  const [showCourseModel, setShowCourseModel] = useState(false);
  // Offer State
  const [showOffers, setShowOffers] = useState(false);
  // Scroll state
  const [goToTopArrow, setGoToTopArrow] = useState(false);

  // Reference
  const offersRef = useRef();
  const topRef = useRef();
  // Form State
  const [forms, setForms] = useState({
    LoginForm: false,
    RegistrationForm: false,
  });

  const [login, setLogin] = useState(false)

  // Handlers
  // Modal Handlers
  function handleStartLearningEvent() {
    setShowCourseModel(true);
  }

  function handleModalCancleEvent() {
    setShowCourseModel(false);
  }

  // offers handler
  const handleShowOffers = () => {
    showOffers === false ? setShowOffers(true) : setShowOffers(false);
  }

  const handlescrollToOffers = () => {

    offersRef.current.scrollIntoView({ behavior: "smooth" })
  }

  // form handle
  const handleShowLoginForm = () => {
    setForms({ RegistrationForm : false, LoginForm: true })

  }

  const handleCancelLoginForm = () => {
    setForms({ ...forms, LoginForm: false })

  }

  function handleLoginFormValidation() {
    setForms({ ...forms, LoginForm: false });
    setShowCourseModel(false);
    setLogin(true);
  }

  // registration form handle

  function handleShowRegistrationForm() {
    setForms({ LoginForm: false, RegistrationForm: true });
  }
  const handleCancelregistrationForm = () => {
    setForms({ ...forms, RegistrationForm: false })

  }

  // offers List

  const offerList = [

    {
      icon_1: <AiFillUnlock className='i' size={"2em"} />,
      title: "Tons of Content",
      text: "We have library of over 100,000 videos that will help you to learn code."
    },
    {
      icon_1: <FaMapMarkedAlt className='i' size={"2em"} />,
      title: "Guided Course",
      text: "We guide you with series of videos that will help you to learn coad."
    },
    {
      icon_1: <FaFileDownload className='i' size={"2em"} />,
      title: "Project Fills Download",
      text: "File from project are available for all of our course to be downloaded."
    }
  ]

  const moreOfferList = [
    {
      icon_1: <FaGift className='i' size={"2em"} />,
      title: "Exclusive Features",
      text: "Enhance your coding experience with new and exclusive features like AutoPlay, Theming, Progress Tracking, Courses and Quizzes (coming soon!)"
    },
    {
      icon_1: <TfiHeadphoneAlt className='i' size={"2em"} />,
      title: "Excellent Support",
      text: "We have excellent support for all of our users. We have a team of dedicated support staff that are ready to help you with any questions you may have."
    },
    {
      icon_1: <FaFileDownload className='i' size={"2em"} />,
      title: "Project Fills Download",
      text: "File from project are available for all of our course to be downloaded  "
    }
  ]

  // Scroll handlers
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
  }

  const handleGoToTop = () => {
    topRef.current.scrollIntoView();
  }

  // Effects

  // Scroll Effect

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [])

  return (
    <div >
      <div className="container container-lg" ref={topRef}>

        {/* Header */}
        <Header>
          <div className="header header-content mb-2">
            <Title text={"Learn to code by Watching others"}
              classes={'header-title fs-xxl mb-3'}
            />
            <p className='header-text mb-3'>See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>

            <div className="header-btn">
              <Button classes={"btn-primary text-light"} type={"button"}
                text={"Try it free 30 days"}
                onClick={!login ? handleStartLearningEvent : () => window.alert("You are logged in")}
              />
              <Button classes={"btn-secondary"} type={"button"} text={"Learn More"} onClick={handlescrollToOffers} />


            </div>
            <img src={headerImg} alt="header-img" className='header-img' />
          </div>

        </Header>

        {/* main */}

        <main>
          {/* CATEGORIES */}

          <section className='categories my-4'>
            <Title text={"Top categories"} classes={"subtitle text-center"} />
            <div className="categories-container d-flex">
              <CategoriesCard title={"Web Development"}
                icon_1={<AiFillHtml5 size={"1em"} className="icon html5" />}
                icon_2={<DiCss3Full size={"1em"} className='icon css3' />}
                icon_3={<BiLogoJavascript size={"1em"} className='icon js' />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent} >
                <span className="fs-lg">Learn how to build web apps with:</span>
                <ul className="mt-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </CategoriesCard>
              <CategoriesCard title={"Mobile Development"}
                icon_1={<FaReact size={"1em"} className='icon react' />}
                icon_2={<BiLogoJavascript size={"1em"} className='icon js' />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent}>
                <span className="fs-lg">Learn how to build web apps with:</span>
                <ul className="mt-1">
                  <li>React Native</li>
                  <li>javaScript</li>
                  <li>Expo</li>
                </ul>
              </CategoriesCard>
              <CategoriesCard title={"Data Science"}
                icon_1={<FaPython size={"1em"} className='icon python' />}
                icon_2={<FaRProject size={"1em"} className='icon r-project' />}
                icon_3={<FaJava size={"1em"} className='icon java' />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent}>
                <span className="fs-lg">Learn how to analyze data with:</span>
                <ul className="mt-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>Java</li>
                </ul>
              </CategoriesCard>
              <CategoriesCard title={"Business"}
                icon_1={<FaFileExcel size={"1em"} className='icon file-excel' />}
                icon_2={<HiUserGroup size={"1em"} className='icon people-group' />}
                icon_3={<FaDatabase size={"1em"} className='icon database' />}
                btnIcon={<AiFillPlayCircle size={"2em"} />}
                startLearningEvent={handleStartLearningEvent}>
                <span className="fs-lg">Learn how to analyze data.</span>
                <ul className="mt-1">
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>SQL</li>
                </ul>
              </CategoriesCard>


            </div>
          </section>
          {/* offers */}
          <section ref={offersRef} className="offers container container-md p-2">
            <Title classes={"subtitle text-center mb-4"}
              text={"Here's what you get"} />
            <div className="offers-container" >
              {/* <Offerscard icon_1={<AiFillUnlock className='i' size={"2em"}/>}
              title={"Tons of content"}
              text={"We have library of over 100,000 videos that will help you to learn code"}/> */}

              {offerList.map((offer, index) => (
                <Offerscard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}>

                </Offerscard>
              ))}
            </div>

            {showOffers && (<div className="offers-container fadeIn" >
              {moreOfferList.map((offer, index) => (
                <Offerscard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}>

                </Offerscard>
              ))}
            </div>)}
            <a onClick={handleShowOffers} style={{ cursor: "pointer", textDecoration: "underline" }}>
              <h4 className="text-center text-primary mt-2">
                {showOffers ? "less" : "more..."}
              </h4>
            </a>
          </section>
          {/* Testimonial */}
          <section className="testimonials my-4">
            <Title
              classes={"subtitle text-center mb-4"}
              text={"What our users say!"} />
            <div className="testimonials-container">
              <TestimonialsList />
              {/* <TestimonialCard/> */}
            </div>
          </section>

        </main>

      </div>
      {/* Utilities */}
      {/**Modal */}
      {showCourseModel && <Modal title={"Access denied"}
        text={"Please login in order to get Access this content"}
        cancelEvent={handleModalCancleEvent}
        loginEvent={!login && handleShowLoginForm}
      />}
      {/* Go to top arrow */}
      {goToTopArrow && <BsArrowUpCircleFill className='goToTopArrow' onClick={handleGoToTop} />}

      {/* Forms */}

      {/* Login Form */}
      {forms.LoginForm && (
        <div className="modal">
          <LoginForm
            handleCancel={handleCancelLoginForm}
            showRegister={handleShowRegistrationForm}
            loggedIn={handleLoginFormValidation}
          />
        </div>)}

      {/* Registration Form */}
      {forms.RegistrationForm && (
        <div className="modal">
          <RegistrationForm 
           handleCancel={handleCancelregistrationForm}
           showLogin={handleShowLoginForm}
          />
        </div>)}
      {/* {Examples} */}
      {/* <UseStateHooksEx/> */}
      {/* <Mylist/> */}
      {/* <UseEffectHooks/> */}
      {/* <UseRefEx/> */}
      {/* <ThrowError/> */}
    </div>
  );
}

export default App;
