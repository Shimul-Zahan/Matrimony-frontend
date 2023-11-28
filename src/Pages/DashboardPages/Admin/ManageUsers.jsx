import React, { useEffect, useState } from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useManageUsersAdmin from '../../../Hooks/useManageUsersAdmin'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { GrUserAdmin } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const ManageUsers = () => {

    const { data, refetch, isLoading } = useManageUsersAdmin();
    const axiosSecureInstance = useAxiosSecure();
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        setDisplayData(data);
    }, [isLoading])

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
                axiosSecureInstance.patch(`/manage-users-role/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const handleMakePremium = email => {
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
                // console.log(email)
                axiosSecureInstance.patch(`/manage-users-premium/${email}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const handelSearch = async e => {
        e.preventDefault();
        const search = e.target.search.value;
        const res = await axiosSecureInstance.get(`/search-manage-users?name=${search}`)
        setDisplayData(res.data)
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
                            displayData?.map((user, index) =>
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
                                    {
                                        user?.accountType === 'premium' ?
                                            <td className="whitespace-nowrap px-4 py-2 ">
                                                <button disabled className=" flex justify-center items-center w-32 rounded px-4 py-2 text-2xl text-yellow-500 font-medium">
                                                    <MdWorkspacePremium />
                                                </button>
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button onClick={() => handleMakePremium(user?.email)} className="inline-block rounded px-4 py-2 text-lg font-medium text-white bg-indigo-500">
                                                    Make Premium
                                                </button>
                                            </td>
                                    }
                                    {
                                        user?.role === 'admin' ?
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button disabled className="flex justify-center items-center w-32 rounded px-4 py-2 text-lg font-medium">
                                                    <GrUserAdmin />
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
                <div className='fixed px-2 bottom-3 w-full container lg:w-[1000px]'>
                    <form onSubmit={handelSearch}>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" name='search' class="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500" required />
                                <button type="submit" class="text-white px-8 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers