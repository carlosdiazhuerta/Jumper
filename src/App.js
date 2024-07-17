import React, { useEffect, useState } from 'react';
import { getPagePosts, getPageDetails } from './facebookService';
import BarCard from './BarCard'; // Crear este componente
import './App.css';

const pageIds = [
  'sanbenitoxalapa',
  
  // Añade más IDs según sea necesario
];

const App = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBarsData = async () => {
      const barsData = await Promise.all(
        pageIds.map(async (id) => {
          const [details, posts] = await Promise.all([
            getPageDetails(id),
            getPagePosts(id),
          ]);
          return { ...details, posts: posts.data };
        })
      );
      setBars(barsData);
    };

    fetchBarsData();
  }, []);

  return (
    <div className="App">
      <h1>Antros y Bares</h1>
      <div className="bars-list">
        {bars.map((bar) => (
          <BarCard key={bar.id} {...bar} />
        ))}
      </div>
    </div>
  );
};

export default App;
