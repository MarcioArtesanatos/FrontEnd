// Detalhes do Produto
function ProductDetails({ match }) {
    const productId = match.params.id; // Obtém o ID do produto da URL
  
    // Lógica para buscar detalhes específicos do produto pelo ID
    // ...
  
    return (
      <div>
        <h2>Detalhes do Produto {productId}</h2>
        {/* Exiba os detalhes do produto aqui */}
      </div>
    );
  }
  