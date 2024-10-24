import './footer.css';
import SocialMediaIcons from './icons';

export default function Footer({ onContactClick }) {
  return (
    <div className="footer">
      <div className="footer-top-section">
        <p className="footer-heading">
          Our 6 days Just Diet plan is only ₹399!
        </p>
        <p className="footer-text">
          Get personalized, nutrient-packed meals delivered to your gym to keep
          you on track with your fitness goals.
        </p>
        <button onClick={onContactClick} className="subscribe-now">
          Subscribe now
        </button>
        <img
          src="assets\footer\footer-bowl.webp"
          alt="Diet Bowl"
          className="footer-bowl"
        />
      </div>

      <div className="footer-nav-section">
        <div className="footer-nav">
          <div className="footer-brand-name-styling">
            <img
              src="\assets\justDiet.png"
              alt=""
              className="brand-favicon footer-styling-logo"
            />
            <img
              src="\assets\JustDiet-text.webp"
              alt=""
              className="brand-text"
            />
            <img
              src="\assets\footer\tr-arrow.webp"
              alt="TR-arrow"
              className="footer-tr-arrow"
            />
          </div>
          <ul className="footer-nav-list">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Salads">Our Salad</a>
            </li>
            <li>
              <a href="#Plans">Fresh Plans</a>
            </li>
            <li>
              <a href="#Reviews">Fresh Reviews</a>
            </li>
            <li>
              <a href="#BMI">Calculate Your BMI</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <button onClick={onContactClick} className="footer-contact-btn">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-contactInfo" id="Contact">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginRight: 16,
              flexDirection: 'column',
            }}
          >
            <a href="#Home">
              <img
                src="\assets\footer\to-top.webp"
                alt="to-top"
                className="top-btn"
              />
            </a>
            <p className='go-top'>GO TOP</p>
          </div>

          <p className="yellow-font">Contact Us</p>
          <a
            className="footer-small-text mb"
            href="tel:+91 8055566602"
            target="_blank"
          >
            91+ 7798 071727
          </a>
          <p className="yellow-font">Location</p>
          <p className="footer-small-text">Nagpur, Maharashtra, India</p>
          <p className="yellow-font">Mo—Fr</p>
          <p className="footer-small-text">6am—9am | 6pm-9pm</p>
          <p className="yellow-font">Email</p>
          <a
            href="mailto:hello@JustDiet.com"
            target="_blank"
            className="footer-small-text mb"
          >
            hello@JustDiet.Pro
          </a>
          <div className="social-icons">
            <SocialMediaIcons />
          </div>
          <small style={{ color: '#ffb91d', fontSize: 12 }}>
          Made with <span style={{ color: '#D92D20' }}>&#9829;</span> by
          DesignFrnd
        </small>
        </div>
     
      </div>
      <p className="footer-copyright">
        &copy;2024 Copyright All Rights Reserved - JustDiet Food Services LLC
      </p>
    </div>
  );
}
