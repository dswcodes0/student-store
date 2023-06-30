import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"



export default function Home({cartItems, handleDecrement, handleIncrement}) {

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    async function fetchProducts(){
      try{
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store`)
        const data = await response.json()
        setProducts(data.products)
      }catch(error){
        console.log("Error catching prodcuts: ", error)
      }
    }
    fetchProducts()

  },[])

  
  
    const filteredCategories = [...new Set(
        products.map( (product) => (
          product.category
      ))
    )]

  
    const liveSearch = (event) => {
      const value = event.target.value
      setInputValue(value)
      }
    

  return (

    

    <div className="home">
      {/* w
      */}

      
      
      
      
        
        <div className="sub-navbar">
          <input type="text" onInput={liveSearch} value={inputValue} className="search-bar" />
          
        </div>
      
      <div className="hamburger-menu">
        <i className="material-icons">menu</i>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory(null)} >All Categories</button>
          
        </li>
      {filteredCategories.map( (categoryName) =>(
        <li key={categoryName}>
          <button onClick={() => setSelectedCategory(categoryName)}>{categoryName.charAt(0).toUpperCase()}{categoryName.slice(1)}<br/></button>
        </li>        
      ))}
      </ul>
      </div>
      
      <div id="buy" className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="product-grid">
            {products
            .filter((product) => selectedCategory === null || product.category === selectedCategory)
            .filter((product) =>
            product.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map( (product) =>(
              
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <Link key={product.id} to={{
                  pathname: `/product/${product.id}`,
                  state: { product: product }, // Pass the product data as state
                 }} className="product-link">
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="icons">
                <button onClick={() => handleIncrement(product)}><i className="fa-solid fa-plus icon "></i></button>
                <button onClick={() => handleDecrement(product)}><i className="fa-solid fa-minus icon"></i></button>
                
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
