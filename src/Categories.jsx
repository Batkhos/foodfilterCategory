import React from 'react'

export default function Categories({Itemcategories,filterItems}) {
  return (
    <div>
      {Itemcategories.map((category , index)=>
      <button key={index} onClick={()=>filterItems(category)}>{category}</button>
      )}
    </div>
  )
}
