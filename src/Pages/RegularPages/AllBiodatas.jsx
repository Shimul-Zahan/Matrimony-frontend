import React, { useState } from 'react'
import Biodatas from './Biodatas'
import TitleBar from '../../Utils/TitleBar'
import useAxiosSecure from '../../Hooks/useAxiosSecure'

const AllBiodatas = () => {

    const axiosSecureInstance = useAxiosSecure();
    const [dispalyData, setDisplayData]=useState()


    const handleFilterByAge = async (e) => {
        e.preventDefault();
        const lowAge = e.target.lowAge.value;
        const highAge = e.target.highAge.value;
        const res = axiosSecureInstance.get(`/filter-data?low=${lowAge}&high=${highAge}`)
        setDisplayData(res.data);
    }

    return (
        <div className='pt-10'>
            <TitleBar title={'ALL BIODATAS'} subTitle={'All Users Biodata Here'} />
            <div className="container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr] lg:gap-8">
                <div className="space-y-2">
                    <div className='w-full px-5 lg:px-0'>
                        <select
                            className="mt-1.5 w-full text-lg px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                        >
                            <option disabled className='text-lg' value="default">Filter by Biodata Type</option>
                            <option className='text-lg' value="male">Male</option>
                            <option className='text-lg' value="female">Female</option>
                        </select>
                    </div>
                    <div className='w-full px-5 text-lg lg:px-0'>
                        <select
                            className="mt-1.5 w-full px-2 py-3 rounded-lg border-black border-2 text-gray-700 sm:text-sm"
                        >
                            <option disabled className='text-lg' value="default"></option>
                            <option disabled className='text-lg' value="default">Filter by Division</option>
                            <option className='text-lg' value="dhahka">Dhaka</option>
                            <option className='text-lg' value="rajshahi">Rajshahi</option>
                            <option className='text-lg' value="chittagone">Chittagone</option>
                            <option className='text-lg' value="barisal">Barisal</option>
                            <option className='text-lg' value="sylet">Sylet</option>
                            <option className='text-lg' value="rangpur">Rangpur</option>
                            <option className='text-lg' value="khulna">Khulna</option>
                            <option className='text-lg' value="mymensingh">Mymensingh</option>
                        </select>
                    </div>
                    <details
                        className="overflow-hidden rounded border-black border-2"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                        >
                            <span className="text-base font-medium"> Price </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <div className="border-t border-gray-200 p-4">
                                <form onSubmit={handleFilterByAge} className=''>
                                    <div className="flex justify-between flex-col gap-4">
                                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                            <span className="text-lg text-gray-600">$</span>

                                            <input
                                                type="number"
                                                name="lowAge"
                                                placeholder="From"
                                                className="w-full text-lg rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>

                                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                            <span className="text-lg text-gray-600">$</span>

                                            <input
                                                type="number"
                                                name='highAge'
                                                placeholder="To"
                                                className="w-full rounded-md text-lg border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>
                                        <button type='submit' className='bg-indigo-500 rounded-sm p-1'>Filter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="w-full">
                    <Biodatas dispalyData={dispalyData} />
                </div>
            </div>
        </div>
    )
}

export default AllBiodatas