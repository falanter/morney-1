import Layout from "components/Layout";
import { useParams,useNavigate } from "react-router-dom";
import { useTags } from "hooks/useTags";
import { ArrowLeft } from "components/Arrow";
import { Button } from "components/Button";
import Icon from "components/Icon";
import styled from "styled-components";
import { Input } from "components/Input";
import { Center } from "components/Center";
import { Space } from "components/Space";

const Topbar=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 14px;
    padding: 14px;
    background-color: white;
`
const InputWrapper=styled.div`
    background-color: white;
    padding:0 16px;
    margin-top: 16px;
`

const Tag:React.FC=()=>{
    let navigate=useNavigate();
    const {findTag,updateTag,deleteTag}=useTags();
    let {id:idString}=useParams() || '';   //let {id:idString}=useParams();
    const tag=findTag(parseInt(idString || ''));
    const TagContent=(tag:{id:number;name:string})=>(
        <div>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名" defaultValue={tag.name} 
                onChange={(e)=>{
                    updateTag(tag.id,{name:e.target.value});
                }} />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Button onClick={()=>deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    )
    const onClickBack=()=>{
        navigate("/tags",{replace:true})
    }
    // if(tag)
    return(
        <Layout>
            <Topbar>
                <ArrowLeft onClick={onClickBack} />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            {tag ? TagContent(tag): <Center>tag 不存在</Center>}
        </Layout>
    );
};
export default Tag;