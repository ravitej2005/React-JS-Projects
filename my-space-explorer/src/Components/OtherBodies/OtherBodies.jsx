import React from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

async function APICall(setData, setLoading, setError) {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,false&filter[]=isMoon,eq,false');
    const data = await response.json();
    setData(data.bodies.splice(-20));
  } catch (error) {
    setError("Data fetching failed...");
    setData([]);
  } finally {
    setLoading(false);
  }
}

function OtherBodies() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => { 
      APICall(setData, setLoading, setError);
    }, []);
  

  if (loading) return <div className='text-xl text-white'>Loading OtherBodies...</div>;
  if (error) return <div className='text-xl text-white'>{error}</div>;

  return (
    <div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4'>
        {data.map((body) => (
          <Link to={`${body.id}`} key={body.id}>
            <Card props={body} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OtherBodies;