const pool = require('./dbMysql')
const newLink ={
    title:"camicasmi145",
    url:"cam4536icasii.com",
    user_id:"11",
    description:"paj45645aro loco"    
}
const users={
    username:"camicasii2",
    password:"159753", 
     fullname:"jhonattan Ramirez"
}

module.exports={
    leerUser:leerUser=async()=>{
    //await pool.any('SELECT * FROM users').then(res=>console.log(res);

    //await pool.query('SELECT $1:name FROM $2:name', ['*', 'users']).then(res=>console.log(res))
    const users="users"
    await pool.query('SELECT * FROM users').then(res=>console.log(res))
},
leerLinks:leerLinks=async()=>{
    await pool.query(`SELECT * FROM  links`).then(res=>{console.log(res)
        pool.end()
    })
    
    
},
escribirUser:escribirUser=async()=>{    
    await pool.query('INSERT INTO users set ?',[users]);
},
escribirLink:escribirLink=async()=>{
    await pool.query('INSERT INTO links set?',[newLink])
    
},

updateLinks:updateLinks=async(id)=>{
    await pool.query('UPDATE links set ? WHERE id = ?',
    [newLink,22]).then(()=>leerLinks());

},
deleteLinks:deleteLinks=async(id)=>{    
    await pool.query('DELETE FROM links WHERE ID = ?',[id])    
},
}
/*






deleteLinks:deleteLinks=async(id)=>{    
    await pool.query('DELETE FROM links WHERE ID = ?',[id])    
},

deleteAllLinks:deleteAllLinks=async()=>{
    await pool.query( 'delete from links').then(async()=>
    //reset id 
    
    await pool.query( 'ALTER TABLE ? AUTO_INCREMENT = 1',['links']))
    
}
}*/