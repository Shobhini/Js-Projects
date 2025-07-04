const prom = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Chai', email: "mini@exam.com"})
    }, 1000)
})
prom.then(function(user){
    console.log(user);
})

const prom1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username: 'mini', email: "mini@exam.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
prom1
.then((use) =>{
    console.log(use);
    return use.username
}).then((myusername) => {
    console.log(myusername);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() =>console.log("The promise is either resolve or rejected"))


const prom2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", password: "!23"})
        }else{
            reject("ERROR: Js went wrong")
        }
    }, 1000)
})

async function consumeprom2(){
    try{
        const response = await prom2
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumeprom2()