import { useState } from "react";
const useTags=()=>{     //规定为用use..//封装一个自定义Hook
    const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
    return{tags,setTags}
}
export {useTags}