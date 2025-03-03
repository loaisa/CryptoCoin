import React from 'react';
import {Card, Layout, Statistic} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import '../styles/global.css'

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#d71414',
    backgroundColor: '#fff',
    padding: '1rem',
    width: 10,
    zIndex:2,
    // position:"absolute",
};

const CardStyle: React.CSSProperties = {
    marginBottom: '1rem',
    backgroundColor: '#111513',

}

const StatStyle: React.CSSProperties = {
    caretColor: "white",

}

const AppSider: React.FC = () => {
    return (
        <Layout.Sider style={siderStyle} breakpoint="lg"
                      collapsedWidth="0" >

            {/*<Card style={CardStyle} variant="borderless">*/}
            {/*    <p style={{color: "white"}}>Active</p>*/}
            {/*    <Statistic*/}
            {/*        value={11.28}*/}
            {/*        precision={2}*/}
            {/*        valueStyle={{color: '#3f8600'}}*/}
            {/*        prefix={<ArrowUpOutlined/>}*/}
            {/*        suffix="%"*/}
            {/*        style={StatStyle}*/}
            {/*    />*/}
            {/*</Card>*/}
            {/*<Card style={CardStyle} variant="borderless">*/}
            {/*    <Statistic*/}
            {/*        value={9.3}*/}
            {/*        precision={2}*/}
            {/*        valueStyle={{color: '#cf1322'}}*/}
            {/*        prefix={<ArrowDownOutlined/>}*/}
            {/*        suffix="%"*/}
            {/*        style={StatStyle}*/}
            {/*    />*/}
            {/*</Card>*/}

        </Layout.Sider>
    );
};

export default AppSider