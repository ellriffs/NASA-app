import { useState } from 'react';
import getImages from '../Requests/getImages';
import "../Styles/Search.css"

const Search = () => {
    const [value, setValue] = useState();

    const handleSubmit = (event) => {

        event.preventDefault()
        getImages(value);
    };

    return(
        <>
        <form className="input-form" onSubmit={handleSubmit}>       
            <input onChange={(e) => setValue(e.target.value)} className="Search" type="text"></input>
            <button className="submit"  type="submit">Search</button>
        </form>
        </>
    );
};

export default Search;