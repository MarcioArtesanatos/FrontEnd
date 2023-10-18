import Image from "next/image";
import header from '../../../public/header_politica.jpg';

export default function PoliticaDePrivacidade() {
    return (
        <div className="container">
            <div className="header">
                <Image src={header} alt="Política de Privacidade" />
            </div>

            <div className="flex flex-col justify-center text-center items-center md:p-5 p-16 text-black/75 bg-light">
                
                <p className="text-xl font-bold">Certificado de Segurança SSL</p>
                <p>Na loja todas as páginas estão em ambiente seguro, como pode verificar o <span className="font-bold">cadeado verde</span> na URL. Todos os dados são criptografados, garantindo segurança total às transações.</p><br />

                <p className="text-xl font-bold">Compartilhamento de Informações</p>
                <p>A loja não irá vender, alugar ou transferir para terceiros seus dados. Entretanto, essas informações podem ser agrupadas e utilizadas, internamente, como estatísticas genéricas, visando obter um melhor entendimento do perfil dos usuários para aperfeiçoamento dos produtos e serviços oferecidos no site.</p><br />

                <p className="text-xl font-bold">E-mail de Ofertas e Serviços</p>
                <p>O envio de e-mails será feito apenas com o seu consentimento e poderá ser desativado há qualquer momento com um clique em um link de de cadastro existente dentro das newsletters. No entanto, após requisitar o cancelamento a Ioja poderá levar até sete dias para processar sua solicitação. A loja é contra o envio de e-mails sem autorização prévia (conhecidos como SPAM). Ao se cadastrar em nosso site, você poderá escolher se deseja ou não receber e-mails com informações e promoções da loja.</p><br />

                <p className="text-xl font-bold">Propriedade das Informações</p>
                <p>Todas as informações contidas neste site são propriedade da loja, portanto, não poderão ser alteradas, copiadas, extraídas ou de qualquer forma utilizadas sem a prévia e expressa autorização por escrito. Desta forma, ao acessar o site, o usuário fica ciente que a utilização indevida das informações aqui contidas pode acarretar sanções civis e criminais.</p><br />

                <p className="text-xl font-bold">Histórico de Produtos Visualizados</p>
                <p>Na loja, o uso do histórico (cookies) é feito apenas para reconhecer um visitante constante e melhorar a experiência de compra. Os cookies são pequenos arquivos de dados transferidos de um site da web para o disco do seu computador e não armazenam dados pessoais.</p><br />

                <p className="text-xl font-bold">Envio de E-mails</p>
                <p>A loja nunca envia e-mails solicitando confirmação de dados/cadastro ou com anexos executáveis (extensão exe, com, scr, bat) e links para download. Os links de nossos e-mails levam diretamente para o site da loja.</p><br />
                            
            </div>
        </div>
    )
}