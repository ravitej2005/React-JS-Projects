import React from 'react';

function Card({props}) {
  return (
    <div className="bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-blue-500/50 h-full">
      <h2 className="text-2xl font-bold text-blue-400">{props.englishName}</h2>

      <div className="text-gray-300 text-base mt-4">
        {/* <p><strong>Surrounding Planet:</strong> {aroundPlanet ? aroundPlanet.planet : 'N/A'}</p> */}
        {props.aroundPlanet &&  <p><strong>Surrounding Planet:{props.aroundPlanet.planet}</strong> </p>}
        <p><strong>Mass:</strong> {props.mass ? `${props.mass.massValue} × 10^${props.mass.massExponent}` : 'N/A'}</p>
        <p><strong>Gravity:</strong> {props.gravity ? props.gravity : 'N/A'}</p>
        <p><strong>Distance from Sun:</strong> {props.semimajorAxis ? props.semimajorAxis : 'N/A'} AU</p>
        <p><strong>Density:</strong> {props.density ? props.density : 'N/A'} g/cm³</p>
        <p><strong>Equatorial Radius:</strong> {props.equatorialRadius ? props.equatorialRadius : 'N/A'} km</p>
        <p><strong>Discovered By:</strong> {props.discoveredBy ? props.discoveredBy : 'N/A'}</p>
        <p><strong>Discovery Date:</strong> {props.discoveryDate ? props.discoveryDate : 'N/A'}</p>
        <p><strong>Discovery Circumstances:</strong> {props.discoveryCircumstances ? props.discoveryCircumstances : 'N/A'}</p>
      </div>
    </div>
  );
}

export default Card;
