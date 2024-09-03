"use client"
import Navbar2 from '@/components/Navbar2'
import React, { useContext, useEffect, useState } from 'react'
import { CiHome } from 'react-icons/ci'
import { FaHandPointUp, FaLock } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaVolumeDown } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ConeIcon } from 'lucide-react';
import MeetingModal from '@/components/MeetingModal';
import { Textarea } from '@/components/ui/textarea';
import { Rating } from 'react-simple-star-rating'
import { useRouter } from 'next/navigation';
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share';
import { useToast } from '@/components/ui/use-toast';
import { planslist } from '@/constants';
import { subscriptionContext } from '@/providers/SubscriptionProvider';
import { useUser } from '@clerk/nextjs';

interface CustomStyle extends React.CSSProperties {
  '--i'?: number;
}

function getStyle(num: number) {
  const customStyle: CustomStyle = {
    '--i': num,
  };
  return customStyle
}
const page = () => {

  return (
    <div className='zeeshan'>
      {/* Navbar */}
      <Navbar2 />
      <section className="slice py-2 pt-lg-4 pb-lg-5 bg-dark">
    {/* Container */}
    <div className="container">
      <div className="row row-grid align-items-center">
        <div className="col-lg-12">
          {/* Heading */}
          <h1 className="h1 text-white text-center text-lg-left my-4">
            We Are <strong>Listening</strong>
          </h1>
          {/* Text */}
          <p className="lead text-white text-center text-lg-left opacity-8">
            Our proactive support team is waiting for your request or any
            question you may have. We do our best to respond within 24 hours on
            workdays.
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
        <polygon points="2560 0 2560 100 0 100" fill='#e6fffd'/>
      </svg>
    </div>
  </section>
  <section
    className="slice slice-lg !bg-background-1"
    id="sct-form-contact"
    style={{ paddingTop: "3rem" }}
  >
    <div className="container position-relative zindex-100">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3>Contact us</h3>
          <p>Kindly fill out this form and send your message.</p>
          <p className="lh-190">
            If there's anything we can help you with, just let us know. <br />
            Kindly fill out this form and send your message. We'll be more than
            happy to offer you our help.{" "}
          </p>
          <p>
            <strong>Email Address:</strong>
            info@hgsingalong.com
          </p>
          <p style={{ display: "none" }}>
            <strong>Phone Number:</strong>
            (123) 456 789
          </p>
        </div>
        <div className="col-lg-6">
          {/* Form */}
          <form method="post" action="http://localhost/hgsingalong/contact-us">
            <input
              type="hidden"
              name="_token"
              defaultValue="sPNoaGFatpeqYOkOhC0B0xvqouxAeQO6SHDjG7MW"
            />
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Your name *"
                name="name"
                required
                defaultValue=""
                minLength={3}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="email@example.com *"
                name="email"
                required
                defaultValue=""
                minLength={10}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                name="country"
                type="text"
                placeholder="Your country *"
                required
                defaultValue=""
                minLength={2}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control form-control-lg"
                name="message"
                placeholder="Tell us how we can help you *"
                rows={3}
                minLength={10}
                required
                defaultValue={""}
              />
            </div>
            <div className="text-center">
              {/* <div class="g-recaptcha" data-sitekey="6Lfs5ScUAAAAANAJwGrdfvWLFRRiVbKRE2vfoaFj"></div> */}
              <button type="reset" className="btn-reset d-none" />
              <button
                type="submit"
                className="btn btn-block btn-lg btn-primary mt-4"
              >
                Send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer className="position-relative" id="footer-main">
        <div className="footer pt-lg-7 footer-dark bg-dark">
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
              <polygon points="2560 0 2560 100 0 100" fill='#e6fffd'/>
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