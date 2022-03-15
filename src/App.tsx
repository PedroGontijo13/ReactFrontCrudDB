import { Container } from "react-bootstrap"
import FormSubmit from "./Components/formSubmit"
import { AppRoutes } from "./routes"

function App() {
  return (
    <div>
      <Container>
       <AppRoutes/>
      </Container>
    </div>
  )
}

export default App
