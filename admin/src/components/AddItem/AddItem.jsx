import React, { useEffect, useState } from 'react'
import {admin_assets, backend_url} from '../../assets/admin_assets/adminassets.js'
import axios from 'axios';
import { toast } from 'react-toastify';
import NotAccessPage from '../../NotAccessPage.jsx';

const AddItem = ({admintoken}) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [items, setItems] = useState({
    productname: "",
    description: "",
    price: 1_000,
    stock: 1,
    category: "headphone"
  });

  const [bestseller, setBestseller] = useState(false);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setItems(prev => ({
      ...prev, [name]:value
    }));
  }

  const itemHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    image1 && formData.append("image1", image1);
    image2 && formData.append("image2", image2);
    image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);

    formData.append("productname", items.productname);
    formData.append("description", items.description);
    formData.append("price", items.price);
    formData.append("stock", items.stock);
    formData.append("category", items.category);
    formData.append("bestseller", bestseller);

    // formData.forEach((key, value) => {
    //   console.log(key, " ", value);
    // });

    // TODO : API call
    const response = await axios.post(backend_url+'/api/admin/add-product',formData, {headers: {admintoken}});

    if(!response.data.success){
      toast.error(response.data.message);
      return;
    }

    toast.success(response.data.message);
    // once product got added in the store, clear all the inputs
    setItems({
      productname: "",
      description: "",
      price: 1_000,
      stock: 1,
      category: "headphone"
    });
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setBestseller(false);
  }

  return admintoken ? (
    <form className='pt-5 px-3 sm:pt-6 sm:px-10' onSubmit={itemHandler} method="post">
      <h1 className='text-xl sm:text-2xl font-semibold'>Add New Item</h1>

      {/* Image Section */}
      <div className='flex gap-3 pt-5'>
        <label htmlFor="image1" className='cursor-pointer'>
          <img className="w-14 sm:w-16 xl:w-20" 
          src={image1 ? URL.createObjectURL(image1) : admin_assets.upload_area} alt="upload_area" />
          <input id="image1" type="file" hidden onChange={(e) => setImage1(e.target.files[0])}/>
        </label>
        <label htmlFor="image2" className='cursor-pointer'>
          <img className="w-14 sm:w-16 xl:w-20" 
          src={image2 ? URL.createObjectURL(image2) : admin_assets.upload_area} alt="upload_area" />
          <input id="image2" type="file" hidden onChange={(e) => setImage2(e.target.files[0])}/>
        </label>
        <label htmlFor="image3" className='cursor-pointer'>
          <img className="w-14 sm:w-16 xl:w-20" 
          src={image3 ? URL.createObjectURL(image3) : admin_assets.upload_area} alt="upload_area" />
          <input id="image3" type="file" hidden onChange={(e) => setImage3(e.target.files[0])}/>
        </label>
        <label htmlFor="image4" className='cursor-pointer'>
          <img className="w-14 sm:w-16 xl:w-20" 
          src={image4 ? URL.createObjectURL(image4) : admin_assets.upload_area} alt="upload_area" />
          <input id="image4" type="file" hidden onChange={(e) => setImage4(e.target.files[0])}/>
        </label>
      </div>

      {/* Text Section */}
      <div className='w-[max(39vw,240px)] py-6 space-y-4 text-xs sm:text-sm lg:text-base'>
        <div>
          <p className='pb-1'>Product Name</p>
          <input type="text" className='border w-full px-1 sm:px-2 py-1 rounded-md' name="productname"
          value={items.productname} onChange={changeHandler} required/>
        </div>
        <div>
          <p className='pb-1'>Description</p>
          <textarea rows="6" className='border w-full px-1 sm:px-2 py-1 rounded-md' name="description"
          value={items.description} onChange={changeHandler} required>
          </textarea>
        </div>
        <div className='w-full'>
          <p className="pb-1">Category</p>
          <select className='border w-full px-1 sm:px-2 py-1 rounded-md' name="category"
          value={items.category} onChange={changeHandler}>
            <option value="headphone">Headphone</option>
            <option value="mice">Mice</option>
            <option value="keyboard">Keyboard</option>
            <option value="monitor">Monitor</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>
        <div className='w-full flex gap-3 sm:gap-5'>
          <div className='w-full'>
            <p className="pb-1">Price</p>
            <input type="number" className='border w-full px-1 sm:px-2 py-1 rounded-md' name="price" 
            value={items.price} onChange={changeHandler} required/>
          </div>
          <div className='w-full'>
            <p className="pb-1">Stock</p>
            <input type="number" className='border w-full px-1 sm:px-2 py-1 rounded-md' name="stock"
            value={items.stock} onChange={changeHandler} required/>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-3'>
        <label >BestSeller</label>
        <input type="checkbox" checked={bestseller} onChange={() => setBestseller(prev => !prev)} name="bestseller"/>
      </div>
      <button className="text-xs hover:bg-black hover:text-white text-black px-10 sm:px-14 py-2 sm:py-3 border border-black
        transition-all duration-300 rounded-md" type="submit">
        Add Item
      </button>
    </form>
  ) : <NotAccessPage />
}

export default AddItem