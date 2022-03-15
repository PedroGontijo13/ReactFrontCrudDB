import api from '../services/api'
import { Alert, Table } from 'react-bootstrap'
import { ReactElement, useEffect, useState } from 'react'

function UsersList() {
    const [users, setUsers] = useState<ReactElement<any, any>>()
    const [show, setShow] = useState(true);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers: any = () => {
        api.get('/users').then((response: any) => {
            console.log(response.data)
            return(
                setUsers(
                    <>
                        {response.data.map((data: any, index: any) => (
                            <tr key={index}>
                                <h3></h3>
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                            </tr>
                        ))}
                    </>
                )
            )
        })
        .catch((err) => {
            console.log(err)
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>
            )
        })
    }

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {show}
                {users}
            </tbody>
        </Table>
    )
}

export default UsersList