import { useParams } from "react-router-dom";
function Test(){
    let{me}=useParams()
    const enter=(e:any)=>{
        console.log(e.key)
        if(e.key==='Enter'){
            console.log("xxx")
        }
    }
    return (
        <div>
            <h2>{me}</h2>
            <input type="text" onKeyPress={enter} />
        </div>);
}
export default Test;