import { useEffect, useState } from 'react';
import './PokeEntry.css';

const PokeEntry = ({ name, url }) => {
  const [pokeData, setPokeData] = useState([]);
  const [id, setId] = useState('');
  const [habitat, setHabitat] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setPokeData(data);
        setId(data.id);
        setHabitat(data.habitat.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card'>
      <img
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width="200"
        height="200"
      />
      <div>
        <h2>{name}</h2>
        <p>{habitat}</p>
      </div>
    </div>
  );
};

export default PokeEntry;
