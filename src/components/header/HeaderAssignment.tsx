import { Menu } from 'antd';

import type { MenuProps } from 'antd';
import { StyledHeaderAssignment } from './HeaderAssignment.styles';

export const HeaderAssignment = () => {
    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <StyledHeaderAssignment>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </StyledHeaderAssignment>
    );
};
