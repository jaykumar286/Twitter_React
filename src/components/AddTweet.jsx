import { useState } from "react"

export default function AddTweet({onAddTweet}) {
  const [text,setText] = useState('');
  return (
    <>
     <input type="text" placeholder="Add new tweet.." value={text} onChange={(e)=>setText(e.target.value)}/> 
     <button onClick={()=>{
        setText('');
        onAddTweet(text);
     }}>Tweet !!</button>
    </>
  )
}
