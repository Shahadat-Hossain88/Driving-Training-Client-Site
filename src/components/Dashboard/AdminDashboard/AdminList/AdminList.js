import React, { useEffect, useState } from 'react';
import Navbar from '../../../HomePage/Header/Navbar/Navbar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const url = 'https://localhost:5054/admins';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, []);

    return (
        <div>
            <Navbar />
            Total Admin : {admins.length}
            <div className="row g-3 p-3">
                <div className="col-md-3">
                    <AdminSideBar />
                </div>
                <div className="col-md-9">
                    <table className="table table-striped admin-table">
                        <thead>
                            <tr >
                                <th className="th" scope="col">Admin's Name</th>
                                <th className="th" scope="col">Admin's Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map(admin => <tr >
                                <td className=" td">{admin.name}</td>
                                <td className=" td">{admin.email}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminList;