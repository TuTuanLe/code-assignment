import React, { ReactElement } from 'react';
import { Footer } from '../components/footer';
import { HeaderAssignment } from '../components/header';
import { NavBar } from '../components/navbar';
import { StyledMainLayout } from './MainLayout.styles';

export type MainLayoutProps = {
    children?: ReactElement;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;
    return (
        <StyledMainLayout>
            <HeaderAssignment />
            {/* <NavBar /> */}
            {children}
            <Footer />
        </StyledMainLayout>
    );
};
