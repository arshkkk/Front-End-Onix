import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NavLink} from 'react-router-dom'

const wrong_password_or_email_modal = (props)=>{
    return (
		<Modal isOpen={true}>
        <ModalHeader>
						<i class="fa fa-times-circle alert-danger"></i>
        Wrong Password or Username
        </ModalHeader>
        <ModalBody>
          Please Check your Username or Email
        </ModalBody>
        <ModalFooter>
          <NavLink className="btn btn-success" to="#" onClick={()=>props.onClick()}>OK</NavLink>
        </ModalFooter>
      </Modal>
		
    )
}

export default wrong_password_or_email_modal