import { Fragment, useState } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const ModalForm = (props) => {
  const { openModal, setOpenModal, title, className } = props

  return (
    <>
      <div>
        <Modal isOpen={openModal} className='modal-dialog-centered' backdrop='static'>
          {title && <ModalHeader >{title}</ModalHeader>}
          <ModalBody className={className}>
            {props.children}
          </ModalBody>
        </Modal>
      </div>
    </>
  )
}

export default ModalForm