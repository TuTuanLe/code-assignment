import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Home } from '../screens/Home';

export const RoutesAssignment = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<p>hello</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
