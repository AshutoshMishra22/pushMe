import React, {useState} from 'react'
import key from './pushNotification'
async function subsciber(){
  let sw=await navigator.serviceWorker.ready;
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:""
  })
  console.log(JSON.stringify(push))
}

const Push =()=>{
 // console.log(key)
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default Push