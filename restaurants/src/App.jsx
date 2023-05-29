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
import Editing from './components/Editing/Editing';
import {Routes, Route} from 'react-router-dom';

function App() {
  const initialState = {
    list: [],
  };

  const [state, dispatch] = useLocalStorage('list', initialState);

  return (
    <>
      <GlobalContext.Provider value={{state, dispatch}}>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/list' element={<List />} />
            <Route path='/add' element={<Adding />} />
            <Route path='/edit/:id' element={<Editing />} />
          </Routes>
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
