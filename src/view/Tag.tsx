import { useParams } from "react-router-dom";
import { useTags } from "useTags";

const Tag:React.FC=(props)=>{
    const {findTag}=useTags();
    let {id}=useParams();
    let tid='';
    if(typeof(id)==='string'){
        tid=id
        const tag=findTag(parseInt(tid));
        return(
            <div>{tag.name}</div>
        );
    }else{
        return(
            <div>hi</div>
        );
    }
};
export default Tag;