import React, { useState } from "react";

import devIcon from "../image/icon-dev.svg";
import devsignIcon from "../image/icon-design.svg";
import uiUxDesign from "../image/designer-4-1024.svg";
import digitalMarketing from "../image/qScreenshot_2024-07-10_185824-removebg-preview.svg";

import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import { useFormik } from "formik";
import * as Yup from "yup";
import { getData } from "../service/Api";

// client image
// import
const TestimonialItem = ({ avatarSrc, name, text }) => (
  <div className="content-card" data-testimonials-item>
    <figure className="testimonials-avatar-box">
      <img src={avatarSrc} alt={name} width="60" data-testimonials-avatar />
    </figure>
    <h4 className="h4 testimonials-item-title" data-testimonials-title>
      {name}
    </h4>
    <div className="testimonials-text" data-testimonials-text>
      <p>{text}</p>
    </div>
  </div>
);

function Page() {
  const [activeTab, setActiveTab] = useState("about");
  const [portfolioDataList, setPortfolioDataList] = useState();
  const [testimonialsDataList, setTestimonialsDataList] = useState();
  // const [portfolioDataList, setPortfolioDataList] = useState();

  async function activeTabFun(tab) {
    setActiveTab(tab);
    if (tab === "portfolio") {
      const data = await getData("portfolioData");
      setPortfolioDataList(data);
    } else if (tab === "about") {
      const data = await getData("testimonials");
      setTestimonialsDataList(data);
    }
  }

  const clientList = [
    {
      img: devIcon,
    },
    {
      img: devIcon,
    },
    {
      img: "./assets/images/logo-1-color.png",
    },
    {
      img: "./assets/images/logo-1-color.png",
    },
    {
      img: "./assets/images/logo-1-color.png",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Function to open modal and set selected testimonial
  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      message: Yup.string()
        .min(10, "Must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      if (values.name && values.email && values.message) {
        console.log(values);
        fetch("https://emailsender-9sdp.onrender.com/send-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      }
    },
  });

  return (
    <div className="main-content">
      <nav className="navbar">
        <ul className="navbar-list" style={{ marginBottom: "0px" }}>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === "about" ? "active" : ""}`}
              onClick={() => activeTabFun("about")}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeTab === "resume" ? "active" : ""
              }`}
              onClick={() => activeTabFun("resume")}
            >
              Resume
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeTab === "portfolio" ? "active" : ""
              }`}
              onClick={() => activeTabFun("portfolio")}
            >
              Portfolio
            </button>
          </li>
          {/* <li className="navbar-item">
            <button
              className={`navbar-link ${activeTab === "blog" ? "active" : ""}`}
              onClick={() => activeTabFun("blog")}
            >
              Blog
            </button>
          </li> */}
          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => activeTabFun("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <article className={`about ${activeTab === "about" ? "active" : ""}`}>
        <header>
          <h2
            className="h2 article-title"
            style={{ cursor: "pointer" }}
            onClick={() => openModal("")}
          >
            About me
          </h2>
        </header>

        <section className="about-text">
          <p>
            Hello! I'm Kinar Sardhara, a passionate Full Stack Developer from
            Surat, Gujarat, India. With expertise in HTML, CSS, JavaScript,
            React, TypeScript, Angular, and backend development in Node.js, I
            bring a comprehensive skill set to the table. Over the years, I have
            contributed to a variety of projects across different segments
            including e-commerce, health centers, and finance sectors. My
            diverse experience allows me to create robust, scalable, and
            efficient solutions tailored to meet the unique needs of each
            industry. Whether it's developing user-friendly interfaces or
            designing complex backend systems, I am committed to delivering
            high-quality work and staying updated with the latest industry
            trends.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={devsignIcon} alt="design icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={devIcon} alt="Web development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={uiUxDesign} alt="mobile app icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">UI/UX Design</h4>

                <p className="service-item-text">
                  Crafting modern, professional designs for outstanding user
                  experiences.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={digitalMarketing} alt="camera icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Digital Markting</h4>

                <p className="service-item-text">
                  Innovative digital marketing strategies for growth.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list has-scrollbar">
            {testimonialsDataList?.map((testimonial,index) => (
              <li
                className="testimonials-item"
                onClick={() => openModal(testimonial)}
                key={index}
              >
                <TestimonialItem
                  avatarSrc={testimonial.img}
                  name={testimonial.name}
                  text={testimonial.quote}
                />
              </li>
            ))}
          </ul>
        </section> */}

        {modalOpen && selectedTestimonial && (
          <div className="modal-container active" data-modal-container>
            <div
              className="overlay active"
              data-overlay
              onClick={closeModal}
            ></div>
            <section className="testimonials-modal">
              <button
                className="modal-close-btn"
                data-modal-close-btn
                onClick={closeModal}
              >
                <IoMdClose />
              </button>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img
                    src={selectedTestimonial.avatarSrc}
                    alt={selectedTestimonial.name}
                    width="80"
                    data-modal-img
                  />
                </figure>
                <img src="./assets/images/icon-quote.svg" alt="quote icon" />
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title>
                  {selectedTestimonial.name}
                </h4>
                <time dateTime="2021-06-14">{selectedTestimonial.date}</time>
                <div data-modal-text>
                  <p>{selectedTestimonial.text}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            {clientList?.map((ele, i) => {
              return (
                <li className="clients-item" key={i}>
                  <Link to={"#"}>
                    <img src={ele.img} alt="client logo" />
                  </Link>
                  ;
                </li>
              );
            })}
          </ul>
        </section> */}
      </article>

      <article className={`about ${activeTab === "resume" ? "active" : ""}`}>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Swarrnim Startup & Innovation University
              </h4>

              <span>2022(running)</span>

              <p className="timeline-text">
                Experienced JavaScript Developer adept in web frameworks.
                Collaborative problem-solver with agile expertise. Dedicated to
                learning and embracing emerging technologies.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Pioneer School</h4>

              <span>2021-2022</span>

              <p className="timeline-text">
                Experience in Accountancy, Economics, Business Studies,
                Mathematics, Computer Science and Entrepreneurship. Passionate
                about leveraging knowledge for impactful solutions.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <MdBusinessCenter />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Front-End Developer</h4>

              <span>2024 — Present</span>

              <p className="timeline-text">
                Spearheaded the frontend development efforts for a high-traffic
                jewelry e-commerce website, contributing to a seamless and
                visually appealing user experience.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Front-End Developer</h4>

              <span>2023 — 2024</span>

              <p className="timeline-text">
                Work on high scale application development including data
                gathering, business analysis, data migration & consolidation,
                and technical writing for features such as financial reports,
                membership renewals, and event registrations.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">React js</h5>
                <data value="80" className="mb-2">
                  85%
                </data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Angular</h5>
                <data value="70" className="mb-2">
                  90%
                </data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Node js</h5>
                <data value="90" className="mb-2">
                  80%
                </data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Design</h5>
                <data value="50" className="mb-2">
                  90%
                </data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>

      <article className={`about ${activeTab === "portfolio" ? "active" : ""}`}>
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          {/* <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul> */}

         {/* <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button> */}

            {/* <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul> */}
          {/* </div> */}

          <ul className="project-list p-0">
            {portfolioDataList?.map((ele, index) => (
              <li className="project-item active" key={index}>
                <Link to={ele.link} target="_blank">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaEye />
                    </div>

                    <img src={ele.img} alt={ele.name} loading="lazy" />
                  </figure>

                  <h3 className="project-title">{ele.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <article className={`blog ${activeTab === "blog" ? "active" : ""}`}>
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-1.jpg"
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Design conferences in 2022
                  </h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt,
                    explicabo.
                  </p>
                </div>
              </Link>
            </li>

            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-2.jpg"
                    alt="Best fonts every designer"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    Best fonts every designer
                  </h3>

                  <p className="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                    est eligendi.
                  </p>
                </div>
              </Link>
            </li>

            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-3.jpg"
                    alt="Design digest #80"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #80</h3>

                  <p className="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum
                    exercitationem ullam corporis suscipit.
                  </p>
                </div>
              </Link>
            </li>

            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-4.jpg"
                    alt="UI interactions of the week"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    UI interactions of the week
                  </h3>

                  <p className="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis
                    nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </Link>
            </li>

            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-5.jpg"
                    alt="The forgotten art of spacing"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    The forgotten art of spacing
                  </h3>

                  <p className="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </Link>
            </li>

            <li className="blog-post-item">
              <Link to={"#"}>
                <figure className="blog-banner-box">
                  <img
                    src="./assets/images/blog-6.jpg"
                    alt="Design digest #79"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design digest #79</h3>

                  <p className="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat,
                    velit esse cillum.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <article className={`about ${activeTab === "contact" ? "active" : ""}`}>
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d929.62707850913!2d72.89259066956723!3d21.251337498778383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s7JHJ7V2V%2BG7Q!5e0!3m2!1sen!2sin!4v1720576079718!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Surat, Gujarat, India"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form onSubmit={formik.handleSubmit} className="form" data-form>
            <div className="input-wrapper">
              <div>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Full name"
                  data-form-input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <small className="error">{formik.errors.name}</small>
                ) : null}
              </div>
              <div className="">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  data-form-input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="error">{formik.errors.email}</small>
                ) : null}
              </div>
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                data-form-input
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ marginBottom: "0px" }}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <span className="error">{formik.errors.message}</span>
              ) : null}
            </div>

            <button className="form-btn" type="submit" data-form-btn>
              <FaPaperPlane />
              <small>Send Message</small>
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}

export default Page;
