import React, { useContext } from 'react'
import styled from 'styled-components'
import { languageContext } from '../../utils/LanguageProvider'


const Skills = () => {
  const {language} = useContext(languageContext)

  return (
    <Container id='skills'>
      <Wrapper>
        <Title>{language.skillsText.skills}</Title>
        <Description>{language.skillsText.desc}</Description>
        <SkillsContainer>
          {
            language.skillList.map(skill => (
              <Skill key={skill.title}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {
                    skill.skills.map(item => (
                      <SkillItem key={item.name}>
                        <SkillImg src={item.image}/>
                        {item.name}
                      </SkillItem>
                    ))
                  }
                </SkillList>
              </Skill>
            ))
          }
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1;

`
const Wrapper = styled.div`
  max-width:1100px;
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  gap:15px;
`
const Title = styled.h2`
  font-size:40px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color:${({theme})=>theme.text_primary};

  @media (max-width:480px){
    font-size: 32px;
    margin-top: 12px;
  }
`
const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({theme}) => theme.text_secondary};
  
  @media(max-width:768px){
    font-size: 16px;
  }
`
const SkillsContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({theme})=>theme.card};
  border: 0.1px solid ${({theme})=>theme.border};
  border-radius: 16px;
  padding: 18px 36px;

 @media (max-width: 768px) {
  max-width: 400px;
  padding: 10px 36px;
 }
 @media (max-width: 500px) {
  max-width: 330px;
  padding: 10px 36px;
 }
`
const SkillTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme})=>theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`
const SkillList = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`
const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content:center;
  font-size: 16px;
  color: ${({theme})=>theme.text_primary+90};
  border-radius: 12px;
  border: 1px solid ${({theme})=>theme.text_primary+80};
  padding: 12px 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 8px;
  } 
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`
const SkillImg = styled.img`
  width:20px;
  height:20px;
`


export default Skills