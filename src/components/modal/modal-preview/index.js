import { Fragment, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap"

const ModalPreview = (props) => {
  const { isOpen, setIsOpen } = props
  const [centeredModal, setCenteredModal] = useState(false)

  const goToMainPage = () => {
    setOpen(false)
  }

  const backToEdit = () => {
    setOpen(false)
  }

  return (
    <div className="demo-inline-spacing">
      <div className="vertically-centered-modal">
        {/* <Button.Ripple color="primary" outline onClick={() => setCenteredModal(!centeredModal)}>
          Vertically Centered
        </Button.Ripple> */}
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className="modal-dialog-centered">
          <ModalHeader>Vertically Centered</ModalHeader>
          <ModalBody>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll
            cake cheesecake cookie chocolate cake liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setCenteredModal(!centeredModal)}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalPreview
