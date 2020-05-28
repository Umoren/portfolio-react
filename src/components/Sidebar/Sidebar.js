import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './styles';

const items = [
    {name: 'About Me', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Work', path: '/work'},
    {name: 'Education', path: '/education'},
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side nav">
            <SideNavItems>
                {items.map(navitems => (
                    <SideNavLink
                        isActive={
                            location.pathname === '/' && navitems.path ? true : location.pathname === navitems.path
                        }
                        element={Link}
                        to={navitems.path}
                        key={navitems.name}
                    >
                        {navitems.name}
                    </SideNavLink>
                ))}
            

            </SideNavItems>
        </StyledSideNav>
    )
};

export default Sidebar;