class Logico{    
    async cadastra(id, nome){
        //validações de NOME e ID
        if(validaId(id)){
            console.log("Erro!! Id inválido")
            return
        }
        if(validaNome(nome)){
            console.log("Erro!! Nome do produto deve conter no maximo 10 caracteres")
            return
        }
        
        /* Adicionar a função de cadastr/criar querry com os paramentros ID e NOME. Pode ser feito um IF/ELSE ou TRY/CATCH pra fazer o tratamento e excessão da persistencia no banco */

        return true
    }

    async movimentaProduto(id, quant, tipo){
        /* Adicionar a função que fara adição/subtração de um produto com retorno Boolean considerando o sucesso e a falha do registro*/
    }

    async consultaQuantidade(id){
        // Aqui deverá ser incluído o metodo que usará o ID do parametro para fazer a SELECT+JOIN das tabelas do banco, trazendo as informações em um objeto que sera impresso
    }

    //Valida se o Id é um inteiro 
    async validaId(id){
        return !Number.isInteger(id) || id == null
    }

    //Verifica se o nome é maior que 10 caracteres
    async validaNome(nome){
        return nome.length > 10 || nome == ""
    }
}

module.exports = new Logico();