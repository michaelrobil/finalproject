import React, { useContext } from 'react';
import ProductContext from '../utils/ProductContext';
import InputText from '../components/InputText';
import Button from '../components/Button';

function SearchForm() {
    const { inputRef, setSearchTerm, fetchProducts } = useContext(ProductContext);
    return (
        <form>
            <h2>Search Product</h2>
            <InputText type='search' ref={inputRef} onChange={(e) => setSearchTerm(e.target.value)}></InputText>
            <Button type="submit" onClick={fetchProducts}>Search</Button>
        </form>
    )
}

export default SearchForm;