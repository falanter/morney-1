import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagSection } from "./Money/TagSection";

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
  /* min-height: 1000px; */
  /* border: 1px solid red; */
`
// const Con=styled.div`
//   border: 1px solid red;
//   flex-shrink: 0; 
//   overflow: auto;
// `
const CategoryWrapper=styled.div`
  background-color: #c4c4c4;
`
type Category ='-' | '+';
const defaultFormData={
  tagIds:[] as number[],
  note:'',
  category:'-' as Category,
  amount:'0'
}

function Money(){
  const [selected,setSelected]=useState(defaultFormData);
  const {addRecord}=useRecords();
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
  };
  const submit=()=>{
    if(addRecord(selected)){
      alert('保存成功')
      setSelected(defaultFormData);
    }
  }
  return(
    <MyLayout>
      {/* {JSON.stringify(selected)}
      <hr/> */}
      {/* <Con> */}
        <TagSection value={selected.tagIds} 
          onChange={tagIds=>onChange({tagIds})}
        />
      {/* </Con> */}
      <NoteSection value={selected.note}
        onChange={note=>onChange({note})}
      />
      <CategoryWrapper>
        <CategorySection value={selected.category}
          onChange={(category)=>onChange({category})}
          />
      </CategoryWrapper>
      <NumberPadSection value={selected.amount.toString()}
        onChange={(amount)=>onChange({amount})}
        onOK={submit}
        />
    </MyLayout>
  );
}
export default Money;