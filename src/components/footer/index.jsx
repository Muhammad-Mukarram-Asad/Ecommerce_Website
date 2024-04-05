import React from "react";
import styles from "./footer.module.css";
import Footer_Logo from "../../assets/logo_big.png";
import instagaram_logo from "../../assets/instagram_icon.png";
import pinterest_logo from "../../assets/pintester_icon.png";
import whatsapp_logo from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer_logo"]}>
        <img src={Footer_Logo} alt="footer_logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles["footer_links"]}>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles["footer_social_icons"]}>
      <div className={styles["footer_icon_container"]}>
          {/* <img src={facebook_logo} alt="social_icons" /> */}
          <img  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
        </div>
        <div className={styles["footer_icon_container"]}>
          {/* <img src={instagaram_logo} alt="social_icons" /> */}
          <img  src="https://img.freepik.com/premium-photo/round-instagram-logo-isolated-white-background_469489-1037.jpg" alt="" />
        </div>
        <div className={styles["footer_icon_container"]}>
          {/* <img src={pinterest_logo} alt="social_icons" /> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
        </div>
        <div className={styles["footer_icon_container"]}>
          {/* <img src={whatsapp_logo} alt="social_icons" /> */}
          <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt="" />
        </div>
      </div>

      <div className={styles["footer_copyright_div"]}>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
