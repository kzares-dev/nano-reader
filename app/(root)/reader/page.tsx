import { useEffect, useRef } from 'react';
import WebViewer from '@'

// demo:1703780147858:7c82f48e0300000000be02dac0b99ed490ad874a3272a60b43f4463b02

export default function Reader() {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/files/PDFTRON_about.pdf',
          licenseKey: 'your_license_key'  // sign up to get a free trial key ats
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}
