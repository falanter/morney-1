import styled from "styled-components";
const ArrowLeft=styled.div`
&::before{
      content:'';
      display: block;
      width: 9px;
      height: 9px;
      border-left: 1px solid #000;
      border-top:1px solid #000;
      transform: rotate(-45deg);
    }
`
const ArrowRight=styled.div`
&::before{
      content:'';
      display: block;
      width: 6px;
      height: 6px;
      border-left: 1px solid #000;
      border-top:1px solid #000;
      transform: rotate(135deg);
    }
`
export {ArrowLeft,ArrowRight}