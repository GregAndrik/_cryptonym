import './encryption-decryption.css'
import { useState, useRef } from 'react';
import CryptoJS from 'crypto-js';
import ReusableDropzone from './shared/ReusableDropzone'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Encryption = () => {
  const securityKeyInputRef = useRef(null); // Obtain reference to the security key input element within JSX 
  const [securityKey, setSecurityKey] = useState(''); // Store the one-time security key
  const [showKey, setShowKey] = useState(false); // Mask or unmask security key

  // Handle file submission 
  const onDrop = async (acceptedFiles) => {
    try {
      const droppedFile = acceptedFiles[0]; 
      const text = await droppedFile.text(); // Read the dropped file's content as text
      const key = generateRandomKey(); // Call function to generate a token
      const encryptedText = encryptText(text, key); // Call encryptText to encrypt the file and save it locally

      setSecurityKey(key); // Loads the generated key on useState
      createEncryptedFile(encryptedText); // Call function parsing encryptedText as prop
    } catch (error) {}
  };

  // Handle random key generation
  const generateRandomKey = () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+-?;/,.<>:{}[]|';
    const keyLength = 128;

    let key = '';
    for (let i = 0; i < keyLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      key += charset[randomIndex];
    }

    return key;
  };

  // Handle AES encryption by feeding the generated key to the CryptoJS algorithm
  const encryptText = (text, key) => {
    try {
      const encryptedBytes = CryptoJS.AES.encrypt(text, key);
      return encryptedBytes.toString();
    } catch (error) {
      throw new Error('Error encrypting the data.');
    }
  };

  // Handle creation of encrypted file by receiving prop from onDrop
  const createEncryptedFile = (content) => {
    const encryptedBlob = new Blob([content], { type: 'text/plain' });
    const encryptedFileName = 'Encrypted_file.txt';
  
    // Manage browser environment compatibility
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // For IE and Edge browsers
      window.navigator.msSaveOrOpenBlob(encryptedBlob, encryptedFileName);
    } else {
      // For other browsers
      const downloadLink = URL.createObjectURL(encryptedBlob);
      const link = document.createElement('a');
      link.href = downloadLink; // Offer a download link for the encrypted file
      link.download = encryptedFileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Call copyToClipboard when a user clicks on the token field
  const handleSecurityKeyClick = () => {
    copyToClipboard();
  };

  // User copies the security token
  const copyToClipboard = () => {
    const tempText = document.createElement('textarea');
    tempText.value = securityKey;
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand('copy');
    document.body.removeChild(tempText);

    // Provide a toast notification on successful copying
    toast.success('Security key copied to clipboard.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className='encryption'>
      {/* Security key not provided */}
      {!securityKey && (
        <>
          <h2>Commencing file Encryption...</h2>
          <p className='directive'>
            This dropzone accepts files in text format, either by clicking or via drag & drop. Following the submission of a file, a subsequent file promptly becomes accessible
            for download. This file contains the encrypted rendition of the initial file's content. Furthermore, a one-time Security key is provided for safekeeping. The provided
            token is necessary for future decryption of the produced encrypted file. 
          </p> 
        </>
      )}

      {/* Security key provided */}
      {securityKey ? (
        <>
          <h2>Encryption complete...</h2>
          <div className='security-key-form'>
            <p>
              <strong>One-Time Security Key</strong>
            </p>

            <input
              className='security-key'
              type={showKey ? 'text' : 'password'} 
              value={securityKey}
              readOnly
              ref={securityKeyInputRef}
              onClick={handleSecurityKeyClick}
              onContextMenu={(e) => e.preventDefault()} // Disable the browser's context menu on left-click
              style={{paddingRight: '2.4rem', textAlign: 'left'}}
            />

            <button className='mask-toggle-button' onClick={() => setShowKey(!showKey)}>
              <FontAwesomeIcon icon={showKey ? faEyeSlash : faEye} />
            </button>

            <div className='button-container'>
              {securityKey && (
                <button className='button-primary' onClick={copyToClipboard}>Copy</button>
              )}
            </div>
          </div>
        </>
      ) : (
        // Receive onDrop as a prop when a file is dropped onto the dropzone.  
        <ReusableDropzone onDrop={onDrop}/>
      )}
      <ToastContainer/>
    </div>    
  );
};

export default Encryption;