import React from 'react'
import { useState } from 'react'


const SignIn=()=>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [contactNum,setContactNum]=useState('')
    const [email,setEmail]=useState('')
    const [errorMsg,setErrorMsg]=useState('')
    /**
     * 
     * @descriptiom set all local variables 
     */

    const setValue=event=>{
        const {target:{value}}=event
        const {target:{name}}=event
        const letters = /^[A-Za-z]+$/
        const digits=/^[0-9]+$/
        const mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        switch(name){
            case 'First_Name':
                if(value.match(letters)||value==='')
                setFirstName(value)
                else
                setErrorMsg("Please Enter character only!!")
                break
            case 'Last_Name':
                if(value.match(letters)||value==='')
                setLastName(value)
                else
                setErrorMsg("Please Enter character only!!")
                break
            case 'Contact_Number':
                if(value.match(digits)||value===''||!value.toString().includes('e')||value.toString().includes('E'))
                setContactNum(value)
                else
                setErrorMsg("Please Enter Digits only!!")
                break
            case 'Email':
                setEmail('')
                if(value.match(mail))
                setEmail(value)
                else
                setErrorMsg("Please Enter valid Email address!!")
                break
            default:
              return null
        }
    }
    return(
        <>  
            <div>{errorMsg}</div>
            <input type='text' name='First_Name' value={firstName} onChange={setValue} placeholder='Type here...'/>
            <input type='text' name='Last_Name' value={lastName} onChange={setValue}  placeholder='Type here...'/>
            <input type='number' name='Contact_Number' value={contactNum} onChange={setValue} placeholder='Phone ..'/>
            <input type='email' name='Email' value={email} onChange={setValue} placeholder='abc@mail.com'/>
        </>
    )
}

export default SignIn