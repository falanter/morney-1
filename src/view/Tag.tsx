import Layout from "components/Layout";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";
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

const Tag:React.FC=(props)=>{
    const {findTag}=useTags();
    let {id}=useParams();
    let tid='';
    if(typeof(id)==='string'){
        tid=id
        const tag=findTag(parseInt(tid));
        return(
            <Layout>
                <Topbar>
                    <ArrowLeft />
                    <span>编辑标签</span>
                    <Icon />
                </Topbar>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名" defaultValue={tag.name} />
                </InputWrapper>
                <Center>
                    <Space />
                    <Space />
                    <Button>删除标签</Button>
                </Center>
            </Layout>
        );
    }else{
        return(
            <Layout>hi</Layout>
        );
    }
};
export default Tag;