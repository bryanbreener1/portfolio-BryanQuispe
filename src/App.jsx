import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/Themes'
import NavBar from './components/NavBar'
import Hero from './components/HeroSection'
import Skills from './components/Skills'
import Education from './components/Education'
import { BrowserRouter as Router } from 'react-router-dom'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'
import { LanguageProv } from './utils/LanguageProvider'
import { BsWhatsapp } from "react-icons/bs";
function App() {
  const [mainTheme, setMainTheme] = useState(true)

  const actualTheme = mainTheme ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={actualTheme} >
      <LanguageProv>
      <Router>
        <NavBar setMainTheme={setMainTheme} mainTheme={mainTheme}/>
        <Body>
          <Hero/>
          <Wrapper>
            <Skills/>
            <Experience/>
          </Wrapper>
          <Projects/>
          <Wrapper>
            <Education/>
            <Contact/>
          </Wrapper>
          <WppButton href='https://wa.me/+51954125627' target='blank'><BsWhatsapp/></WppButton>
          <Footer/>
        </Body>
      </Router>
      </LanguageProv>
    </ThemeProvider>
  )
}
const WppButton = styled.a`
  width: 60px;
  height: 60px;
  color: white;
  position: fixed;
  bottom: 2rem;
  z-index: 200;
  right: 2rem;
  font-size: 2rem;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  &:hover{
    filter: brightness(1.2);
  }
`


const Body = styled.div`
  background-color: ${({theme})=> theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
  position: relative;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

export default App
