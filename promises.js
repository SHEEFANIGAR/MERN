console.log("Starting promises practice!");
const myPromise=new Promise((resolve,reject)=>{
    console.log("Promise strated...");
    const taskSuccess=true;
    setTimeout(()=>{
        if(taskSuccess){
            resolve("Task completed successfully!");
        }else{
            reject("Task failed!");
        }   
    },2000);
});

myPromise
.then((result)=>{
    console.log("THEN block: "result);
})
.catch((error)=>{
    console.error("CATCH block:",error);
})
.finally(()=>{
    console.log("Promise is settled (either fulfilled or rejected).");
});