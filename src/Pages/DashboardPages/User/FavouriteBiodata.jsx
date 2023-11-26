import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useFavouriteBiodata from '../../../Hooks/useFavouriteBiodata'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const FavouriteBiodata = () => {

  const { data, refetch, isLoading } = useFavouriteBiodata();
  const axiosSecureInstance = useAxiosSecure();

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleDelete = id => {
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
        axiosSecureInstance.delete(`/delete-favourite-bios?id=${id}`)
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
      <TitleBar title={'YOUR FAVOURITE BIODATA HERE'} />
      <div className="overflow-x-auto lg:px-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-base">
          <thead className="ltr:text-left rtl:text-right">
            <tr className='bg-gray-100'>
              <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                Biodata ID
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                User Name
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                Permanent Adress
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                Occupation
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
                <tr key={index} className='text-start capitalize'>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user?.biodataId}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.permanentDivision}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user?.occupation}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button onClick={()=> handleDelete(user?._id)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      Delete
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

export default FavouriteBiodata