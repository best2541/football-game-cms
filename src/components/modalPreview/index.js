import { Modal, ModalBody } from 'reactstrap'
import './css/index.scss'

const ModalPreview = (props) => {
  const { open, setOpen } = props

  return (
    <Modal isOpen={open} toggle={() => setOpen(!open)} className='modal-dialog-centered modal-sm modal-preview'>
      <ModalBody className='modal-body-preview'>
        <div className="text-center mt-2 mb-2">
          <img
            className="img-fluid img-reward"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
            src={require('@src/assets/images/pages/coupon.png').default}
          />
          <div
            className="text-title-thai text-center mt-1"
            style={{ fontSize: "18px" }}
          >
            ยินดีด้วย!! คุณได้รางวัลพิเศษ
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}
export default ModalPreview
