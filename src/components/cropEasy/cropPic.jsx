import React from 'react'
import { useState } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { updateUserProfilePicture } from '../../services/index/users'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userActions } from '../../store/reducer/userReducers'
import { Input } from 'reactstrap'

const CropPic = ({photo, setopenCropper}) => {
    const userState = useSelector((state) => state.user)
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [crop, setcrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const [croppedPixels, setCroppedPixels] = useState(null)
    const handleCropComplete = (cropPixels, completedCropPixels) => {
        setCroppedPixels(completedCropPixels)
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

    const handleCroppedImage = async () => {
      try {
        const originalType = photo?.file?.type || 'image/jpeg';
        const validTypes = ['image/jpeg', 'image/png'];
        const fileType = validTypes.includes(originalType) ? originalType : 'image/jpeg'; // fallback
    
        const croppedImage = await getCroppedImg(
          photo?.url,
          croppedPixels,
          0,
          { horizontal: false, vertical: false },
          fileType
        );
    
        const ext = fileType.split('/')[1]; // jpeg or png
        const fileName = photo?.file?.name || `cropped.${ext}`;
    
        const file = new File([croppedImage.file], fileName, {
          type: fileType,
        });
    
        const formData = new FormData();
        formData.append('profilePicture', file);
    
        mutate({ token: userState.userInfo.token, formData });
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };
    
    
  return (
    <div className='fixed z-[1000] inset-0 bg-black/50 flex justify-center p-5 overflow-auto'>
      <div className='bg-white h-fit w-full sm:max-w-[350px] p-5 rounded-lg'>
        <h2>Edit Profile Picture</h2>
        <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
            <Cropper image={photo?.url} aspect={1} zoom={zoom} crop={crop} onZoomChange={setZoom} onCropChange={setcrop} onCropComplete={handleCropComplete}/>
        </div>
        <div>
          <label htmlFor="zoomRange" className='block mt-2 mb-0.5 text-gray-900 text-sm font-medium' >Zoom {`${Math.round(zoom * 100)}%`}</label>
          <Input type="range" id="zoomRange" className='w-full bg-gray-200 h-1 mb-6 rounded-full appearance-none range-sm range-primary' min={1} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(e.target.value)}/>
        </div>
        <div className='flex justify-between flex-wrap gap-2'>
          <button disabled={isLoading} onClick={() => setopenCropper(false)} className='px-4 py-2 text-red-500 border border-red-500 mb-2 disabled:opacity-65 text-sm rounded-lg hover:bg-red-500 hover:font-bold hover:text-white'>Cancel</button>
          <button disabled={isLoading} onClick={handleCroppedImage} className='px-4 py-2 text-dark-soft border border-dark-soft mb-2 disabled:opacity-65 text-sm rounded-lg hover:bg-dark-soft hover:font-bold hover:text-white'>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default CropPic
