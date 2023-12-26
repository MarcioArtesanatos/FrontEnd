import Image from "next/image";

export default function Despoimentos({ text, foto, name, cidade }) {
    return (
        <div className="w-72 line bg-light/40 backdrop-blur-md rounded flex flex-col justify-center items-center p-5 ">
            <Image src={foto} className="w-44 my-2 rounded-full" alt="Depoimento" />
            <h2 className="text-xl font-bold text-white text-center"><span className="text-black/75 text-xl font-normal">&#34;{text}&#34;</span></h2> <br />
            <h2 className="font-bold">{name} - {cidade}</h2>

        </div>
    )
}