import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone';
import Button from "../UI/Button";
import { db, storage } from "../Firebase/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { UserAuth } from "../Context/AuthContext";
import validator from 'validator';
import ProfileCover from "../Images/profile-cover.svg";
import ProfilePic from "../Images/Avatar.png";
import UploadPic from "../Images/upload-pic.svg";

const Profile = () => {

  const { user } = UserAuth()
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [previewPic, setPreviewPic] = useState(null);

  const [data, setData] = useState([]);

  const [previewLoading, setPreviewLoading] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })

  const handleEdit = () => {
    setIsEditMode(true)
  }

  const handleSaveClick = (e) => {
    e.preventDefault();
    openModal(), handleEdit()
  }

  const handlePicDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const Imgs = ref(storage, `profilePicture/${user.uid}`);
      setPreviewLoading(true)

      try {
        const data = await uploadBytes(Imgs, file);
        const val = await getDownloadURL(data.ref);

        setProfilePic(val);
        setPreviewPic(URL.createObjectURL(file));
      } catch (err) {
        console.log("Error uploading image: ", err)
      } finally {
        setPreviewLoading(false)
      }
    }
  }

  const handleDataUpdate = async (e) => {
    e.preventDefault();
    setLoadingSave(true);

    // Validation
    const isValidFirstName = validator.isAlpha(firstName, 'en-US', { ignore: '' });
    const isValidLastName = validator.isAlpha(lastName, 'en-US', { ignore: '' });
    const isValidEmail = validator.isEmail(email);

    const validateField = (field, isValid) => {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: !isValid }));
    };

    validateField('firstName', isValidFirstName);
    validateField('lastName', isValidLastName);
    validateField('email', isValidEmail);

    // Check if all fields are valid
    if ((isValidFirstName && isValidLastName && isValidEmail) || previewPic) {
      try {
        const profileDB = doc(db, "profiles", user.uid);
        const profileDBSnap = await getDoc(profileDB);

        if (profileDBSnap.exists()) {
          const existingData = profileDBSnap.data();

          const updatedData = {
            ...existingData,
            firstName: firstName || existingData?.firstName,
            lastName: lastName || existingData?.lastName,
            email: email || existingData?.email,
            ImgURL: profilePic || existingData?.ImgURL
          }
          await setDoc(profileDB, updatedData);

        } else {
          const newProfileData = {
            firstName,
            lastName,
            ImgURL: profilePic
          }
          await setDoc(profileDB, newProfileData);
        }
        setIsEditMode(false);
        setValidationErrors({
          firstName: false,
          lastName: false,
          email: false,
        })
        window.location.reload();
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingSave(false)
      }
    } else {
      // alert('Please fill the form properly');
      setLoadingSave(false);
    }
  }

  const getData = async () => {
    const profileDB = doc(db, "profiles", user.uid);
    const profileDBSnap = await getDoc(profileDB);
    setData(profileDBSnap.data())
  }

  useEffect(() => {
    getData();

    return () => {
      if (previewPic) {
        URL.revokeObjectURL(previewPic)
      }
    }
  }, [previewPic])


  return (
    <div>
      {/* heading and balance */}
      <div className='mx-auto'>
        <div>
          <img className='mx-auto' src={ProfileCover} alt="cover pic" />
        </div>

        {loadingSave ? (
          <div className='flex items-center justify-center h-screen'>
            <div className='page-spinner' />
          </div>
        ) :
          (
            [data].map((item) => (
              <>
                <div className='max-w-[1100px] mx-auto md:flex md:flex-row flex flex-col items-center justify-between relative bottom-10 gap-8 md:gap-0'>

                  <div className='md:flex md:flex-row flex flex-col items-center gap-4'>
                    <div>
                      <img className='h-40 w-40 rounded-full bg-white' src={item?.ImgURL || user?.photoURL || ProfilePic} alt="profile photo" />
                    </div>
                    <div>
                      <h1 className='text-3xl font-medium'>{item?.firstName || user?.displayName || "User"}</h1>
                      <p className='text-[#667085] text-center md:text-left'>@{item?.firstName || user?.displayName || "user"}</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <Button style={'bg-[#1f78be] text-white text-sm font-semibold rounded-lg px-4 py-[10px] md:w-max hover:bg-[#1f78be] hover:transition-all hover:delay-100 hover:ease-in-out hover:scale-105'}
                      text={isEditMode ? "Save" : "Save"}
                      event={isEditMode ? handleSaveClick : handleDataUpdate} />
                  </div>
                </div>

                <form className='max-w-[640px] mx-auto'>
                  <div className='flex flex-col md:flex md:flex-row md:items-center md:justify-between gap-6 border-b border-[#EAECF0] pb-5'>
                    <div className='flex flex-col gap-[6px] w-full'>
                      <label className='text-[#344054] text-sm font-medium'>
                        First name
                      </label>
                      <input name='firstName' placeholder={item?.firstName || 'first name'} value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"
                        className={`outline-1 border p-2 rounded-lg ${validationErrors.firstName ? 'border-red-500 border-[2px]' : 'border-gray-300 outline-[#7F56D9]'}`} />
                    </div>

                    <div className='flex flex-col gap-[6px] w-full'>
                      <label className='text-[#344054] text-sm font-medium'>
                        Last name
                      </label>
                      <input name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder={item?.lastName || 'last name'}
                        className={`outline-1 border p-2 rounded-lg ${validationErrors.lastName ? 'border-red-500 border-[2px]' : 'border-gray-300 outline-[#7F56D9]'}`} />
                    </div>
                  </div>

                  <div className='py-5 flex flex-col gap-[6px]'>
                    <label className='text-[#344054] text-sm font-medium'>
                      Email
                    </label>
                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={item?.email || user?.email || 'abc@example.com'}
                      className={`outline-1 border p-2 rounded-lg ${validationErrors.email ? 'border-red-500 border-[2px]' : 'border-gray-300 outline-[#7F56D9]'}`} />
                  </div>


                  {/* Dropzone section */}
                  <div className='py-5 border-b border-[#EAECF0]'>
                    <div className='md:flex md:flex-row flex flex-col items-center md:items-start gap-5'>
                      {previewLoading ? (
                        <div className='spinner' />
                      ) : (
                        <div className='rounded-full'>
                          <img className='h-20 w-24 rounded-full' src={previewPic || item?.ImgURL || user?.photoURL || ProfilePic} alt="profile pic" />
                        </div>
                      )}
                      <Dropzone onDrop={handlePicDrop} accept={{ "image/*": [".jpeg", ".jpg", ".png", ".svg"] }} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                          <div className='bg-white w-full rounded-lg border border-[#EAECF0] flex flex-col justify-center items-center px-6 py-4 cursor-pointer' {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img src={UploadPic} alt="upload profile pic" />
                            <p className='text-[#667085] text-xs pt-3 text-center'>
                              <span className='text-[#4285F4] text-sm font-semibold tracking-wide'>
                                Click to upload profile photo
                              </span> or drag and drop <br /> SVG, PNG, JPG, or GIF (max. 800x400px)
                            </p>
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </div>

                  <div className='flex justify-end gap-3 py-5'>
                    <Button style={'bg-[#1f78be] text-white text-sm font-semibold rounded-lg px-4 py-[10px] md:w-max hover:bg-[#1f78be] hover:transition-all hover:delay-100 hover:ease-in-out hover:scale-105'}
                      text={isEditMode ? "Save" : "Save"}
                      event={isEditMode ? handleSaveClick : handleDataUpdate} />
                  </div>

                </form>
              </>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Profile
