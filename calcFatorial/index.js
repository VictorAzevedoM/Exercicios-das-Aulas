
function fatoração(num){
    if(num === 0 || num === 1){
        return 1
    }else{
        for(let i = num -1; i>= 1; i--){
            num *= i
        }
    }
    return num
}
