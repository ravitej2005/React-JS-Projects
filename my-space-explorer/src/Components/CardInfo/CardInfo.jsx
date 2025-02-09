import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CardInfo() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Data fetching failed...");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div className='text-xl text-white'>Loading...</div>;
  if (error) return <div className='text-xl text-white'>{error}</div>;

  return (
    <div className="text-white bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
        {data.englishName}
      </h2>
      <table className="w-full text-left border-collapse border border-gray-700">
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Mass:</td>
            <td className="p-3 text-gray-400">
              {data.mass ? `${data.mass.massValue} × 10^${data.mass.massExponent}` : "N/A"}
            </td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Gravity:</td>
            <td className="p-3 text-gray-400">{data.gravity ? data.gravity : "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Distance from Sun:</td>
            <td className="p-3 text-gray-400">
              {data.semimajorAxis ? `${data.semimajorAxis} AU` : "N/A"}
            </td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Density:</td>
            <td className="p-3 text-gray-400">{data.density ? `${data.density} g/cm³` : "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Equatorial Radius:</td>
            <td className="p-3 text-gray-400">
              {data.equatorialRadius ? `${data.equatorialRadius} km` : "N/A"}
            </td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Discovered By:</td>
            <td className="p-3 text-gray-400">{data.discoveredBy ? data.discoveredBy : "N/A"}</td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="p-3 font-semibold text-gray-300">Discovery Date:</td>
            <td className="p-3 text-gray-400">{data.discoveryDate ? data.discoveryDate : "N/A"}</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold text-gray-300">Discovery Circumstances:</td>
            <td className="p-3 text-gray-400">
              {data.discoveryCircumstances ? data.discoveryCircumstances : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardInfo
