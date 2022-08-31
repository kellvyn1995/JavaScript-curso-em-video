function verificar(){
    var data = new Date() //pegar a data atual
    var ano = data.getFullYear() //pegar o ano com 4 digitos
    var fano = document.getElementById('txtano') // pega pelo id
    var res = document.querySelector('div#res') // forma moderna
    if (fano.value.length == 0 || Number(fano.value) > ano) {  // se estiver vazio ou ano atual
        window.alert('[ERRO]verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//pegando pelo nome repare o 'S' elements ou seja seleciona todos
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // criando uma tag html usando js
        img.setAttribute('id','foto') // dando os atributos a tag criada
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 &&  idade < 10){
                //criança
                img.setAttribute('src', 'img/menino.jjg') // novos atributos a imagem
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/adolecente m.jpg') // novos atributos a imagem
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'img/homem.jpg') // novos atributos a imagem
            }else{
                // idoso
                img.setAttribute('src', 'img/velho.jpg') // novos atributos a imagem
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 &&  idade < 10){
                //criança
                img.setAttribute('src', 'img/menina.jpg') // novos atributos a imagem
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/adolecente f.jpg') // novos atributos a imagem
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'img/mulher.jpg') // novos atributos a imagem
            }else{
                // idoso
                img.setAttribute('src', 'img/velha.jpg') // novos atributos a imagem
            } 
        } 
        res.style.textAling = 'center' // usando js para centraliza o elemneto com css 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.setAttribute('width', '300')
        res.appendChild(img) // adicinar um elemento no caso a tag img
    }
}