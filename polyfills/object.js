const user={
    name:'Ajay'
}

const u1=Object.create(user);
u1.name='abhay'
user.age=20
console.log(u1.prototype)