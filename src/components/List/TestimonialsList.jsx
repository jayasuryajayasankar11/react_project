import React, { useState, useEffect} from 'react'
// components
import TestimonialCard from '../page-components/TestimonialCard';

// Data
import testimonialData from '../../db/testimonial-list.json'
import Button from '../Button';
import ErrorBoundaries from '../Custom/Hooks/ErrorBoundaries';

export default function TestimonialsList() {

  // const [testimonials, setTestimonials] = useState(testimonialData);

  const [testimonials, setTestimonials] = useState(() => {
    return JSON.parse(localStorage.getItem('testimonialData'));
  });

  // Data State

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false)


  let parseData;

  const getLocalData = () => {
    setIsLoading(true);
    setHasError(false);

    // stimulate random error

    function getRandomInt() {
      let int = Math.floor(Math.random() * 4);
      console.log(int);

      return int;
    }
    setTimeout(() => {
      parseData = JSON.parse(localStorage.getItem("testimonialData"));
      // setData(parseData);

      // if(getRandomInt() <= 2){
      //   setHasError(true);  
      // } else {
      //   setData(parseData);
      // }

      getRandomInt() <= 1 ? setHasError(true) : setData(parseData);


      setIsLoading(false);
    }, 2000);
    console.log(data);

  }


  useEffect(() => {
    setTestimonials(testimonialData);
    localStorage.setItem("testimonialData", JSON.stringify
      (testimonialData)
    );

    const fetchData = async () => {
      try {
        setIsLoading(true);
        getLocalData();
      } catch (error) {
        // console.log(hasError);
        setHasError(error);
        setIsLoading(false);
      }
    };
    fetchData();


  }, [!data]);

  if (isLoading) {
    return <div className="alert alert-warning">Loading...</div>
  }

  // handle error

  if (hasError) {
    return <div className="alert alert-danger">
    <p className="mr-1">Something went Wrong </p>
    <Button text={"Try Again"} onClick={getLocalData}/>
    </div>
  }


  return (
    <>
      {!hasError && data && data.map((item) => (
        <TestimonialCard
        key={item.id}
        img={item.img}
        fullName={item.fullName}
        jobTitle={item.jobTitle}
        twitterHandle={item.twitterHandle}
        text={item.text}
        />
    ))}
      {/* <ErrorBoundaries hasError={hasError} handleError={getLocalData}>
        {data && data.map((item) => (
          <TestimonialCard>
            key={item.id}
            img={item.img}
            fullName={item.fullName}
            jobTitle={item.jobTitle}
            twitterHandle={item.twitterHandle}
            text={item.text}
           
          </TestimonialCard>
        ))}
 
      </ErrorBoundaries> */}
    </>
  );
}
