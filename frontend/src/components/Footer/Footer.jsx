import React from 'react'
import { assets } from '../../assets/assets.js'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import './Footer.css'
import { Link } from 'react-router-dom';

import {gamers} from '../../assets/gamers.js'
const navbarLinks = [
  {
    id: 1,
    name: "Home",
    link: '/'
  },
  {
    id: 2,
    name: "Collections",
    link: '/collections'
  },
  {
    id: 3,
    name: "BestSeller",
    link: '/bestseller'
  },
  {
    id: 4,
    name: "About Us",
    link: '/aboutus'
  },
]

const businessPartners = [
  {
    id: "abcrdj",
    name: "Robert Downey Jr.",
    character: "Genius, Billionare, Philanthrophist, Playboy & Partner at Blitzon",
    image: gamers.rdj[0],
    review: "You know, I’ve seen a lot of tech in my time — some built by geniuses in caves with a box of scraps. But Blitzon? These guys built something smart, sleek, and actually useful. Gaming rigs, accessories, you name it — it's all here, all fire. Fast, responsive, and cooler than a Stark Expo on launch day. I’m not just a fan, I’m a business partner — and trust me, I don’t partner with anyone unless they’ve got serious game. Blitzon isn’t just the future of gaming tech… it is the future. Suit up, folks. Blitzon brings that rare combo of performance and polish. Every product feels handpicked by someone who actually cares about gamers. I tested their setups personally — buttery smooth FPS, crisp thermals, and not a hint of compromise. It’s not just a store, it’s an experience — and if you’re a gamer, enthusiast, or someone who just wants gear that performs as well as it looks, Blitzon is where you land. Trust me — I’ve flown in suits that can do Mach 3... and this team still impressed me"
  },
  {
    id: "xyzhec",
    name: "Henry Cavil",
    character: "Known for his role as the famous DC superhero Superman & a PC Builder",
    image: gamers.henry_cavil[0],
    review: "As someone who genuinely enjoys building PCs, tweaking performance, and immersing myself in long gaming sessions — I can say Blitzon is the real deal. They’re not just slapping products on a site; they're curating a space where gamers feel seen. From high-end GPUs to mechanical keyboards that feel like Excalibur in your hands, everything is top-tier. And I say that as someone who once rebuilt his PC just because the RAM wasn’t aligned perfectly. Yes, I care — and clearly, so does Blitzon. Blitzon’s entire platform is responsive, intuitive, and actually fun to browse — which is rare these days. Their product range hits that sweet spot between enthusiast and everyday gamer, and their commitment to quality is obvious in every detail. It’s not about throwing parts together — it’s about crafting an experience. Whether you're into immersive single-player worlds or competitive FPS grind sessions, Blitzon has your back. And if you ever feel lost, their team knows exactly what they’re talking about. Trust me — this isn’t a brand built for trends… it’s built for gamers."
  },
  {
    id: "qwenjr",
    name: "Neymar Jr.",
    character: "Gamer, Footballer & Proud Partner at Blitzon",
    image: gamers.neymar_jr[0],
    review: "When I'm not on the field, I’m on the sticks — gaming's my second love. And when it comes to gear, I don’t mess around. Blitzon is that one-stop dream shop for every gamer who wants to level up. From beast-mode PCs to crazy-smooth mice and headsets that feel like you're in the stadium — everything’s top class. It’s not just about how it looks — it’s how it feels when you're locked in, headset on, teammates yelling, and you're clutching 1v3. Blitzon delivers that edge every serious player looks for. What I love most is that Blitzon gets it — they’re gamers themselves. Their site is smooth, their builds are powerful, and they’ve built a brand that’s about passion, not just products. Every item feels like it’s chosen by someone who’s been in a 12-hour Warzone session and still hungry for more. I might’ve missed the Ballon d’Or — but if there was one for gaming gear? Blitzon’s already holding it up. Vamos!"
  },
  {
    id: "jklrgc",
    name: "Roger Clark",
    character: "Voice Actor of iconic Outlaw Arthur Morgan from Red Dead Redemption 2",
    image: gamers.roger_clark[0],
    review: "I’ve seen a lot in my time… crooked lawmen, thievin’ varmints, even folk who call themselves ‘tech experts’ sellin’ shoddy junk to good people. But Blitzon? Now that’s somethin’ else. These folks know their tools — machines built strong, sharp, and faster than a mustang spooked by a rattler. If you’re lookin’ to ride into the world of games, guns blazing, Blitzon’ll set you up with a rig that'll make the Devil himself tip his hat. Ain’t just about the gear either — it’s the way they run things. Honest, smooth, and always reliable. Their site’s quicker than a six-shooter draw, and their parts are as fine as a tailor-made saddle. Whether you're playin' one of them fancy war games or ridin’ through a pixelated prairie, Blitzon gives you the kind of power that makes you feel like you can take on the whole world. You trust 'em, and they won't let you down — and in a world full of snakes, that means somethin'."
  },
  {
    id: "cvbelm",
    name: "Elon Musk",
    character: "Engineer, Meme Lord & Tech Partner at Blitzon",
    image: gamers.elon_musk[0],
    review: "People think I work all day building rockets and running AI simulations... but honestly, sometimes I just want to shoot lasers, crash a hoverbike in Cyberpunk, or quietly rage in Elden Ring. That’s where Blitzon comes in. Their gear? It's like strapping a Falcon engine to your gaming rig. Fast, powerful, and kind of terrifying. I plugged in one of their builds and thought it might actually take off. Literally. Blitzon isn’t some dropshipping rebrand — it’s an ecosystem, built by people who actually game. The UI is clean, the product curation is smart, and the performance? Off the charts. Whether you’re a competitive player or a casual night owl who games between board meetings and rocket launches — this is where you want your tech from. And to those asking, 'Do you really game, Elon?' — buddy, I didn’t pour 300 hours into XCOM Ironman mode to prove myself to you. Blitzon’s the real deal."
  }
]

