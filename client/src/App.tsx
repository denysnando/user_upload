import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter as Router } from 'react-router-dom';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <GlobalStyles />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
