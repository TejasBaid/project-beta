import React from 'react';
import "./FilterTable.scss";

export const FilterTable = () => {
    return (
        <div className="filter-table">
            <div className="search-row">
                <input type="text" className="filter-input" placeholder="Search here..."/>
                <select>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                </select>
            </div>
        </div>
    );
}