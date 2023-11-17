import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { languageContext } from "../../utils/LanguageProvider";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const { language } = useContext(languageContext);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{language.projectsText.title}</Title>
        <Description>{language.projectsText.desc}</Description>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              {language.projectsText.all}
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("all")}>
              {language.projectsText.all}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "front-end" ? (
            <ToggleButton
              active
              value="front-end"
              onClick={() => setToggle("front-end")}
            >
              Front-end
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("front-end")}>
              Front-end
            </ToggleButton>
          )}
          <Divider />
          {toggle === "back-end" ? (
            <ToggleButton
              active
              value="back-end"
              onClick={() => setToggle("back-end")}
            >
              Back-end
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("back-end")}>
              Back-end
            </ToggleButton>
          )}
          {/* <Divider />
          {toggle === "full-stack" ? (
            <ToggleButton
              active
              value="full-stack"
              onClick={() => setToggle("full-stack")}
            >
              Full-stack
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("full-stack")}>
              Full-stack
            </ToggleButton>
          )} */}
        </ToggleGroup>
        <CardContainer>
          {
          toggle === "all" &&
            language.projectsList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          }
          {
          language.projectsList
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          }
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;
const Wrapper = styled.div`
  max-width: 1350px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px 0px 100px 0;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 480px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;
const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;

export default Projects;
