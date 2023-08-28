import React, { useRef, useState } from 'react'
import Button from '../../Components/Button'
import { MdOutlineEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addProductPhoto } from '../../Feature/Service/productSlice';
const ThirdStep = () => {
  const fileInputRef = useRef(null);
    const dispatch=useDispatch();
    const [imageSrc, setImageSrc] = useState('');
    const handleEditClick = () => {
      // Programmatically trigger the file input's click event
      fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      console.log(file);
      if (file) {
        // Dispatch only the file itself or its URL as needed
        const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the selected image
  
        // Dispatch the URL
        dispatch(addProductPhoto({ photo: imageUrl }));
  
        // Set the image source to display the selected image
        setImageSrc(imageUrl);
        // Set the image source to display the selected image
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          setImageSrc(imageUrl);
        };
        reader.readAsDataURL(file);
      }
    };  
  return (
    <div>
    <section
          className={`w-full bg-[#161618]`}
        >
          <div className="w-full flex flex-col items-center justify-center ">
            <h2 className="my-10">Upload Photo</h2>
            <div
              className={`w-40 h-40 relative rounded-full border-2 border-dashed p-1 flex justify-center items-center`}
            >
              <img
                className={`w-full`}
                src={imageSrc || 'https://cdn-icons-png.flaticon.com/512/8787/8787106.png'}
                alt=""
              />
              <div
               onClick={handleEditClick}
                className={` file flex justify-center cursor-pointer absolute bg-[#202124] right-3  bottom-1 items-center text-xs gap-1 border-2 rounded-full w-8 h-8 px-1 py-0.5`}
              >
                <MdOutlineEdit />
                <input  ref={fileInputRef}
                onChange={handleFileChange} className="file hidden" type="file" name="" id="" />
              </div>
            </div>
            <div className="my-10">
              <Button
                text={"Clear Photo"}
                className={`border border-gray-400 `}
              />
            </div>
          </div>
        </section>
</div>
  )
}

export default ThirdStep
