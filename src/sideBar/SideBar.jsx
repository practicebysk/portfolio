import React from "react";
import "./sideBar.scss";
import { Link } from "react-router-dom";

import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
          src="https://media.licdn.com/dms/image/D4D03AQF6a8iIz-APjA/profile-displayphoto-shrink_200_200/0/1711096124513?e=2147483647&v=beta&t=iJ4yH-uZSO281HbWULbMB-GCsZZDPJOyHshKkHqGBHc"
            alt="kinar sardhara"
            width="80"
            className="rounded"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="kinar sardhara">
            Kinar Sardhara
          </h1>

          <p className="title">Full Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          {/* <IonIcon name="chevron-down"/> */}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineEmail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <Link
                href="mailto:richard@example.com"
                className="contact-link"
                title="kinarsardhara22@gmail.com"
                style={{ textDecoration: "none" }}
              >
                kinarsardhara22@gmail.com
              </Link>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoIosPhonePortrait />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <Link
                href="tel:+7359787915"
                className="contact-link"
                style={{ textDecoration: "none" }}
              >
                +91 7359787915
              </Link>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaCalendarAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">May 22, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Surat, Gujarat, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link
              to="https://www.facebook.com/kinar.sardhara"
              target="black"
              className="social-link"
            >
              <FaFacebook />
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://x.com/kinarsardhara22"
              target="black"
              className="social-link"
            >
              <FaTwitter />
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://www.instagram.com/kinar.sardhara/"
              target="black"
              className="social-link"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
