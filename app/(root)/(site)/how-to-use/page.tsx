"use client"
import Navbar2 from '@/components/Navbar2'
import React, { useContext, useEffect, useState } from 'react'


const page = () => {

  return (
    <div className='zeeshan'>
      {/* Navbar */}
      <Navbar2 />
      <>
        {/* Main content */}
        <section className="slice !pt-[8rem] !py-8 !bg-background-4">
          {/* Container */}
          <div className='absolute bottom-1 left-1 z-0'>
            <img src='/images/bottom-box-shape.png' />
          </div>
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-lg-12">
                {/* Heading */}
                <h1 className="h1 text-gradient text-center text-lg-left my-4">
                  How to use: FAQs
                </h1>
                {/* Text */}
                <p className="lead text-white text-center text-lg-left opacity-8">
                  You can also read the frequently asked questions about how to use HG
                  Sing Along on website or App.
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

              xmlSpace="preserve"
              className=""
            >
              <polygon points="2560 0 2560 100 0 100" fill='#1a1d22' />
            </svg>
          </div>
        </section>
        <section className="slice slice-sm !bg-background-3">
          <div className='absolute bottom-1 left-1 z-0'>
            <img src='/images/bottom-box-shape.png' />
          </div>
          <div className='absolute bottom-0 right-0 z-0'>
            <img src='/images/bottom-line.png' />
          </div>

          <div className="container">
            {/* <span class="badge badge-primary badge-pill">Our vision</span> */}
            <div className="row mt-4">
              <div className="col-lg-12 text-white/80">
                <p>
                  <strong>How can I create my account?</strong>
                </p>
                <p>
                  You can visit the <a href="https://hgsingalong.com/login">login</a>{" "}
                  page on the website or click on Register on the app to create or log
                  in to your account. You will need your email address, name, country,
                  and password to create an account.
                </p>
                <p>
                  <strong> How can I start/schedule my first meeting?</strong>
                </p>
                <p>
                  On the website:
                  <br />
                </p>
                <ol>
                  <li>
                    After login, on dashboard you will see Start Meeting and Schedule
                    meeting buttons, click on any of that button to quickly start or
                    schedule meeting respectively.
                  </li>
                  <li>
                    You can also start/schedule meeting by clicking on meetings page
                    (left side menu) and click on New meeting button and then fill
                    form accordingly.
                  </li>
                </ol>
                On the App:
                <br />
                <ol>
                  <li>
                    After login, click on start meeting and enter meeting title then
                    click on start to quickly start meting.
                  </li>
                  <li>
                    You can also click on schedule to schedule your meeting for any
                    specific time.
                  </li>
                </ol>
                <p />
                <p>
                  <strong>How can users/audience join my meeting?</strong>
                </p>
                <p>
                  Once your meeting is created/scheduled, you will see a link on the
                  website or the app. Share that link with your users/audience. They
                  will directly join the meeting on the app or the website when they
                  click on the link.
                </p>
                <p>
                  <strong>How can I secure meetings from unknown users?</strong>
                </p>
                <p>
                  After starting a meeting, you will see options in the security tab enable it.
                </p>
                <p>
                  <strong>How do I enhance the quality of my meetings?</strong>
                </p>
                <p>
                  We are using 720p for the video quality of meetings but it all
                  depends on the network connection of all participants. You can
                  manually control the quality by clicking on Performance on the
                  website and selecting adjustments that suit you, or clicking on
                  Audio on the app. The meeting quality on the app will be much better
                  if you are using a good network connection, or Chrome or Firefox on
                  the website.
                </p>
                <p>
                  Still have questions? Do{" "}
                  <a href="http://localhost/contact-us">let us know</a>.
                </p>
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
              <polygon points="2560 0 2560 100 0 100" fill='#1a1d22' />
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
                  <a href="https://play.google.com/store/apps/details?id=com.singalong_hg">
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
              <a href="https://apps.apple.com/pk/app/hgc-radio-music-live/id6476858215" target="_blank">
                <img src="https://hallelujahgospel.org/public/new/img/hallulia/apple.png" width="70" className="p-0 m-0 me-2" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.hgc.music.new" target="_blank">
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