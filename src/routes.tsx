import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import FormSubmit from "./Components/formSubmit"
import UsersList from "./Components/usersList"
 
export function AppRoutes() {
    return ( 
        <Router>
            <Routes>
                <Route path="/form" element={<FormSubmit/>} />
                <Route path="/users" element={<UsersList/>} />
            </Routes>
        </Router>
    )
}