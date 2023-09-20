const prompt = require('prompt-sync')();
const Logic = require('./logico.js');
const sequelize = require('./banco.js');
const Produto = require('./produto.js');

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Tabelas sincronizadas com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar tabelas:', error);
    }

    
})();

console.log("-- MENU DE MANUTENÇÃO DE PRODUTOS --");

do{
    console.log("\nMENU PRINCIPAL")
    console.log("1 - Movimentar Produto");
    console.log("2 - Cadastrar produto");
    console.log("3 - Consultar Quantidade");
    console.log("4 - Sair");

    let opcao = prompt("Escolha uma opção para prosseguir: ");

    switch (opcao) {
        case "1":
            menuMovimentacao()
            break;
        case "2":
            Logic.cadastra(recebeNome())
            break;
        case "3":
            Logic.consultaQuantidade(parseInt(recebeId()))
            break;
        case "4":
            console.log("Até logo!")
            Exit();
            break;
        default:
            console.log("opção invalida")
            break;
    }
    
}while(true)

function menuMovimentacao() {
    let mov = prompt("Digite E para registrar uma entrada, S para registrar uma saida ou C para cancelar a operação: ");

    if(mov == "c" || mov == "C"){
        console.log("Operação cancelada")
        return

    }else if(mov == "s" || mov == "S" || mov == "e" || mov == "E"){
        registraMovimento(Logic.movimentaProduto(parseInt(recebeId()), parseInt(recebeQuant()), mov))
    }else {
        console.log("Escolha inválida")
    }
}

//função que retorna o ID do produto
function recebeId() {
    return prompt("Insira o ID do produto: ")
}

//função que retorna o nome do produto
function recebeNome() {
    return prompt("Insira o nome do produto: ")

}

//função que retorna a quantidade
function recebeQuant() {
    return prompt("Insira a quantidade do movimento: ")
}

/*
function cadastroResultado(resultado){
 if(resultado != false){
        console.log("Cadastro realizado com sucesso")
        
    }else{
        console.log("Falha no cadastro")
    } 
}*/

function registraMovimento(registro){
    if(registro){
        console.log("Registro realizado com sucesso")
    }else{
        console.log("Falha no registro")
    }

}
