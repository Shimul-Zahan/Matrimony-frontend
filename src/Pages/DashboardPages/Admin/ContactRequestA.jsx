import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAllContactRequestData from '../../../Hooks/useAllContactRequestData';

const ContactRequestA = () => {
    

    const { data, refetch, isLoading } = useAllContactRequestData();
    const axiosSecureInstance = useAxiosSecure();

    const handleApprove = async (id) => {
        const res = await axiosSecureInstance.patch(`/approve-contact-request?id=${id}`)
        if (res.data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Transaction done",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
        }
    }


    return (
        <div>
            <TitleBar title={'APPROVE CONTACT REQUEST'} />
            <div className="overflow-x-auto lg:px-10">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='bg-gray-100'>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Requester Name
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Requester Email
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Biodata ID
                            </th>
                            <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                                Action
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            data?.map((user, index) =>
                                <tr key={index} className='text-start capitalize'>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.requesterName}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {user?.requesterEmail}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user?.requesterID}
                                    </td>
                                    {
                                        user?.status === 'pending' ?
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button onClick={() => handleApprove(user?._id)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                                    Approve Request
                                                </button>
                                            </td> :
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <button disabled className="inline-block rounded bg-yellow-500 px-4 py-2 text-lg font-medium">
                                                    Approved
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

export default ContactRequestA