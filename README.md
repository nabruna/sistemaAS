Antes de executar o codigo, instale os pacotes com NPM INSTALL

const dbquery = "SELECT nome, SUM(CASE WHEN tipo = 'e' || tipo = 'E' THEN qtdMovimento ELSE -qtdMovimento END) AS quantidade_total FROM produtos JOIN movimentacaos ON movimentacaos.produtoId = produtos.id WHERE movimentacaos.produtoId = ? GROUP BY nome;";