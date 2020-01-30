import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function Cloud() {

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Erics-preset-serv')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ericnrgnash/image/upload', {
      method: 'POST',
      body: data
    }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  };

  

  return (
    <div className="App">

<PhotoCamera onClick={uploadImage}/>
      {/* <input type="file"
        name="file"
        placeholder="Upload An Image"
        onChange={uploadImage}
      />
    {loading ? (
      <h3>Loading...</h3>
    ) : (
      <img src={image} style={{width:'300px'}}/>
    )} */}




    </div>
  );

}

export default Cloud;
