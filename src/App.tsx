import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import { Blog, Home, Post } from './scenes';
import { Header } from './components';
import { ContentfulProvider, ThemeMode, ThemeModeProvider } from './providers';
import qs from 'qs';
import { dark, light, GlobalStyles } from './themes';
import { ThemeProvider } from 'styled-components';

interface ContainerProps {
  onChangeTheme: (mode: ThemeMode) => void;
}

const Container = ({ onChangeTheme }: ContainerProps) => {
  const { search } = useLocation();
  const [liveMode, setLiveMode] = useState<boolean>(true);

  useEffect(() => {
    const params = qs.parse(search, { ignoreQueryPrefix: true });
    if (params.preview) {
      setLiveMode(false);
    }
  }, [search]);

  return (
    <ContentfulProvider liveMode={liveMode}>
      <Header onChangeTheme={onChangeTheme} />
      <Switch>
        <Route path="/blog/:slug" component={Post} />
        <Route path="/blog" component={Blog} />
        <Route component={Home} />
      </Switch>
    </ContentfulProvider>
  );
};

const App = () => {
  const prefersDarkMode =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [themeMode, setThemeMode] = useState<ThemeMode>(prefersDarkMode ? 'dark' : 'light');

  return (
    <ThemeModeProvider mode={themeMode}>
      <ThemeProvider theme={themeMode === 'dark' ? dark : light}>
        <GlobalStyles />

        <HashRouter>
          <Container onChangeTheme={setThemeMode} />
        </HashRouter>
      </ThemeProvider>
    </ThemeModeProvider>
  );
};

export default App;
