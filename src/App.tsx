import './App.css';
import { RoutesAssignment } from './routes';
import { AssignmentProvider } from './store';

function App() {
    return (
        <AssignmentProvider>
            <RoutesAssignment />
        </AssignmentProvider>
    );
}

export default App;
