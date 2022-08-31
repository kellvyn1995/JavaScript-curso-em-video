function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value) // convertendo a string em int
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')// criando um elemento tag option
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // adicionar um elemento filho
            c++
        }
    }
}