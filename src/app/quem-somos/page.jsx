import Image from "next/image";
import sobre from '../../../public/sobre.jpg';
import header from '../../../public/header_quemsomos.jpg';

export default function QuemSomos() {
    return (
        <div className="container">
            <div className="titulo">
                <Image src={header} alt="Header" />
            </div>

            <div className="flex md:flex-col justify-center items-center">
            <div className="flex flex-col p-5 text-black/75 bg-light">
                <p className="text-xl">Sejam todos bem vindos à Marcio Artesanatos!</p><br />
                <p className="text-xl">Há 7 anos transformando brinquedos em momentos incríveis.</p><br />
                <p className="text-xl">O brincar é uma oportunidade para o desenvolvimento da criança, pois por meio das brincadeiras elas aprendem e experimentam novos desafios.</p><br />
                <p className="text-xl">Nossos produtos auxiliam o desenvolvimento das crianças, acompanhando as diversas etapas de seu crescimento, possibilitando um universo novo, onde é exercitada a todo momento sua criatividade e imaginação.</p><br />
                <p className="text-xl">Além disso, temos o diferencial de apresentar ao mercado frequentes lançamentos, fazendo com que a brincadeira nunca seja a mesma.</p><br />
                <p className="text-xl">Siga-nos em nossas Redes Sociais e acompanhe de perto as novidades!</p><br />
                <p className="text-xl">Um abraço!</p><br />
            </div>
            <div className="foto md:pr-0 pr-16">
                <Image src={sobre} alt="Criança" />
            </div>
        </div>




        </div>
        
        
    )
}
