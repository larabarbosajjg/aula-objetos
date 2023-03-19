// um objeto é um conjunto de informações que possuem uma chave e um valor

//colocando objetos dentro de objetos
const seventeen = {
    numeroMembros: "13",
    musicas: "200",
  };

seventeen.membro = [{
    nome: "Joshua", 
    posição: "vocalUnit",
    line: "95",
}]

seventeen.membro.push ({
    nome: "DK", 
    posição: "vocalUnit",
    line: "97",
});

seventeen.membro.push ({
nome: "Hoshi",
posição: "performanceUnit",
line: "96",});

seventeen.membro.push ({
  nome: "Wonwoo",
  posição: "hiphopUnit",
  line: "96",});

const vocal = seventeen.membro.filter(
    (membro) => membro.posição === "vocalUnit"
);
console.log (vocal);

//em formato de função:

const listaMembros = seventeen.membro

function filtrarMembro (lista, chave, valor){
  listaMembros.find((item) => item[chave] === valor)
  };

const filtrados = filtrarMembro (listaMembros, 'musicas', '200');

console.log (filtrados); // resposta dá undefined?

// aprendendo a usar o for para acessar o que tem dentro das chaves. cria variável e atribui a ela o que deve ser mostrado.

for (let chaves in seventeen) {
  console.log (`a chave ${chaves} tem o valor ${seventeen[chaves]}`);
}


//para eu definir mais precisamente os outros objetos contidos na chave membro, uso o for in

const chavesDeMembro = Object.keys (seventeen)
console.log (chavesDeMembro);
