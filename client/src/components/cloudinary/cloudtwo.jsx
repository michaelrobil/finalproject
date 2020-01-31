import React, { useState } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';

//this file is for the companies profile image
export default function Main2() {
    const [image, setImage] = useState({url: ""});

    function uploadImage(){
        console.log(image)
    }
    const user = JSON.parse(localStorage.getItem('user'))

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
                setImage(result[0].url);
                uploadImage()
                API.addPost({
                    accountID: user.data.user._id,
                    companyImageURL:result[0].url})
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

