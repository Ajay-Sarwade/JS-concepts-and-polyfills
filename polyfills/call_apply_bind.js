
let obj={
    name:'Ajay'
}

function print(city,state){
    console.log('My name is ',this.name)
    console.log('I am from ',city , state)
}


Function.prototype.myCall=function(obj,...args){
    let prop=Math.random()
    while(obj[prop]){
        prop=Math.random()
    }
    obj[prop]=this;
    obj[prop](...args)
    delete obj[prop]
}

Function.prototype.myApply=function(obj,args){
    let prop=Math.random()
    while(obj[prop]){
        prop=Math.random()
    }
    obj[prop]=this;
    obj[prop](...args)
    delete obj[prop]
}


Function.prototype.mybind=function(obj,...args1){
    let context=this
    return function(...args2){
        context.apply(obj,[...args1,...args2])
    }
}



print.myCall(obj,'hubli','karnataka')

print.myApply(obj,['hubli','karnataka'])

let func= print.mybind(obj,'hubli','karnataka')

func()

