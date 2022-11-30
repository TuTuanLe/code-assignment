import React, { ReactElement } from 'react';
import { Footer } from '../components/footer';
import { HeaderAssignment } from '../components/header';
import { NavBar } from '../components/navbar';
import { PortfolioCard } from '../components/portFolioCard';
import { projects2 } from '../utils';
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
            {projects2?.map((item, index) => (
                <PortfolioCard
                    key={index}
                    id={item.id}
                    backgroundColor={item.backgroundColor}
                    url={item.url}
                    description={item.description}
                />
            ))}

            {children}
            <Footer />
        </StyledMainLayout>
    );
};
