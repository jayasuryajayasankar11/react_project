import React from 'react'
// components
import Title from '../Title'
// page components
import CategoriesCard from '../page-components/CategoriesCard'
//icons
import { AiFillHtml5, AiFillPlayCircle } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaPython, FaJava, FaFileExcel, FaDatabase, FaRProject } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export default function Categories(
    {login , handleStartLearningEvent,

}) {
  return (
    <section className='categories my-4'>
    <Title text={"Top categories"} classes={"subtitle text-center"} />
    <div className="categories-container d-flex">
      <CategoriesCard title={"Web Development"}
        icon_1={<AiFillHtml5 size={"1em"} className="icon html5" />}
        icon_2={<DiCss3Full size={"1em"} className='icon css3' />}
        icon_3={<BiLogoJavascript size={"1em"} className='icon js' />}
        btnIcon={<AiFillPlayCircle size={"2em"} />}
        startLearningEvent={!login && handleStartLearningEvent} >
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
        startLearningEvent={!login && handleStartLearningEvent}>
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
        startLearningEvent={!login && handleStartLearningEvent}>
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
        startLearningEvent={!login && handleStartLearningEvent}>
        <span className="fs-lg">Learn how to analyze data.</span>
        <ul className="mt-1">
          <li>Excel</li>
          <li>Power BI</li>
          <li>SQL</li>
        </ul>
      </CategoriesCard>


    </div>
  </section>
  )
}
