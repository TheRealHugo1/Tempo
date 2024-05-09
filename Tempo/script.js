let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function cliqueNoBotao() {
    let cidade = document.querySelector(".local").value


    buscarCidade(cidade)
}

async function buscarCidade(cidade) {


    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric")
        .then(resposta => resposta.json())

    // await = esperar
    // fetch -> ferramenta do JavaScrip para acessar servidores
    // json = JavaScript Object Notation (formato que o JavaScript entende)

    colocarNaTela(dados)

}

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

    // math.floor = ferrmenta em JavaScript para arredondar valores
}