import React from 'react'
import TitleBar from '../../../Utils/TitleBar'

const ApprovePremium = () => {
  return (
    <div>
      <TitleBar title={'APPROVE PREMIUM REQUEST'} />
      <div className='pb-10'>
        <div className="overflow-x-auto lg:px-10">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
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
                  Action
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ApprovePremium