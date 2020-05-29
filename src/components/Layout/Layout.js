import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';
import { StyledContent } from './styles';
import Footer from '../Footer';

const Layout = ({ user, children }) => {
    return (
        <> 
            <MobileNav />
            <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div> {children}</div> 
            </StyledContent>
            <Footer user={user} />
        </>
    );
};

export default Layout;