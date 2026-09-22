const salarioInput = document.getElementById("salario")
const button = document.querySelector("button")
const paragrafo = document.getElementById("valor")

button.addEventListener("click", calcularAumento)

function calcularAumento() {
    const salario = salarioInput.valueAsNumber

    if (salario < 1000) {
        const aumento = salario * 0.20
        const novoSalario = salario + aumento
        paragrafo.innerText = "Novo salario = R$" + novoSalario.toFixed(2) + " | Aumento = R$" + aumento.toFixed(2) + " | Porcentagem = 20%"
    }

    else if (salario < 3000) {
        const aumento = salario * 0.15
        const novoSalario = salario + aumento
        paragrafo.innerText = "Novo salario = R$" + novoSalario.toFixed(2) + " | Aumento = R$" + aumento.toFixed(2) + " | Porcentagem = 15%"
    }

    else if (salario < 8000) {
        const aumento = salario * 0.10
        const novoSalario = salario + aumento
        paragrafo.innerText = "Novo salario = R$" + novoSalario.toFixed(2) + " | Aumento = R$" + aumento.toFixed(2) + " | Porcentagem = 10%"
    }

    else {
        const aumento = salario * 0.05
        const novoSalario = salario + aumento
        paragrafo.innerText = "Novo salario = R$" + novoSalario.toFixed(2) + " | Aumento = R$" + aumento.toFixed(2) + " | Porcentagem = 5%"
    }
}