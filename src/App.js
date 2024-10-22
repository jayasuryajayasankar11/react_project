
import './App.css';
//hooks
import { useState } from 'react';
//components
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal';
import Title from './components/Title';
import headerImg from './img/header-img.png';
//examples
import UseStateHooksEx from './Examples/UseStateHooksEx';



function App() {

  const [showCourseModel, setShowCourseModel] = useState(false);
  function handleStartLearningEvent() {
    setShowCourseModel(true);
  }

  function handleModalCancleEvent() {
    setShowCourseModel(false);
  }


  return (
    <>
      <div className="container container-lg">
        {/**Modal */}
        {showCourseModel && <Modal title={"Access denied"}
          text={"Please login in order to get Access this content"}
          cancelEvent={handleModalCancleEvent}
        />}
        {/* Header */}
        <Header>
          <div className="header-content mb-2">
            <Title text={"Learn to code by Watching others"}
              classes={'header-title fs-xxl mb-3'}
            />
            <p className='header-text mb-3'>See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>

            <div className="header-btn">
              <Button classes={"btn-primary text-light"} type={"button"}
                text={"Try it free 30 days"}
                onClick={handleStartLearningEvent}
              />
              <Button classes={"btn-secondary"} type={"button"} text={"Learn More"} />


            </div>
            <img src={headerImg} alt="header-img" className='header-img' />
          </div>

        </Header>

        {/* main */}

        <main>
          {/* CATEGORIES */}

          <section className='categories my-4'>
            <Title text={"Top categories"} classes={"subtitle text-center"}/>
          </section>
        </main>
        {/* <UseStateHooksEx/> */}
      </div>
    </>
  );
}

export default App;
