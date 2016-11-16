import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ReactNativeI18n from 'react-native-i18n';
import reducers from './reducers';
// import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import SwitchHeader from './components/SwitchHeader';

class App extends Component {
  render() {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    const deviceLocale = ReactNativeI18n.locale;
    console.log('locale is ', deviceLocale);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={{ flex: 1 }}>
           <SwitchHeader headerText='Switch Font' />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
