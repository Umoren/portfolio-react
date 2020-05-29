import React from 'react';
import { FooterWrapper } from './styles';

const Footer = ({ user }) => {
    return (
        <>
         
            <FooterWrapper>
              <p> Built by <a href="https://github.com/Umoren"> {user.basics.name} </a></p>  
            </FooterWrapper>

        </>
    );
};

export default Footer;