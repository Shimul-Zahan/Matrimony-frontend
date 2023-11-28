import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TitleBar from "../../../Utils/TitleBar";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePublicAxios from "../../../Hooks/usePublicAxios";

const imgbb_KEY = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_KEY}`
const SuccessStory = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecureInstance = useAxiosSecure();
    const axioPublicInstance = usePublicAxios();


    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axioPublicInstance.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        const image = res.data.data.display_url;
        if (res.data.success) {
            const makeMarrigeStory = {
                selfBiodataNumber: parseInt(data.Selfbiodata),
                partnerBiodataNumber: parseInt(data.partnerBiodata),
                date: new Date().toLocaleDateString(),
                successStoryReview: data.SuccessStoryReview,
                image,
                rating: data.rating
            }
            const res = await axiosSecureInstance.post('/success-story', makeMarrigeStory)
            if (res.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: '',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
            <TitleBar title={"Show Your Success Story"} />
            <div className="p-10 bg-white max-w-[990px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Self Biodata Number</span>
                            </label>
                            <input {...register("Selfbiodata", { required: true })} type="number" placeholder="Self Biodata Number" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Partner Biodata Number</span>
                            </label>
                            <input {...register("partnerBiodata", { required: true })} type="number" placeholder="Partner Biodata Number" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating for us</span>
                            </label>
                            <input {...register("rating", { required: true })} type="number" placeholder="Partner Biodata Number" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                        </div>

                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Success Story Review</span>
                        </label>
                        <textarea {...register("SuccessStoryReview")} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' placeholder="Success Story Review"></textarea>
                    </div>


                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Couple Image Link or image input field</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />

                    </div>

                    <div>
                        <button type="submit" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-red-200 text-gray-900' > Submit Button</button>
                    </div>
                </form>
            </div>

        </div>
    );
};



export default SuccessStory;