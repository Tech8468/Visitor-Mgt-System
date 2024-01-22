// // import pix1 from "./images/sushi4.png";
// // import pix2 from "./images/jollof.png";
// // import pix3 from "./images/chicken2.png";
// // import pix4 from "./images/burger.png";
// // import pix5 from "./images/friedrice.png";
// // import pix6 from "./images/lasagna.png";
// // import pix7 from "./images/chicken.png";
// // import pix8 from "./images/fish.png";
// import { useState} from "react";
// import React from "react";

// function Menu() {
//     const [err, setErr] = useState(false);
//     // const [menuArr, setMenuArr] = useState([]);

//     const [menuData, setMenuData] = useState({
//         id: menuData.lenght + 1,
//         image: "",
//         title: "",
//         description: "",
//         price: "",
// });

//     // input fields states
//     const [image, setImage] = useState('');
//     const [dish, setDish] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
    
//     const addProducts=(e)=>{
//         // var menuArr = JSON.parse(localStorage.getItem('menuArr') || "[]");
//         e.preventDefault();
//         // var menuArr=[];
        
//         var menuData={
//             id: menuArr.lenght + 1,
//             type: type,
//             dish: dish,
//             price: price,
//             description: description,
//             image: image
//         }

//         // menuArr.push(menuData);
//         // setMenuArr([...menuArr, menuData]);
//         // setType('');
//         // setDish('');
//         // setPrice('');
//         // setDescription('');
//         // setImage('');

//         // localStorage.setItem('menuArr', JSON.stringify(menuArr));
//         // console.log(menuArr);
//         // menuArr.push(menudata);
//         // useEffect(() => {
//         // localStorage.setItem('menuArr', JSON.stringify(menuArr));
//         // }, [menuArr]);
        
//     };

//     const submitForm = (e) => {
//         e.preventDefault();
//         if (menuData.type === '' || menuData.dish === '' || menuData.price === '' || menuData.description === '' || menuData.image === '')  {
//             setErr(true)
//         }
       
//     }

   


//     return (
//         <div className="menuBanner">
//             <div className="menuForm" >
//                 <form className="form" onSubmit={submitForm}>
//                     <input type="file" name="file" placeholder="upload image" className="fileUpload" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
//                     {err === true && menuData.image===""? <span>Field required</span>: null  }
//                     {/* <input type="text" name="text" placeholder="Menu type" value={type} onChange={(e)=>{setType(e.target.value)}}/> */}
//                     {/* {error && type===""? <span>Field required</span>: false  } */}
//                     <input type="text" name="text" placeholder="Menu Dish" value={dish} onChange={(e)=>{setDish(e.target.value)}}/>
//                     {/* {error && dish===""? <span>Field required</span>: false  } */}
//                     <input type="number" name="text" placeholder="Menu Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
//                     {/* {error && price===""? <span>Field required</span>: false  } */}
//                     <input type="text" name="text" placeholder="Menu Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
//                     {/* {error && description===""? <span>Field required</span>: false  } */}
//                     <button className="formBtn"  >SEND</button>
//                 </form>
//             </div>
                
//             <div className='col1'>
//                 {/* {menuArr.map((menuData) => ( */}
//                    <h1>PALATA</h1>
//                 {/* ))} */}
//                 {menuArr.map((menuData) => {
//                   return(  
//                     <div className="card">
//                         <img className='img1' src={menuData.image} alt="" />
//                         <h1>{menuData.dish}</h1>
//                         <h5>{menuData.description}</h5>
//                         <p>{menuData.price}</p>
//                         <button>View More</button>
//                     </div>
//                   );
//                   })}

//             </div>
//             {/* <div className='col2'>
//             {menuArr.map((option) => (
//                    <h1>{option.opt2}</h1>
//                 ))}
//                 {menuArr2.map((product) => (
//                     <div className="card">
//                         <img className='img5' src={product.image} alt="" />
//                         <h1>{product.name}</h1>
//                         <h5>{product.description}</h5>
//                         <p>{product.price}</p>
//                         <button>View More</button>
//                     </div>
//                 ))}

//             </div> */}
//         </div>
//     )
// }
// export default Menu;