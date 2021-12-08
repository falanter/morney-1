import styled from "styled-components";
import React from 'react';
import { useTags } from "hooks/useTags";
// import { createId } from "lib/createId";

const Wrapper=styled.section`
  background-color:#fff;
  padding:12px 16px;
  flex: 1;
  /* border: 5px solid red; */
  /*flex-shrink: 0; 
  overflow: auto; */
  border: 1px solid red;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end;  //尽量靠下 */
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
  value:number[];
  onChange:(selected:number[])=>void;
}  //ts传递参数时必须要先声明类型
const TagSection:React.FC<Props>=(props)=>{
  const {tags,addTag}=useTags()
  // const [selectedTags,setSelectedTags]=useState<string[]>([]);
  const selectedTagIds=props.value;
  
  const onToggleTag=(tagId:number)=>{
    const index=selectedTagIds.indexOf(tagId);
    if(index>=0){
      //如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTag
      props.onChange(selectedTagIds.filter(t=>t!==tagId));
    }else{
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const getClass=(tagId:number)=>selectedTagIds.indexOf(tagId)>= 0 ? 'selected' : '';
  return(
    <Wrapper>
      <button onClick={addTag}>新增标签</button>  
      <ol>
        {tags.map(tag=>
          <li 
            key={tag.id} 
            onClick={()=>onToggleTag(tag.id)} 
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        )}
      </ol>
    </Wrapper>
  )
}

export {TagSection};