import { useEffect, useState } from 'react';
import axios from 'axios';

import './MainForm.css';
function MainForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [dots, setDots] = useState('');

    const [title, setTitle] = useState('');
    const [fullName, setFullName] = useState('');
    const [teamNumber, setTeamNumber] = useState('');
    const [context, setContext] = useState('');


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

    // function convertToPDF() {
    //     try {
    //         // Replace with your Google Apps Script web app URL
    //         const scriptUrl = 'https://script.google.com/macros/s/AKfycbxsGGayDNWEtXeorWZtF8EPNAk260pHZd89-9WA_BWCGOHWD4hRhsIjFhI7Vx4ETcyA/exec';
    //         setIsLoading(true)

    //         const currentDate = new Date();
    //         const hebrewDateStr = today.toString('h');
    //         const hebrewDateArray = hebrewDateStr.split(' ');

    //         // Create a FormData object
    //         const formData = new FormData();
    //         formData.append('title', title);
    //         formData.append('context', context);
    //         formData.append('full_name', fullName);
    //         formData.append('team_number', teamNumber);
    //         formData.append('g_day', currentDate.getDate());
    //         formData.append('g_month', "ב" + month_in_hebrow[currentDate.getMonth()]);
    //         formData.append('g_year', currentDate.getFullYear());
    //         formData.append('h_day', hebrewDateArray[0]);
    //         formData.append('h_month', hebrewDateArray[1]);
    //         formData.append('h_year', hebrewDateArray[2]);

    //         axios.post(scriptUrl, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data', // Set the Content-Type header to multipart/form-data
    //             },
    //         })
    //             .then((response) => {
    //                 setIsLoading(false);
	// 		window.open(response.data);
    //                 // window.location.href = response.data;
    //             })
    //             .catch((error) => {
    //                 setIsLoading(false);
    //             });


    //     } catch (error) {
    //         console.error('An error occurred while converting to PDF.');
    //     }
    // }
    return (
        <div className="main-form">
            <div className='input-block'>
                <label className='form-input-lable'>כותרת העבודה</label>
                <input type='text' className='form-input' dir='rtl' value={title} onChange={(value) => { setTitle(value.target.value) }}></input>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>שם מלא</label>
                <input type='text' className='form-input' dir='rtl' value={fullName} onChange={(value) => { setFullName(value.target.value) }}></input>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>צוות</label>
                <input type='text' className='form-input' dir='rtl' value={teamNumber} onChange={(value) => { setTeamNumber(value.target.value) }}></input>
            </div>
            <div className='input-block'>
                <label className='form-input-lable'>תוכן העבודה</label>
                <textarea className='form-input textarea' dir='rtl' style={{ height: "37vh" }} value={context} onChange={(value) => { setContext(value.target.value) }}></textarea>
            </div>
            <button
                className={`submit-button ${isLoading ? 'loading' : ''}`}
                onClick={()=>{console.log("")}}
                disabled={isLoading}
            >
                {isLoading ? `${dots}מייצר את העבודה` : `הורד עבודה`}
            </button>

        </div>

    );
}

export default MainForm;
