import React, { useState } from 'react'
import './form.css'

export default function Form() {
    let[name,setName]=useState({
        name:'',
        email:'',
        address:'',
        dropdown:'',
        gender:'',
        agreement:false,

    })
    const serachForm=(event)=>{
        event.preventDefault()
        console.log(name);
        alert("Login Sucessfully!")
    }
    const captureForm=(event)=>{

        setName({
            ...name,
            [event.target.name]:event.target.type==="checkbox"?event.target.checked:event.target.value
        })
    }

  return (
    <div className='box'>
        <form className='form' onSubmit={serachForm}>
        <h1 style={{textAlign:"center"}}>Login Form</h1> <br /><br />

            <label htmlFor="uname" style={{textAlign:"center"}}>Name:</label>
            <input type="text" id='uname' onChange={captureForm} name="name"></input>
            <br /><br />

            <label htmlFor="uemail">Email :</label>
            <input type="email" id='uemail' onChange={captureForm} name='email'></input>
            <br /><br />

            <label htmlFor="add">Adress:</label>
            <input type="textarea" id='add' onChange={captureForm} name='address'></input>
            <br /><br />

            <label htmlFor='upet'>Pets Type:</label>
            <select id='upet' onChange={captureForm} name='dropdown'>
                <option>Cat</option>
                <option>Dog</option>
                <option>Rabbit</option>
                <option>Birds</option>
            </select>
            <br /><br />

            <label htmlFor="ugender">Animal type:</label>
            <input type="radio" id='ugender' onChange={captureForm} name='gender' value="Baby"/>Baby
            <input type="radio" id='ugender' onChange={captureForm} name='gender' value="Adult"/>Adult
            <br /><br />

            <input type='checkbox' name='agreement' checked={name.agreement} onChange={captureForm}/>I Agree Terms and Conditions

            <br /><br />
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
