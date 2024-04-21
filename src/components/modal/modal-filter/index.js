import { Modal, ModalHeader } from "reactstrap"
import "./css/index.scss"

const FilterPeoplePopup = (props) => {
  const { composeOpen, toggleCompose } = props

  return (
    <Modal
      scrollable
      fade={false}
      //container=".content-body"
      className="modal-lg"
      isOpen={composeOpen}
      backdrop={false}
      contentClassName="p-0"
      toggle={toggleCompose}
      modalClassName="modal-sticky"
      id="filterPopup"
    >
      <ModalHeader>Filters</ModalHeader>
    </Modal>
  )
}
export default FilterPeoplePopup
