const Produto = require("./produto.js");
const MovimentoProduto = require("./movimentacao.js");
const database = require('./banco.js')

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
      await MovimentoProduto.create({
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
    try {
      // await database.sync();
  
      // const productId = id;
  
      const results = await Produto.findAll({
        attributes: [
          'nome',
          [
            database.fn(
              'SUM',
              database.literal(
                "CASE WHEN tipo = 'e' OR tipo = 'E' THEN qtdMovimento ELSE -qtdMovimento END"
              )
            ),
            'quantidade_total',
          ],
        ],
        include: [
          {
            model: MovimentoProduto,
            where: {
              produtoId: id,
            },
            attributes: [],
          },
        ],
        group: ['Produto.nome'],
      });
  
      console.log('Query results:', results);
  
      for (const row of results) {
        console.log(`Nome: ${row.nome}`);
        console.log(`Quantidade total: ${row.quantidade_total}`);
      }
    } catch (error) {
      console.error('Error executing Sequelize query:', error);
    }
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
