import styled from "styled-components";

const TagSection=styled.section`
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
export {TagSection};