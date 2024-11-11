'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App() {
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="583b4b8374aad6d65e0a"
      />
    </div>
  );
}

export default App;