import React, {useState} from 'react'
import CategoryAdd from './Components/CategoryAdd'
import GifGrid from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    // const handleAdd = () => { 
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories}/>
            <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}/>
                ))
            }
            </ol>
        </div>
    )
}
