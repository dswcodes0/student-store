import React, { useEffect, useState } from "react";
import "./Home.css"
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>

export default function Home() {

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    async function fetchProducts(){
      try{
        const response = await fetch(`https://codepath-store-api.herokuapp.com/store`)
        const data = await response.json()
        console.log(data.products)
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

  
  return (

    

    <div className="home">
      {/* 
      x get the category names
      create buttons
      on button click, hide the button categories
      
      */}
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
          <div className="grid">
            {products
            .filter((product) => selectedCategory === null || product.category === selectedCategory)
            .map( (product) =>(
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
