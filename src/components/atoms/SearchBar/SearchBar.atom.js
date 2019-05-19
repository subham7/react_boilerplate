import React from "react"
import SearchBar from "material-ui-search-bar"

const SearchBar1 = props => {
  return (
    <SearchBar
      onChange={props.onChange}
      onRequestSearch={props.onRequestSearch}
      style={props.style}
    />
  )
}

export default SearchBar1
