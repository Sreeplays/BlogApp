import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { stables } from '../constants'
import { createPortal } from 'react-dom'
import CropPic from './cropEasy/cropPic'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userActions } from '../store/reducer/userReducers'
import { updateUserProfilePicture } from '../services/index/users'
const ProfilePicture = ({avatar}) => {
  const userState= useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [openCropper, setopenCropper] = useState(false)
  const [photo, setPhoto] = useState(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setPhoto({url: URL.createObjectURL(file), file})
    setopenCropper(true)
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ token, formData}) => {
      return updateUserProfilePicture({
        token: token,
        formData: formData
       });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"])
      toast.success(`${userState.userInfo.name}'s avatar updated successfully`);
      navigate('/profile')
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleDeleteImage = () => {
    try {
      const formData = new FormData()
      formData.append("profilePicture", undefined)
      mutate({token: userState.userInfo.token, formData: formData})
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <>
    {openCropper && createPortal(<CropPic photo={photo} setopenCropper={setopenCropper} />, document.getElementById('portal')) }
   
    <div className='w-full flex flex-row justify-center items-center gap-x-6'>
      <p className='text-base font-bold'>Photo:</p>
      <div className='relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden'>
        <label htmlFor="profilePicture" className='rounded-full absolute inset-0 cursor-pointer bg-transparent'>
            {avatar ? (
                <img src={stables.PROFILE_PIC_DEFAULT_URL + avatar} alt="profile" className='w-full h-full object-cover'/>
            ) : (
                <div className='w-full h-full bg-blue-50/50 flex justify-center items-center'>
                    <FaUserCircle  className='w-10 h-10'/>
                </div>
            )}
        </label>
        <input type="file" className='sr-only' id='profilePicture' onChange={handleFileChange}/>
      </div>
      {avatar && <button type="button" className='border border-red-500 text-red-500 rounded-lg py-1.5 px-3 mt-2 text-xs justify-center items-center' onClick={handleDeleteImage} disabled={isLoading}>Delete</button>}
      
    </div>
    </>
  )
}

export default ProfilePicture
