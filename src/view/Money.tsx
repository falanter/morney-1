import Layout from "components/Layout";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagSection } from "./Money/TagSection";

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Tags(){
    return(
      <MyLayout>
        <TagSection/>
        <NoteSection/>
        <CategorySection/>
        <NumberPadSection/>
      </MyLayout>
    );
}
export default Tags;