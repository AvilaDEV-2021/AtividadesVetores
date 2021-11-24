function combinaVetor(array_1, array_2){
    const resultado = []
    var MaiorVetor
    array_1.length >= array_2.length ? MaiorVetor = array_1.length : MaiorVetor = array_2.length
    for (var i = 0; i<MaiorVetor; i++){
        array_1[i] != null ? resultado.push(array_1[i]) : false
        array_2[i] != null ? resultado.push(array_2[i]) : false
    }
    return resultado
}

const x = [1,3,5,0,11]
const y = [2,2,4,6,8,10,205,505]

console.log(combinaVetor(x, y))