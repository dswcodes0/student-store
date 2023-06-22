import React, { useEffect, useState } from "react";
import "./Home.css"
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>

export default function Home() {

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
      {/* 
      create the search bar html
      retrieve the search bar's input field
      add variables that access all of the products by class
      compare the search bar input field to the name of the product
      add the class of is-hidden to all of the products that dont have the search bar input value
      if the name of the product matches the search bar input field then remove the search  bar input value
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
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
