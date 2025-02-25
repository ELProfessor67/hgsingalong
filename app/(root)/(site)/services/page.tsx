import Navbar2 from '@/components/Navbar2'

const page = () => {

  return (
    <div className='zeeshan'>
      {/* Navbar */}
      <Navbar2 />
      <>
        <section className="slice !pt-[8rem] !pb-8 relative !bg-background-4">
          <div className='absolute bottom-1 left-1 z-0'>
            <img src='/images/bottom-box-shape.png' />
          </div>
          {/* Container */}
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-lg-12">
                {/* Heading */}
                <h1 className="h1 text-gradient text-center text-lg-left my-4">
                  Services that help you stay<strong> productive</strong>
                </h1>
                {/* Text */}
                <p className="lead text-white text-center text-lg-left opacity-8">
                  Let Sing Along transform your virtual meetings. Find out how!
                </p>
              </div>
            </div>
          </div>
          {/* SVG separator */}
          <div className="shape-container shape-line shape-position-bottom">
            <svg
              width="2560px"
              height="100px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="none"
              x="0px"
              y="0px"
              viewBox="0 0 2560 100"
              // style={{ enableBackground: "new 0 0 2560 100" }}
              xmlSpace="preserve"
              className=""
            >
              <polygon points="2560 0 2560 100 0 100" fill='#1a1d22' />
            </svg>
          </div>
        </section>
        <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6 !bg-background-3">
          <div className='absolute top-1 left-1 z-0'>
            <img src='/images/left-plus.png' />
          </div>
          <div className='absolute bottom-0 right-0 z-0'>
            <img src='/images/bottom-line.png' />
          </div>
          <div className="container">
            {/* Title */}
            {/* Section title */}
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-12">
                {/*
              <span class="badge badge-soft-success badge-pill badge-lg">
                  Get started
              </span>
          */}
                <h2 className=" mt-4 text-gradient">
                  We bring your global meetings at your fingertips with unparalleled
                  performance and ease-of-use features
                </h2>
                <div className="mt-2">
                  <p className="lead lh-180 text-white/80">
                    Simply one great platform that comes with better pricing and
                    reliable solutions. Get to know us!{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-5">
                    <div className="pt-4 pb-5">
                      <img
                        src="https://trivoh.com/wp-content/uploads/2023/10/Trivoh-Virtual-Meeting-Platform.png"
                        className="img-fluid img-center"
                        style={{ height: 150 }}
                        alt="Illustration"
                      />
                    </div>
                    <h5 className="h4 lh-130 mb-3">Easy to set up &amp; use</h5>
                    <p className="text-muted mb-0">
                      No need to download or install any software. Just start a
                      meeting and share the link with your guests or participants to
                      join using any web browser, or our easy-to-use app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-5">
                    <div className="pt-4 pb-5">
                      <img
                        src="/images/controls.png"
                        className="img-fluid img-center"
                        style={{ height: 150 }}
                        alt="Illustration"
                      />
                    </div>
                    <h5 className="h4 lh-130 mb-3">Fully controlled by you</h5>
                    <p className="text-muted mb-0">
                      We have completely managed servers so you have full control of
                      your own meetings. You can set up{" "}
                      <b
                        style={{ color: "red" }}
                        title="a system of communication where the only people who can read the messages sent back and forth to each other are the two people engaging in the conversation"
                      >
                        peer-to-peer encryption
                      </b>
                      , too.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-5">
                    <div className="pt-4 pb-5">
                      <img
                        src="https://trivoh.com/wp-content/uploads/2023/10/Group-425.png"
                        className="img-fluid img-center"
                        style={{ height: 150 }}
                        alt="Illustration"
                      />
                    </div>
                    <h5 className="h4 lh-130 mb-3">
                      Unlimited Meetings &amp; Recordings
                    </h5>
                    <p className="text-muted mb-0">
                      Go with unlimited meetings and recordings as per your activated
                      plan with no hidden charges. We offer{" "}
                      <b
                        style={{ color: "red" }}
                        title="You will have your own(personal) meeting platform with your branding, that you will control."
                      >
                        private servers
                      </b>{" "}
                      as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                  <div className="px-5 pb-5 pt-5">
                    <div className="py-4">
                      <div className="icon text-warning icon-sm mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-phone-call"
                        >
                          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                    </div>
                    <h5 className="">Sales</h5>
                    <p className=" mt-2 mb-0">
                      Do you have any questions? Talk to our representative now.
                    </p>
                    <div className="mt-4">
                      <a
                        href="http://localhost/hgsingalong/contact-us"
                        className="link-underline-warning"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                  <div className="px-5 pb-5 pt-5">
                    <div className="py-4">
                      <div className="icon text-warning icon-sm mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-settings"
                        >
                          <circle cx={12} cy={12} r={3} />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </div>
                    </div>
                    <h5 className="">Live Support</h5>
                    <p className=" mt-2 mb-0">
                      Our live chat/support is available 24/7 to assist you.
                    </p>
                    <div className="mt-4">
                      <a
                        href="http://localhost/hgsingalong/services#"
                        className="link-underline-warning"
                      >
                        Talk to us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                  <div className="px-5 pb-5 pt-5">
                    <div className="py-4">
                      <div className="icon text-warning icon-sm mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-users"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </div>
                    <h5 className="">Custom Offers</h5>
                    <p className=" mt-2 mb-0">
                      We offer custom private meeting servers designed only for you.
                    </p>
                    <div className="mt-4">
                      <a
                        href="http://localhost/hgsingalong/contact-us"
                        className="link-underline-warning"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="slice slice-lg !bg-background-3">
          <div className='absolute bottom-1 left-1 z-0'>
            <img src='/images/bottom-box-shape.png' />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <span className="badge badge-primary badge-pill ">Key features</span>
                <h5 className="lh-180 mt-4 mb-6 !text-white/80">
                  Check out our premium services and most prominent features.
                </h5>
              </div>
            </div>
            {/* Features */}
            <div className="row mx-lg-n4">
              {/* Features - Col 1 */}
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Unlimited Meetings</span>
                      <p className="text-sm text-muted mb-0">
                        Based on your active plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Unlimited Recordings</span>
                      <p className="text-sm text-muted mb-0">
                        Based on your active plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">P2P Encrypted</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-success text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Moderator Rights</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Screen Sharing</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="h6">No Installation Required</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Features - Col 3 */}
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div>
                        <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Mobile Apps</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div>
                        <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Customizable Interface</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 px-lg-4">
                <div className="card shadow-none">
                  <div className="p-3 d-flex">
                    <div>
                      <div>
                        <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="h6">Audio/Video Sharing</span>
                      <p className="text-sm text-muted mb-0">Inclusive of service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <footer className="position-relative" id="footer-main">
        <div className="footer pt-lg-7 footer-dark !bg-background-4">
          {/* SVG shape */}
          <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
            <svg
              width="2560px"
              height="100px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="none"
              x="0px"
              y="0px"
              viewBox="0 0 2560 100"
              // style={{ enableBackground: "new 0 0 2560 100" }}
              xmlSpace="preserve"
              className=" fill-section-secondary"
            >
              <polygon points="2560 0 2560 100 0 100" fill='#1f2226' />
            </svg>
          </div>
          {/* Footer */}
          <div className="container pt-4">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                {/* Theme's logo */}
                <a href="">
                  <img
                    alt="Image placeholder"
                    src="/images/apple-icon-60x60.png"
                    id="footer-logo"
                  />
                </a>
                <p className="mt-4 text-sm opacity-8 pr-lg-4 !text-white !font-[400] !text-[18px] !leading-[27px]">
                  Sing Along is a video conferencing/meeting platform offered by
                  Hallelujah Gospel Globally. We offer high-quality, secured, and
                  hassle-free meetings.{" "}
                </p>
              </div>


              <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                <h6 className="heading mb-3">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="/dashboard/account">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/meetings">
                      My Meetings
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/recordings">
                      Recordings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                <h6 className="heading mb-3">Information</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="/page/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                <h6 className="heading mb-3">Our Apps</h6>
                <div className="flex flex-wrap justify-around w-100">
                  <a href="/#" className="mb-1">
                    <img
                      src="/images/app-store-badge.png"
                      alt=""
                      width={135}
                      height={40}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/google-play-badge.png"
                      alt=""
                      width={135}
                      style={{ marginTop: 5 }}
                    />
                  </a>
                </div>

              </div>

            </div>
            <div className='flex items-center justify-end gap-8'>

              <img src="https://hallelujahgospel.org/public/new/img/hallulia/bbb.png" width="85" className="p-0 m-0" />
              <img src="https://hallelujahgospel.org/public/new/img/hallulia/access.png" width="65" className="p-0 m-0 me-2" />
              <img src="https://hallelujahgospel.org/public/new/img/hallulia/lock.png" width="65" className="p-0 m-0 me-2" />
              <a href="#" target="_blank">
                <img src="https://hallelujahgospel.org/public/new/img/hallulia/apple.png" width="70" className="p-0 m-0 me-2" />
              </a>
              <a href="#" target="_blank">
                <img src="https://hallelujahgospel.org/public/new/img/hallulia/g-play.png" width="70" className="p-0 m-0" />
              </a>


            </div>
            <hr className="divider divider-fade divider-dark my-4" />
            <div className="row align-items-center justify-content-md-between pb-4">
              <div className="col-md-6">
                <div className="copyright text-sm font-weight-bold text-center text-md-left">
                  © 2024{" "}
                  <a
                    href="https://hgsingalong.com/"
                    className="font-weight-bold"
                    target="_blank"
                  >
                    Sing Along
                  </a>
                  . All rights reserved.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                  <li className="nav-item">
                    <a
                      className="nav-link !text-foregroud-secondary hover:!text-foregroud-primary"
                      href="/terms"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link !text-foregroud-secondary hover:!text-foregroud-primary"
                      href="/policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link !text-foregroud-secondary hover:!text-foregroud-primary"
                      href="/contact-us"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default page