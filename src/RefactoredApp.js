
import './App.css';
//hooks
import { useState, useRef, useEffect } from 'react';
//icons
import { BsArrowUpCircleFill } from 'react-icons/bs';

//components
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal';
import Title from './components/Title';


import TestimonialsList from './components/List/TestimonialsList';
import LoginForm from './components/page-components/LoginForm';
import RegistrationForm from './components/page-components/RegistrationForm';
import Categories from './components/section/Categories';
import Offers from './components/section/Offers';

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

  // Scroll Effect

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [])

  return (
    <div >
      <div className="container container-lg" ref={topRef}>

        {/* Header */}
        <Header
        login={login}
        handleStartLearningEvent={handleStartLearningEvent}
        handlescrollToOffers={handlescrollToOffers}
        >
        </Header>

        {/* main */}
        <main>
          {/* CATEGORIES */}  
          <Categories 
          login={login} 
          handleStartLearningEvent={handleStartLearningEvent}/>
          {/* offers */}
          <Offers 
          offersRef={offersRef}
          showOffers={showOffers}
          handleShowOffers={handleShowOffers}/>
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
    
    </div>
  );
}

export default App;
