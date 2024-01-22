import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Product(){
    // const [number, setNumber] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((resp) => resp.json())
            .then((data) =>{
                setProducts(data);
                console.log(data);
            });
    },[]);

    return(
        <div className="product">
            <div className="card">
                {products.map((product) =>(
                    <div key={product.id} className="product-card">
                        <h1>{product.category}</h1>
                        <div className="images">
                            <img className="img" src={product.image} alt=""></img>
                        </div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <h2>{product.price}</h2>
                        <div>
                            <Link to={`/product/${product.id}`}><button>View More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product; 