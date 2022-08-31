function carregar() {
    var msg = window.document.getElementById('msg') //pegando pelo id da div
    var img = window.document.getElementById('imagem') //pegando pelo id da tag
    var data = new Date() //pegando a data 
    var hora = data.getHours() // pegando9 a hora
    msg.innerHTML = `Àgora são ${hora} horas.` //mensagem se sera mostrada na div 
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'img/01.jpg' // alterando a img da tag hmtl
        document.body.style.background = '#e2cd9f' // alterando a cor de fundo 
    } else if (hora >= 12 && hora <= 18){
        // bom dia
        img.src = 'img/02.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // bom dia
        img.src = 'img/03.jpg'
        document.body.style.background = '#515154'
    }
}