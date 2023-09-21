import React, { useState } from 'react'

function Login() {
    const [user, setUser]= useState({
        name:'',
        age: '',
        education:''
    })
     

    const onChangeUser = ({target:{name , value}})=>{

        setUser({...user, [name]:value})

//setUser({...user, [event.target.name]:event.target.value})


    //    const name = event.target.name;
    //    const value = event.target.value; 
    //    if(name === "name"){
    //     setUser({...user, name:value})
    //    }else if(name==='age'){

    //        setUser({...user, age:value})
    //    }else if(name==='education'){
    //     setUser({...user, education:value})

    //    }
        // console.log(user)
    }

  return (
    <>
    <input type='text' name='name' value={user.name} onChange={onChangeUser} />
    <input type='number' name='age' value={user.age} onChange={onChangeUser} />
    <input type='text' name='education' value={user.education} onChange={onChangeUser} />
{user.name && user.age && user.education &&(<h1>Mr. {user.name} {user.age} & education {user.education}!</h1>
 )}
 
  </>  )
}

export default Login;
