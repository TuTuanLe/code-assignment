import { ComponentType } from 'react';
import { PortFolioCardProps } from '../../components/portFolioCard';

import { projects } from '../../utils';

export interface HomeProps {
    data: {
        template: PortFolioCardProps[];
    };
    dispatch: {
        onFetchProject?: () => Promise<void>;
    };
}

export const withHomeController = (Component: ComponentType<HomeProps>): ComponentType => {
    return (props) => {
        const LogicProps: HomeProps = {
            data: {
                template: projects,
            },
            dispatch: {},
        };

        return <Component {...LogicProps} {...props} />;
    };
};
