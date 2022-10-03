import React from 'react'
import { useGlobal } from './Context';


export default function Stories() {
    const { hits, nbPages } = useGlobal();
    return (
        <>
            <h2>My Tech News Post</h2>
            {hits.map((item) => {
                return <>
                    <h2>
                        {item.title}
                    </h2>
                </>
            })}

        </>
    )
}
