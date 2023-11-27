import React from 'react'
import { useForm } from 'react-hook-form'
import usePublicAxios from '../../../Hooks/usePublicAxios'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const UpdateBiodata = ({ userAnyBiodataOrNot, user, URL }) => {

    const { register, handleSubmit, reset, } = useForm()

    const onSubmit = async (data) => {

        const axioPublicInstance = usePublicAxios();
        const axiosSecureInstance = useAxiosSecure();
        // const navigate = useNavigate();

        const res = await axioPublicInstance.post(URL, { image: data.profileImage[0] }, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        const image = res.data.data.display_url
        console.log('update image', image)
        if (res.data.success) {
            const updateBiodata = {
                name: data.name || 'null',
                biodataType: data.biodataType || 'null',
                dob: data.dob.split('/').reverse().join('/') || 'null',
                height: data.height || 'null',
                weight: data.weight || 'null',
                occupation: data.occupation || 'null',
                race: data.race || 'null',
                fathersName: data.fathersName || 'null',
                age: parseInt(data.age) || 'null',
                permanentDivision: data.permanentDivision || 'null',
                presentDivision: data.presentDivision || 'null',
                expectedPartnerAge: parseInt(data.expectedPartnerAge) || 'null',
                mothersName: data.mothersName || 'null',
                expectedPartnerHeight: data.expectedPartnerHeight || 'null',
                expectedPartnerWeight: data.expectedPartnerWeight || 'null',
                contactEmail: data.contactEmail || 'null',
                mobileNumber: data.mobileNumber || 'null',
                image,
                userEmail: user.email
            }
            const res = await axiosSecureInstance.patch(`/update-biodata?email=${user?.email}`, updateBiodata)
            if (res.data.acknowledged) {
                Swal.fire({
                    title: "Good job!",
                    text: "You biodata is updated!",
                    icon: "success"
                });
                // navigate('/');
            }
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Name<span className='text-red-600'>*</span>
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            defaultValue={userAnyBiodataOrNot?.name}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Biodata Type<span className='text-red-600'>*</span>
                        </label>
                        <select
                            {...register('biodataType', { required: true })}
                            defaultValue={userAnyBiodataOrNot?.biodataType}
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
                            defaultValue={userAnyBiodataOrNot?.dob}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Height<span className='text-red-600'>*</span>
                        </label>
                        <select
                            {...register('height', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.height}
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
                            defaultValue={userAnyBiodataOrNot?.weight}
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
                            defaultValue={userAnyBiodataOrNot?.permanentDivision}
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

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Age
                        </label>
                        <input
                            {...register('age')}
                            type="number"
                            defaultValue={userAnyBiodataOrNot?.age}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Occupation<span className='text-red-600'>*</span>
                        </label>
                        <select
                            {...register('occupation', { required: true })}
                            defaultValue={userAnyBiodataOrNot?.occupation}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="engineer">Engineer</option>
                            <option value="doctor">Doctor</option>
                            <option value="teacher">Teacher</option>
                            <option value="businessman">Businessman</option>
                            <option value="lawyer">Lawyer</option>
                            <option value="student">Student</option>
                            <option value="bekar">Bekar</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Race<span className='text-red-600'>*</span>
                        </label>
                        <select
                            {...register('race', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.race}
                        >
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="middle">Middle</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Fathers name
                        </label>
                        <input
                            {...register('fathersName')}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.fathersName}
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Mothers name
                        </label>
                        <input
                            {...register('mothersName')}
                            defaultValue={userAnyBiodataOrNot?.mothersName}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Present Division name<span className='text-red-600'>*</span>
                        </label>
                        <select
                            {...register('presentDivision', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.presentDivision}
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

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Expected Partner Age
                        </label>
                        <input
                            {...register('expectedPartnerAge')}
                            type="number"
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerAge}
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
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerHeight}
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
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerWeight}
                        >
                            <option value="light">Light</option>
                            <option value="average">Average</option>
                            <option value="heavy">Heavy</option>
                            <option value="extra light">Extra Light</option>
                            <option value="extra heavy">Extra Heavy</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Contact Email
                        </label>
                        <input
                            {...register('contactEmail', { readOnly: true })}
                            type="email"
                            value={user?.email}
                            defaultValue={userAnyBiodataOrNot?.contactEmail}
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
                            defaultValue={userAnyBiodataOrNot?.mobileNumber}
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Profile Image Link or Image Input
                        </label>
                        <input
                            {...register('profileImage', { required: true })}
                            type="file"
                            defaultValue={user?.image}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-indigo-500 w-full text-white py-2 px-4 rounded-full" >
                        <p>Update Profile</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateBiodata