
import myImage1 from '../images/footer.png';
/* import myImage2 from '../images/footer2.png'; */

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-bar"></div>
      <img src={myImage1} alt="Imagen 1" className="footer-image" />
      {/* <img src={myImage2} alt="Imagen 2" className="footer-image" /> */}
      <div>
        <h5 className="footer-text">🚩 Carretera Iquitos - Nauta Km 4.5, Quistococha, Distrito de San Juan Bautista, Maynas, Loreto
          <br/>
          <span className="footer-email" role="img" aria-label="email">✉️ ciiap@iiap.gob.pe </span>
        </h5>
      </div>
    </div>
  );
}

export default Footer;




