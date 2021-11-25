import { useUpdate } from "hooks/useUpdate";
import { createId } from "lib/createId";
import { useEffect, useState } from "react";

const useTags=()=>{     //规定为用use..//封装一个自定义Hook
    const [tags,setTags]=useState<{id:number;name:string}[]>([]);
    useEffect(()=>{     //第一次渲染
        console.log('after mount')
        // setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
        let localTags=JSON.parse(window.localStorage.getItem('tags') || '[]');
        if(localTags.length===0){
            localTags=[
                {id:createId(),name:'衣'},
                {id:createId(),name:'食'},
                {id:createId(),name:'住'},
                {id:createId(),name:'行'},
            ]
        }
        setTags(localTags);
    },[]);
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)   //不可变数据
   
    const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0];
    const findTagIndex=(id:number)=>{
        let result=-1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                result=i;
                break;
            }
        }
        return result;
    };
    // const updateTag=(id:number,obj:{name:string})=>{
    const updateTag=(id:number,{name}:{name:string})=>{
        setTags(tags.map(tag=>tag.id===id ? {id,name}:tag));
        // //获取你要改的tag的下标
        // const index=findTagIndex(id);
        // //vue：tags.splice(index,1,{id:id,name:obj.name})
        // //深拷贝 tags 得到 tagsClone
        // const tagsClone=JSON.parse(JSON.stringify(tags));
        // //把 tagsClone 的第 index 删掉，换成{id:id,name:obj.name}
        // tagsClone.splice(index,1,{id:id,name:obj.name});
        // setTags(tagsClone);
    };
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id));
        // //获取你要删的tag的下标
        // const index=findTagIndex(id)
        // //深拷贝 tags 得到 tagsClone
        // const tagsClone=JSON.parse(JSON.stringify(tags));
        // //把 tagsClone 的第 index 删掉，
        // tagsClone.splice(index,1);
        // setTags(tagsClone);
    };
    const addTag=()=>{
        const tagName=window.prompt('新的标签名称');
        if(tagName!==null && tagName!==''){
          setTags([...tags,{id:createId(),name:tagName}])    //获得当前数据tags，放入数据tagName
        }
    };
    const getName=(id:number)=>{
        const tag=tags.filter(t=>t.id===id)[0]
        return tag? tag.name : ''
    }
    return{tags,addTag,getName,setTags,findTag,updateTag,findTagIndex,deleteTag}
}
export {useTags}