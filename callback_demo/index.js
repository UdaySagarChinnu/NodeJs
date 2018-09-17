console.log("Before.....");
getCheck(1,(user)=>{
    console.log('User :',user)
})
console.log("After.....");

function getCheck(id,callback){
    setTimeout(()=>{
        console.log("Reading user data....");
        callback({id:id,user:'Uday'});
    },2000)

}