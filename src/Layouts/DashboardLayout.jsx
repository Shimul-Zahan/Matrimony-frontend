import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { CiSquareQuestion } from "react-icons/ci";
import { RiDislikeLine } from "react-icons/ri";
import { MyAuthContext } from '../Context/AuthContext';
import './dashboard.css'

const DashboardLayout = () => {

    const isAdmin = false;
    const { logOut, user } = useContext(MyAuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-start flex-col md:flex-row'>
                <div className="flex w-full md:fixed md:min-h-screen lg:min-h-screen md:w-72 lg:w-96 flex-col justify-between border-e">
                    <div className="px-4 py-6">
                        <span
                            className="grid py-3 w-full text-start px-5 rounded-lg bg-gray-100 text-xl text-gray-600"
                        >
                            <span className='text-[#1976D2] font-bold text-2xl'>MEMORY</span>Metromony BD
                        </span>

                        {
                            isAdmin ? 
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <NavLink to='/dashboard/admin-dashboard' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <MdHome />
                                                </span>
                                                <h1 className='uppercase'>Admin Dashboard</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/manage-users' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <MdManageAccounts />
                                                </span>
                                                <h1 className='uppercase'>Manage Users</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/approved-premium' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <FcApproval />
                                                </span>
                                                <h1 className='uppercase'>Approved Premium</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/approve-contact-request' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <CiSquareQuestion />
                                                </span>
                                                <h1 className='uppercase'>Approved Contact Request</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <Link className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 ">
                                        <button onClick={handleLogOut}
                                            className='border-2 py-2 px-4 flex items-center gap-3 bg-gray-100 rounded-sm text-gray-800'>
                                            <span className='text-2xl'>
                                                <MdOutlineLogout />
                                            </span>
                                            <h1>Logout</h1>
                                        </button>
                                    </Link>
                                </ul> :
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <NavLink to='/dashboard/edit-biodata' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <FaEdit />
                                                </span>
                                                <h1 className='uppercase'>Edit Biodata</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/view-biodata' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <TbListDetails />
                                                </span>
                                                <h1 className='uppercase'>View Biodata</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/my-contact-request' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <CiSquareQuestion />
                                                </span>
                                                <h1 className='uppercase'>My Contact Request</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/favourites-biodata' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <RiDislikeLine />
                                                </span>
                                                <h1 className='uppercase'>Favourites Biodata</h1>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <Link className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 ">
                                        <button onClick={handleLogOut}
                                            className='border-2 py-2 px-4 flex items-center gap-3 bg-gray-100 rounded-sm text-gray-800'>
                                            <span className='text-2xl'>
                                                <MdOutlineLogout />
                                            </span>
                                            <h1>Logout</h1>
                                        </button>
                                    </Link>
                                </ul>
                        }
                    </div>

                    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 space-y-4">
                        <NavLink to='/' className="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <div className='flex justify-normal items-center gap-2'>
                                <span className='text-2xl'>
                                    <MdManageAccounts />
                                </span>
                                <h1 className='uppercase'>Home</h1>
                            </div>
                        </NavLink>
                        <div className="md:flex items-center gap-2 hidden bg-gray-100 p-4 hover:bg-gray-50">
                            <img
                                alt="Man"
                                src={user?.photoURL}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <div>
                                <p className="text-xs">
                                    <strong className="block font-medium">{user?.displayName}</strong>

                                    <span> {user?.email} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 md:ml-96'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout