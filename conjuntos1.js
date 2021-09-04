// let a = [['a','A'],['a','B'],['b','C']]
// let b = [['a','B'],['b','C']];

function productoCartesiano(arr1,arr2){
    let newArr = [];
    for(let i = 0; i < arr1.length;i++){
        for(let j = 0; j < arr2.length;j++){
            newArr.push([arr1[i],arr2[j]])
        }
    }
    return newArr;
}

function arrayToString(array){
    strArr = []
    for(let i = 0; i < array.length; i++){
        strArr.push(`[${array[i][0].toString()},${array[i][1].toString()}]`)
    }

    return strArr
}

function stringToArray(str){
    arr= [];
    for(let i = 0; i < str.length; i++){
        arr.push([str[i][1],str[i][3]])
    }
    return arr
}

function Union(a,b){
    let newArr = [];
    for(let i of a){
        newArr.push(i)
    }

    strA = arrayToString(a);
    strB = arrayToString(b)

    for(let i = 0;i < strB.length; i++ ){
           if(!strA.includes(strB[i])){
                newArr.push(b[i])
           }
    }

    return newArr
}


function Interseccion(a,b){
    let strA = arrayToString(a);
    let strB = arrayToString(b)
    
    let newArr = strA.filter(conj =>{
        if(strB.includes(conj)){
            return conj
        }
    } )
    newArr = stringToArray(newArr)
    console.log(newArr)
    return newArr
}




function Diferencia(a,b){
    let strA =  arrayToString(a);
    let strB = arrayToString(b);

    let newArr = strA.filter(conj => {
        if(!strB.includes(conj)){
            return conj
        }
    })

    return newArr
}

function Diferencia_Simetrica(a,b){
    const newArr = Diferencia(Union(a,b), Interseccion(a,b));
    return newArr;
}



let a = ['a','b'];
let b = [1,2];
let c = [2,3]

let aXb = productoCartesiano(a,b);
let aXc = productoCartesiano(a,c)

// console.log(aXb)
// console.log(aXc)

// let U = Union(aXb,aXc);
//------------------------------
// let str =  arrayToString(aXb)
// console.log(str)

// console.log(stringToArray(str))
//----------------------------
Union(aXb,aXc)

Interseccion(aXb,aXc)

let R = [['a','B'],['a','B'],['b','C']];
let S = [['a','B'],['b','C']]
console.log(`Diferencia: ${Diferencia(aXb,aXc)}`)
console.log(`diferencia simetrica: ${Diferencia_Simetrica(aXb,aXc)}`)