import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer', 'Attack On Titan'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, 'Diarios de la Boticaria'])

    }


    return (
        <>
            <h1> Gif Expert App</h1>
            <AddCategory setCategories={setCategories} onNewCategory={onAddCategory} />
            {/* {Listado de Gif} */}
            {/* <button onClick={onAddCategory} >Agregar</button> */}

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            )
            )
            }


            {/* {Gif Item} */}



        </>
    )
}
