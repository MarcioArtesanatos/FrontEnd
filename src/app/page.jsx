import bgCrianca from "../../public/bgCrianca.jpg"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faShieldAlt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Blog from './components/Blog';
import Despoimentos from './components/Depoimentos';
import Image from 'next/image';
import danila from '../../public/danila.jpg';
import leonardo from '../../public/leonardo.jpg';
import tiago from '../../public/tiago.jpg';
import modelo from '../../public/modelo.jpg';
import Produto from "./components/Produto";

const CardIdade = ({ idade, diaMes, link }) => {
  return (
    <Link href={link} className='border-dashed border-4 border-blue-500 hover:border-white text-blue-500 p-10 md:p-2 text-4xl text-center font-black font-lobster hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all duration-300 md:first-letter md:flex md:gap-2'>
      <h2>{idade}</h2>
      <p>{diaMes}</p>
    </Link>
  )
}

export default function Home() {

  return (
    <div className="relative">
      <div className='w-screen'>
        <Image src={bgCrianca} alt='desenho de crianças brincando com brinquedos de madeira' />
      </div>

      <main className='bg-light w-full pt-10'>
        <div className='flex md:flex-col justify-center items-center gap-5 '>
          {/* ... */}

          <div className=' mb-16 flex justify-center items-center border border-solid rounded-lg border-primaryDark px-10 py-5'>
            <FontAwesomeIcon icon={faTruckFast} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl flex'>Entrega Rápida</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Para todo Brasil</p>
            </div>
          </div>
          <div className=' mb-16 flex justify-center items-center px-10 py-5 border border-solid rounded-lg border-primaryDark'>
            <FontAwesomeIcon icon={faCreditCard} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl'>Parcelamento</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Em até 6x sem juros</p>
            </div>
          </div>
          <div className=' mb-16 flex justify-center items-center px-10 py-5 border border-solid rounded-lg border-primaryDark'>
            <FontAwesomeIcon icon={faShieldAlt} className='h-10 text-blue-500 mr-2' />
            <div>
              <h2 className='text-blue-500 font-bold text-3xl'>Loja Segura</h2>
              <p className='text-black/75 text-sm -mt-1 text-center'>Selo SSL de proteção</p>
            </div>
          </div>
        </div>

        <div className='px-16 md:px-5 w-full h-auto flex text-center'>

          <div className=' w-full rounded-xl flex justify-center items-center flex-col'>
            <h2 className='text-black/75 font-bold py-10 text-4xl '>
              Compre por Categoria
            </h2>
            <div className='flex md:flex-col gap-5'>
              <CardIdade idade="0 - 24" diaMes="Mês" link="/por-idade" />
              <CardIdade idade="3 - 5" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="5 - 7" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="7 - 9" diaMes="Anos" link="/por-idade" />
              <CardIdade idade="9 - 12" diaMes="Anos" link="/por-idade" />
            </div>

            <div className='bg-gradient-to-r w-screen mt-10 mb-10'>
              <h2 className='uppercase mt-24 text-black/75 font-bold pb-10 text-4xl '>
                Produtos
              </h2>
              <div className='py-5 flex flex-wrap justify-center'>
                <Produto/>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <div className='flex flex-col w-screen justify-center items-center p-16 bg-primaryDark'>
        <h2 className='text-4xl text-white font-bold'>Depoimentos</h2>
        <p className="text-2xl pb-10 font-bold text-yellow-400">Veja o que nossos clientes estão falando...</p>
        <div className='flex gap-5 flex-wrap justify-center'>
          <Despoimentos
            foto={danila}
            text="Brinquedos sensacionais e com preços super acessíveis. Vou comprar sempre!"
            name="Danila Ionan"
            cidade="São Lourenço"
          />
          <Despoimentos
            foto={leonardo}
            text="Minha filha adora os brinquedos do Márcio. Compro sempre. Recomendo."
            name="Leonardo Ortiz"
            cidade="São Lourenço"
          />
          <Despoimentos
            foto={tiago}
            text="Grande variedade e preços excelentes. Entrega super rápida. Atendimento nota 1000."
            name="Tiago Ribeiro"
            cidade="São Paulo"
          />
        </div>
      </div>

      <div className='flex flex-col w-screen justify-center items-center md:p-5 my-10'>
        <h2 className='text-4xl text-black/75 font-bold'>Blog</h2>
        <div className='flex flex-wrap justify-center items-center gap-5'>
          <Blog
            link={modelo}
            title="A importância dos brinquedos educativos para crianças"
            text="O brincar é uma atividade essencial para o desenvolvimento infantil. É através da brincadeira que as crianças aprendem sobre o mundo ao seu redor, desenvolvem suas habilidades motoras, cognitivas, sociais e emocionais."
          />
          <Blog
            link={modelo}
            title="Como escolher brinquedos adequados para cada idade"
            text="Ofereça dicas e orientações para pais e cuidadores sobre como selecionar brinquedos educativos apropriados para a idade e estágio de desenvolvimento de uma criança. Discuta fatores como segurança, interesse da criança."
          />
          <Blog
            link={modelo}
            title="Opções para Crianças com Necessidades Especiais"
            text="Discuta brinquedos educativos adaptados para crianças com diferentes necessidades, destacando a importância da inclusão e como esses brinquedos podem apoiar o desenvolvimento de todas as crianças."
          />
        </div>
      </div>
    </div>
  );
}
