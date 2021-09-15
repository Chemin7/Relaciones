
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

function reflejar_elementos(conj){
    let newArr = [];
    for(let element of conj){
        newArr.push([element,element])
    }

    return newArr
}

function Reflexiva(conj,R){
    let elem_reflejados = arrayToString(reflejar_elementos(conj));
    let length_reflejos = 0;

    let element = arrayToString(R)
    
    for(let i=0 ;i < element.length; i++){
        
        if(elem_reflejados.includes(element[i])) length_reflejos++;
    }

    return length_reflejos == elem_reflejados.length ? true : false;
}

const NoReflexiva = (conj,R) => Reflexiva(conj,R) ? false : true;


function Simetrica(conj){
    let x = 0
    for(let i = 0 ; i < conj.length; i++){
        for(let j = 0; j < conj.length; j++){
            if(  (conj[i][0] == conj[j][1] && conj[i][1] == conj[j][0])   && i != j  ){
                
                x++
                console.log(conj[i])
            }
        }

        if(conj[i][0] == conj[i][1]){
            x++
            console.log(conj[i])
        }
    }
}
//--------------------------------------------------------------
//Seccion de prueba
//---------------------------------------------------------------

let reflex1 = [[1,1], [1,2], [1,4], [2, 1], [2, 2], [3, 3], [4, 1], [4, 4]]
let conj_reflex = [1,2,3,4]

console.log(Reflexiva(conj_reflex,reflex1))

// console.log(arrayToString(reflejar_elementos([1,2,3,4])))
console.log(Simetrica(reflex1))