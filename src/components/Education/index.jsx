import React, { useContext } from 'react'
import Timeline from  '@mui/lab/Timeline'
import TimelineItem from  '@mui/lab/TimelineItem'
import TimelineSeparator from  '@mui/lab/TimelineSeparator'
import TimelineConnector from  '@mui/lab/TimelineConnector'
import TimelineContent from  '@mui/lab/TimelineContent'
import TimelineDot from  '@mui/lab/TimelineDot'
import EducationCard from './EducationCard'
import styled from 'styled-components'
import { languageContext } from '../../utils/LanguageProvider';

const Education = () => {
  const {language} = useContext(languageContext)

  return (
    <Container id='education'>
      <Wrapper>
          <Title>{language.educationText.title}</Title>
          <Description>{language.educationText.desc}</Description>
          <TimeLineSection>
            <Timeline>
              {language.educationList.map((education, index) => (
                <TimelineItem key={index}>
                  <TimelineContent sx={{py:"12px", px:2}}>
                    <EducationCard education={education}/>
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot variant='outlined' color='secondary'/>
                    {index !== language.educationList.length -1 && <TimelineConnector style={{background:"#854CE6"}}/>}
                  </TimelineSeparator>
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


export default Education