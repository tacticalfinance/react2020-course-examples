import _ from 'lodash';
import React, { useState } from 'react';
import FilterBox from './filter-box';
import ListControl from './list-control';

const allItems = ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'];

export default function FilterControl(props) {
    const [validItems, setValidItems] = useState(items);

    function onTextChanged(text) {
        setValidItems(allItems.filter(item => item.toLowerCase().includes(text.toLowerCase())));
    }

    const style = {
        display: "block",
        margin: "10px"
    }

    return (
        <div style={style}>
            <FilterBox handleChange={onTextChanged} />
            <ListControl items={validItems} />
        </div>
    );
}