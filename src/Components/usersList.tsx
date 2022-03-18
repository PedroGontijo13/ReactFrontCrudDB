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
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                            </tr>
                        ))}
                    </>
                )
            )
        })
    }

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </Table>
    )
}

export default UsersList