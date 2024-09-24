import { useState } from 'react';
import './App.css';

function App() {

  const [img, setImg] = useState("picture/demoQR.png");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState();
  const [qrSize, setQrSize] = useState();

  function qrGenerate() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (err) {
      console.log("Error generating QR code", err)
    } finally {
      setLoading(false)
    }

  }

  function qrDownload() {
    fetch(img).then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      }).catch((err) => {
        console.error("Error downloading QR code", err)
      })
  }

  return (
    <>
      <div className='container-md'>
        <div className='d-flex flex-column h-100 w-100 align-items-center justify-content-center mt-5'>
          <h1 className='text-success'>QR CODE GENERATOR</h1>

          <div className='w-100 m-2 text-center'>
            {img && <img src={img} alt="" />}
            {loading && <p>loading...</p>}
          </div>

          <div className='w-100 m-2'>
            <label className='form-label text-success' htmlFor="qrData">Data for QR Code</label> <br />
            <input className='form-control' type="text" name="qrData" id="qrData" value={qrData} onChange={(e) => setQrData(e.target.value)} />
          </div>

          <div className='w-100 m-2'>
            <label className='form-label text-success' htmlFor="qrSize">Image size (e.g. 150)</label> <br />
            <input className='form-control' type="text" name="qrSize" id="qrSize" value={qrSize} onChange={(e) => setQrSize(e.target.value)} />
          </div>

          <div className='w-100 mt-2 d-flex justify-content-between'>
            <button className='btn btn-warning' type="button" onClick={qrGenerate} disabled={loading}>Generate QR Code</button>
            <button className='btn btn-success ms-2' type="button" onClick={qrDownload}>Download QR Code</button>
          </div>

          <div className='mt-3'><p className=' fst-italic'>Designed By <a href="https://www.linkedin.com/in/muthu-ammew/" rel="noreferrer" target='_blank'>Muthu</a></p></div>

        </div>
      </div>
    </>
  );
}

export default App;
