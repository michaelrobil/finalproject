import React, { useState } from 'react';


export default function Main() {
    const [image, setImage] = useState({url: ""});
    
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
            }
        });
    };

    return (
        <div className="main">
            <div className="upload">
                <button onClick={uploadWidget} className="upload-button">
                    Add Image
            </button>
            </div>
        </div>
    );
}

