import React from 'react';
import {Layout} from 'antd';
import {Link} from "react-router";
import '../styles/global.css'

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#1e272e',
    // borderRadius:'0px 0px 2rem 2rem'
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // position:'fixed',
    width: '100vw',
    zIndex: 3
};


const AppHeader: React.FC = () => {

    return (
        <Layout.Header style={headerStyle}>
            <Link to={'/'}> Main Menu </Link>

            <Link to={'/login'}> Login </Link>
        </Layout.Header>
    );
};

export default AppHeader;