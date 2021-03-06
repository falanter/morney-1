import { useState } from "react";
import styled from "styled-components";

const Wrapper=styled.section`
  font-size: 24px;
  ul{
    display:flex;
    li{
      width:50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content:'';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`
type Category ='-' | '+';
type Props={
  value:string;
  onChange:(value:Category)=>void;
} 
const CategorySection:React.FC<Props>=(props)=>{
  const categoryMap={'-':'支出','+':'收入'};
  type Keys = keyof typeof categoryMap;        //封装
  // const [categoryList] = useState<('-' | '+')[]>(['-','+']);  //参数类型只能选择'+'和'-'
  const [categoryList] = useState<Keys[]>(['-','+']);
  // const [category,setCategory]=useState('-');  //+表示收入 -表示支出
  const category=props.value
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li 
            key={c}
            className={category===c ? 'selected' : ''}
            onClick={()=>{props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
}
export {CategorySection};