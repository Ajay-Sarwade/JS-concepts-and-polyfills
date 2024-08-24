let p=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('p')
    },3000)
})


function cancellablePromise(promise,delay){
    let timer;
    return new Promise((resolve,reject)=>{
        timer=setTimeout(()=>{
            reject('Cancelled due to delay')
        },delay)
        
        promise.then((res)=>{
            clearTimeout(timer)
            resolve(res)
        }).catch((err)=>{
            clearTimeout(timer)
            reject(err)
        })
        
    })
}

cancellablePromise(p,2000).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


