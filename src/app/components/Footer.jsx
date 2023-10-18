import Image from "next/image"
import logo from "../../../public/logo.png"
import visa from "../../../public/visa.png"
import master from "../../../public/master.png"
import american from "../../../public/american.png"
import rixxer from "../../../public/rixxer.png"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const data = new Date()
    const ano = data.getFullYear()

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="bg-primary p-16 md:p-2 md:py-5 flex md:flex-col justify-center gap-16 w-screen text-light md:space-y-5">
                <div className="flex flex-col mb-10 md:mb-0 items-center">
                    <Image src={logo} className="w-48" alt="Márcio Artesanatos" />
                    <p className="w-64 md:w-auto text-justify mt-5 ">Siga-nos em nossas Redes Sociais</p>
                    <div className="flex gap-5 mt-5">
                        <Link href="https://www.instagram.com/marcio.artesanatos.sl/" target="_blank" className="text-light text-2xl hover:text-primaryDark transition-all duration-300 w-5"><FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100069674319618" target="_blank" className="text-light text-2xl hover:text-primaryDark transition-all duration-300 w-6"><FontAwesomeIcon icon={faFacebook} />
                        </Link>

                    </div>
                </div>
                <div className="flex flex-col space-y-5 md:text-center text-center items-center">
                    <h2 className="uppercase font-bold">Institucional</h2>
                    <Link href="fale-conosco" className="hover:text-primaryDark transition-all duration-300">Fale Conosco</Link>
                    <Link href="/politica-de-privacidade" className="hover:text-primaryDark transition-all duration-300">Política de Privacidade</Link>
                    <Link href="politica-de-troca-e-devolucao" className="hover:text-primaryDark transition-all duration-300">Política de Troca e Devolução</Link>
                    <Link href="quem-somos"className="hover:text-primaryDark transition-all duration-300">Quem Somos</Link>
                </div>

                <div className="flex flex-col justify-start md:items-center items-center space-y-5">
                    <h2 className="uppercase font-bold">onde estamos</h2>
                    <h2 className="w-72 text-center">
                        <span className="font-bold">Endereço:</span> Rua Barão do Rio Branco, 961, Porta do Céu, São Lourenço - MG, 37470-000
                    </h2>
                    <h2 className="uppercase font-bold">telefone</h2>
                    <Link href="https://wa.me/5535998647172" target="_blank" className="flex items-center hover:text-primaryDark transition-all duration-300 mt-5">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-4 mr-2 " />(35) 99864-7172
                    </Link>
                    {/* <div className="flex">
                        <Image src={visa} alt="imagem da bandeira visa"
                            className="h-16 w-16" />
                        <Image src={master} alt="imagem da bandeira visa"
                            className="h-14 w-16" />
                        <Image src={american} alt="imagem da bandeira visa"
                            className="h-16 w-16" />
                        
                    </div> */}
                </div>

                <div className="flex flex-col justify-center items-center gap-5">
                </div>
            </div>
            <div className="p-2 text-light flex flex-col items-center justify-center text-center bg-primaryDark w-screen">
                <p className="text-xs">{ano} Marcio Artesanatos - CNPJ: 25.101.029/0001-90 - Todos os Direitos Reservados</p>
                <div className="flex">
                    <p className="text-sm">Developed by&nbsp; </p>{' '}
                    <a href="" className="font-bold text-light hover:text-secondary transition ease-in-out duration-300 flex justify-center items-center">
                        <Image src={rixxer} alt="Rixxer" className="w-14 mx-2" />
                    </a>
                </div>
            </div>
        </div>
    )
}