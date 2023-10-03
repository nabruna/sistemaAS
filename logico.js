const Produto = require("./produto.js");
const database = require('./banco.js');
const Movimentacao = require("./movimentacao.js");

class Logico {
  async cadastra(nome) {
    try {
      if (validaNome(nome)) {
        console.log(
          "Erro!! Nome do produto deve conter no maximo 10 caracteres"
        );
        return;
      }
      await Produto.create({ nome });

      console.log("Produto cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error.message);
    }
  }

  async movimentaProduto(idProduto, quant, tipo) {
     try {
      await Movimentacao.create({
        qtdMovimento: quant,
        tipo: tipo,
        produtoId: idProduto
      });
      console.log("Registro de movimentação realizado com sucesso");
    } catch (error) {
      console.error("Erro ao registrar movimentação:", error);
    }
  }

  async consultaQuantidade(id) {
    // Aqui deverá ser incluído o metodo que usará o ID do parametro para fazer a SELECT+JOIN das tabelas do banco, trazendo as informações em um objeto que sera impresso
    
    Movimentacao.findAll({
        attributes: [
          ['tipo', 'tipo'],
          ['produtoId', 'produtoId'],
          [database.col('produto.nome'), 'nome'],
          'qtdMovimento'
        ],
        where: {
          produtoId: id,
        },
        include: [
          {
            model: Produto,
            attributes: [],
          },
        ] ,
      }).then((results) => {
        let qtd = 0
        results[0].dataValues.nome
        // Você pode iterar pelos resultados, se necessário
        for (const result of results) {
          if(result.tipo == 'E' || result.tipo == 'e'){
            qtd += result.qtdMovimento
          }
          if(result.tipo == 'S' || result.tipo == 's'){
            qtd -= result.qtdMovimento
          }
        } 
        console.log(`Nome: ${results[0].dataValues.nome}`);
        console.log(`Quantidade: ${qtd}`); 
    }).catch((error) =>{
      console.error('Error executing Sequelize query:', error);
    }) 
  }
}

//Valida se o Id é um inteiro
function validaId(id) {
  return !Number.isInteger(id) || id == null;
}

//Verifica se o nome é maior que 10 caracteres
function validaNome(nome) {
  return nome.length > 10 || nome == "";
}

module.exports = new Logico();
