import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
// import day from 'dayjs'

const CategoryWrapper=styled.div`
  background-color: white;
`
const Item=styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  .note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`

function Statistics(){
  const [category,setCategory]=useState<'-' | '+'>('-');
  const {records}=useRecords();
  const {getName}=useTags();
    return(
      <Layout>
        <CategoryWrapper>
          <CategorySection value={category}
            onChange={value=>setCategory(value)}/>
        </CategoryWrapper>
        <div>
          {/* {JSON.stringify(records)} */}
          {records.map(r=>{
            return <Item>
              <div className="tags">
                {r.tagIds.map(tagId=><span>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">
                {r.note}  
              </div>}
              <div className="amount">
                ￥{r.amount}
              </div>
              {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
            </Item>
          })}
        </div>
      </Layout>
    );
}
export default Statistics;