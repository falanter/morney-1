import { ArrowRight } from "components/Arrow";
import { Button } from "components/Button";
import { Center } from "components/Center";
import Layout from "components/Layout";
import { Space } from "components/Space";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

const LayoutWrapper=styled(Layout)`
  display: flex;
  flex-direction: column;
`
const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  overflow-y: scroll;
  li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px;
    a{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

function Tags(){
  const {tags,addTag}=useTags();
    return(
      <LayoutWrapper>
        <TagList>
          {tags.map(tag=>
            <li key={tag.id}>
              <Link to={""+tag.id}>
                <span className="oneLine">{tag.name}</span>
                <ArrowRight />
              </Link>
            </li>
          )}
        </TagList>
        <Center>
          <Space />
          <Space />
          <Button onClick={addTag}>新增标签</Button>
          <Space />
        </Center>
        <Outlet />
      </LayoutWrapper>
    );
}
export default Tags;