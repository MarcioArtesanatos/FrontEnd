"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareSquare, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { useState } from "react";
import Link from "next/link";
import Rating from "./Rating"; // Import your Rating component

  export default function Card({ preco, link, title, ratings, className = "" }) {
  
  const [isTapped, setIsTapped] = useState(false);

    const handleTap = () => {
      setIsTapped(!isTapped);
    };
   
    return (
      <div className={`group bg-blue-100 mr-5 mb-5 md:mr-0 flex flex-col p-5 rounded-xl relative felx justify-center items-center ${className}`}>
        <div className="relative w-80 md:w-64">
          <Image src={link} alt={title} height={500} width={500} className="rounded-xl" />
          <span className="flex justify-center items-center bg-gradient-to-r from-cyan-500/75 to-blue-500/75 backdrop-blur-md absolute w-full top-0 left-0 rounded-xl h-0 group-hover:h-full transition-[height] ease duration-300">
            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.8 }} transition={{ duration: 0.1 }} onClick={handleTap}>
              <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-light font-bold">
                <FontAwesomeIcon icon={faHeart} className={`h-6 ${isTapped ? "text-red-500" : "text-light"} transition ease-in-out duration-300`} />
                Favoritar
              </div>
            </motion.button>
          </span>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-zinc-800 text-xl mt-5 mb-2">
            {title}
          </h2>
          <Rating rating={ratings} />
          <p className="text-xl font-bold text-zinc-800 mt-5">
            R$ {preco}
          </p>
        </div>

        <Link href="#" target="_blank" className="bg-white px-5 py-2 text-black/75 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 border border-black/75 hover:border-white rounded mt-5 w-44 flex justify-center items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Comprar
        </Link>

      </div>
  )
}