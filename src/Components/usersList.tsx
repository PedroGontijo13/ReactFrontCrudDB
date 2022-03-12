import api from '../services/api'
import { Table } from 'react-bootstrap'
import { ReactElement, useEffect, useState } from 'react'

function UsersList() {
    const [users, setUsers] = useState<ReactElement<any, any>>()

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers: any = () => {
        api.get('/users').then((response: any) => {
            console.log(response.data)
            return(
                setUsers(
                    <div>
                        {response.data.map((data: any, index: any) => (
                            <tr key={index}>
                                <h3></h3>
                                <th>{data.id}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                            </tr>
                        ))}
                    </div>
                )
            )
        })
        .catch((err) => {
            alert("ops! ocorreu um erro!" + err)
        })
    }

    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
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