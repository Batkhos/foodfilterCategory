import React from 'react'

export default function Menu({items}) {
  return (
    <div>
        {items.map((menuItem)=>{
            const{id,title,price,img,desc} = menuItem;
            return(
                <section key={id}>
                    <img src={img} alt={title} />
                    <h4>{price}</h4>
                    <p>{desc}</p>
                </section>
            )
        })}
    </div> 
  )
}
