import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const modal = (props)=>{
    return (
		<Modal isOpen={true}>
        <ModalHeader>
						<i class="fa fa-check alert-success"></i>
					Registration Successful</ModalHeader>
        <ModalBody>
          Your Email Verification is Still Pending,
          Check Your Inbox
        </ModalBody>
        <ModalFooter>
          <NavLink className="btn btn-success" to="/login">Login</NavLink>
          
        </ModalFooter>
      </Modal>
		
    )
}

export default modal