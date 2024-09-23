function add(a,b){
    return a+b;
 }
function sub(a,b){
    return a-b;
}
//need to export this to make it public
//module.exports="Tanisha";
// module.exports={
//     addFn:add, subFn:sub,
// }

//using export object
//exports.add(a,b) => a+b;
//exports.sub(a,b) => a-b;
module.exports={add,sub};