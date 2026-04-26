import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setPosts(res.data.posts);
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    },[])

  return (
    <section className='page-panel'>
        <div className='page-heading'>
            <div>
                <p className='eyebrow'>Community feed</p>
                <h2>Fresh image posts</h2>
            </div>
            <p className='page-copy'>Browse the latest uploads, captions, and moments shared in PicStream.</p>
        </div>

        {isLoading ? (
            <div className='empty-state'>
                <div className='empty-orb'></div>
                <h3>Loading the feed</h3>
                <p>Pulling the latest posts from your backend.</p>
            </div>
        ) : posts.length > 0 ? (
            <div className='feed-grid'>
                {posts.map((post, index) =>(
                    <article
                        key={post._id}
                        className='post-card'
                        style={{ animationDelay: `${index * 90}ms` }}
                    >
                        <div className='post-image-wrap'>
                            <img src={post.image} alt={post.caption || 'Post image'} />
                        </div>
                        <div className='post-content'>
                            <span className='post-tag'>Photo Post</span>
                            <p>{post.caption}</p>
                        </div>
                    </article>
                ))}
            </div>
        ) : (
            <div className='empty-state'>
                <div className='empty-orb'></div>
                <h3>No posts yet</h3>
                <p>Create the first image post to bring the feed to life.</p>
            </div>
        )}
    </section>
  )
}

export default Feed
