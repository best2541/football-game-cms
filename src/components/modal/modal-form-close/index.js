import { Fragment, useState } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"

const ModalForm = (props) => {
  const { openModal, setOpenModal, title, className } = props

  return (
    <>
      <div>
        <Modal isOpen={openModal} className={`modal-dialog-centered isClose ${className}`} backdrop='static'>
          <div className="modal-close" onClick={() => { setOpenModal(false) }}>
            <span className="closed">×</span>
          </div>
          {title && <ModalHeader >{title}</ModalHeader>}
          <ModalBody>
            {props.children}
          </ModalBody>
        </Modal>
      </div>
    </>
  )
}

export default ModalForm