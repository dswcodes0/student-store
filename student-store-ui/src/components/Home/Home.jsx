import React, { useEffect, useState } from "react";
import "./Home.css"

export default function Home() {

  const [products, setProducts] = useState([])

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

      {filteredCategories.map( (categoryName) =>(
        <div>{categoryName}<br/></div>
        //turn div into button 
        
      ))}
      
      <div id="buy" className="product-grid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            {products.map( (product) =>(
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
