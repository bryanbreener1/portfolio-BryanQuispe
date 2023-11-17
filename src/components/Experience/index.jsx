import React, { useContext } from 'react'
import styled from 'styled-components'
import Timeline from  '@mui/lab/Timeline'
import TimelineItem from  '@mui/lab/TimelineItem'
import TimelineSeparator from  '@mui/lab/TimelineSeparator'
import TimelineConnector from  '@mui/lab/TimelineConnector'
import TimelineContent from  '@mui/lab/TimelineContent'
import TimelineDot from  '@mui/lab/TimelineDot'
import ExperienceCard from './ExperienceCard'
import { languageContext } from '../../utils/LanguageProvider';

const Experience = () => {

  const {language} = useContext(languageContext)

  return (
    <Container id='experience'>
        <Wrapper>
            <Title>{language.experiencesText.title}</Title>
            <Description>{language.experiencesText.desc}</Description>
            <TimeLineSection>
              <Timeline>
                {language.experiences.map((experience, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot variant='outlined' color='secondary'/>
                      {index !== language.experiences.length -1 && <TimelineConnector/>}
                    </TimelineSeparator>
                    <TimelineContent sx={{py:"12px", px:2}}>
                      <ExperienceCard experience={experience}/>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </TimeLineSection>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1;
  padding: 40px 0 80px 0;

  @media (max-width:960px) {
    padding:0;
  }
`
const Wrapper = styled.div`
  max-width:1100px;
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  gap:15px;
  margin-bottom: 80px;
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
const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`



export default Experience