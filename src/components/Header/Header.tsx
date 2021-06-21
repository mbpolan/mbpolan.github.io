import { Nav, Navbar } from 'react-bootstrap';
import { MoonStars, Sun } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { useThemeMode } from '../../hooks';
import { ThemeMode } from '../../providers';

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
        <ThemeButton onClick={handleThemeClick}>
          {themeMode === 'light' ? <MoonStars /> : <Sun />}
        </ThemeButton>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
