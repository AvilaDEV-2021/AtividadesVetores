var array = [1, 3, [1,2], 3,6,1,[2,1,[100]],[4,5,[1,2]], 2]
var soma = 0

function ArrayPlano(arr){
    
    var arr_aux = [] 
    
    function separaArray(arr){
      for (var i = 0; i<arr.length;i++){
        var NovoArray = arr[i]
        if (Array.isArray(NovoArray) == false){
          arr_aux.push(NovoArray)
        }
        else{
          separaArray(NovoArray)
        }
      }  
    }

    separaArray(arr)
    return arr_aux
}

var outroArray = ArrayPlano(array)

function somaVetor(arr){
  for (i=0; i<arr.length; i++){
    soma += arr[i]
  }
  return soma
}

console.log(somaVetor(outroArray))


/* Outra forma de resolver
 
function somarItensVetor(vetor) {​
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {​
        const valor = vetor[i];
        if (Array.isArray(valor)) {​
            soma += somarItensVetor(valor);
        }​ else {​
            soma += valor;
        }​
    }​
    return soma;
}​
let entrada = [2, 4, [3, 3], 10, [1, [8, 6]], 2];
console.log(somarItensVetor(entrada));

*/







