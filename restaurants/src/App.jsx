import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React from 'react';
import {globalContext as GlobalContext} from './contexts/globalContext';
import {useLocalStorage} from './hooks/useLS';
import {useReducer} from 'react';
import './App.css';
import List from './components/List/List';
import Adding from './components/Adding/Adding';

function App() {
  const initialState = {
    list: [],
  };

  const [state, dispatch] = useLocalStorage('list', initialState);

  return (
    <>
      <GlobalContext.Provider
        value={{state, dispatch}}>
        <div>
          <Header />
          {/* <About /> */}
          {/* <Main /> */}
          <List />
          {/* <Adding /> */}
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
