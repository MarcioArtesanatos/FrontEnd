"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NavBarMobile from "./NavBarMobile";
import { faSearch, faShoppingCart, faUser, faUserAlt, faUserAstronaut, faUserCircle, faUserCog } from "@fortawesome/free-solid-svg-icons";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();


  return (
    <Link href={href} className={`${className} group relative z-10  font-bold 
    ${pathname === href ? "text-primaryDark" : "text-black/75"}`}>
      {title}
      <span
        className={`h-px inline-block bg-primaryDark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <div className="md:px-0 bg">
      <NavBarMobile />
      <div className="fixed md:hidden  flex justify-between items-center px-5 bg-zinc-100 w-screen z-10 backdrop-blur-md  ">
        <div className="space-x-5 p-2 divide-primary/75 divide-x flex">
          <Link href="https://www.instagram.com/marcio.artesanatos.sl/"
            target="_blank" className="text-black/75 hover:text-blue-500 transition-all duration-300 flex justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Instagram
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100069674319618"
            target="_blank" className="flex justify-center items-center text-black/75 hover:text-blue-500 transition-all duration-300 pl-5">
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            Facebook
          </Link>
        </div>

        <div>
          <Link href="https://wa.me/5535991216423" target="_blank" className="flex justify-center items-center hover:text-blue-500 transition-all duration-300 text-black/75"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />(35) 99121-6423</Link>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center pt-10">
        <div className=" w-[1000px] flex justify-between items-center p-5 pb-5 md:hidden space-x-10">
          <Link href="/">
            <Image src={logo} alt="logo da empresa" className=" w-48" />
          </Link>
          <div className="flex justify-center items-center">
            <input type="text" className="rounded-s-full px-5 py-2 border border-zinc-300" placeholder="Pesquisar" />
            <button className="border border-primary flex justify-center items-center hover:bg-primaryDark bg-primary rounded-e-full transition-all duration-300">
              <FontAwesomeIcon icon={faSearch} className="text-light h-6 px-5 py-2" />
            </button>
          </div>
          <div className=" cursor-pointer">
            <Link href="/carrinho">
              <FontAwesomeIcon icon={faShoppingCart} className="text-primary h-6 p-4 hover:text-primaryDark transition-all duration-300" />
            </Link>
            <Link href="/conta">
              <FontAwesomeIcon icon={faUserCircle} className="text-primary h-6 p-4 hover:text-primaryDark transition-all duration-300" />
            </Link>
          </div>

        </div>
      </div>
      <nav className="w-screen md:hidden flex justify-center gap-10 items-center pb-5 bg-light">
        <CustomLink href="/" title="Início" />
        <CustomLink href="/quem-somos" title="Quem Somos" />
        <CustomLink href="/produtos" title="Produtos" />
        <CustomLink href="/fale-conosco" title="Contato" />
      </nav>
    </div>
  )
}