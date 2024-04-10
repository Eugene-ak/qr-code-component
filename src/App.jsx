import "./styles/index.scss";
import qr from "/images/image-qr-code.png";

function App() {
  return (
    <>
      <div className="card">
        <img src={qr} alt="QR" />
        <div className="description">
          <h4>Improve your front-end skills by building projects</h4>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
