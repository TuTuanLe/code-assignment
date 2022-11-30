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

export const withHomeController = <P,>(Component: ComponentType<P>): ComponentType<P> => {
    return (props: P) => {
        const LogicProps: HomeProps = {
            data: {
                template: projects,
            },
            dispatch: {},
        };

        return <Component {...props} {...LogicProps} />;
    };
};
