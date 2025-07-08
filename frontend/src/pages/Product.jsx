import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import {assets, backend_url} from '../assets/assets.js'
import { FaTruckFast } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import {StoreContext} from '../context/StoreContextProvider.jsx'
import ProductItem from '../components/Products/ProductItem.jsx';
import PromotionBox from '../util/PromotionBox.jsx';
import axios from 'axios';
import NotAccessPage from '../util/NotAccessPage.jsx';
import { toast } from 'react-toastify';

const serviceIcons = [
  {
    id: 1,
    icon: <FaTruckFast />,
    text: "Fast Delivery"
  },
  {
    id: 2,
    icon: <FaRegHandshake />,
    text: "Trusted brand"
  },
  {
    id: 3,
    icon: <MdPayment />,
    text: "Secure Payment"
  },
  {
    id: 4,
    icon: <RiRefund2Line />,
    text: "Easy Refund"
  }
]

const Product = () => {
  const {token, addToCart, setTransactionGoing} = useContext(StoreContext);
  const location = useLocation();
  const state = location.state || {};
  const {id, productname, product_images, description, price, category} = state; 
  const [imageId, setImageId] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const [scaleCount, setScaleCount] = useState(1);
  // const [scaleString, setScaleString] = useState("scale-[1]");
  // ^ this idea of zoom in/out is working perfectly, but we've set the max width so it won't be zoomed further

  const [products, setProducts] = useState([]);
  const relatedProducts = products.filter(product => product.category === category);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(backend_url+'/api/user/all-products');
      if (response.data.success) {
        setProducts(response.data.allproducts);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    fetchProducts();
    window.scrollTo(0, 0);
  }, []);

  return id ? (
    <div className='scroll-smooth'>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 mb-[70px] gap-5 sm:gap-10'>
        {/* Image section */}
        <div className='flex flex-col items-center'>
          {/* Main Image */}
          <div className='relative h-max w-max flex justify-center'>
            <img src={product_images[imageId]} alt="product_img" className={`m-auto object-contain sm:min-h-[335px] sm:min-w-[390px] 
            sm:max-h-[435px] sm:max-w-[550px] h-fit w-[230px]`}/>
          </div>

          {/* Sub Images */}
          <div className='flex py-10 justify-center gap-6'>
            {
              product_images.map((image, id) => (
                <img src={image} key={id} onClick={() => setImageId(id)} className={`w-[60px] h-[55px] sm:max-w-[150px] sm:max-h-[105px] cursor-pointer border aspect-square object-contain ${id === imageId ? "border-red-500" : ""}`}/>
              ))
            }
          </div>
        </div>

        {/* Content Section */}
        <div className='px-5 py-3 space-y-5'>
          <h1 className='text-xl sm:text-2xl xl:text-3xl font-semibold'>{productname}</h1>
          {/* // TODO : add stars from Material UI <p></p> */}
          <p className='text-red-500 text-sm sm:text-base xl:text-lg'>
            ₹<span className='font-semibold'>{price.toLocaleString("en-IN")}</span></p>
          <p className='text-sm lg:text-base'>{description}</p>
          <div className='flex gap-3 justify-start'>
            {
              serviceIcons.map(({id, icon, text}) => (
                <div key={id} className='text-lg md:text-xl xl:text-2xl border border-gray-300 px-3 py-1 
                  flex flex-col items-center rounded-md'>
                  <p>{icon}</p>
                  <p className='text-[9px] leading-[13px] sm:text-xs text-center'>{text}</p>
                </div>
              ))
            }
          </div>
          <div>
            <input type="number" placeholder='total items' name="quantity" value={quantity} 
              onChange={(e) => setQuantity(e.target.value)}/>
          </div>
          <div className='flex gap-3 items-center'>
            <button className='bg-[#FF073A] text-white py-2 text-sm w-[100px] sm:w-[130px]'
              onClick={() => addToCart(id, quantity)}>Add to Cart</button>
            <button className='bg-[#FF073A] text-white py-2 text-sm w-[100px] sm:w-[130px] text-center'
              onClick={() => {
                if(token){
                  setTransactionGoing(true);
                  navigate('/place-order', {
                  state: {
                      item : {
                        itemId: id,
                        price,
                        productname,
                        product_images,
                        description,
                        category,
                        quantity,
                      }
                    }
                  })
                }
                else{
                  toast.error("You need to signup or login to buy an item")
                }
              }}
            >Buy Item</button>
          </div>
          
          <div className='pt-10'>
            <PromotionBox text='Promo Code' btnText='Reedem' width="max-w-[550px]"/>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-3xl md:text-4xl text-center tracking-wide sm:tracking-wider font-bold pb-6'>Related Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 scroll-smooth'
          onClick={() => window.scrollTo(0, 0)}
        >
          {
            relatedProducts.slice(0, 5).map(({_id, productname, product_images, price, description, category}) => (
              <ProductItem key={_id} id={_id} productname={productname} product_images=   {product_images} price={price} description={description} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
  ) : <NotAccessPage />
}

export default Product