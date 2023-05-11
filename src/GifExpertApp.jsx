import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([
        'One Punch'
    ]);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;
        //console.log(newCategory);
      //  setCategories([...categories, 'valorant']);
           setCategories([ newCategory, ...categories ]);
    }


    //console.log(categories);



    return(
        <>
            
            {/* titulo*/}
            <h1>GifExpertApp</h1>

            {/* Input*/}
            
            <AddCategory //setCategories={setCategories}
              onNewCategoryA={(value) => onAddCategory(value)} >
            </AddCategory>

            {/* <button onClick={onAddCategory}>Enviar</button> */}

            {/* Listado de gif*/}
                
                    {
                        categories.map((category) => (
                             <GifGrid 
                                key={category}
                                category={category} />
                            )
                        )
                    }


                {/* Git item*/}
        </>
    )
}