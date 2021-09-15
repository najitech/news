import React from 'react'
import './Categories'
import CategoryCheckbox from './CategoryCheckbox'
function Categories() {
    return (
        <div className="categories">
            <CategoryCheckbox className="fontStyle" name="سیاسی" label="سیاسی"/>
            <CategoryCheckbox className="fontStyle" name="اقتصادی" label="اقتصادی"/>
        </div>  
    )
}

export default Categories
