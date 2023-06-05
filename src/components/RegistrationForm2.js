import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationForm2 = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
    });

    const handleFileChange = (event, index) => {
        const files = event.target.files;
        const updatedFiles = [...selectedFiles];
        updatedFiles[index] = files[0];
        setSelectedFiles(updatedFiles);
    };

    const handleTextChange = (event, field) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            const data = new FormData();
            selectedFiles.forEach((file, index) => {
                data.append(`file${index}`, file);
            });

            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key]);
            });

            fetch('http://your-django-api-url/', {
                method: 'POST',
                body: data,
            })
                .then((response) => response.json())
                .then((responseData) => {
                    // Handle response here
                    console.log(responseData);
                })
                .catch((error) => {
                    // Handle error here
                    console.error(error);
                });
        }
    };

    return (
        <div>
            <input
                type="file"
                onChange={(event) => handleFileChange(event, 0)}
            />
            <input
                type="file"
                onChange={(event) => handleFileChange(event, 1)}
            />
            <input
                type="file"
                onChange={(event) => handleFileChange(event, 2)}
            />
            <input
                type="file"
                onChange={(event) => handleFileChange(event, 3)}
            />

            <input
                type="text"
                value={formData.field1}
                onChange={(event) => handleTextChange(event, 'field1')}
            />
            <input
                type="text"
                value={formData.field2}
                onChange={(event) => handleTextChange(event, 'field2')}
            />
            <input
                type="text"
                value={formData.field3}
                onChange={(event) => handleTextChange(event, 'field3')}
            />
            <input
                type="text"
                value={formData.field4}
                onChange={(event) => handleTextChange(event, 'field4')}
            />

            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default RegistrationForm2;