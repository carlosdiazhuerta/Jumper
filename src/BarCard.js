import React from 'react';

const BarCard = ({ name, about, location, cover, posts }) => {
  return (
    <div className="bar-card">
      <img src={cover?.source} alt={name} />
      <h2>{name}</h2>
      <p>{about}</p>
      <p>Ubicación: {location?.city}</p>
      <h3>Últimas Publicaciones:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.message || 'Sin mensaje'}</li>
        ))}
      </ul>
    </div>
  );
};

export default BarCard;