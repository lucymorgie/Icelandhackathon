import React from 'react';
import './ProductTile.css';
import TileImage from './TileImage.jpg'
import ProductArray from '../../products';

const ProductTile = () => {
    const products = ProductArray.map((product, i) => {
        return (
            <div className="ProductTile" key={i}>
            <h1 className="TileHeader">{product.name}</h1>
            <img className="TileImage" src= {product.image} alt="Fruit & Veg"/>
            <h3 className="BBE">BBE: {product.shelfLife}</h3>
            <h3 className="Discount">Discount: {product.discount}</h3>
            <h3 className="Price">Price:{product.price}</h3>
            <h3 className="EcoPoints">Gain Eco Points:{product.points}</h3>
            <button className="AddToBasket">Add to Basket</button>
        </div>

        )
    })
 
    return (   
        <div className="ProductArray"> 
        {products}
        </div>
    )};

    
    
export default ProductTile;