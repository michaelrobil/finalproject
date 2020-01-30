import React, { useState, useEffect } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';



//this file will add new pictures to the companies list of pictures
export default function Main() {

const user = JSON.parse(localStorage.getItem('user'))

//     useEffect(() => {
// API.getPosts()
// .then(res => res.data)
//     },[])

    const uploadWidget = () => {
        const config = {
            cloud_name: 'ericnrgnash',
            upload_preset: 'Erics-preset-serv', 
            tags:['company']
        };
        window.cloudinary.openUploadWidget(config, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                API.editPost(user.data.user._id, {
                  postImageURL: result[0].url,
                  })
            }
        });
    };

    return (
        <div className="main">
            <div className="upload">
                <button onClick={uploadWidget} className="upload-button">
<PhotoCamera/>            </button>
            </div>
        </div>
    );
}

