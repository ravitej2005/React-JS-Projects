import React from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

async function APICall(setData, setLoading, setError) {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isMoon,eq,true');
    const data = await response.json();
    setData(data.bodies.splice(0,24));
  } catch (error) {
    setError("Data fetching failed...");
    setData([]);
  } finally {
    setLoading(false);
  }
}

function Moons() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    APICall(setData, setLoading, setError);
  }, []);

  if (loading) return <div className='text-xl text-white'>Loading moons...</div>;
  if (error) return <div className='text-xl text-white'>{error}</div>;

  return (
    <div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4'>
        {data.map((moon) => (
          <Link to={`${moon.id}`} key={moon.id}>
            <Card props={moon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Moons;