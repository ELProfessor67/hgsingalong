import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-white">
        <div className="container">
          {/* Brand */}
          <a className="#" href="/">
            <img
              alt="Image placeholder"
              src="/images/full-logo.png"
              id="navbar-logo"
              style={{ height: 70 }}
            />
          </a>
          <span className="text-center" style={{ marginLeft: 20 }}>
            <h3
              style={{
                color: "#eb6e0c",
                marginBottom: 0,
                fontWeight: "bold",
                lineHeight: '20px'
              }}
            >
              Sing Along <br />
              <small style={{ fontSize: "12.5px", fontWeight: 600 }}>
                HallelujahGospelGlobally
              </small>
            </h3>
          </span>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
                <GiHamburgerMenu size={30} color='white'/>
            </span>
          </button>
          {/* Collapse */}
          <div className="collapse2 navbar-collapse p-3 md:!p-0 rounded-md md:rounded-none" id="navbarCollapse">
            <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
              <li className="nav-item ">
                <a className="nav-link !text-black/80 hover:!text-foregroud-primary" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link !text-black/80 hover:!text-foregroud-primary"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li
                className="nav-item dropdown dropdown-animate"
                data-toggle="hover"
              >
                <a
                  className="nav-link !text-black/80 hover:!text-foregroud-primary"
                  href="/page/about"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu dropdown-menu-single">
                  <a
                    href="/services"
                    className="dropdown-item !text-black/80 hover:!text-foregroud-primary"
                  >
                    Services
                  </a>
                  <a
                    href="/page/how-to-use"
                    className="dropdown-item !text-black/80 hover:!text-foregroud-primary"
                  >
                    Guidelines
                  </a>
                  <a
                    href="/pricing"
                    className="dropdown-item !text-black/80 hover:!text-foregroud-primary"
                  >
                    Pricing
                  </a>
                  {/* <div class="dropdown-divider"></div> */}
                </div>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link !text-black/80 hover:!text-foregroud-primary"
                  href="/contact-us"
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* Button */}
            <a
              className="navbar-btn btn btn-sm btn-primary !bg-foregroud-primary text-white !border-none hover:!scale-110 d-none d-lg-inline-block ml-3"
              href="/sign-in"
            >
              Sign In 
            </a>
            {/* Mobile button
      <div class="d-lg-none text-center">
        <a href="" class="btn btn-block btn-sm btn-warning">See more details</a>
      </div>
          */}
          </div>
        </div>
      </nav>
  )
}

export default Navbar2