import React from 'react'
import { useGlobal } from './Context';


export default function Stories() {
    const { hits, nbPages, isLoading, removePost } = useGlobal();
    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <>
            
            <div className='stories_div'>
                {hits.map((item, id) => {
                    const { author, title, url, num_comments, objectID } = item;



                    return <>

                        <div className='card' key={objectID}>
                            <h2>{title}</h2>
                            <p>
                                By {author} | <span>{num_comments}</span> comments
                            </p>
                            <div className='card-button'>
                                <a href={url} target="_blank">Read More</a>
                                <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                            </div>
                        </div>

                    </>
                })}

            </div>
        </>
    )
}
