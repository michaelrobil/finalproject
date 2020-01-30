import React, { useState, useEffect } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';


export default function Main() {

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
                API.addPost({
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

