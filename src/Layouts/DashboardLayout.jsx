import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
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
            <div className='flex flex-col md:flex-row justify-start gap-10'>
                <div className='w-96 bg-[#1976D2] h-screen pb-20'>
                    <ul className='list-none text-lg font-semibold text-gray-800'>
                        <div className='py-10 px-6'>
                            <h1 className='text-2xl font-bold'>MOMENTS</h1>
                            <h1 className='text-xl font-thin tracking-widest'>MATRIMONY</h1>
                        </div>
                        {
                            isAdmin ? <>
                                {/* for admin */}
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/admin-dashboard' className="flex items-center gap-2">
                                        <span className='text-2xl'><MdHome /></span>
                                        <h1 className='uppercase'>Admin Dashboard</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/manage-users' className="flex items-center gap-2">
                                        <span className='text-2xl'><MdManageAccounts /></span>
                                        <h1 className='uppercase'>Manage Users</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/approved-premium' className="flex items-center gap-2">
                                        <span className='text-2xl'><FcApproval /></span>
                                        <h1 className='uppercase'>Approved Premium</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <NavLink to='/dashboard/approve-contact-request' className="flex items-center gap-2">
                                        <span className='text-2xl'><CiSquareQuestion /></span>
                                        <h1 className='uppercase'>Approved Contact Request</h1>
                                    </NavLink>
                                </li>
                                <li className='py-4 px-6'>
                                    <button onClick={handleLogOut} className='border-2 py-2 px-4 flex items-center gap-3 bg-yellow-500 rounded-sm'>
                                        <span className='text-2xl'><MdOutlineLogout /></span>
                                        <h1>Logout</h1>
                                    </button>
                                </li>
                            </> :
                                <>
                                    {/* for user */}
                                    <li className='py-4 px-6'>
                                        <NavLink to='/dashboard/edit-biodata' className="flex items-center gap-2">
                                            <span className='text-2xl'><FaEdit /></span>
                                            <h1 className='uppercase'>Edit Biodata</h1>
                                        </NavLink>
                                    </li>
                                    <li className='py-4 px-6'>
                                        <NavLink to='/dashboard/view-biodata' className="flex items-center gap-2">
                                            <span className='text-2xl'><TbListDetails /></span>
                                            <h1 className='uppercase'>View Biodata</h1>
                                        </NavLink>
                                    </li>
                                    <li className='py-4 px-6'>
                                        <NavLink to='/dashboard/my-contact-request' className="flex items-center gap-2">
                                            <span className='text-2xl'><CiSquareQuestion /></span>
                                            <h1 className='uppercase'>My Contact Request</h1>
                                        </NavLink>
                                    </li>
                                    <li className='py-4 px-6'>
                                        <NavLink to='/dashboard/favourites-biodata' className="flex items-center gap-2">
                                            <span className='text-2xl'><RiDislikeLine /></span>
                                            <h1 className='uppercase'>Favourites Biodata</h1>
                                        </NavLink>
                                    </li>
                                    <li className='py-4 px-6'>
                                        <button onClick={handleLogOut} className='border-2 py-2 px-4 flex items-center gap-3 bg-yellow-500 rounded-sm'>
                                            <span className='text-2xl'><MdOutlineLogout /></span>
                                            <h1>Logout</h1>
                                        </button>
                                    </li>
                                </>
                        }

                        <hr className='bg-white my-6 mx-6' />
                        {/* shared components */}
                        <li className='py-4 px-6'>
                            <NavLink to='/' className="flex items-center gap-2">
                                <span className='text-2xl'><MdHome /></span>
                                <h1>HOME</h1>
                            </NavLink>
                        </li>
                        <li className='py-4 px-6'>
                            <img src={user?.photoURL} alt="" className='h-12 w-12 rounded-full' />
                        </li>
                    </ul>
                </div>
                <div className='flex-1 bg-red-500 w-full h-screen'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout