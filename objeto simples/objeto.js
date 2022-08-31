let amigo = {nome: 'josé',seco: 'M', peso: '75.8',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}

}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)