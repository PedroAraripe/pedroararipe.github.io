import React, { useState } from "react";

import styled from "styled-components";
import { TitleSection } from "../styles";
import themesColors from "../../../common/constants/themesColors";
import getRandomOnArray from "../../../common/utils/getRandomOnArray";
import Dude from "../../../common/components/Dude";

const TabItem = styled.li`
  width: auto;
  
  padding: 0.5rem 0.8rem;

  font-size: 14px;
  
  cursor: pointer;

  color: ${(props) => (props.isCurrentTab ? props.themeColor : "white")};
  border-top: 2px solid ${(props) => (props.isCurrentTab ? props.themeColor : "#444")};

  @media (min-width: 768px) {
    border-top: none;
    border-left: 2px solid ${(props) => (props.isCurrentTab ? props.themeColor : "#444")};
  }
`;

const ListDescriptions = styled.ul`
  padding: 0;

  > * {
    margin-bottom: .8rem;
    font-size: .9rem;
    position: relative;
    padding-left: 18px;

    :before {
      margin-left: 15px;
      content: "▹ ";
      position: absolute;
      left: -15px;
      color: ${(props) => props.themeColor ?? "white"};
    }
  }
`;

const CompanyTheme = styled.div`

  > * {
    text-decoration: none;
    color: ${(props) => props.themeColor ?? "white"};
  }

  a:hover {
    color: ${(props) => props.themeColor ?? "white"};
  }
`;

const CurrentTab = styled.div`
 .tab-title {
   font-size: 1.1rem;
   margin-bottom: .5rem;
 }

 .tab-phase {
    margin-bottom: 1rem;

    font-size: 0.8rem;
 }
`;

function ExperienceSection() {
  const experiences = [
    {
      id: 0,
      company: {
        name: "NRE",
        url: "https://www.linkedin.com/company/nre-tecnologia/mycompany/",
      },
      title: "Front-End Junior",
      phase: "Feb 2022 - Present",
      descriptions: [
        "Creating landing pages with js, html, javascript for a diverse array of client",
        "Focus on performance and perfect detailed pages",
      ],
    },
    {
      id: 1,
      company: {
        name: "PC4",
        url: "https://www.linkedin.com/company/pc4combr/?originalSubdomain=br",
      },
      title: "Front-End Intern",
      phase: "Mar 2021 - Feb 2022",
      descriptions: [
        "Write clean, modern and maintainable code for a educational plataform",
        "Focus on development of features with Vue.js",
      ],
    },
  ];

  let [themeColor, setThemeColor] = useState([themesColors[2]]);
  let [currentTab, setCurrentTab] = useState(experiences[0]);

  return (
    <section className="row py-5">
      <div className="col-12 ">
        <TitleSection themeColor={themeColor} onClick={() => setThemeColor(getRandomOnArray(themesColors))}>experience</TitleSection>
      </div>
      <div className="col-md-8">
        <div className="row py-3 my-md-5">
          <ul className="d-flex d-md-block col-md-2">
            {experiences.map((experience) => (
              <TabItem
                themeColor={themeColor}
                key={experience.id}
                isCurrentTab={experience.id == currentTab.id}
                onClick={() => setCurrentTab(experience)}
              >
                {experience.company.name}
              </TabItem>
            ))}
          </ul>
          <div className="col-md-9">
            <CurrentTab className="">
              <div className="tab-title d-flex">
                <div className="job-title">
                  {currentTab.title}
                </div>
                &nbsp;
                <CompanyTheme
                  themeColor={themeColor}
                  className="d-flex align-items-center"
                >
                  @
                  <a href={currentTab.company.url} target="_blank" rel="noreferrer">
                    {currentTab.company.name}
                  </a>
                </CompanyTheme>
              </div>
              <div className="tab-phase">
                {currentTab.phase}
              </div>
              <ListDescriptions themeColor={themeColor}>
                {currentTab?.descriptions?.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ListDescriptions>
            </CurrentTab>
          </div>
        </div>
      </div>
      <div className="offset-md-1 col-md-3 d-flex justify-content-center align-items-center">
        <Dude className="anxious-boy" themeColor={themeColor} setThemeColor={setThemeColor} />
      </div>
    </section>
  );
}

export default ExperienceSection;
