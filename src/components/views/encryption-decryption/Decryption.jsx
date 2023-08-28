import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import ReusableDropzone from '../shared/ReusableDropzone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './encryption-decryption.css'

const Decryption = () => {
  const [file, setFile] = useState(null);
  const [decryptionKey, setDecryptionKey] = useState('');
  const [fileDecrypted, setFileDecrypted] = useState(false);
  const [decryptionInitiated, setDecryptionInitiated] = useState(false);
  const [decryptedContent, setDecryptedContent] = useState(null);
  const [validDecryptionKey, setValidDecryptionKey] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Likewise with Encryption
  const onDrop = async (acceptedFiles) => {
    try {
      const droppedFile = acceptedFiles[0];
      const text = await droppedFile.text();

      setFile({ content: text, name: droppedFile.name });
      setFileDecrypted(false);
      setDecryptedContent(null); // Reset the decrypted content when a new file is selected
    } catch (error) {}
  };

  useEffect(() => {
    const handleDecryption = () => {
      try {
        const decryptedText = decryptText(file.content, decryptionKey); // Call decryptText by parsing the file's content and the decryption Key as props
        setDecryptedContent(decryptedText); // Store the decrypted content
        setFileDecrypted(true);
      } catch (error) {
        setFileDecrypted(false);
        setDecryptedContent(null); // Reset the decrypted content if decryption fails
      }
    };

    if (decryptionInitiated && file && decryptionKey) {
      handleDecryption();
    }
    setValidDecryptionKey(decryptionKey.length >= 128);
  }, [decryptionInitiated, file, decryptionKey]);
  
  // Handle AES decryption by feeding the security key to the CryptoJS algorithm
  const decryptText = (encryptedText, key) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, key);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedText;
    } catch (error) {}
  };

  // Likewise to Encryption
  const createDecryptedFile = () => {
    if (decryptedContent) {
      const decryptedBlob = new Blob([decryptedContent], { type: 'text/plain' });
      const decryptedFileName = 'Decrypted_file.txt';

      const link = document.createElement('a');
      link.href = URL.createObjectURL(decryptedBlob);
      link.download = decryptedFileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDecryptButtonClick = () => {
    // Check if the decryption key length is valid before initiating decryption
    if (decryptionKey.length >= 128) {
      setDecryptionInitiated(true);
    } else {
      setDecryptionInitiated(false); // Reset decryption initiation if the key is invalid
    }
  };

  return (
    <div className='decryption'>
      {!fileDecrypted && (
        <h2>Commencing file Decryption...</h2>
      )}
      {fileDecrypted && decryptedContent && (
        <h2>Decryption complete...</h2>
      )}
      {fileDecrypted && !decryptedContent && (
        <h2>Decryption failed...</h2>
      )}
      {!fileDecrypted && !decryptedContent && (
        <p className='directive'>
          This dropzone accepts files in text format, either by clicking or via drag & drop. Following the submission of a file, the user is prompted to enter a unique Security
          Key. If the file is properly encrypted and the user-provided token is legitimate, a new file containing the decrypted rendition of the submitted file becomes readily
          available for download.
        </p>
      )}

      {file ? (
        <div>
          {!decryptionInitiated && !fileDecrypted && (
            <div className='security-key-form'>
              <p>Input Security key</p>
              <input 
                className='security-key' 
                type={showPassword ? 'text' : 'password'} 
                value={decryptionKey} 
                onChange={(e) => setDecryptionKey(e.target.value)} 
                maxLength={128}
                style={{paddingRight: '2.4rem', textAlign: 'left'}}
              />
              
              <div className='button-container'>
                <button className='primary-button' onClick={handleDecryptButtonClick} disabled={!validDecryptionKey}>Decrypt</button>
              </div>
              {decryptionKey && (
              <button className='mask-toggle-button' onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
              </button>
              )}
            </div>
          )}
          {fileDecrypted && decryptedContent && (
            <div>
              <button className='primary-button' onClick={createDecryptedFile}>Download Decrypted File</button>
            </div>
          )}
        </div>
      ) : (
        <ReusableDropzone onDrop={onDrop}/>
      )}
    </div>
  );
};

export default Decryption;