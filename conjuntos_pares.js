
function arrayToString(array){
    let strArr = []

    if(array[0][1] !== undefined){

        for(let i = 0; i < array.length; i++){
            strArr.push(`[${array[i][0].toString()},${array[i][1].toString()}]`)
        }
        return strArr;
    }else {

        return `[${array[0].toString()},${array[1].toString()}]`;

    }
    
}

function stringToArray(str){
    arr= [];
    for(let i = 0; i < str.length; i++){
        arr.push([str[i][1],str[i][3]])
    }
    return arr
}

//Operacion con relaciones
function productoCartesiano(a,b){
    let newArr = [];
    for(let i = 0; i < a.length;i++){
        for(let j = 0; j < b.length;j++){
            newArr.push([a[i],b[j]])
        }
    }
    return newArr;
}

function Union(a,b){
    let newArr = [];

    for(let i of a){
        newArr.push(i)
    }

    strA = arrayToString(a);
    strB = arrayToString(b);

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

//Composicion de relaciones
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

//Propiedades de relaciones
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
            }
        }

        if(conj[i][0] == conj[i][1]){
            x++
        }
    }

    return x >= conj.length ? true:false;
}

const Antisimetrica = conj => Simetrica(conj) ? false : true;

// && str_conj.includes(arrayToString([conj[i][0],conj[j][1]]))

function Transitiva(conj){
    const str_conj = arrayToString(conj)

    let arrTrans = []

    for(let i = 0; i < conj.length;i++){
        for(let j = 0; j < conj.length; j++){

            if(conj[i][1] == conj[j][0] && str_conj.includes(arrayToString([conj[i][0],conj[j][1]]))){
                // console.log(arrayToString([conj[i][0],conj[j][1]])) 


                if(!arrTrans.includes(arrayToString(conj[i])))
                    arrTrans.push(arrayToString(conj[i]))


                if(!arrTrans.includes(arrayToString(conj[j])))
                    arrTrans.push(arrayToString(conj[j]))

                if(!arrTrans.includes(arrayToString([conj[i][0],conj[j][1]])))
                    arrTrans.push(arrayToString([conj[i][0],conj[j][1]]))

                // console.log(arrTrans)
            }
        }
    }
    console.log(str_conj)
    return arrTrans.length == str_conj.length ? true : false ;
}

// R = {(a, b), (b, c), (c, b), (c, d)},
// R1 = {(a, b), (a, c), (b, b), (b, c), (b, d), (c, b), (c, c), (c, d)}
function ExtensionTransitiva(conj){
    const strArr = arrayToString(conj)
    let newArr = [...strArr];

    for(let i = 0;i<conj.length;i++){
        for(let j = 0;j < conj.length;j++){
            if(conj[i][1] == conj[j][0] && i != j ){
                if(!newArr.includes(arrayToString([conj[i][0],conj[j][1]])))
                    newArr.push(arrayToString([conj[i][0],conj[j][1]]))
            }
        }
    }

    return stringToArray(newArr)
}


//--------------------------------------------------------------
//Seccion de prueba
//---------------------------------------------------------------


// let a = [['d','a'],['c','b'],['b','c'],['a','d']];//✓
// let b = [['a','a'],['b','b'],['c','c'],['d','d']];//✓
// let c = [['a','a'],['a','c'],['a','d'],['b','b'],['b','d'],['c','b'],['c','c'],['d','d']]//✓
// let d = [['a','b'],['a','d'],['b','d']]//✓
// let e = [['a','a'],['a','b'],['a','d'],['b','a'],['b','b'],['c','c'],['d','a'],['d','d']]//✓


// console.log(Reflexiva(['a','b','c','d'],a))
// console.log(Simetrica(a))
// console.log(Transitiva(a))


//---------------------------------------------------------------------------------------------

//REGEX
// let str = "{(1, 1), (1, 3), (1, 5), (2, 2), (3, 1), (3, 3), (3, 5), (4, 4), (5, 1), (5, 3), (5, 5) }"
// let arr = []
// let strArr = ""

// for (let i = 0; i < str.length;i++){
//     if(str[i] == "("){
//         strArr += "["
//     }
//     else if(str[i] )
// }

// console.log(arr.push("[1,1]".toString()))
// console.log(arr)

//-----------------------------------------------------




