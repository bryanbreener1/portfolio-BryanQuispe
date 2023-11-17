import React, { useContext, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {DiCssdeck} from "react-icons/di"
import {FaBars} from "react-icons/fa"
import {TbSun} from 'react-icons/tb'
import {BsMoonStarsFill} from 'react-icons/bs'
import {HiLanguage} from 'react-icons/hi2'
import { languageContext } from '../../utils/LanguageProvider'

const Navbar = ({setMainTheme, mainTheme}) => {

  const [isOpen, setIsOpen] = useState(false)
  
  const theme = useTheme()

  const handleTheme = () => {
    setMainTheme(!mainTheme)
  }

  const {language, changeLanguage} = useContext(languageContext)

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex",justifyContent:"center" ,alignItems: "center", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <ChangeLanguages style={{cursor:"pointer"}} onClick={() => changeLanguage()}>
            <HiLanguage/>{
              language.myLanguage === "EN" ? "ES":"EN"
            }
          </ChangeLanguages>
            {
              mainTheme ? <TbSun onClick={handleTheme} style={{color:"white"}}/> : <BsMoonStarsFill onClick={handleTheme} style={{color:"black"}}/>
            }
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>{language.footer.about}</NavLink>
          <NavLink href='#skills'>{language.footer.skills}</NavLink>
          <NavLink href='#experience'>{language.footer.experience}</NavLink>
          <NavLink href='#projects'>{language.footer.projects}</NavLink>
          <NavLink href='#education'>{language.footer.education}</NavLink>
        </NavItems>
        <ButtonContainer>
          <ChangeLanguages style={{cursor:"pointer"}} onClick={() => changeLanguage()}>
            <HiLanguage/>{
              language.myLanguage === "EN" ? "ES":"EN"
            }
          </ChangeLanguages>
          <ChangeTheme onClick={handleTheme}>
            {
              mainTheme ? <TbSun style={{color:"white"}}/> : <BsMoonStarsFill style={{color:"black"}}/>
            }
          </ChangeTheme>
          <GitHubButton href={language.Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href='#about' onClick={() => {
              setIsOpen(!isOpen)
            }}>{language.footer.about}</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>{language.footer.skills}</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>{language.footer.experience}</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>{language.footer.projects}</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>{language.footer.education}</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target='_blank'>Github Profile</GitHubButton>
          </MobileMenu>
        }
    </Nav>
  )
}
const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`

const NavLogo = styled.div`
    width: 80%;    
    padding: 0px 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    color: ${({theme})=>theme.text_primary};
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`
const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`
const NavItems = styled.ul`
    width: 150%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 25px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 800px) {
      display: none
    }
`
const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary}
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary}
    }
`

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 800px) { 
      font-size: 16px
    }
`

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 800px) {
    display: none
  }
`


const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary}
  }
`
const ChangeTheme = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px){
    margin: 0;
    font-size: 1rem;
  }
`
const ChangeLanguages = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: ${({theme})=>theme.text_primary};
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px){
    margin: 0;
    font-size: 1rem;
  }
`
const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`


const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary}
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary}
  }
`

export default Navbar