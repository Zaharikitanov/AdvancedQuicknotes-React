import Quicknote from "./quicknote";
import "./styles.css"

export default function App() {
  
    return <div className="container">
      <h1>Hello World!</h1>
      <div className="row">
        <Quicknote title={"Test"}/>
      </div>
    </div>
  }