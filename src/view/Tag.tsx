import Layout from "components/Layout";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";
import { ArrowLeft } from "components/Arrow";
import { Button } from "components/Button";
import Icon from "components/Icon";
import styled from "styled-components";

const Topbar=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 14px;
    padding: 14px;
    background-color: white;
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
                <div>
                    <label>
                        <span>备注</span>
                        <input type="text" placeholder="标签名" />
                    </label>
                </div>
                <div>
                    <Button>删除标签</Button>
                </div>
            </Layout>
        );
    }else{
        return(
            <Layout>hi</Layout>
        );
    }
};
export default Tag;