import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const verify_email_modal = (props)=>{
    return (
		<Modal isOpen={true}>
        <ModalHeader>
						<i class="fa fa-check alert-success"></i>
        Confirm Your Email
        </ModalHeader>
        <ModalBody>
          Your Email Verification is Still Pending,
          Check Your Inbox for Accessing Your Account or Logging In
        </ModalBody>
        <ModalFooter>
          <Button color="success" href="/login">OK</Button>
          
        </ModalFooter>
      </Modal>
		
    )
}

export default verify_email_modal