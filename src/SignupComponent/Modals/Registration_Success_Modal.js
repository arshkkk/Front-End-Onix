import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
          <Button color="success" href="/login">OK</Button>
          
        </ModalFooter>
      </Modal>
		
    )
}

export default modal