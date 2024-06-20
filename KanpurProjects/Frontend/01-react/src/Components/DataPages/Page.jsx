import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";
import {Age,Weight} from "./Info";
import {Status} from  "./Info";
import {Skills} from "./Info";

const Page = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  
  const main_tech="React.js";
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted=techs.map((tech, index) => (
    <li key={index}>{tech}</li>
  ))

  let currentYear = 2024
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75


  const cYear = 2020
  const bYear = 2015
  const dAge = cYear - bYear
  let status = dAge >= 18

  return (
    <>
      <div className="app">
        {/* Direct Data Pass */}
        <Header
          welcome="Welcome to React Development"
          title="Getting Started React"
          subtitle="JavaScript Library"
          author={{ firstName: "Debasish", lastName: "Sahoo" }}
          current_date={`${date}/${month}/${year} ${hours}:${minutes}`}
        />
        {/* indirect Data Pass */}
        <Main
          main_tech={main_tech}
          techsFormatted={techsFormatted}
        />
        <Footer copyRight="Copyright 2024" />
        <Age age={age}/>
        <Weight weight={gravity*mass}/>
        <Status status={status}/>
        <Skills skills = {['Html','CSS','javaScript']} />
      </div>
    </>
  );
};

export default Page;

