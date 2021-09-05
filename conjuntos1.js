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

    newArr = stringToArray(newArr)

    return newArr
}

const Diferencia_Simetrica = (a,b) =>  Diferencia(Union(a,b), Interseccion(a,b));
    

const Complemento = (universo,conj) => Diferencia(universo,conj)

function Inversa(conj){
let newArr = [];

    for(let i = 0; i < conj.length; i++){
        let a = conj[i][0];
        let b = conj[i][1];

        newArr.push([b,a])
    }
return newArr;
}


const Cardinalida = conj => conj.length;

function Composicion(b,a){
    let newArr = [];

    for(let i = 0 ; i < a.length;i++){
        for(let j = 0; j < b.length; j++){
            if(a[i][1] == b[j][0] ){
                newArr.push([a[i][0],b[j][1]]);
            }
        }
    }

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

let R = [['a','B'],['a','C'],['b','C']];
let S = [['a','B'],['b','C']]

const diff =  Diferencia(aXb,aXc)

console.log(`Diferencia: ${arrayToString(diff)}`)
console.log(`diferencia simetrica: ${arrayToString(Diferencia_Simetrica(aXb,aXc))}`)



console.log(Inversa(R))
//{(1, 1), (1, 4), (2, 3), (3, 1), (3, 4)}
//{(1 ,0),(2, 0), (3, 1), (3, 2), (4, 1)}
const comp1 = [[1,1],[1,4],[2,3],[3,1],[3,4]];
const comp2 = [[1,0],[2,0],[3,1],[3,2],[4,1]]

console.log(Composicion(comp2,comp1))

let r1 = [[1,1],[2,1],[3,2],[4,3]];

console.log(Inversa(Composicion(r1,r1)))