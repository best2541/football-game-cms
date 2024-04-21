import React from 'react'
import {DragDrop} from '@uppy/react'
import '@src/assets/scss/react/libs/file-uploader/file-uploader.scss'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import "./css/index.scss"

const FileUploadCustom = ({uppy, height}) => {
  return (
    <div className='dragDrop-image'>
      <DragDrop uppy={uppy} height={height} style={{ overFlow: "hidden" }} />
    </div>
  )
}

export default FileUploadCustom