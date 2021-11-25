import Layout from "components/Layout";
import { RecordItem, useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import day from 'dayjs'
import 'core-js'

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
const Header=styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics(){
  const [category,setCategory]=useState<'-' | '+'>('-');
  const {records}=useRecords();
  const {getName}=useTags();
  const hash:{[K:string]:RecordItem[]}={}
  const selectedRecords=records.filter(r=>r.category===category)
  selectedRecords.forEach(r=>{
    const key=day(r.createdAt).format('YYYY年MM月DD日')
    if(!(key in hash)){
      hash[key]=[]
    }
    hash[key].push(r)
  })
  const array=Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0;
    if(a[0]>b[0]) return -1;
    if(a[0]<b[0]) return 1;
    return 0
  })
  return(
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={value=>setCategory(value)}/>
      </CategoryWrapper>
      {array.map(([date,records], index)=><div key={index}>
        <Header>
          {date}
        </Header>
        <div>
          {records.map((r, index)=>{
            return <Item key={index}>
            <div className="tags oneLine">
              {r.tagIds
              .map(tagId=><span key={tagId}>{getName(tagId)}</span>)
              .reduce((result,span,index,array)=>
              result.concat(index<array.length-1 ? [span,'，']:[span]),[] as ReactNode[])}
            </div>
            {r.note && <div className="note">
              {r.note}  
            </div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/* |{day(r.createdAt).format('YYYY年MM月DD日')} */}
          </Item>
          })}
        </div>
      </div>
      )}
    </Layout>
  );
}
export default Statistics;