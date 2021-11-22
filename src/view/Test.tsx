import { useParams } from "react-router-dom";

function Test(){
    let{me}=useParams()
    return <h2>{me}</h2>;
}
export default Test;