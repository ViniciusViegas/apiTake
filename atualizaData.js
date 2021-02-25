//Atualiza o arquivo api/data/repositoriosTake.json
//Caso ocorra 'API rate limit exceeded' por rodar varias vezes o programa basta comentar o codigo da linha 3 no server.js
//Para habilitar basta descomentar o codigo da linha 3 no server.js
const request = require("request");

//Defino minhas variaveis
var dados;
var repos = [];
var count = -1;
var encerra = false;

//Inicio minha requisição
request({
	url: "https://api.github.com/orgs/takenet/repos",
	json: true,
    headers: {'user-agent': 'node.js'}
},(err,responde,body)=>{
    //Vou ver cada repositorio
	body.forEach(function(repositorio){
        //Vou separar em um objeto os 5 primeiros repositorios que utilizam C# como linguagem
        //O GitHub já envia em ordem crescente de data então não vou precisar reorganizar meu objeto
		if(repositorio.language == 'C#' && encerra == false){
			count++;
            if(count <= 4){
                repos[count] = {
                    'name': repositorio.name,
                    'description': repositorio.description 
                } 
                // repositorio;
            }else{
                encerra = true;
            }
		}
	});
    //Vou gravar o objeto(convertido para JSON) no arquivo que vai armazenar nosso JSON
	var fs = require('fs');
	fs.writeFile("api/data/repositoriosTake.json", JSON.stringify(repos), function (err) {
	  if (err) return console.log(err);
	});
	
});