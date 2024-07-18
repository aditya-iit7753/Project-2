import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryItem from './InventoryItem';

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching inventory items', error);
    }
  };

  return (
    <div>
      {items.map(item => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InventoryList;
