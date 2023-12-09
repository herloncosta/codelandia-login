const btnCalculate = document.getElementById('btnCalculate')

// executa a função quando o botão é clicado
btnCalculate.onclick = function(event) {
  const userInput = document.getElementById('userInput')
  const outputResult = document.getElementById('outputResult')
  const alert = document.getElementById('alert')
  const value = parseInt(userInput.value)

  // limpa o texto do alerta e remove a classe alert do css 
  alert.textContent = ""
  alert.removeAttribute('class', 'alert')

  // cria um alerta na tela, caso o usuário não informe um número válido
  if (!value) {
    alert.textContent = "Nenhum valor foi digitado!"
    alert.setAttribute('class', 'alert')
  }
  // cria um alerta na tela informando que o número não pode ser negativo
  if (value <= 0) {
    alert.textContent = "O valor deve ser um inteiro positivo!"
    alert.setAttribute('class', 'alert')
  }

  // em caso de sucesso, insere o resultado na tela
  outputResult.textContent = somarNumerosPrimos(value)

  userInput.value = ""
  userInput.focus()
}

// processa o valor retornando a soma dos números primos
function somarNumerosPrimos(numeroLimite) {
  let soma = 0

  for (let numero = 0; numero < numeroLimite; numero++) {
    if (numero % 3 === 0 || numero % 5 === 0) {
      soma += numero
    }
  }

  return soma
}