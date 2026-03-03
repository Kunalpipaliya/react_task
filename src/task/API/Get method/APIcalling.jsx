import axios from 'axios'
import React, { useState } from 'react'

const APIcalling = () => {
    const [list, setlist] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // console.log(res.data);
            setlist(res.data)

        }).catch((error) => {
            console.log(error);

        })
    return (
        <div>
            <table border={1} className='table table-bordered border '>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>company</th>

                </tr>
                {
                    list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <table border={1} className='table table-bordered'>

                                        <tr>
                                            <td>street</td>
                                            <td>suite</td>
                                            <td>city</td>
                                            <td>zipcode</td>
                                            <td>geo</td>
                                        </tr>
                                        <tr>
                                            <td>{item.address.street}</td>
                                            <td>{item.address.suite}</td>
                                            <td>{item.address.city}</td>
                                            <td>{item.address.zipcode}</td>
                                            <td>
                                                <table border={1} className='table table-bordered'>
                                                    <tr>
                                                        <td>lat</td>
                                                        <td>lng</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{item.address.geo.lat}</td>
                                                        <td>{item.address.geo.lng}</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>
                                    <table border={1} className='table table-bordered'>
                                        <tr>
                                            <td>name</td>
                                            <td>catchPharse</td>
                                            <td>bs</td>
                                        </tr>
                                        <tr>
                                            <td>{item.company.name}</td>
                                            <td>{item.company.catchPhrase}</td>
                                            <td>{item.company.bs}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default APIcalling
