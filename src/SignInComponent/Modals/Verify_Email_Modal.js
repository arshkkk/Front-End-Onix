import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NavLink} from 'react-router-dom'

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
          {/* <Button color="success"  href="/login">OK</Button> */}
          <NavLink onClick={()=>props.onClick()} className="btn btn-success" to="/login" on>OK</NavLink>
        </ModalFooter>
      </Modal>
		
    )
}

export default verify_email_modal