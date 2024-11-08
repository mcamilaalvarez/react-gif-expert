import PropTypes from 'prop-types'
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    //Pidiendo el useState del componente padre
    //pidiendo las categories
    //setCategories([inputValue,...categories])
    //Sin pedir las categories
    //setCategories(categories => [inputValue, ...categories])

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}