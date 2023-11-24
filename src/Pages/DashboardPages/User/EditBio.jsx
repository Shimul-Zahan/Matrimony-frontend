import React from 'react'
import { useForm } from "react-hook-form"
import TitleBar from '../../../Utils/TitleBar'
import { FaUtensils } from 'react-icons/fa'

const EditBio = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <TitleBar title={'EDIT BIODATA'} />
            <div className="px-10 py-5 bg-gray-100 max-w-[990px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">   
                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Name<span className='text-red-600'>*</span>
                            </label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Biodata Type<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('biodataType', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Date of Birth<span className='text-red-600'>*</span>
                            </label>
                            <input
                                {...register('dob', { required: true })}
                                type="date"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Height<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('height', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="short">Short</option>
                                <option value="average">Average</option>
                                <option value="hign">Hign</option>
                                <option value="extra short">Extra Short</option>
                                <option value="extra tall">Extra Tall</option>
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Weight<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('weight', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="light">Light</option>
                                <option value="average">Average</option>
                                <option value="heavy">Heavy</option>
                                <option value="extra light">Extra Light</option>
                                <option value="extra heavy">Extra Heavy</option>
                            </select>
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Permanent Division name<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('permanentDivision', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="rajshahi">Rajshahi</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chattagram">Chattagram</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="barisal">Barisal</option>
                                <option value="khulna">Khulna</option>
                                <option value="maymansign">Maymansign</option>
                                <option value="sylhet">Sylhet</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                {...register('age')}
                                type="number"
                                className="mt-1 p-2 w-full border rounded"
                                readOnly
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Occupation<span className='text-red-600'>*</span>
                            </label>
                            <input
                                {...register('occupation', { required: true })}
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Race<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('race', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="middle">Middle</option>
                            </select>
                        </div>  
                    </div>

                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Fathers name
                            </label>
                            <input
                                {...register('fathersName')}
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Mothers name
                            </label>
                            <input
                                {...register('mothersName')}
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Expected Partner Age
                            </label>
                            <input
                                {...register('expectedPartnerAge')}
                                type="number"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Expected Partner Height<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('expectedPartnerHeight', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="short">Short</option>
                                <option value="average">Average</option>
                                <option value="hign">Hign</option>
                                <option value="extra short">Extra Short</option>
                                <option value="extra tall">Extra Tall</option>
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Expected Partner Weight<span className='text-red-600'>*</span>
                            </label>
                            <select
                                {...register('expectedPartnerWeight', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="light">Light</option>
                                <option value="average">Average</option>
                                <option value="heavy">Heavy</option>
                                <option value="extra light">Extra Light</option>
                                <option value="extra heavy">Extra Heavy</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Contact Email (User Email Readonly)
                            </label>
                            <input
                                {...register('contactEmail', { readOnly: true })}
                                type="email"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Mobile Number<span className='text-red-600'>*</span>
                            </label>
                            <input
                                {...register('mobileNumber', { required: true })}
                                type="tel"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-base font-medium text-gray-700">
                                Profile Image Link or Image Input
                            </label>
                            <input
                                {...register('profileImage')}
                                type="file"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-yellow-800 w-full text-white py-2 px-4 rounded-full"
                        >
                            Save And Publish Now Button
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditBio