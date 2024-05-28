import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import WarningCircle from "../../assets/images/icons/WarningCircle.png"

const MySwal = withReactContent(Swal)

export const popupInformation = (title, text, icon = 'warning') => {
  MySwal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
    allowOutsideClick: false,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.isConfirmed) {
      // callback('confirm')
    }
  })
}

export const popupInformationCustom = (title, callback, text, btnText, icon = 'warning') => {
  MySwal.fire({
    title,
    text,
    icon,
    confirmButtonText: btnText,
    allowOutsideClick: false,
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.isConfirmed) {
      callback('confirm')
    }
  })
}

export const popupConfirm = (textHtml, callback, icon = 'warning') => {
  MySwal.fire({
    text: textHtml,
    icon,
    showCancelButton: true,
    confirmButtonText: 'Continue',
    allowOutsideClick: false,
    reverseButtons: true,
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.isDismissed) {
      callback('cancel')
    } else if (result.isConfirmed) {
      callback('confirm')
    }
  })
}

export const popupConfirmCustom = (textHtml, confirmBtn, cancelBtn, callback, className = "", icon = 'warning') => {
  MySwal.fire({
    icon,
    html: textHtml,
    confirmButtonText: confirmBtn,
    cancelButtonText: cancelBtn,
    allowOutsideClick: false,
    showConfirmButton: true,
    showCancelButton: true,
    reverseButtons: true,
    buttonsStyling: false,
    customClass: {
      cancelButton: className.includes("isCancelBtn") ? 'btn btn-outline-secondary' : 'btn btn-outline-primary',
      confirmButton: 'btn btn-primary ml-1',
      actions: 'popup-confirm-actions-sweet2',
      container: `popup-confirm-custom ${className}`
    }
  }).then(function (result) {
    if (result.isDismissed) {
      callback('cancel')
    } else if (result.isConfirmed) {
      callback('confirm')
    }
  })
}

export const popupInputCustom = (iconImageSrc, titleText, textHtml, confirmBtn, cancelBtn, inputValue, inputIcon, callback, className = "", icon = 'success') => {
  MySwal.fire({
    title: (iconImageSrc && titleText) ? `
    <div>
      <img src="${iconImageSrc}" alt="Icon" style="width: 80px; height: 80px; margin-bottom: 10px;" />
      <p style="font-size: 16px; color:#28C76F; font-weight: 400; margin: 0px;">${titleText}</p>
      <p style="font-size: 20px; font-weight: 700; color:#4F4B66; margin: 0px;">${textHtml}</p>
    </div>
    ` : `
      <p style="font-size: 20px; font-weight: 700; color:#4F4B66; margin: 0px;">${textHtml}</p>
    `,
    html: `
    <div style="display: flex; align-items: center; margin-bottom: 10px;">
      <input class="swal2-input" value="${inputValue}" disabled style="width: 100%; color: #d8d6de;">
    </div>`,
    confirmButtonText: confirmBtn,
    cancelButtonText: cancelBtn,
    allowOutsideClick: false,
    showConfirmButton: true,
    showCancelButton: true,
    reverseButtons: true,
    buttonsStyling: false,
    customClass: {
      cancelButton: className.includes("isCancelBtn") ? 'btn btn-outline-secondary' : 'btn btn-outline-primary',
      confirmButton: 'btn btn-primary ml-1',
      actions: 'popup-confirm-actions-sweet2',
      container: `popup-confirm-custom ${className}`
    }
  }).then(function (result) {
    if (result.isDismissed) {
      callback('cancel')
    } else if (result.isConfirmed) {
      callback('confirm')
    }
  })
}

export const popupFinishedConfirm = (titleText, textHtml, confirmBtn, callback, icon = 'warning') => {
  MySwal.fire({
    title: `
    <div style="height: 200px;">
      <img src="${WarningCircle}" alt="Icon" style="width: 80px; height: 80px; margin-bottom: 10px;" />
      <p style="font-size: 32px; font-weight: 700; margin: 0px;">${titleText}</p>
      <p style="font-size: 16px; font-weight: 400; color:#4F4B66; margin: 0px;">${textHtml}</p>
    </div>
    `,
    showCancelButton: true,
    confirmButtonText: confirmBtn,
    cancelButtonText: 'Cancel',
    allowOutsideClick: false,
    reverseButtons: true,
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.isDismissed) {
      callback('cancel')
    } else if (result.isConfirmed) {
      callback('confirm')
    }
  })
}
