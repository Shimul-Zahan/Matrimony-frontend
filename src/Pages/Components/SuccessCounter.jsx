import React, { useEffect, useState } from 'react'
import TitleBar from '../../Utils/TitleBar'
import CountUp from 'react-countup';

import img1 from '../../assets/icons/group.png'
import img2 from '../../assets/icons/woman.png'
import img3 from '../../assets/icons/young-man.png'
import img4 from '../../assets/icons/couple.png'
import bg from '../../assets/slider-resources/couple-newlyweds-hugging.jpg'

const SuccessCounter = () => {

    const [count, setCOunt] = useState(0);

    // setInterval(() => {
    //     setCOunt(count + 5);
    // }, 3000);
    // console.log(count)

    return (
        <div className='bg-black bg-blend-overlay bg-opacity-60 flex flex-col justify-center items-center bg-fixed' style={{backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className='mt-20'>
                <TitleBar className='text-white' title={'SUCCESS COUNTER'} subTitle={'Here are Some Statistics of Our Site'} />
            </div>
            <div className='flex justify-center items-center '>
                <div className='shadow-sm font-mono grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 min-h-[500px]'>
                    <div>
                        <CountUp start={0} end={100}>
                            {({ countUpRef }) => (
                                <div className='py-4 px-8 text-4xl lg:text-7xl text-white font-bold flex flex-col justify-center items-center gap-5'>
                                    <div>
                                        <img src={img1} alt="" className='h-32 w-32 rounded-sm' />
                                    </div>
                                    <span ref={countUpRef} />
                                    <h1 className='text-2xl lg:text-4xl'>Total User</h1>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div>
                        <CountUp start={0} end={100}>
                            {({ countUpRef }) => (
                                <div className='py-4 px-8 text-4xl lg:text-7xl text-white font-bold flex flex-col justify-center items-center gap-5'>
                                    <div>
                                        <img src={img2} alt="" className='h-32 w-32 rounded-sm' />
                                    </div>
                                    <span ref={countUpRef} />
                                    <h1 className='text-2xl lg:text-4xl'>Female</h1>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div>
                        <CountUp start={0} end={200}>
                            {({ countUpRef }) => (
                                <div className='py-4 px-8 text-4xl lg:text-7xl text-white font-bold flex flex-col justify-center items-center gap-5'>
                                    <div>
                                        <img src={img3} alt="" className='h-32 w-32 rounded-sm' />
                                    </div>
                                    <span ref={countUpRef} />
                                    <h1 className='text-2xl lg:text-4xl'>Male</h1>
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <div>
                        <CountUp start={0} end={20}>
                            {({ countUpRef }) => (
                                <div className='py-4 px-8 text-4xl lg:text-7xl text-white font-bold flex flex-col justify-center items-center gap-5'>
                                    <div>
                                        <img src={img4} alt="" className='h-32 w-32 rounded-sm' />
                                    </div>
                                    <span ref={countUpRef} />
                                    <h1 className='text-2xl lg:text-4xl'>Marrige</h1>
                                </div>
                            )}
                        </CountUp>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SuccessCounter