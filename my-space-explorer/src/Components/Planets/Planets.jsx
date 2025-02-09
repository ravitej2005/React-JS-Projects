import React from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

async function APICall(setData, setLoading, setError) {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true');
    const data = await response.json();
    setData(data.bodies);
  } catch (error) {
    setError("Data fetching failed...");
    setData([]);
  } finally {
    setLoading(false);
  }
}

function Planets() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    APICall(setData, setLoading, setError);
  }, []);


  if (loading) return <div className='text-xl text-white'>Loading planets...</div>;
  if (error) return <div className='text-xl text-white'>{error}</div>;
  // const navigate = useNavigate();

  return (
    <div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4'>
        {data.map((planet) => (
          <Link to={`${planet.id}`} key={planet.id}>
            <Card props={planet} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Planets;
