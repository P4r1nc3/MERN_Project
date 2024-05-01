import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Tasks from "./pages/Tasks.jsx";

export default function App() {
    return (
        <BrowserRouter>
            {/* header */}
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
