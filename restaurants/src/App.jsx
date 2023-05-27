import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React from 'react';
import {globalContext as GlobalContext} from './contexts/globalContext';
import {useLocalStorage} from './hooks/useLS';
import './App.css';

function App() {
  const initialState = {
    toDoList: [],
  };

  const [state, dispatch] = useLocalStorage('toDoList', initialState);

  return (
    <>
      <GlobalContext.Provider
        value={{state, dispatch}}>
        <div>
          <Header />
          <About />
          {/* <Main /> */}
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
