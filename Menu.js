import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard'; // Importa o componente do item do cardápio

const Menu = () => {
const [menuItems, setMenuItems] = useState([]);

useEffect(() => {
    // Chama a API para obter os dados do cardápio
    axios.get('https://api.exemplo.com/menu')
    .then(response => setMenuItems(response.data))
    .catch(error => console.error('Erro ao carregar o cardápio:', error));
}, []);

return (
    <div className="menu">
    <h1>Cardápio</h1>
    <div className="menu-items">
        {menuItems.map(item => (
        <ItemCard key={item.id} item={item} />
        ))}
    </div>
    </div>
);
};

export default Menu;
