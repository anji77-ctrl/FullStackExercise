import React from 'react'

const SearchInput = (props) => {
    return (
        <div>
            Find a country: <input type="text" onChange={props.change} />
        </div>
    )
}

export default SearchInput
