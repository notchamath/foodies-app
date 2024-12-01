"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function imagePickerBtn() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if(!file){
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked</p>}
          {pickedImage && <Image src={pickedImage} alt='Image picked by user' fill/>}
        </div>
        <input 
          className={classes.input}
          type="file" 
          id={name} 
          accept='image/png, image/jpeg' 
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          // multiple
          required
        />
        <button className={classes.button} type='button' onClick={imagePickerBtn}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}