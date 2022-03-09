import {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


function Add(props){

  const [modalIsShow, setModalIsShow] = useState(false)
  const [information, setInformation] = useState(
    {
      FirstName:'',
      LastName:'',
      PhoneNumber:'',
      count:0
    }
  )

  function modalBoolean(){
    setModalIsShow(!modalIsShow)
  }
  function addFirstName(event){
    let firstName = event.target.value;
    let info = {...information}
    info.FirstName = firstName
    setInformation(info)
  }
  function addLastName(event){
    let LastName = event.target.value;
    let info = {...information}
    info.LastName = LastName
    setInformation(info)
  }
  function addPhoneNumber(event){
    let Number = event.target.value;
    let info = {...information}
    info.PhoneNumber = Number
    setInformation(info)
  }
  function addUser(){
    let arr = [...props.allInfo];
    arr.push(information);
    props.setAllInfo(arr);
    let user = {
      FirstName:'',
      LastName:'',
      PhoneNumber:'',
      count:0
    }
    setInformation(user)
    setModalIsShow(false)
  }

  return(
    <div>
      <div className='row'>
        <button className='btn btn-outline-primary col-md-3 mx-3' onClick={modalBoolean}>Add</button>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-3'>
          <Modal isOpen={modalIsShow} toggle={modalBoolean}>
            <ModalHeader className='modalHeader'>
              <h3>Enter the information</h3>
            </ModalHeader>
            <ModalBody className='modalBody'>
              <form className='form-group'>
                <label htmlFor='firstName'>First Name:</label>
                <input onChange={addFirstName} value={information.FirstName} id='firstName' className='form-control input mt-1' placeholder='Enter the First Name...'/>
                <label htmlFor='lastName' className='mt-3'>Last Name:</label>
                <input onChange={addLastName} value={information.LastName} id='lastName' className='form-control input mt-1' placeholder='Enter the Last Name...'/>
                <label htmlFor='phoneNumber' className='mt-3'>Phone Number:</label>
                <input value={information.PhoneNumber} onChange={addPhoneNumber} id='phoneNumber' className='form-control input mt-1' placeholder='Enter the Phone Number...'/>
              </form>
            </ModalBody>
            <ModalFooter className='modalFooter'>
                <button className='btn btn-outline-success' onClick={addUser} >Save</button>
                <button className='btn btn-outline-danger' onClick={modalBoolean}>Cancel</button>
            </ModalFooter>
          </Modal>
        </div>
      </div> {console.log(information)}
    </div>
    
  )

}

    export default Add