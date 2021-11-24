import { useEffect, useRef } from "react";

export const useUpdate=(fn:()=>void,deps:any[])=>{
    const count=useRef(0);
    useEffect(()=>{
        count.current+=1;
    })
    useEffect(()=>{
        if(count.current>1){    //第一次会使undefined变成空数组，使其不执行
            fn();
        }
    },deps);   
};
