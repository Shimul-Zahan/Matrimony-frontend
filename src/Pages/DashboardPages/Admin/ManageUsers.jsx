import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useManageUsersAdmin from '../../../Hooks/useManageUsersAdmin'

const ManageUsers = () => {

    const { data, refetch, isLoading } = useManageUsersAdmin();

    if (isLoading) {
        return <div>Loading...</div>
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
                                Make Admin
                            </th>
                            <th className="px-4 py-2"></th>
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
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                            User
                                        </button>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                            Make Admin
                                        </button>
                                    </td>
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