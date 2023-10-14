import { useEffect, useState, useRef } from 'react';
import axios from 'axios';


import './MainForm.css';



function MainForm(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [dots, setDots] = useState('');

    const [text, setText] = useState('');
    const [poster, setPoster] = useState('');
    const [songName, setSongName] = useState('');
    const [songLink, setSongLink] = useState('');
    const [fileLink, setFileLink] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

    const fileInputRef = useRef(null);

    const openFileInput = () => {
      fileInputRef.current.click();
    };

    function isYouTubeLink(url) {
        // Regular expression to match both standard and shortened YouTube video URLs
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/;
      
        // Test if the provided URL matches the regex
        return youtubeRegex.test(url);
      }

    const uploadImage = async () => {
        if (!selectedFile) return;
        if (selectedFile.type.startsWith('image/')) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('upload_preset', 'fpl0cyrm'); // Replace with your Cloudinary upload preset
        
            try {
              const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dxgpdylke/image/upload`, // Replace with your Cloudinary cloud name
                formData,
                {
                  onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    console.log(progress)
                  },
                }
              );
              setFileLink(response.data.secure_url)
                return response.data.secure_url
            } catch (error) {
              console.error('Error uploading image to Cloudinary:', error);
            }
        }
        else{
            alert('בבקשה בחר תמונה בלבד');
        }
      };

    const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileLink('')
    }
    useEffect(()=>{uploadImage()},[selectedFile])
    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setDots((prevDots) => {
                    return prevDots === '...' ? '' : prevDots + '.';
                });
            }, 500); // Change the dots every 500ms

            return () => clearInterval(interval);
        }
    }, [isLoading]);
    function sendToBackEnd(){
        if (isYouTubeLink(songLink)){
            setIsLoading(true)

            const scriptUrl = 'https://script.google.com/macros/s/AKfycbxGP3KCZSJnPGV6Od6yb_cxs1Nd6KdSC6jtX4t36jwx6r1iCJgU9QTOAr9PRHaES8Qe/exec';
    
            const formData = new FormData();
            formData.append('Text', text);
            formData.append('Song Name', songName);
            formData.append('Song Link', songLink);
            formData.append('Poster', poster);
            formData.append('fileLink', fileLink);
    
            axios.post(scriptUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the Content-Type header to multipart/form-data
                },
            })
                .then((response) => {
                    setIsLoading(false);
                    props.setFormIsOpen(false)
                    console.log(response.data);
                    // window.location.href = response.data;
                })
                .catch((error) => {
                    setIsLoading(false);
                });
        }
        else{
            alert("לא זוהה לינק מיוטיוב")
        }
    }
    function handleSubmit() {
        try {
            // Replace with your Google Apps Script web app URL
            if (fileLink!==''){
                sendToBackEnd()
            }
            else{
                setTimeout(() => {
                    if (fileLink!=='') {
                        sendToBackEnd()
                    } else {
                      console.log('Image is still null after retry.');
                    }
                  }, 1000);
            }


        } catch (error) {
            console.error('An error occurred while converting to PDF.');
        }
    }
    return (
        <div className="main-form">
            <div className='input-block'>
                <label className='form-input-lable'>תמונה</label>
                <button onClick={openFileInput} className='form-input' style={{textAlign:"center",border:"2px solid", borderColor:fileLink===''?"black":"green" }}>בחר תמונה</button>
                <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>הקדשה</label>
                <textarea type='text' className='form-input' dir='rtl' value={text} onChange={(value) => { setText(value.target.value) }}></textarea>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>שם המקדיש</label>
                <input type='text' className='form-input' dir='rtl' value={poster} onChange={(value) => { setPoster(value.target.value) }}></input>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>שם השיר</label>
                <input type='text' className='form-input' dir='rtl' value={songName} onChange={(value) => { setSongName(value.target.value) }}></input>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>לינק לשיר</label>
                <input type='text' className='form-input' dir='rtl' value={songLink} onChange={(value) => { setSongLink(value.target.value) }}></input>
            </div>
            <button
                className={`submit-button ${isLoading ? 'loading' : ''}`}
                onClick={handleSubmit}
                disabled={isLoading}
                
            >
                {isLoading ? `${dots}שולח ` : `שלח`}
            </button>

        </div>

    );
}

export default MainForm;
