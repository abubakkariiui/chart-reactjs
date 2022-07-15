import React from 'react'

const Sidebar = (props) => {
    return (
        <aside className='text-center'>
            <img className='w-full' alt='product' src={props.data[0].image} />
            <h1 className='text-2xl font-bold m-4 '>
                {props.data[0].title}
            </h1>
            <h3 className='px-5 m-5'>
                {props.data[0].subtitle}
            </h3>
            <div className='w-full px-4 flex flex-wrap w-full'>
                {props.data[0].tags.map((tag) => {
                    return <span className='py-2 px-2 m-2 border'>{tag}</span>
                })}
            </div>


        </aside>
    )
}

export default Sidebar