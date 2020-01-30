import React, { useState } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import API from '../../utils/API';


export default function Main() {
    const [image, setImage] = useState({url: ""});

    function uploadImage(){
        console.log(image)
        API.addPost({companyImageURL:image})
    }
    
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
                setImage(result[0]);
                uploadImage()
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

