let A = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4];
let B = [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];

let universo = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

const operaciones =  {
    union(a,b){
        let newArr = [...a];
        for(let i = 0; i < b.length ; i++){
            if(!a.includes(b[i])) newArr.push(b[i])
        }
        return newArr.sort((a,b)=>a-b)
    },

    interseccion(a,b){
        let newArr  = [];

        for(let i = 0 ; i < b.length; i++){
            if(a.includes(b[i])) newArr.push(b[i])
        }

        return newArr.sort((a,b)=>a-b)
    },

    diferencia(a,b){
        let newArr = [];

        for(let i = 0; i < a.length;i++){
            if(!b.includes(a[i])) newArr.push(a[i])
        }

        return newArr.sort((a,b)=>a-b)
    },

    complemento(universo,conj){
        return this.diferencia(universo,conj)
    }
    
}

let a = [1,2,3,4];
let b = [1,4,5,6];

console.log(operaciones.interseccion(operaciones.interseccion(a,b),operaciones.complemento([1,2,3,4,5,6],a)));


console.log(operaciones.interseccion(a,b))