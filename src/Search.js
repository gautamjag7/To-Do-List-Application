import React, {useState} from 'react'

const Search = ({search, setSearch}) => {
    
    return (
        <form className='form-group'>
            <div className='input-group mb-3'>
                <input type="text"
                autoFocus
                required
                className="form-control"
                placeholder="Search Items"
                onChange={(e)  =>
                    setSearch(e.target.value)
                }
                />
            </div>
        </form>
    )
}

export default Search
