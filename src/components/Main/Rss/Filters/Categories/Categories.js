import React from 'react'
import './Categories'
import CategoryCheckbox from './CategoryCheckbox'
function Categories() {
    return (
        <div className="categories">
            <CategoryCheckbox name="سیاسی" label="سیاسی"/>
            <CategoryCheckbox name="اقتصادی" label="اقتصادی"/>
        </div>  
    )
}

export default Categories
