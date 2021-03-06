import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import FormDelete from "./Components/formDelete"
import FormPut from "./Components/formPut"
import FormSubmit from "./Components/formSubmit"
import NavButton from "./Components/navButton"
import UsersList from "./Components/usersList"
import Home from "./pages/home"
import { GlobalStyle } from "./Styles/styles"
 
export function AppRoutes() {
    return ( 
        <Router>
            <GlobalStyle/>
            <NavButton/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/create" element={<FormSubmit/>} />
                <Route path="/read" element={<UsersList/>} />
                <Route path="/update" element={<FormPut/>} />
                <Route path="/delete" element={<FormDelete/>} />
            </Routes>
        </Router>
    )
}