import { Dialog, Transition } from '@headlessui/react'
import { Rating } from '@smastrom/react-rating'
import { Fragment } from 'react'


const SuccessModal = ({ closeModal, isOpen, id }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10 bg-[#EDF2F4]' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-[#EDF2F4] bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#1976D2] mt-20 py-2 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-xl font-medium text-center leading-6 text-[#1976D2]'
                                >
                                    Success story details
                                </Dialog.Title>
                                
                                <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>

                                    <img src={id?.image} alt="" className='rounded-lg h-[200px] w-[300px]' />
                                    <p className='text-black lg:text-[25px] text-2xl font-semibold'>{id?.date}</p>

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={id?.rating}
                                        readOnly
                                    />
                                    <h1 className='text-[#444] font-medium text-xl  lg:text-[20px] text-center'>{id?.successStoryReview}</h1>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )

}

export default SuccessModal