import Layout from "components/Layout";
import styled from "styled-components";
import { useTags } from "useTags";

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow-right::before{
        content:'';
        display: block;
        width: 6px;
        height: 6px;
        border-left: 1px solid #000;
        border-top:1px solid #000;
        transform: rotate(135deg);
    }
  }
`
const Button=styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background-color: #999;
  border-radius: 4px;
  color: #fff;
`
const Center=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Space=styled.div`
  height: 16px;
`

function Tags(){
  const {tags,setTags}=useTags();
    return(
      <Layout>
        <TagList>
          {tags.map(tag=>
            <li key={tag}>
              <span className="oneLine">{tag}</span>
              <div className="arrow-right"></div>
            </li>
          )}
        </TagList>
        <Center>
          <Space />
          <Space />
          <Button>新增标签</Button>
          <Space />
        </Center>
      </Layout>
    );
}
export default Tags;