//const a = [5, 8, 10, 3, 6]

function inverte(array){
    const a = new Array
    for (var i  = array.length - 1;  i>=0; i--){
        a.push(array[i])
    }
    return a
}

const a = [5, 8, 10, 3, 6]
const x = inverte(a)
console.log(x)

