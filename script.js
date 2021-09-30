function Converter() {
  var altura = document.getElementById("altura");
  var valorAltura = altura.value;
  var peso = document.getElementById("peso");
  var valorPeso = peso.value;
  var alturaNumerica = parseFloat(valorAltura / 100);
  var pesoNumerico = parseFloat(valorPeso);

  var imc = pesoNumerico / alturaNumerica ** 2;
  console.log(parseFloat(imc.toFixed(2)));

  var resultado = document.getElementById("resultado");
  if (imc < 18.5) {
    resultado.innerHTML =
      "Seu IMC é de " +
      imc.toFixed(2) +
      "(magro) e está abaixo do recomendado!";
  } else if (imc < 24.9 && imc > 18.5) {
    resultado.innerHTML =
      "Seu IMC é de " +
      imc.toFixed(2) +
      "(normal) parabéns você está dentro do normal!";
  } else if (imc < 30 && imc > 24.9) {
    resultado.innerHTML =
      "Seu IMC é de " +
      imc.toFixed(2) +
      "(sobrepeso) e está acima do recomendado!";
  } else if (imc > 30) {
    resultado.innerHTML =
      "Seu IMC é de " +
      imc.toFixed(2) +
      "(obeso) e está muito acima do recomendado!";
  }
}