const Footer = () => {
  return (
    <div className='footer-bg'>
      <div className='relative top-0 left-0 h-full w-full bg-black/65 z-10'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-white/75 h-[fit] w-[90vw] py-7 px-6'>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6'>
            {/* Left Content Section */}
            <div className='col-span-2 sm:col-span-1'>
              <img src={assets.blitzon_logo} className='w-[90px] sm:w-[100px] md:w-[150px]'/>
              <p className='text-xs sm:text-sm lg:text-base'>
                We are thriving in market at sonic's speed. This all has been possible due the support you've shown to us. 
                Keep playing gamers and don't forget to revisit for amazing deals.
              </p>

              {/* Phone & Mail */}
              <p className='flex gap-2 items-center pt-3 text-xs sm:text-sm lg:text-base'>
                <MdMailOutline /> 
                <span> blitzgame@blitzon.com</span>
              </p>
              <p className='flex gap-2 items-center pt-3 text-xs sm:text-sm lg:text-base'>
                <IoPhonePortraitSharp/> 
                <span>+91 9657483236</span>
              </p>

              {/* Social Media Handles */}
              <div className='flex gap-2 pt-5'>
                {
                  [<FaInstagram />, <FaXTwitter/>, <FaLinkedin />].map((item, id) => (
                    <p key={id} 
                      className='text-base sm:text-xl lg:text-2xl cursor-pointer hover:scale-110 transition-all duration-300 hover:text-[#FC1F23]'>
                      {item}
                    </p>
                  ))
                }
              </div>
            </div>

            {/* Links Section */}
            <div className='col-span-2 grid grid-cols-2'>
              {/* Link Section 1 */}
              <div className='space-y-5 mr-2'>
                <h1 className='text-xl sm:text-2xl tracking-wide font-semibold'>Important Links</h1>
                <ul className='flex flex-col gap-4 text-xs sm:text-sm tracking-wide'>
                  {
                    navbarLinks.map(({id, name, link}) => (
                      <li key={id}>
                        <Link to={link} className='hover:text-[#FC1F23] cursor-pointer'>{name}</Link>
                      </li>
                    ))
                  }
                  <li>
                    <span className='hover:text-[#FC1F23] cursor-pointer'>More</span>
                  </li>
                </ul>
              </div>

              {/* Link Section 2 */}
              <div className='space-y-5'>
                <h1 className='text-xl sm:text-2xl tracking-wide font-semibold'>More Products</h1>
                <ul className='flex flex-col gap-4 text-xs sm:text-sm tracking-wide'>
                  {
                    ["Mic", "Speakers", "Mouse Pad", "PC Cabinets", "I Pad"].map((item, id) => (
                      <li key={id}>
                        <span className='cursor-pointer hover:text-[#FC1F23]'>{item}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            {/* Partners */}
            <div className='col-span-2 sm:col-span-1 space-y-4 sm:space-y-5'>
              <h1 className='text-xl sm:text-2xl tracking-wide font-semibold'>Business Partners</h1>
              <ul className='flex flex-col gap-4 text-xs sm:text-sm tracking-wide'>
                {
                  businessPartners.map(({id, name, image, character, review}) => (
                    <li key={id}>
                      <Link to={`/partners/${id}`} className='hover:text-[#FC1F23] cursor-pointer'
                        state={{
                          name, image, character, review
                        }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className='text-xs sm:text-sm w-full mt-10 tracking-wider'>
            <p className='text-center'>
              &copy; {new Date().getFullYear()} Blitzon Pvt. Ltd, All rights reserved --
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer