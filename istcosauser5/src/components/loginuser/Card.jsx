import React from 'react'

function Card({header,batch,CurrentRegistered,CurrentRegisteredInPer ,Registered,RegisteredInPer}) {

   

  return (
    <>
        <div>
            <div className='mt-5 border-2 border-red-900 bg-white text-center pb-5'>
                <div className='bg-red-900 p-2 '>
                    <p className='font-bold text-xl text-white'>{header}</p>
                </div>

                <div >
                    <p className='text-2xl mt-3'>Batch ({batch})</p>

                    <p className='text-2xl mt-5'><span className='font-bold'>{CurrentRegistered}</span> <span className='text-red-900'>({CurrentRegisteredInPer}%)</span></p>
                </div>


                <div className='text-2xl mt-5 border-t-2 border-red-900'>
                    <p className=' mt-2'>Total: {Registered} ({RegisteredInPer}%)</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Card
