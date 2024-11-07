// icons
import { AiFillUnlock } from "react-icons/ai";
import {  FaGift, FaMapMarkedAlt, FaFileDownload } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";



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

  export {offerList , moreOfferList};