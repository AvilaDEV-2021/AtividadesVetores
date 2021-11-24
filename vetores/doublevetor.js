function combinaVetor(array_1, array_2){
    const a = []
    if (array_1.length>=array_2.length){
        var c = array_1.length
    }
    else{
        var c = array_2.length
    }

    for (var i = 0; i<c; i++){
            if(array_1[i]!=null){
                a.push(array_1[i])
            }
            if (array_2[i]!=null){
                a.push(array_2[i])
            }
    }
    return a
}


const x = [1,3,5,7,9,100,1234]
const y = [2,4,6,8,10,12]

console.log(combinaVetor(x, y))
