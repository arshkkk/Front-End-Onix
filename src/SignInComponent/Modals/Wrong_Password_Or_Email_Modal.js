import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
          <Button color="success" onClick={()=>props.onClick()} href="#">OK</Button>
          
        </ModalFooter>
      </Modal>
		
    )
}

export default wrong_password_or_email_modal