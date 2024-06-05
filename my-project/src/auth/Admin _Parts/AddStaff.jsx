import { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Delete from '../../img/icons/Delete';
import Icon from '../../img/icons/Icon';
import Staff from '../../Staff';
import StaffAdd from './StaffAdd';


const AddStaff = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [openAdd, setOpenAdd] = useState(false);

    const navigate = useNavigate();
    const [staff, setStaffs] = useState([])
    const retrieveStaff = () => {
        Staff.getStaff().then(response => {
            setStaffs(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        retrieveStaff()
    }, [])

    const removeStaff = (id) => {
        Staff.deleteStaff(id).then(response => {
            retrieveStaff()
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const getStaffId = (id) => {
        navigate("update/" + id)
        Staff.getStaffId(id).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return (

        <div className=' w-[75%] border-2 border-black/20 rounded-xl max-h-full'>
            <div className='flex justify-evenly pt-5'>
                <div></div>
                <h2 className='text-3xl'>Staff Info</h2>
                <div>
                    <button className='edits w-9 h-9 mx-auto flex text-blue-500 text hover:text-white text-2xl hover:bg-blue-500 items-center justify-center' onClick={() => setOpenAdd(true)} ><span>
                        <ion-icon name="person-add"></ion-icon>
                    </span></button>
                </div>
            </div>
            <div className='flex text-white h-auto items-center mt-4 justify-center'>
                <table className='table-auto w-full text-center rounded-xl mt-5 bg-slate-700'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th className='w-20'>Edit</th>
                            <th className='w-20'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='mt-8'>
                        {
                            staff.map(staff =>
                                <tr key={staff.id}>
                                    <td>{staff.id}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td className='text-center'><Button className='edits my-3 w-9 text-xl h-9 text-blue-500 hover:text-white mx-auto flex hover:bg-blue-500 items-center justify-center' onClick={() => getUserId(staff.id)}><span>

                                        <Icon></Icon>
                                    </span></Button></td>
                                    <td className='text-center'><Button className='del my-3 w-9 h-9 text-xl text-primary hover:text-white mx-auto flex items-center hover:bg-primary justify-center' onClick={() => removeUsers(staff.id)} ><span>
                                        <Delete></Delete>
                                    </span></Button></td>
                                </tr>

                            )
                        }
                        {/* <tr>
                            <td>1</td>
                            <td>Hotdog</td>
                            <td>hotdog@gmail.com</td>
                            <td className='text-center'><Button className='edits my-3 w-9 text-xl h-9 text-blue-500 hover:text-white mx-auto flex hover:bg-blue-500 items-center justify-center' onClick={() => getUserId(user.id)}><span>

                                <Icon></Icon>
                            </span></Button></td>
                            <td className='text-center'><Button className='del my-3 w-9 h-9 text-xl text-primary hover:text-white mx-auto flex items-center hover:bg-primary justify-center' onClick={handleShow} ><span>
                                <Delete></Delete>
                            </span></Button></td>
                        </tr> */}
                    </tbody>
                </table>

            </div>
            {/* <Modal className=' bg-slate-300 inset-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-52 text-black p-2 rounded-2xl' show={show} onHide={handleClose}>
                <Modal.Header className='w-full h-11 mb-3 flex justify-end items-center'>
                    <Button className='mdl w-11 h-11 hover:bg-primary border-primary flex flex-col justify-end items-center' onClick={handleClose}><Exit /></Button>
                </Modal.Header>
                <Modal.Body className='text-sm text-center'>Are you sure you want to delete this record?</Modal.Body>
                <Modal.Footer className='mt-7 flex flex-row-reverse  gap-2 text-black'>
                    <Button className='hover:bg-primary h-12 text-sm hover:text-white border-primary w-40 mx-auto ' onClick={() => removeUsers(user.id)}>
                        Confirm Delete
                    </Button>
                    <Button className='hover:bg-primary h-12 text-sm border-primary hover:text-white w-40 mx-auto' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* {openModal && <Modal closeModal={setOpenModal} />} */}
            {openAdd && <StaffAdd closeAdd={setOpenAdd} />}
        </div>
    )
}

export default AddStaff