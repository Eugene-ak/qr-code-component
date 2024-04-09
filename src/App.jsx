import "./index.scss";
import qr from "/images/image-qr-code.png";

function App() {
  return (
    <>
      <div>
        <img src={qr} alt="QR" />
        <h4>Improve your front-end skills by building projects</h4>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  )
}

export default App
