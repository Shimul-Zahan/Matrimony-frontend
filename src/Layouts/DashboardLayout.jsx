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
import fetchAdmin from '../Hooks/fetchAdmin';
import { FaDiagramSuccessor } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";

const DashboardLayout = () => {

    const { admin } = fetchAdmin();
    const { logOut, user } = useContext(MyAuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    return (
        <div className='min-h-screen' style={{ backgroundImage: `url('https://i.ibb.co/vHHfXJX/beautiful-tulip-flowers-corner-white-background.jpg')`, backgroundSize: 'cover' }}>
            <div className='container mx-auto'>
                <div className='flex justify-start flex-col md:flex-row'>
                    <div className="flex w-full md:fixed md:min-h-screen lg:min-h-screen md:w-72 lg:w-96 flex-col justify-between">
                        <div className="px-4 py-6">
                            <span
                                className="grid py-3 w-full text-start px-5 rounded-lg text-xl text-gray-600"
                            >
                                <span className='text-[#0C356A] font-bold text-2xl'>MEMORY</span>Metromony BD
                            </span>
                            {
                                admin?.isAdmin ?
                                    <ul className="mt-6 space-y-4">
                                        <li>
                                            <NavLink to='/dashboard/admin-dashboard' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <MdHome />
                                                    </span>
                                                    <h1 className='uppercase'>Admin Dashboard</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/manage-users' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <MdManageAccounts />
                                                    </span>
                                                    <h1 className='uppercase'>Manage Users</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/approved-premium' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <FcApproval />
                                                    </span>
                                                    <h1 className='uppercase'>Approved Premium</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/approve-contact-request' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <IoMdContacts />
                                                    </span>
                                                    <h1 className='uppercase'>Approved Contact Request</h1>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <span class="relative flex justify-center">
                                            <div
                                                class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                            ></div>

                                            <span class="relative z-10 bg-white px-6"></span>
                                        </span>

                                        <li>
                                            <NavLink to='/dashboard/success-story-admin' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <FaDiagramSuccessor />
                                                    </span>
                                                    <h1 className='uppercase'>Success Story</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <NavLink to='/' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <MdManageAccounts />
                                                </span>
                                                <h1 className='uppercase'>Home</h1>
                                            </div>
                                        </NavLink>
                                        <Link className="block rounded-lg px-4 py-2 text-lg font-medium text-[#FFC436] ">
                                            <button onClick={handleLogOut}
                                                className='border-2 py-2 px-4 flex w-full items-center gap-3 bg-gray-100 rounded-sm text-gray-800'>
                                                <span className='text-2xl'>
                                                    <MdOutlineLogout />
                                                </span>
                                                <h1>
                                                    <Link to='/signin'>Logout</Link>
                                                </h1>
                                            </button>
                                        </Link>
                                        <span class="relative flex justify-center">
                                            <div
                                                class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                            ></div>

                                            <span class="relative z-10 bg-white px-6"></span>
                                        </span>
                                    </ul> :
                                    <ul className="mt-6 space-y-4">
                                        <li>
                                            <NavLink to='/dashboard/edit-biodata' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <FaEdit />
                                                    </span>
                                                    <h1 className='uppercase'>Edit Biodata</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/view-biodata' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <TbListDetails />
                                                    </span>
                                                    <h1 className='uppercase'>View Biodata</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/my-contact-request' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <CiSquareQuestion />
                                                    </span>
                                                    <h1 className='uppercase'>My Contact Request</h1>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/dashboard/favourites-biodata' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <RiDislikeLine />
                                                    </span>
                                                    <h1 className='uppercase'>Favourites Biodata</h1>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <span class="relative flex justify-center">
                                            <div
                                                class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                            ></div>

                                            <span class="relative z-10 bg-white px-6"></span>
                                        </span>

                                        <li>
                                            <NavLink to='/dashboard/success-story' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                                <div className='flex justify-normal items-center gap-2'>
                                                    <span className='text-2xl'>
                                                        <FaDiagramSuccessor />
                                                    </span>
                                                    <h1 className='uppercase'>Success Story</h1>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <NavLink to='/' className="block rounded-lg px-4 py-2 text-lg font-medium text-[#0C356A] ">
                                            <div className='flex justify-normal items-center gap-2'>
                                                <span className='text-2xl'>
                                                    <MdManageAccounts />
                                                </span>
                                                <h1 className='uppercase'>Home</h1>
                                            </div>
                                        </NavLink>

                                        <Link className="block rounded-lg px-4 py-2 text-lg font-medium text-[#FFC436] ">
                                            <button onClick={handleLogOut}
                                                className='border-2 py-2 px-4 flex items-center gap-3 bg-gray-100 rounded-sm text-gray-800'>
                                                <span className='text-2xl'>
                                                    <MdOutlineLogout />
                                                </span>
                                                <h1>
                                                    <Link to='/signin'>Logout</Link>
                                                </h1>
                                            </button>
                                        </Link>
                                        <span class="relative flex justify-center">
                                            <div
                                                class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                            ></div>

                                            <span class="relative z-10 bg-white px-6"></span>
                                        </span>
                                    </ul>
                            }
                        </div>

                        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 space-y-4">
                            <div className="md:flex items-center gap-2 hidden  p-4 hover:bg-gray-50">
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
                    <div className='flex-1 lg:ml-96 md:ml-72'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout