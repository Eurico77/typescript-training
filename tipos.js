var tipo = 1;
console.log(tipo);
var idade = 22;
// idade = "22";
console.log(idade);
var minhaIdade;
minhaIdade = 22;
console.log(typeof minhaIdade);
// hobbys
var array = ["futebol", "basquete", "natação"];
console.log(array);
var hobbies = ["futebol", "basquete", "natação"];
console.log(hobbies);
var tuple = ["futebol", 22];
console.log(tuple);
// enums
var Tipo;
(function (Tipo) {
    Tipo[Tipo["FUTEBOL"] = 0] = "FUTEBOL";
    Tipo[Tipo["BASQUETE"] = 1] = "BASQUETE";
    Tipo[Tipo["NATACAO"] = 2] = "NATACAO";
})(Tipo || (Tipo = {}));
var tipor = Tipo.FUTEBOL;
console.log(tipor);
// anny 
var carro = {
    cor: "azul",
    velocidade: 120
};
