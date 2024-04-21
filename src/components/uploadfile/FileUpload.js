
/*eslint-disable */
import {useState,useEffect} from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {DragDrop} from '@uppy/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'reactstrap'
import '@src/assets/scss/react/libs/file-uploader/file-uploader.scss'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'

const FileUpload = (props) => {

  const uppy = new Uppy({
    meta: {type: 'avatar'},
    restrictions: {maxNumberOfFiles: 1},
    autoProceed: true
  })
  useEffect(() => {
  },[])
  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated',(file,preview) => {
    setImg(preview)
    props.onChanges(file,preview)
  })
  const handleClick = (e) => { 
    setImg(null);
    props.onChanges(null,null)
   }
  return (
    <div style={{overflow:"hidden"}}>
       <DragDrop uppy={uppy} height="154px" style={{overFlow:"hidden"}} />
    </div>
  )
}

export default FileUpload
