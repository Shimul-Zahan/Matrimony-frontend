import React from 'react'
import Swal from 'sweetalert2'
import TitleBar from '../../../Utils/TitleBar'
import useBioDetailsDash from '../../../Hooks/useBioDetailsDash'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

const ViewBio = () => {

    const { data, refetch, isLoading } = useBioDetailsDash();
    const axiosSecureInstance = useAxiosSecure();
    console.log(data)

    const requestedData = {
        oldId: data?._id,
        ...data
    }

    if (isLoading) {
        return <div>Loading....</div>
    }

    const requestPremium = () => {
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
                axiosSecureInstance.post('/premium-request', requestedData)
                    .then(res => {
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Request Send!",
                                text: "Successfully requested for premium membership!.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    return (
        <div>
            <TitleBar title={'VIEW BIODATA DETAILS'} />

            {/* profile part */}
            <div className="lg:px-16 py-1">
                <div className="lg:px-8 pb-5 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 pb-10">
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img src={data?.image} alt="" className='h-full w-full rounded-full' />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center pb-6">
                        <h1 className="text-4xl font-medium text-indigo-500">{data?.name}, <span className="font-light text-gray-500">{data?.age}</span></h1>
                        <p className="mt-4 text-gray-500 capitalize">{data?.occupation}</p>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Present Division:</span> {data?.presentDivision}</p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Permanent Division:</span> {data?.permanentDivision}</p>
                        </div>
                    </div>

                    <span className="relative flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-white px-6 tex-lg">Myself</span>
                    </span>

                    <div className="mt-2 flex flex-col justify-center">

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>BiodataId:</span> {data?.biodataId}
                            </p>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Date of Birth:</span> {data?.dob}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>BiodataType:</span> {data?.biodataType}
                            </p>

                        </div>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mb-3'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Height:</span> {data?.height}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Weight:</span> {data?.weight}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Race:</span> {data?.race}
                            </p>

                        </div>

                        <span className="relative flex justify-center">
                            <div
                                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                            ></div>

                            <span className="relative z-10 bg-white px-6 tex-lg">Parents Details</span>
                        </span>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mb-3'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Father Name:</span> {data?.fathersName}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Mother Name:</span> {data?.mothersName}
                            </p>
                        </div>

                        <span className="relative flex justify-center">
                            <div
                                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                            ></div>

                            <span className="relative z-10 bg-white px-6 tex-lg">Expected Partner Details</span>
                        </span>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mb-3'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Age:</span> {data?.expectedPartnerAge}
                            </p>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Weight:</span> {data?.expectedPartnerWeight}
                            </p>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Height:</span> {data?.expectedPartnerHeight}
                            </p>
                        </div>
                        {
                            data?.premiumRequestStatus === 'pending' ?
                                <button disabled
                                    className="bg-indigo-500 py-2 px-4 w-2/5 mx-auto rounded-sm text-white font-medium mt-4"
                                >
                                    Request Pending
                                </button> :
                                <button onClick={requestPremium}
                                    className="bg-indigo-500 py-2 px-4 w-2/5 mx-auto rounded-sm text-white font-medium mt-4"
                                >
                                    Make biodata to premium
                                </button>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewBio