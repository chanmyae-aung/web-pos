import React from 'react'

const Calculator = () => {
  return (
    <div>
     <table className='w-full text-sm text-left  bg-[#f5f5f5] text-[#161618] border'>
        <thead className='text-xs border  text-white uppercase '>
           <tr>
           <th className='px-5 py-5 border'>
                Note
            </th>
            <th className='px-5 py-5 border'>
                Note
            </th>
            <th className='px-5 py-5 border' colSpan={2}>
                Note +
            </th>
           </tr>
        </thead>
        <tbody className=''>
            <tr>
                <td className='px-5 py-5 border'>1</td>
                <td className='px-5 py-5 border'>2</td>
                <td className='px-5 py-5 border'>3</td>
                <td className='px-5 py-5 border  text-right'>QTY</td>
            </tr>
            <tr>
                <td className='px-5 py-5 border'>4</td>
                <td className='px-5 py-5 border'>5</td>
                <td className='px-5 py-5 border'>6</td>
                <td className='px-5 py-5 border text-right'>Dis</td>
            </tr>
            <tr>
                <td className='px-5 py-5 border'>7</td>
                <td className='px-5 py-5 border'>8</td>
                <td className='px-5 py-5 border'>9</td>
                <td className='px-5 py-5 border  text-right'>Price</td>
            </tr>
            <tr>
                <td className='px-5 py-5 border'>+ / -</td>
                <td className='px-5 py-5 border'>0</td>
                <td className='px-5 py-5 border'>.</td>
                <td className='px-5 py-5 border  text-right'>Del</td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-center'  colSpan={4}>payment</td>
            </tr>
        </tbody>
     </table>
    </div>
  )
}

export default Calculator
