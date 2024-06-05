import { useEffect, useState } from 'react';
import Exit from '../img/icons/Exit';
import Service from '../Service';




const Modal = ({closeModal}) => {
    const [user, setUsers] = useState([])

    const retrieveUser = () => {
        Service.getUser().then(response => {
            setUsers(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        retrieveUser()
    }, [])

    const removeUsers = (id) => {
        Service.deleteUser(id).then(response => {
            retrieveUser()
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='fixed inset-0 bg-black opacity-95 backdrop-blur-xl flex justify-center items-center'>
        <div className=" bg-slate-400 w-72 h-56 text-black p-2 rounded">
            <div className='flex flex-col-reverse gap-5 mb-10'>
                <h3 className='text-center'>Are you sure you want to delete it?</h3>
                <div className=' w-full h-11  border-primary border-none flex  justify-end items-center' >
                    <button onClick={() => closeModal(false)} className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center'>
                        <Exit/>
                    </button>
                </div>
            </div>
            <div className='flex justify-center gap-3'>
                    <button className='hover:bg-primary hover:text-white w-24' onClick={() => removeUsers(user.id)}>Yes</button>
                    <button className='hover:bg-primary hover:text-white w-24' onClick={() => closeModal(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal