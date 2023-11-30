import React from 'react'
import TitleBar from '../../../Utils/TitleBar'
import useStatistics from '../../../Hooks/useStatistics'
import PiChart from './PiChart';
import Loading from '../../Components/Loading';

const AdminPage = () => {

  const { data, isLoading, refetch } = useStatistics();
  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <TitleBar title={'ADMIN PAGE'} />
      <div>
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-0 sm:px-6 md:py-3 lg:px-8">

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col shadow-xl rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Users
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    {data?.users}
                  </dd>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Male Users
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{data?.male}</dd>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Female Users
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{data?.female}</dd>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Premium Members
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{data?.premiumMember}</dd>
                </div>

                <div className="flex flex-col shadow-xl rounded-lg bg-blue-100 px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Revenue
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{data?.totalTaka}TK</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

      </div>
      <div className=''>
        <PiChart />
      </div>
    </div>
  )
}

export default AdminPage