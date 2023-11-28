import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import usePremiumRequest from '../../../Hooks/usePremiumRequest'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ApprovePremium = () => {

  const { data, refetch, isLoading } = usePremiumRequest();
  const axiosSecureInstance = useAxiosSecure();

  // console.log(data?.premiumRequestStatus)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleApprovePremium = async (id) => {
    const res = await axiosSecureInstance.patch(`/approve-premium?id=${id}`)
    if (res.data.acknowledged) {
      Swal.fire({
        title: "Good job!",
        text: "Your approve this premium membership!",
        icon: "success"
      });
      refetch();
    }
  }


  return (
    <div>
      <TitleBar title={'APPROVE PREMIUM REQUEST'} />
      <div className='pb-10'>
        <div className="overflow-x-auto lg:px-10">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
            <thead className="ltr:text-left rtl:text-right">
              <tr className='bg-gray-100'>
                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                  Biodata ID
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                  Staus
                </th>
                <th className="whitespace-nowrap text-start px-4 py-2 font-bold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {
                data?.map((user, index) =>
                  <tr key={index} className='text-start'>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user?.biodataId}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.name}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user?.email}</td>
                    {
                      user?.premiumRequestStatus === "approved" ?
                        <td className="whitespace-nowrap px-4 py-2 text-yellow-500">Premium</td> :
                        <td className="whitespace-nowrap px-4 py-2 text-red-500">Pending</td>
                    }
                    {
                      user?.premiumRequestStatus === 'approved' ?
                        <td className="whitespace-nowrap px-4 py-2">
                          <button disabled className="inline-block rounded text-yellow-500 px-4 py-2 text-lg font-medium">
                            Approved
                          </button>
                        </td>:
                        <td className="whitespace-nowrap px-4 py-2">
                          <button onClick={() => handleApprovePremium(user?.biodataId)} className="inline-block rounded bg-indigo-600 px-4 py-2 text-lg font-medium text-white hover:bg-indigo-700">
                            Approve
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
    </div>
  )
}

export default ApprovePremium