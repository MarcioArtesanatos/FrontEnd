import Image from "next/image";
import header from '../../../public/header_conta.jpg';

export default function Produtos() {
    return (
        <div className="container">
            <div className="titulo">
                <Image src={header} alt="Header" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col p-16 text-black/75 bg-light">
                    <p className="text-xl">Em Construção!</p><br />
                </div>
            </div>
        </div>
    )
}
