import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';
import { HeaderAssignment } from '../components/header';
import { StyledMainLayout } from './MainLayout.styles';

export const MainLayout = () => {
    return (
        <StyledMainLayout>
            <HeaderAssignment />
            <Outlet />
            <Footer />
        </StyledMainLayout>
    );
};
