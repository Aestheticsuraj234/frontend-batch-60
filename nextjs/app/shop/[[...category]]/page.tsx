import React from 'react'

const Shop = async({params}:{params:{category?:Promise<string[]>}}) => {
    const {category} = await params;
  return (
    <div>
        <h1>Shop</h1>
        {
            params.category ? <p>Category : {(await params.category).join("/")}</p>:(
                <p>All products</p>
            )
        }
    </div>
  )
}

export default Shop