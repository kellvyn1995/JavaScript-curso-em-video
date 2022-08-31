
var massa = ['panne','parafuso','espaguete','farfalle','elbow']
var molho = ['branco','vermelho','bolonhesa','alho e óleo','rosê']
var temperos = ['cebola','orégano','cebolinha','manjerição','pimenta do reino','pimenta calabresa']
var ingredientes = ['milho','cenoura','azeitona','presunto','cogumelo','calabresa','mussarela','bacon','tomate','frango','palmito','uva passa','alho frito','ovo cozido']


for (var c = 1; c < 9; c++ ){
//massa
var inp = document.createElement('input') //criando input
inp.type = 'checkbox' // colocando os parametros html
inp.name = massa[c] // se for strint entre ''
inp.id = massa[c]
var passo1 = document.querySelector('div#passo1') // localizando div na arvore html
passo1.appendChild(inp) //adicionando elemto filho
var lab = document.createElement('label') // criando label
lab.id = 'opcao'
lab.for = massa[c] // colocando os parametros html do label
lab.innerHTML = massa[c].toUpperCase() // maiusculo
passo1.appendChild(lab)

// molhos
var inp = document.createElement('input') //criando input
inp.type = 'checkbox' // colocando os parametros html
inp.name = molho[c] // se for strint entre ''
inp.id = molho[c]
var passo2 = document.querySelector('div#passo2') // localizando div na arvore html
passo2.appendChild(inp) //adicionando elemto filho
var lab = document.createElement('label') // criando label
lab.id = 'opcao'
lab.for = molho[c] // colocando os parametros html do label
lab.innerHTML = molho[c].toUpperCase() // maiusculo
passo2.appendChild(lab)

//temperos
var inp = document.createElement('input') //criando input
inp.type = 'checkbox' // colocando os parametros html
inp.name = temperos[c] // se for strint entre ''
inp.id = temperos[c]

var passo3 = document.querySelector('div#passo3') // localizando div na arvore html
passo3.appendChild(inp) //adicionando elemto filho
var lab = document.createElement('label') // criando label
lab.id = 'opcao'
lab.for = temperos[c] // colocando os parametros html do label
lab.innerHTML = temperos[c].toUpperCase() // maiusculo
passo3.appendChild(lab)

// ingredientes
var inp = document.createElement('input') //criando input
inp.type = 'checkbox' // colocando os parametros html
inp.name = ingredientes[c] // se for strint entre ''
inp.id = ingredientes[c]

var passo4 = document.querySelector('div#passo4') // localizando div na arvore html
passo4.appendChild(inp) //adicionando elemto filho
var lab = document.createElement('label') // criando label
lab.id = 'opcao'
lab.for = ingredientes[c] // colocando os parametros html do label
lab.innerHTML = ingredientes[c].toUpperCase() // maiusculo
passo4.appendChild(lab)
}

