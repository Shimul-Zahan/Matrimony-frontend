import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useBioDetailsDash from '../../../Hooks/useBioDetailsDash'

const ViewBio = () => {

    const { data, refetch, isLoading } = useBioDetailsDash();
    console.log(data)

    return (
        <div>
            <TitleBar title={'VIEW BIODATA DETAILS'} />

            {/* profile part */}
            <div className="lg:px-16 py-2">
                <div className="lg:px-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 pb-10">
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img src={data?.image} alt="" className='h-full w-full rounded-full' />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center border-b pb-6">
                        <h1 className="text-4xl font-medium text-gray-700">{data?.name}, <span className="font-light text-gray-500">{ data?.age }</span></h1>
                        <p className="mt-4 text-gray-500 capitalize">{ data?.occupation }</p>
                        <div className='flex justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Present Division:</span> { data?.presentDivision }</p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Permanent Division:</span> {data?.permanentDivision}</p>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-col justify-center">
                        
                        <div className='flex justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Present Division:</span> {data?.presentDivision}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Permanent Division:</span> {data?.permanentDivision}
                            </p>
                        </div>

                        <div className='flex justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Present Division:</span> {data?.presentDivision}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Permanent Division:</span> {data?.permanentDivision}
                            </p>
                        </div>

                        <div className='flex justify-center items-center gap-5'>
                            <p className="font-light text-gray-600 mt-3 capitalize">
                                <span className='text-black'>Present Division:</span> {data?.presentDivision}
                            </p>
                            <p className="font-light text-gray-600 mt-3">
                                <span className='text-black'>Permanent Division:</span> {data?.permanentDivision}
                            </p>
                        </div>
                        
                        <button
                            className="bg-indigo-500 py-2 px-4 w-2/5 mx-auto rounded-sm text-white  font-medium mt-4"
                        >
                            Make biodata to premium
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewBio