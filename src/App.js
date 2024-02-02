import React, { useState } from 'react'
import Categories from './Categories'
import Menu from './Menu'
import items from './Data'


const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
export default function App() {
  const [menuItem , setMenuItems] = useState(items)
  const [kinds , setKinds] = useState(allCategories)

  const filtering = (category) =>{
     if ( category === 'all') {
    setMenuItems(items)
    return
  }
  const newItem = items.filter((item)=>item.category === category)
  setMenuItems(newItem)
}
 
  return (
    <main>
      <section>
          <Categories Itemcategories={kinds} filterItems={filtering} />
          <Menu items = {menuItem}/>
      </section>
    </main>
  )
}
