import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Components
import Comic from './container/comic';

// Styles
import { GlobalStyles } from './styles/GlobalStyles';

// Redux setup
import { persistor, store } from './store';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Comic />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default App;
