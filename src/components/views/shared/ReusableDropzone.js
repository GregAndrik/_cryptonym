import './reusableDropzone.css'
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

const ReusableDropzone = ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div className='dropZone' {...getRootProps()}>
          <input {...getInputProps()} />
          <FontAwesomeIcon icon={faFileCirclePlus} size='5x' className='dropZone-icon' />       
        </div>
      )}
    </Dropzone>
  );
};

export default ReusableDropzone;