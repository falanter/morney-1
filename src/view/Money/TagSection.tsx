import styled from "styled-components";
import React, { useState } from 'react';

const Wrapper=styled.section`
  background-color:#fff;
  padding:12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  //尽量靠下
  align-items: flex-start;    //内容尽量靠左
  ol{
    margin: 0 -12px;
    li{
      background-color: #d9d9d9;
      border-radius: 18px;
      display:inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background-color: #999;
        color: #fff;
      }
    }
  }
  button{
    background: none;
    border:none;
    padding:0 4px;
    border-bottom: 1px solid #333;
    color:#666;
    cursor: pointer;
  }
`
type Props={
  value:string[];
  onChange:(selected:string[])=>void;
}  //ts传递参数时必须要先声明类型
const TagSection:React.FC<Props>=(props)=>{
  const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
  // const [selectedTags,setSelectedTags]=useState<string[]>([]);
  const selectedTags=props.value;
  const onAddTag=()=>{
    const tagName=window.prompt('新的标签名称');
    if(tagName!==null){
      setTags([...tags,tagName])    //获得当前数据tags，放入数据tagName
    }
  };
  const onToggleTag=(tag:string)=>{
    const index=selectedTags.indexOf(tag);
    if(index>=0){
      //如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTag
      props.onChange(selectedTags.filter(t=>t!==tag));
    }else{
      props.onChange([...selectedTags,tag])
    }
  }
  const getClass=(tag:string)=>selectedTags.indexOf(tag)>= 0 ? 'selected' : '';
  return(
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li 
            key={tag} 
            onClick={()=>onToggleTag(tag)} 
            className={getClass(tag)}
          >
            {tag}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>  
    </Wrapper>
  )
}

export {TagSection};