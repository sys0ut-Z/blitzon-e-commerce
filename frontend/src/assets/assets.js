// headphones
import headphone_1_1 from './headphones/headphone_1_1.jpg'
import headphone_1_2 from './headphones/headphone_1_2.avif'
import headphone_2_1 from './headphones/headphone_2_1.jpg'
import headphone_2_2 from './headphones/headphone_2_2.jpg'
import headphone_2_3 from './headphones/headphone_2_3.png'
import headphone_3_1 from './headphones/headphone_3_1.webp'
import headphone_3_2 from './headphones/headphone_3_2.jpeg'
import headphone_4_1 from './headphones/headphone_4_1.webp'
import headphone_4_2 from './headphones/headphone_4_2.jpg'
import headphone_4_3 from './headphones/headphone_4_3.jpg'
import headphone_5_1 from './headphones/headphone_5_1.jpg'
import headphone_5_2 from './headphones/headphone_5_2.webp'
import headphone_5_3 from './headphones/headphone_5_3.jpg'

// keyboards
import kb_1_1 from './keyboard/kb_1_1.jpg'
import kb_1_2 from './keyboard/kb_1_2.jpg'
import kb_1_3 from './keyboard/kb_1_3.jpeg'
import kb_1_4 from './keyboard/kb_1_4.webp'
import kb_2_1 from './keyboard/kb_2_1.jpg'
import kb_2_2 from './keyboard/kb_2_2.avif'
import kb_2_3 from './keyboard/kb_2_3.jpg'
import kb_3_1 from './keyboard/kb_3_1.jpg'
import kb_3_2 from './keyboard/kb_3_2.webp'
import kb_4_1 from './keyboard/kb_4_1.jpg'
import kb_4_2 from './keyboard/kb_4_2.jpg'
import kb_4_3 from './keyboard/kb_4_3.webp'
import kb_5_1 from './keyboard/kb_5_1.jpeg'
import kb_5_2 from './keyboard/kb_5_2.jpg'
import kb_5_3 from './keyboard/kb_5_3.jpg'

// laptops
import laptop_1_1 from './laptop/laptop_1_1.png'
import laptop_1_2 from './laptop/laptop_1_2.jpg'
import laptop_2_2 from './laptop/laptop_2_1.avif'
import laptop_2_3 from './laptop/laptop_2_2.avif'
import laptop_3_1 from './laptop/laptop_3_1.jpg'
import laptop_3_2 from './laptop/laptop_3_2.png'
import laptop_4_1 from './laptop/laptop_4_1.jpeg'
import laptop_4_2 from './laptop/laptop_4_2.jpg'
import laotop_5_1 from './laptop/laptop_5_1.png'
import laotop_5_2 from './laptop/laptop_5_2.webp'

// mice
import mice_1_1 from './mice/mice_1_1.png'
import mice_2_1 from './mice/mice_2_1.jpg'
import mice_2_2 from './mice/mice_2_2.jpg'
import mice_2_3 from './mice/mice_2_3.jpg'
import mice_3_1 from './mice/mice_3_1.jpeg'
import mice_3_2 from './mice/mice_3_2.jpeg'
import mice_3_3 from './mice/mice_3_3.png'
import mice_4_1 from './mice/mice_4_1.jpg'
import mice_4_2 from './mice/mice_4_2.jpg'
import mice_5_1 from './mice/mice_5_1.png'
import mice_5_2 from './mice/mice_5_2.jpg'
import mice_5_3 from './mice/mice_5_3.webp'

// monitor
import monitor_1_1 from './monitor/monitor_1_1.jpg'
import monitor_1_2 from './monitor/monitor_1_2.jpg'
import monitor_1_3 from './monitor/monitor_1_3.jpg'
import monitor_2_1 from './monitor/monitor_2_1.jpg'
import monitor_2_2 from './monitor/monitor_2_2.webp'
import monitor_3_1 from './monitor/monitor_3_1.jpg'
import monitor_3_2 from './monitor/monitor_3_2.webp'
import monitor_4_1 from './monitor/monitor_4_1.jpg'
import monitor_4_2 from './monitor/monitor_4_2.jpg'
import monitor_5_1 from './monitor/monitor_5_1.jpg'
import monitor_5_2 from './monitor/monitor_5_2.jpg'

