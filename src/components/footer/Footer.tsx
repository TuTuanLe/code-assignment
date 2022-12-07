import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { StyledFooter } from './Footer.styles';

export const Footer = () => {
    return (
        <StyledFooter>
            <div className="image-bg">
                <img src={require('../../assets/images/building.png')} alt="" />
            </div>
            <div className="leftSide">
                <div className="textTitle">
                    <p>Cong Hoa,</p>
                    <p>Tan Binh</p>
                </div>
                <Link to={'/contact'}>
                    <Button>Register</Button>
                </Link>
            </div>
        </StyledFooter>
    );
};
