import Nav from "./Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, []);
    return (
        <div className="productList ">
            <Nav />
            {/* <h1>Single Product</h1> */}
            <div className="columns">
                <div className="col-sm col1">

                    <img className="img-responsive" src={product.image} alt=""></img>
                </div>
                <div className="col-sm col2">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    {/* <h3>{product.rating}</h3> */}
                    <h2>{product.price}</h2>
                </div>
            </div>
            <Footer />
        </div>

    );
}
export default SingleProduct;