import {useEffect, useState} from "react"
import ReqGet from "./reqGet";
import ReqPost from "./reqPost";
import ConvertUnix from "./utils"
import "./chat/chat.css"
import "./chat/reset.css"

function App() {

  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    reqGet()
  }, [count])
  
  let reqPost = async(e) => {
    e.preventDefault()
    await ReqPost(message)
    setCount(count + 1)
  }

  let reqGet = async() => {
    await ReqGet(setData)
  }



  return (
    <div className="App">
      <div className="Header">
          <h1 className="Header_text">UNIVERSITY</h1>
      </div>
      <input className="ent" placeholder="Написать сообщение..." type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button className="btn" onClick={(e) => reqPost(e)}>Отправить</button>

        {data.map((item,idx) => {
          return(
          <div className="container">
            <div className="txt" key={idx}>
              <p className="text__msg">{item.from} : {item.text} <p>{ConvertUnix(item.created_at)}</p> </p>
            </div>
          </div> 
          )
        })}
    </div>
  );
}

export default App;
