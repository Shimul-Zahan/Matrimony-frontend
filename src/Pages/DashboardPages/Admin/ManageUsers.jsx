import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useManageUsersAdmin from '../../../Hooks/useManageUsersAdmin'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { GrUserAdmin } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

const ManageUsers = () => {

    const { data, refetch, isLoading } = useManageUsersAdmin();
    const axiosSecureInstance = useAxiosSecure();

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleUserRole = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be a premium member!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request for it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const res = axiosSecureInstance.patch(`/manage-users-role/${id}`)
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }

    return (
        <div>
            <TitleBar title={'MANAGE USERS HERE'} />
            <div className="overflow-x-auto lg:px-10">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-base">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='bg-gray-100'>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                User Name
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Email
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Role
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Make Premium
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Make Admin
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            data?.map((user, index) => 
                                <tr key={index} className='text-start'>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                                    {
                                        user?.role === 'admin' ?
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                <button disabled className="inline-block rounded px-4 py-2 text-xl font-medium">
                                                    <GrUserAdmin />
                                                </button>
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                <button className="inline-block rounded px-4 py-2 text-xl font-medium">
                                                    <FaUserCircle />
                                                </button>
                                            </td>
                                    }
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="inline-block rounded px-4 py-2 text-lg font-medium text-white bg-indigo-500">
                                            Make Premium
                                        </button>
                                    </td> 
                                    {
                                        user?.role === 'admin' ?
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button disabled className="inline-block rounded px-4 py-2 text-lg font-medium">
                                                    Admin
                                                </button>
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button onClick={() => handleUserRole(user?._id)} className="inline-block rounded bg-indigo-500 px-4 py-2 text-lg font-medium text-white hover:bg-indigo-500">
                                                    Make Admin
                                                </button>
                                            </td>
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUsers