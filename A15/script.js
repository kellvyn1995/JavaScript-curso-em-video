function contar(){
    let ini = document.getElementById('txti') // variaveis criadas com LET so tem valor dentro da função onde foi criada
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // LENGTH é o comprimento ou seja quantas letras tem dentro do input
        window.alert('[ERRO] falta dados!')
        res.innerHTML = 'impossivel contar!'
    } else {
        res.innerHTML = 'contado: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('passo invalido! considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c= i; c<=f; c+= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            // contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    } 
    

}