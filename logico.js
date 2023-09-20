const Produto = require("./produto.js");
const MovimentoProduto = require("./movimentacao.js");

class Logico {
  async cadastra(nome) {
    try {
      if (validaNome(nome)) {
        console.log(
          "Erro!! Nome do produto deve conter no maximo 10 caracteres"
        );
        return;
      }
      console.log("chegou");
      await Produto.create({ nome: `${nome}` });
      console.log("chegou depois");

      console.log("Produto cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error.message);
    }
  }

  async movimentaProduto(id, quant, tipo) {
    try {
      await MovimentoProduto.create({
        qtde_mov: quant,
        tipo: tipo,
        id_produto: id,
      });
      console.log("Registro de movimentação realizado com sucesso");
    } catch (error) {
      console.error("Erro ao registrar movimentação:", error);
    }
  }

  async consultaQuantidade(id) {
    // Aqui deverá ser incluído o metodo que usará o ID do parametro para fazer a SELECT+JOIN das tabelas do banco, trazendo as informações em um objeto que sera impresso
    try {
      const resultado = await MovimentoProduto.findAll({
        where: { id_produto: id },
      });
      console.log("Consulta de quantidade realizada com sucesso:", resultado);
      return resultado;
    } catch (error) {
      console.error("Erro ao consultar quantidade:", error);
      return null;
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
