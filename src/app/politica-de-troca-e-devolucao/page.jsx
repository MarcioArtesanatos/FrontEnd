import Image from "next/image";
import header from '../../../public/header_trocas.jpg';
import Link from "next/link";

export default function PoliticaDeTrocaEDevolucao() {
    return (
        <div className="container">
            <div className="header">
                <Image src={header} alt="Trocas e Devoluções" />
            </div>
            <div className="flex flex-col p-16 text-black/75 bg-light text-center item-center">
                <p>Não ficou satisfeito? Devolvemos o seu dinheiro!
                    Queremos sempre clientes satisfeitos em nossa loja. Queremos que os produtos causem uma comoção geral de felicidade ao chegar em sua casa para você voltar sempre. Se por algum motivo você ficar decepcionado com a sua compra, faremos o possível para resolver seu problema, seguindo algumas regrinhas simples de trocas, devoluções e reembolsos.</p><br />
                
                <p className="text-xl font-bold">Arrependimento e desistência:</p>
                <p>No caso de trocas e devoluções por arrependimento ou desistência, quando o produto está em perfeitas condições porém não agrada ao cliente, este terá o prazo de 7 (sete) dias, contados a partir da data de recebimento da mercadoria, para fazer a solicitação de devolução por contato telefônico ou por e-mail.</p>

                <p className="text-xl font-bold mt-5">Como proceder em caso de devolução ou troca por arrependimento:</p>
                <p>1. Entrar em contato com o suporte através do e-mail. <br />
                   2. Enviar o produto pelos Correios, com porte pago pelo cliente, para o endereço do remetente. <br /> Importante: o produto deverá estar em sua embalagem original, sem indícios de uso, sem violação do lacre, quando existente, acompanhado de todos os acessórios que possui. <br />
                   A partir do recebimento do produto e confirmação das condições acima, você poderá optar por: <br />
                   - Recebimento de um crédito na Loja no valor total pago, que poderá ser utilizado para compra de outro produto imediatamente, ou em uma compra futura, com validade de 6 meses. <br />
                   - Restituição do valor do produto, pelo mesmo meio de pagamento utilizado no momento da compra. <br />
                   *Caso o pedido já tenha sido enviado e é solicitado o cancelamento, o cliente deverá esperar o produto chegar, enviar o mesmo para o endereço indicado pela empresa e assim será realizada a devolução do valor pago. <br />
                   *A Loja isenta-se da obrigação de trocar qualquer produto cujo defeito tenha sido ocasionado por mau uso, ou atender solicitações fora dos prazos mencionados. <br />
                    Disponibilizamos as medidas em centímetros de nossos produtos para não haver erro na escolha do tamanho. Segundo o Código de Defesa do Consumidor - Artigo 18, não existe a obrigação legal do lojista de realizar trocas por motivos de arrependimento do consumidor quanto à cor, tamanho, modelo, ou qualquer outra hipótese. O direito assegurado ao cliente pelo código de defesa do consumidor é o de realizar trocas apenas em caso de produtos com defeito.</p>
                
                    <p className="text-xl font-bold mt-5">Outras ocorrências:</p>
                    <p>Todas as ocorrências descritas acima, e ainda outras que possam ser identificadas, deverão ser comunicadas à Loja por telefone ou através do e-mail. <br />
                    Produtos devolvidos sem essa comunicação, fora do prazo ou com ausência de itens/acessórios que o acompanhem, poderão ser reenviados sem consulta prévia. <br />
                    Além das ocorrências mencionadas, se ocorrer qualquer das hipóteses abaixo, o recebimento do produto deve ser recusado. <br />
                    - Embalagem aberta ou avariada; <br />
                    - Produto avariado; <br />
                    - Produto em desacordo com o pedido; <br />
                    - Falta de acessórios. <br />
                    Se, ainda assim, você receber o produto, por favor, entre em contato com o suporte da Loja em até 72 hs contadas a partir do recebimento.</p>
                
                    <p className="font-bold mt-5">Para qualquer dúvida adicional, <Link href="/fale-conosco">entre em contato conosco.</Link></p>
            </div>
        </div>
    )
}