import React, { createElement } from 'react'

export const Databinding = () => {
 
    var products={
        Name:"Samsung",
        Price:"$302",
        Stock:"Availabel"
    }
    var courses =[
        {  Title:"ASP.net",fees:"$223",duration:"6 month"     },
        {  Title:"React",fees:"$53",duration:"6 month"     },
        {  Title:"PHP",fees:"$223",duration:"6 month"     }
    ]
  return (
    <div>

    <div className='container-fluid'>
        <h2>Courses</h2>
        <div className="d-flex flex-wrap ">
             {courses.map(courses=>
                <div className="card m-2 p-2 w-25">
                    <div className="card-header">
                        {courses.Title}
                    </div>
                    <div>
                        {courses.fees}
                    </div>
                    <div>
                        {courses.duration}
                    </div>

                </div>
             )


             }
        </div>
       
    </div>

        <h1>Products</h1>
        <dl>
            <dt>Name</dt>
            <dd>{products.Name}</dd>
            <dd><input type="text" value={products.Name} /></dd>
            <dt>Price</dt>
            <dd>{products.Price}</dd>
            <dt>Stock</dt>
            <dd>{(products.Stock==true) ? "Availabel" : "Out of stock" }</dd>
        </dl>

        
        </div>

  )
}
