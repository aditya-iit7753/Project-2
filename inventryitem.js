import React from 'react';

const InventoryItem = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default InventoryItem;
