import React, { useEffect } from 'react'
import { useState } from 'react'
// import NoImage from '../../../assets/NoImage.jpg'


function Profile() {
  const [pathName, setPathName] = useState('')
  const [imageData, setImage] = useState({
    image: '',
  })

  const handleChange = (e) => {
    setImage((oldData => ({ ...oldData, [e.target.name]: e.target.value })))

  }

  useEffect(() => {
    const data = imageData.image
    const path = data.split('\\').pop()
    const last = path?.split(".")[0]
    const path2 = last.trim();
    console.log(path2, 'path2')
    setPathName(path2)
  }, [imageData.image])


  return (
    <>
      <div className='bg-slate-50 h-full'>
        <div className='pt-5'>
          <div className='mx-5'>
            <p className='py-3 px-5 bg-white text-3xl font-bold text-red-900'>Change Profile Photo</p>
          </div>

          <div className='mt-5'>
            <div className='mx-5 bg-white rounded-lg '>
              <div className='py-5 px-8'>
                <p className=' font-medium text-lg '>Profile Photo</p>
                {/* {
                  imageData.image ?
                    <img src={`/src/assets/${pathName}.jpg`} alt="img" className='w-36 h-36 mt-5' /> :
                    <img src={NoImage} alt='img' />
                } */}

                <div className='w-60 mt-14'>
                  <input type="file" name='image' value={imageData.image} onChange={handleChange}
                    className='py-1.5 border'
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
