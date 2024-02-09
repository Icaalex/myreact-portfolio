import React, { useEffect, useState } from 'react'
import "../App.css"
import "./Practice5.css"

export const Practice5 = () => {
    const [socials, setSocials] = useState(null)
    const [wWidth, setWWidth] = useState(window.innerWidth)
    console.log("renderd");
    useEffect( () => {
        alert("see socials")
        console.log("see socials");
    })
    return(
        <>
           <div className="wrapper">
              <button onClick={() =>{setSocials("posts")}}>posts</button>
              <button onClick={() => {setSocials("users")}}>users</button>
              <button onClick={() => {setSocials("comments")}}>comments</button>
              <h1>the : {socials}</h1>
              {/* <h5>{wWidthimage.png}</h5> */}
           </div>
        
        </>
    )
}