// import { useState } from 'react'
import {Input} from 'reactstrap'    
import DeletedIcon from '../delete.png'

function Tbody(props){

    function Counter(index, x){
        let arr = [...props.allInfo]
        arr[index].count+=x
        props.setAllInfo(arr)
    }


    function deletedBtn(index){
        props.deleteProps(index)
    }

    return(
        <tbody className='tbody'>
            {
                props.allInfo.map((item, index)=>{
                    return<tr key={index} >
                        <td className='tbodyTr'><h4 className='mx-3 my-2'>{index+1}</h4></td>
                        <td><h5 className='my-2'>{item.FirstName}</h5></td>
                        <td><h5 className='my-2'>{item.LastName}</h5></td>
                        <td><h5 className='my-2'>{item.PhoneNumber}</h5></td>
                        <td><h4 className='my-2'><Input type='checkbox'/></h4></td>
                        <td>
                            <div className='counterMenu my-2'>
                            <button onClick={()=>Counter(index, 1)} className='btn btn-outline-success'>+</button>
                            <h4>{item.count}</h4>
                            <button onClick={()=>Counter(index, -1)} className='btn btn-outline-danger'>-</button>
                            </div>
                        </td>
                        <td><img alt='' src={DeletedIcon} onClick={()=>deletedBtn(index)} className='delete'/></td>
                    </tr>
                })
            }
        </tbody>
    )
}

export default Tbody