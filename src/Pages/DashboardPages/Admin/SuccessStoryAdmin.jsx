import React, { useState } from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useGetSuccessStory from '../../../Hooks/useGetSuccessStory'
import SuccessModal from './SuccessModal';

const SuccessStoryAdmin = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const { data } = useGetSuccessStory();
  // console.log(data)

  const handleUserRole = id => {
    const showData = data?.find(user => user._id === id);
    console.log(showData)
    setIsOpen(true);
    setId(showData)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <TitleBar title={'ALL SUCCESS STORY'} />
      <div className="overflow-x-auto lg:px-10">
        <table className="min-w-full  text-base">
          <thead className="">
            <tr className=' text-center'>
              <th className="whitespace-nowrap  px-4 py-2 font-bold text-gray-900">
                Male Biodata ID
              </th>
              <th className="whitespace-nowrap  px-4 py-2 font-bold text-gray-900">
                Female Biodata ID
              </th>
              <th className="whitespace-nowrap  px-4 py-2 font-bold text-gray-900">
                View Details
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              data?.map((user, index) =>
                <tr key={index} className='text-center'>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    0{user?.partnerBiodataNumber}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">0{user?.selfBiodataNumber}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button onClick={() => handleUserRole(user?._id)} className="inline-block rounded bg-indigo-500 px-4 py-2 text-lg font-medium text-white hover:bg-indigo-500">
                      View Success Story
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <SuccessModal id={id } closeModal={closeModal} isOpen={isOpen} />
    </div>
  )
}

export default SuccessStoryAdmin