import './App.css';
import React, {useState} from 'react';
import ItemsList from './components/ItemsList';
import AppContext from './context/AppContext';


export default function App() {


  const [totalFavorites, setTotalFavorites] = useState(0);


  const incTotalFavorites = () => {
    setTotalFavorites(totalFavorites + 1);
  }

  const decTotalFavorites = () => {
    setTotalFavorites(totalFavorites - 1);
  }
  
  return (
    <AppContext.Provider value={{incTotalFavorites, decTotalFavorites, totalFavorites}}>
      <div className="App">
        <header className="App-header">
          <div>
            <ItemsList/>
          </div>
        </header>
      </div>
    </AppContext.Provider>
  );
}

