import React, { useContext, useState } from 'react'
import { FaLock } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import TitleBar from '../../Utils/TitleBar'
import useAllBiodatas from '../../Hooks/useAllBiodatas'
import { Link, useParams } from 'react-router-dom';
import { MyAuthContext } from '../../Context/AuthContext';
import usePublicAxios from '../../Hooks/usePublicAxios';
import Swal from 'sweetalert2';
import Loading from '../Components/Loading';

const ViewDetails = () => {

    const pages = [...Array(5).keys()];
    const { data, isLoading } = useAllBiodatas();
    const [totalPage, setTotalPage] = useState(pages);
    if (isLoading) {
        return <Loading />
    }

    const { id } = useParams();
    const { user } = useContext(MyAuthContext);


    const detailsData = data?.find(user => user._id === id)
    const recommendedDetails = data?.filter(user => user.biodataType === detailsData.biodataType && user._id !== id)
    const premiumMember = data?.find(member => member.userEmail === user?.email && member.accountType === 'premium');
    const axioPublicInstance = usePublicAxios();

    const addToFavourite = async () => {
        const favouriteData = {
            name: detailsData?.name,
            biodataId: detailsData?.biodataId,
            permanentDivision: detailsData?.permanentDivision,
            occupation: detailsData?.occupation,
            userEmail: user?.email,
        }

        const res = await axioPublicInstance.post('/add-to-favourite', favouriteData)
        if (res.data.acknowledged) {
            Swal.fire({
                title: "Good job!",
                text: "Your favourite biodata add to list!",
                icon: "success"
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${res.data.message}`,
            });
        }

    }

    return (
        <div className='py-10 min-h-screen'>
            <TitleBar title={'DETAILS IS READY HERE'} subTitle={''} />
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="rounded-lg">
                        <div className="grid px-4 lg:gap-8 lg:grid-cols-2 lg:items-start">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl mb-4 font-bold text-[#0C356A] sm:text-3xl dark:text-gray-50">{detailsData?.name}</h3>
                                <div className="flow-root">
                                    <dl className="-my-3 divide-y divide-gray-100 text-sm capitalize">
                                        <div
                                            className="grid grid-cols-1 gap-1 py-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Biodata ID</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.biodataId}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Biodata Type</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.biodataType}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Occupation</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.occupation}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Date of Birth</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.dob}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Age</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.age}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Height</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.height}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Weight</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.weight}</dd>
                                        </div>
                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Occupation</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.biodataId}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Race</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.race}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Home Division</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.permanentDivision}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Presernt Division</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.presentDivision}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Father Name</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.fathersName}</dd>
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Mother Name</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.mothersName}</dd>
                                        </div>
                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Exp Partner Age</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.expectedPartnerAge}</dd>
                                        </div>
                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Exp Partner Hei</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.expectedPartnerHeight}</dd>
                                        </div>
                                        <div
                                            className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                        >
                                            <dt className="font-medium text-gray-900">Exp Partner Wei</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{detailsData?.expectedPartnerWeight}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src={detailsData?.image} alt="" className="mx-auto lg:h-[610px] rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>

                            <div className=''>
                                <span className="relative flex justify-center">
                                    <div
                                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                    ></div>

                                    <span className="relative z-10 bg-[white] px-6">Contact Information</span>
                                </span>
                                {
                                    premiumMember || user?.email === detailsData?.userEmail ?
                                        <div className="flow-root mt-5">
                                            <dl className="-my-3 divide-y divide-gray-100 text-lg">
                                                <div
                                                    className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                                >
                                                    <dt className="font-medium text-gray-900">Email</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{detailsData?.contactEmail}</dd>
                                                </div>

                                                <div
                                                    className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                                >
                                                    <dt className="font-medium text-gray-900">Biodata Type</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{detailsData?.mobileNumber}</dd>
                                                </div>
                                            </dl>
                                        </div> : 
                                        <Link to={`/cheekout/${detailsData?.biodataId}`}>
                                            <button className='bg-[#0C356A] flex justify-center items-center gap-3 w-full mt-5 py-2 text-white text-lg rounded-sm'>
                                                <span className='text-yellow-500'><FaLock /></span>Request Contact Information</button>
                                        </Link>
                                }
                                {
                                    user?.email !== detailsData?.userEmail &&
                                    <div>
                                            <button onClick={addToFavourite} className='bg-[#0C356A] flex justify-center items-center gap-2 w-full mt-5 py-2 text-white text-lg rounded-sm'>
                                            <span className=''>
                                                <IoAddCircleOutline className='text-2xl' />
                                            </span>Add to Favourite</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 lg:mt-0">
                        <h1 className="text-2xl lg:text-end font-bold text-[#0C356A] sm:text-3xl">
                            Recommended for you
                        </h1>
                        <section>
                            <div className="mx-auto max-w-screen-xl py-8 sm:px-6 sm:py-12 lg:px-8">

                                <ul className="mt-4 grid gap-4 px-4 lg:px-0 sm:grid-cols-2 lg:grid-cols-2">
                                    {
                                        recommendedDetails?.slice(0, 2).map(recommendBios =>
                                            <li>
                                                <Link to={`/viewDetails/${recommendBios._id}`} className="group block overflow-hidden">
                                                    <img
                                                        src={recommendBios?.image}
                                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg" />

                                                    <div className="relative bg-white pt-3 capitalize">
                                                        <div className='flex justify-between items-center'>
                                                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">Biodata Id: {recommendBios?.biodataId}</h3>
                                                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">Biodata Type: {recommendBios?.biodataType}</h3>
                                                        </div>
                                                        <p className="mt-2">
                                                            <span className="tracking-wider font-bold text-gray-900"> {recommendBios?.name} </span>
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>

                                <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
                                    <li>
                                        <button
                                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                                        >
                                            <span className="sr-only">Prev Page</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </li>

                                    {
                                        totalPage?.map(page =>
                                            <li key={page}>
                                                <button
                                                    class="block focus:bg-indigo-700 h-8 w-8 rounded border border-gray-100 text-center leading-8"
                                                >
                                                    {page}
                                                </button>
                                            </li>
                                        )
                                    }

                                    <li>
                                        <button
                                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                                        >
                                            <span className="sr-only">Next Page</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </li>
                                </ol>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails