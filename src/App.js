import './App.css';

function App() {

  return (
    <>
      <div className=' container-md'>
        <div className=' d-flex flex-column h-100 w-100 align-items-center justify-content-center mt-5'>
          <h1 className=' text-success'>QR CODE GENERATOR</h1>

          <div className=' w-75 m-2'>
            <img src="" alt="" />
          </div>

          <div className=' w-75 m-2'>
            <label className=' form-label text-success' htmlFor="qrdata">Data for QR Code</label> <br />
            <input className=' form-control' type="text" name="qrdata" id="qrdata" />
          </div>

          <div className=' w-75 m-2'>
            <label className=' form-label text-success' htmlFor="qrsize">Image size (e.g. 150)</label> <br />
            <input className=' form-control' type="text" name="qrsize" id="qrsize" />
          </div>

          <div className='w-75 mt-2 d-flex justify-content-between'>
            <button className='btn btn-danger' type="button">Generate QR Code</button>
            <button className='btn btn-success' type="button">Download QR Code</button>
          </div>

          <div className='mt-3'><p>Designed By <a href="">Muthu</a></p></div>

        </div>
      </div>
    </>
  );
}

export default App;