import blitzon_logo from './other/blitzon_logo_2.png'
import header_img from './other/header_img_final.png'
import basket_icon from './other/basket_icon.png'
import search_icon from './other/search_icon.png'
import add_icon_white from './other/add_icon_white.png'
import add_icon_green from './other/add_icon_green.png'
import remove_icon_red from './other/remove_icon_red.png'
import app_store from './other/app_store.png'
import play_store from './other/play_store.png'
import cross_icon from './other/cross_icon.png'
import selector_icon from './other/selector_icon.png'
import rating_starts from './other/rating_starts.png'
import profile_icon from './other/profile_icon.png'
import bag_icon from './other/bag_icon.png'
import logout_icon from './other/logout_icon.png'
import parcel_icon from './other/parcel_icon.png'
import contact_img from './other/contact_img.png'
import quality_icon from './other/quality_icon.png'
import exchange_icon from './other/exchange_icon.png'
import support_img from './other/support_img.png'
import white_keyboard from './other/white_keyboard.jpg'
import stripe_logo from './other/stripe_logo.png'
import razorpay_logo from './other/razorpay_logo.png'

// export const frontend_url = 'http://localhost:5173';
export const frontend_url = 'https://blitzon-e-commerce.vercel.app';
// export const backend_url = 'http://localhost:5300';
export const backend_url = 'https://blitzon-e-commerce.onrender.com';

export const assets = {
  blitzon_logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  contact_img,
  quality_icon,
  exchange_icon,
  support_img,
  white_keyboard,
  stripe_logo,
  razorpay_logo
}

