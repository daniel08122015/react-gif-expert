import { useState } from "react"

export const AddCategory = ( { onNewCategoryA  }) => {

    const[inputValue, setInputValue] = useState('');


    const onInputChange = ({target}) => {
        
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
       event.preventDefault();
       if (inputValue.trim().length <= 1) return;
       // console.log(inputValue); 
       //setCategories(categories => [inputValue, ...categories]);
       setInputValue('');    
       onNewCategoryA(inputValue.trim());

    }


    return(
        <>
        {/* onSubmit={(event)=> onSubmit(event)} */}
        <form onSubmit={onSubmit}> 
        <input type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}>
        </input>
        </form>
        
        {/* onChange={(event) => onInputChange(event)} */}
        </>
    )
}