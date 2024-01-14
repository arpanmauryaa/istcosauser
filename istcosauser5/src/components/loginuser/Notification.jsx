import React from 'react'

function Notification() {
    return (
        <>
            <div className='bg-slate-50 h-full'>
                <div className='mx-8 pt-8'>
                    <div>
                        <div className=' bg-white rounded-md py-3 px-5 '>
                            <div className='text-4xl font-bold text-red-900'>
                                Notifications
                            </div>
                        </div>
                    </div>


                    <div className='mt-8 px-16 py-5 bg-white rounded-md'>
                        <div>
                            <ul class="list-disc">
                                <li><a href="" className="font-medium text-blue-600 text-lg dark:text-blue-500 hover:text-blue-800">Employment at team leader</a></li>
                                <li className='mt-5'><a href="" className="font-medium text-lg text-blue-600 dark:text-blue-500 hover:text-blue-800">Employment at devloper</a></li>
                                <li className='mt-5'><a href="" className="font-medium text-lg text-blue-600 dark:text-blue-500 hover:text-blue-800">Employment at devloper</a></li>
                                <li className='mt-5'><a href="" className="font-medium text-lg text-blue-600 dark:text-blue-500 hover:text-blue-800">Employment at devloper</a></li>
                                <li className='mt-5'><a href="" className="font-medium text-lg text-blue-600 dark:text-blue-500 hover:text-blue-800">Employment at test</a></li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Notification
