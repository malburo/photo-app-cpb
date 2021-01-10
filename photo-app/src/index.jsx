import { ThemeProvider } from '@material-ui/core/styles';
import store from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'theme';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <SnackbarProvider maxSnack={3} hideIconVariant>
          <App />
        </SnackbarProvider>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
