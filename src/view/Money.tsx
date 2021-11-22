import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagSection } from "./Money/TagSection";

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category ='-' | '+';

function Money(){
  const [selected,setSelected]=useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:'0'
  });
  type Selected =typeof selected;
  const onChange=(obj:Partial<Selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
  }
  return(
    <MyLayout>
      <TagSection value={selected.tagIds} 
        onChange={tagIds=>onChange({tagIds})}
      />
      <NoteSection value={selected.note}
        onChange={note=>onChange({note})}
      />
      <CategorySection value={selected.category}
        onChange={(category)=>onChange({category})}
        />
      <NumberPadSection value={selected.amount.toString()}
        onChange={(amount)=>onChange({amount})}
        onOK={()=>{}}
        />
    </MyLayout>
  );
}
export default Money;