"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CarrosselCompra from '../components/CarrosselCompra';
import { useState } from 'react';
import Card from '../components/Card';



export default function Compra() {

  const [count, setCount] = useState(0)

  return (
    <div className="p-16 bg-light">
      <div className="flex justify-center rounded-lg p-10 ">
        <div className="flex items-center justify-center  h-full">
          {/* <CarrosselCompra primeira={image} segunda={image} terceira={image} title="foto de um foguete" /> */}
        </div>
        <div className=" w-[40%] text-black/75">
          <h2 className="text-5xl pb-2 border-b-2 border-black/75 font-bold">Foguete</h2>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellow-500 py-5" />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure beatae quod cumque numquam possimus dolorum dicta voluptates facere eaque, minima cum quidem odit officiis magni rerum quis tempore dolores vero.</p>
          <div className='flex justify-start items-center gap-2 py-10'>
            <p className='text-2xl line-through'>$372.00 </p><span className='text-blue-500 font-bold text-3xl '>$334.80</span>
          </div>
          <div className='flex gap-5'>
            <div className="flex w-28 items-center justify-center gap-5 border border-white ">
              <button
                className="text-3xl text-white w-full h-full bg-black/90 hover:text-black/90 hover:bg-white transition-all duration-300"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <p className="text-xl text-vermelho">{count}</p>
              <button
                className="text-3xl text-white w-full h-full bg-black/90 hover:text-black/90 hover:bg-white transition-all duration-300"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button className='bg-black/90 px-5 py-2 text-white hover:bg-white hover:text-black font-bold transition-all duration-300'>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className='p-10'>
        <h2 className='text-blue-500 font-bold text-xl py-5'>Descrição Completa</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, sit. Eligendi, obcaecati similique. Pariatur rem dolore ut eius, suscipit nam laboriosam, consequatur, nostrum earum obcaecati quas nemo odit sapiente cumque.
        </p><br />
      </div>
      <div className='p-10'>
        <h2 className='text-blue-500 font-bold text-xl py-5'>Produtos Relacionados</h2>
        <div className='flex items-center justify-center gap-10'>
          {/* <Card title="Caminhão" preço=" R$ 10,00" link={elicoptero} href="compra" />
          <Card title="Caminhão" preço=" R$ 10,00" link={elicoptero} href="compra" />
          <Card title="Caminhão" preço=" R$ 10,00" link={elicoptero} href="compra" /> */}
        </div>
      </div>
    </div>
  )
}