export const products = [
  // 🎧 Headphones
  {
    id: "hs1",
    name: "Sony WH-CH720N",
    images: [headphone_1_1, headphone_1_2],
    price: 9_990,
    description: "High quality wireless headphones with deep bass.",
    category: "headphone",
    bestseller: true,
  },
  {
    id: "hs2",
    name: "Sony WH-XB700",
    images: [headphone_2_2, headphone_2_3, headphone_2_1 ],
    price: 7_999,
    description: "Noise cancelling headphones with long battery life.",
    category: "headphone",
    bestseller: false,
  },
  {
    id: "hs3",
    name: "Audio Technica ATH-M50x",
    images: [headphone_3_1, headphone_3_2],
    price: 11_499,
    description: "Over-ear headphones with immersive sound.",
    category: "headphone",
    bestseller: true,
  },
  {
    id: "hs4",
    name: "Sennheiser HD 450BT",
    images: [headphone_4_1, headphone_4_2, headphone_4_3],
    price: 8_499,
    description: "Studio-quality headphones with foldable design.",
    category: "headphone",
    bestseller: true,
  },
  {
    id: "hs5",
    name: "JBL Tune 760NC",
    images: [headphone_5_1, headphone_5_2, headphone_5_3],
    price: 4_999,
    description: "Wired professional headphones for clear sound.",
    category: "headphone",
    bestseller: false,
  },

  // ⌨️ Keyboards
  {
    id: "kb6",
    name: "Redragon K617 Fizz",
    images: [kb_1_1, kb_1_2, kb_1_3, kb_1_4],
    price: 2_299,
    description: "Compact mechanical RGB keyboard.",
    category: "keyboard",
    bestseller: true,
  },
  {
    id: "kb7",
    name: "Keychron C3 Pro",
    images: [kb_2_1, kb_2_2, kb_2_3],
    price: 9_039,
    description: "Ergonomic keyboard with backlit keys.",
    category: "keyboard",
    bestseller: false,
  },
  {
    id: "kb8",
    name: "Ant Esports MK1200 Mini",
    images: [kb_3_1, kb_3_2],
    price: 2_499,
    description: "Bluetooth wireless keyboard for multi-device use.",
    category: "keyboard",
    bestseller: true,
  },
  {
    id: "kb9",
    name: "Redragon k530 draconic",
    images: [kb_4_1, kb_4_2, kb_4_3],
    price: 4_289,
    description: "Gaming keyboard with metal build and RGB.",
    category: "keyboard",
    bestseller: false,
  },
  {
    id: "kb10",
    name: "Royal Kludge RK61",
    images: [kb_5_1, kb_5_2, kb_5_3],
    price: 4_979,
    description: "Durable keyboard for long typing sessions.",
    category: "keyboard",
    bestseller: true,
  },

  // 💻 Laptops
  {
    id: "lp11",
    name: "Lenovo LOQ i5 12th Gen",
    images: [laptop_1_1, laptop_1_2],
    price: 65_190,
    description: "Slim and fast laptop with SSD storage.",
    category: "laptop",
    bestseller: false,
  },
  {
    id: "lp12",
    name: "HP Omnibook 7 Aero",
    images: [laptop_2_2, laptop_2_3],
    price: 79_990,
    description: "Business laptop with top build quality.",
    category: "laptop",
    bestseller: true,
  },
  {
    id: "lp13",
    name: "Acer Nitro 16",
    images: [laptop_3_2, laptop_3_1],
    price: 91_499,
    description: "Powerful laptop for everyday tasks and gaming.",
    category: "laptop",
    bestseller: true,
  },
  {
    id: "lp14",
    name: "Dell Vostro 5630",
    images: [laptop_4_1, laptop_4_2],
    price: 96_599,
    description: "Laptop with high refresh rate and Ryzen CPU.",
    category: "laptop",
    bestseller: false,
  },
  {
    id: "lp15",
    name: "Asus Vivobook 16",
    images: [laotop_5_1, laotop_5_2],
    price: 56_990,
    description: "Work laptop with long battery life.",
    category: "laptop",
    bestseller: false,
  },

  // 🖱️ Mice
  {
    id: "mice16",
    name: "Logitech G102 Lightsync",
    images: [mice_1_1],
    price: 1_599,
    description: "Gaming mouse with RGB lighting.",
    category: "mice",
    bestseller: true,
  },
  {
    id: "mice17",
    name: "Razer DeathAdder Essential",
    images: [mice_2_1, mice_2_2, mice_2_3],
    price: 3_499,
    description: "Wired gaming mouse with programmable buttons.",
    category: "mice",
    bestseller: false,
  },
  {
    id: "mice18",
    name: "Redragon M808 Storm Pro",
    images: [ mice_3_3, mice_3_1, mice_3_2],
    price: 2_089,
    description: "Ergonomic mouse for long usage.",
    category: "mice",
    bestseller: true,
  },
  {
    id: "mice19",
    name: "Corsair Katar Pro XT",
    images: [mice_4_1, mice_4_2],
    price: 2_399,
    description: "Basic USB mouse with reliable performance.",
    category: "mice",
    bestseller: true,
  },
  {
    id: "mice20",
    name: "Redragon M711 Cobra",
    images: [mice_5_1, mice_5_2, mice_5_3],
    price: 9_799,
    description: "Lightweight wireless gaming mouse.",
    category: "mice",
    bestseller: false,
  },

  // 🖥️ Monitors
  {
    id: "mtr21",
    name: "LG UltraGear 27GR75Q",
    images: [monitor_1_1, monitor_1_2, monitor_1_3],
    price: 25_999,
    description: "24-inch gaming monitor with 165Hz refresh rate.",
    category: "monitor",
    bestseller: true,
  },
  {
    id: "mtr22",
    name: "Gigabyte M27Q (Rev 2.0)",
    images: [monitor_2_1, monitor_2_2],
    price: 31_099,
    description: "Curved monitor with adaptive sync.",
    category: "monitor",
    bestseller: false,
  },
  {
    id: "mtr23",
    name: "ASUS ProArt PA278QV",
    images: [monitor_3_1, monitor_3_2],
    price: 30_849,
    description: "Smart monitor with built-in apps and speakers.",
    category: "monitor",
    bestseller: false,
  },
  {
    id: "mtr24",
    name: "Acer Nitro XV272U V",
    images: [monitor_4_2, monitor_4_1],
    price: 32_499,
    description: "IPS panel monitor with minimal bezels.",
    category: "monitor",
    bestseller: true,
  },
  {
    id: "mtr25",
    name: "Dell S2722QC",
    images: [monitor_5_1, monitor_5_2],
    price: 28_799,
    description: "Full HD 165Hz gaming monitor with vibrant colors.",
    category: "monitor",
    bestseller: false,
  }
];