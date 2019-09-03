
var PI = 3.1416;
function add(a,b){
    console.log(a+b);
    return a+b; 
}

function sub(a,b){
    console.log(a-b);
    return a-b; 
}

exports.add=add
exports.sub=sub
exports.PI=PI
