let A = [1,3,4,6];
let B = [2,5,7];
let C = [2,4,6,8];
let O = [1,2,3,4,5,6,7,8];
let universo = [1,2,3,4,5,6,7,8,9];

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

console.log(operaciones.complemento(universo,C))