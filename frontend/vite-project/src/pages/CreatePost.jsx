import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreatePost = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/create-post',formData)
        .then((res)=>{
            navigate("/feed");
        })

        .catch((err)=>{
            console.error(err);
            alert('Error creating post');
        })
        .finally(() => {
            setIsSubmitting(false);
        });


    }
  return (
    <section className='page-panel create-layout'>
        <div className='hero-card'>
            <p className='eyebrow'>Create and share</p>
            <h2>Publish a new visual story</h2>
            <p className='page-copy'>
                Upload an image, add a short caption, and send it straight into the PicStream feed.
            </p>

            <div className='hero-metrics'>
                <div className='metric-card'>
                    <strong>Fast upload</strong>
                    <span>ImageKit-powered media flow</span>
                </div>
                <div className='metric-card'>
                    <strong>Simple format</strong>
                    <span>One image and one caption per post</span>
                </div>
            </div>
        </div>

        <form className='upload-form' onSubmit={handleSubmit}>
            <div className='form-heading'>
                <h3>Create Post</h3>
                <p>Keep it visual, short, and scroll-worthy.</p>
            </div>

            <label className='field-group'>
                <span>Choose image</span>
                <input type='file' name='image' accept='image/*' required />
            </label>

            <label className='field-group'>
                <span>Caption</span>
                <input type='text' name='caption' placeholder='Write a caption for your photo' required/>
            </label>

            <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
        </form>
    </section>
  )
}

export default CreatePost
