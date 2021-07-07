import { Nav, Navbar } from 'react-bootstrap';
import { Linkedin, MoonStars, Sun } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { useThemeMode } from '../../hooks';
import { ThemeMode } from '../../providers';

const PaddedIcon = styled(Navbar.Text)`
  padding: 8px;
`;

const ThemeButton = styled.div`
  cursor: pointer;
`;

export interface HeaderProps {
  onChangeTheme: (mode: ThemeMode) => void;
}

export const Header = ({ onChangeTheme }: HeaderProps) => {
  const themeMode = useThemeMode();

  const handleThemeClick = () => {
    if (themeMode === 'light') {
      onChangeTheme('dark');
    } else {
      onChangeTheme('light');
    }
  };

  return (
    <Navbar bg={themeMode} variant={themeMode} expand="lg">
      <Navbar.Brand href="#home">Mike Polan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <PaddedIcon>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/mbpolan">
              <Linkedin />
            </a>
          </PaddedIcon>
          <PaddedIcon>
            <ThemeButton onClick={handleThemeClick}>
              {themeMode === 'light' ? <MoonStars /> : <Sun />}
            </ThemeButton>
          </PaddedIcon>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
