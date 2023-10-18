import Image from "next/image";
import header from '../../../public/header_produtos.jpg';
import Produto from "../components/Produto";

export default function Produtos() {
    return (
        <div className="container">
            <div className="titulo">
                <Image src={header} alt="Header" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center p-16 text-black/75 bg-light">
                    <Produto/>
                </div>
            </div>
        </div>
    )
}
