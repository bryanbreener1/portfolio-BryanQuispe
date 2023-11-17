import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { languageContext } from '../../utils/LanguageProvider';
import { useContext } from 'react';

function Footer() {
  const {language} = useContext(languageContext)

    return (
      <FooterContainer>
        <FooterWrapper>
          <Logo>Bryan Quispe</Logo>
          <Nav>
            <NavLink href="#about">{language.footer.about}</NavLink>
            <NavLink href="#skills">{language.footer.skills}</NavLink>
            <NavLink href="#experience">{language.footer.experience}</NavLink>
            <NavLink href="#projects">{language.footer.projects}</NavLink>
            <NavLink href="#education">{language.footer.education}</NavLink>
          </Nav>
          <SocialMediaIcons>
            <SocialMediaIcon href={language.Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
            <SocialMediaIcon href={language.Bio.github} target="display"><GithubIcon /></SocialMediaIcon>
          </SocialMediaIcons>
          <Copyright>
            &copy; 2023 Bryan Quispe. {language.footer.copy}.
          </Copyright>
  
        </FooterWrapper>
      </FooterContainer>
    );
  }

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`

export default Footer;