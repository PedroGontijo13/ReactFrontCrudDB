import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import FormSubmit from "./Components/formSubmit"
import UsersList from "./Components/usersList"
import Home from "./pages/home"
import { GlobalStyle } from "./Styles/styles"
 
export function AppRoutes() {
    return ( 
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/create" element={<FormSubmit/>} />
                <Route path="/read" element={<UsersList/>} />
            </Routes>
        </Router>
    )
}