const db = require('./dbPostgres')
const newLink ={
    title:"camicasmi145",
    url:"cam4536icasii.com",
    user_id:"2",
    description:"paj45645aro loco"    
}
const users={
    username:"camicasii2",
    password:"159753", 
     fullname:"jhonattan Ramirez"
}

module.exports={
    leerUser:leerUser=async()=>{
//await db.any('SELECT * FROM users').then(res=>console.log(res);

//await db.query('SELECT $1:name FROM $2:name', ['*', 'users']).then(res=>console.log(res))
await db.query('SELECT $1:name FROM $2:name', [users, 'users']).then(res=>console.log(res))
},

leerLinks:leerLinks=async()=>{
    await db.query('SELECT $1:name FROM $2:name', ['*', 'links']).then(res=>console.log(res))
},

escribirUser:escribirUser=async()=>{
    await db.query('INSERT INTO users(${this~}) VALUES(${username}, ${password},${fullname})',users).then(res=>console.log(res))    
},


escribirLink:escribirLink=async()=>{
    await db.query('INSERT INTO links(${this~}) VALUES(${title}, ${url}, ${user_id}, ${description})',newLink)
    .then(()=>leerLinks());
    
},
escribirLink2:escribirLink2=async()=>{
    await db.query('INSERT INTO links(${this~}) VALUES(${title}, ${url}, ${user_id}, ${description}) RETURNING id ',newLink)
    .then(()=>leerLinks());
    
},

updateLinks:updateLinks=async()=>{
    
    const {title, url,user_id,description}=newLink;
    let id = "2";
    await db.query('UPDATE links SET title=$1, url=$2,user_id=$3,description=$4 WHERE id =$5',
    [title, url,user_id,description,id]).then(()=>leerLinks());
    
    //await db.query("UPDATE links SET  url='casa' where id=2 ")
    //.then(()=>leerLinks());

},
deleteLinks:deleteLinks=async()=>{
    const id = '4';
    await db.query( 'delete from links where id=$1',[id])
},

deleteAllLinks:deleteAllLinks=async()=>{
    await db.query( 'delete from links').then(async()=>
    //este comando recetea el id a 0
    await db.query( 'ALTER SEQUENCE links_id_seq RESTART'))
    
}
}