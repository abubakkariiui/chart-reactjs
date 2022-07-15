import React from 'react'


const Table = (props) => {
    return (
        <div>
            <table className='text-center w-full'>
                <thead className='border-b'>
                    <tr>
                        <th className='p-2 m-2'>
                            Week Endings
                        </th>
                        <th className='p-2 m-2'>
                            Reatail Sales
                        </th>
                        <th className='p-2 m-2'>
                            Wholesale Sales
                        </th>
                        <th className='p-2 m-2'>
                            Units Sold
                        </th>
                        <th className='p-2 m-2'>
                            Reatail Margin
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data[0].sales.map((data, index) => {
                            return (
                                <tr key={index} className="border-b">
                                    <td className='p-3'>
                                        {data.weekEnding}
                                    </td>
                                    <td>
                                        {data.retailSales}
                                    </td>
                                    <td>
                                        {data.wholesaleSales}
                                    </td>
                                    <td>
                                        {data.unitsSold}
                                    </td>
                                    <td>
                                        {data.retailerMargin}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table