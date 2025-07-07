import React, { useContext } from 'react'
// import {Link} from 'react-router-dom'
import kb_1_3 from '../../assets/keyboard/kb_1_3.jpeg'
import mice_5_2 from '../../assets/mice/mice_5_2.jpg'
import hd_5_3 from '../../assets/headphones/headphone_5_3.jpg'

const topProds = [
  {
    id: "kb6",
    name: "Redragon K617 Fizz",
    price: 2_299,
    images: [kb_1_3],
    description : "The Redragon K617 Fizz is a compact 60% gaming keyboard that uses magnetic (“hall-effect”) switches, letting you adjust the actuation point for ultra-fast, tailored responses—perfect for both gaming and typing. It features per-key RGB lighting, a detachable USB‑C cable, and a hot‑swappable faux‑outemu PCB, though switch compatibility can be a bit picky"
  },
  {
    id: "mice20",
    name: "Redragon M711 Cobra",
    price: 9_799,
    images: [mice_5_2],
    description: "The Redragon M711 Cobra is an affordable, right‑handed ergonomic gaming mouse, packing a PixArt PMW3325 optical sensor with adjustable DPI (100–10,000 via software; 500–5,000 via onboard buttons) and up to 1,000 Hz polling rate. It offers seven programmable buttons, vibrant 16.8 million‑color RGB lighting, and a grippy matte finish that balances comfort and durability"
  },
  {
    id: "hs5",
    name: "JBL Tune 760NC",
    price: 4_999,
    images: [hd_5_3],
    description: "The JBL Tune 760NC are lightweight, foldable over‑ear headphones featuring JBL Pure Bass sound, active noise cancellation (ANC), and up to 35 hours of battery life with ANC on (50 hrs off). RTINGS notes they do a decent job suppressing mid‑ to high-frequency noise like chatter or AC hum but struggle with low-frequency rumble like plane engines, and some find the clamp pressure a bit tight over long sessions"
  }
]

const TopProducts = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-2xl sm:text-3xl text-center font-bold tracking-wide sm:tracking-wider pb-10'>Top Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9'>
        {
          topProds.map(({id, name, price, images, description}) => (
            <div key={id}
              className='bg-white shadow-lg p-5 space-y-4 rounded-md'
              state={{
                id, name, images, description, price
              }}
            >
              <img src={images[0]} className='max-w-[200px] mx-auto' alt="product_image"/>
              <h1 className='text-xl md:text-2xl text-[#FC1723]'>{name}</h1>
              <p className='line-clamp-5 text-sm xl:text-base'>{description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopProducts