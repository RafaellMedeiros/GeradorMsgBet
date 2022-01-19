const textoEntrada = document.querySelector('#entrada');
const textoSaida = document.querySelector('#saida');
const botaoEnviar = document.querySelector('#submit');
const botaoCopiar = document.querySelector('#copiar');
const botaoLimpar = document.querySelector('#limpar')

botaoEnviar.addEventListener('click', () => {
    const textoEnviado = textoEntrada.value;
    modificaTexto(textoEnviado);
});

botaoCopiar.addEventListener('click', () => {

    const content = textoSaida.value;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
})

botaoLimpar.addEventListener('click', () => {
    textoEntrada.value = ''
    textoSaida.value = ''
})

function modificaTexto(texto) {
    let textoAlterado;
    const liga = texto.slice(27, texto.indexOf('Mercado'));
    textoAlterado = texto.slice(texto.indexOf(':') + 1)
    const mercado = textoAlterado.slice(textoAlterado.indexOf(':') + 1, textoAlterado.indexOf('Horario'));
    textoAlterado = texto.slice(texto.indexOf(':') + 1)
    const horario = textoAlterado.slice(-5);
    textoSaida.value = `
🤖 KING BETS BOT 🤖

🏆 Liga: ${liga}
⏰ Minutos
${horario} 
${geraHorarioAlterado(horario, 3)}
${geraHorarioAlterado(horario, 6)}
${geraHorarioAlterado(horario, 9)}
👑Entrada: ${mercado}

🔗 https://www.bet365.com/?nr=1#/AVR/B146/R%5E1/
    `
}

function geraHorarioAlterado(horario, add) {
    const tempo = new Date();
    const horarioQuebrado = horario.split('.')
    let minAlterado =  parseInt(horarioQuebrado[1]) + add
    tempo.setHours(horarioQuebrado[0]);
    tempo.setMinutes(minAlterado)
    let horarioAlterado;
    if (minAlterado > 60) {
        horarioAlterado = tempo.getHours() + '.0' + tempo.getMinutes()        
    } else {
        horarioAlterado = tempo.getHours() + '.' + tempo.getMinutes()
    }
    return horarioAlterado;
} 