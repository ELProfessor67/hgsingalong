"use client"
import Navbar2 from '@/components/Navbar2'
import React, { useContext, useEffect, useState } from 'react'


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
      <>
  <section className="slice py-2 pt-lg-4 pb-lg-5 bg-dark">
    {/* Container */}
    <div className="container">
      <div className="row row-grid align-items-center">
        <div className="col-lg-12">
          {/* Heading */}
          <h1 className="h1 text-white text-center text-lg-left my-4">
            Privacy Policy
          </h1>
          {/* Text */}
          <p className="lead text-white text-center text-lg-left opacity-8">
            This Privacy Policy gives a clear explanation of how Hallelujah
            Gospel Sing-Along collects information about you when you interact
            on the platform Hallelujah Gospel Sing-Along, including through our
            websites, applications, and services.
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
        <polygon points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  </section>
  <section className="slice slice-sm">
    <div className="container">
      {/* <span class="badge badge-primary badge-pill">Our vision</span> */}
      <div className="row mt-4">
        <div className="col-lg-12">
          <p>
            <strong>PRIVACY POLICY</strong>
          </p>
          <p>
            <strong>AS OF JULY 6, 2024</strong>
          </p>
          <p>
            This Privacy Policy gives a clear explanation of how Hallelujah
            Gospel Sing-Along collects information about you when you interact
            on the platform Hallelujah Gospel Sing-Along, including through our
            websites, applications, and services. It also lets you know the
            choices you have regarding our use of your personal information and
            how you can access and update such information.
          </p>
          <p>
            Please read this Privacy Policy carefully to help you better
            understand how we use your information. By using and/or accessing
            our Services (defined below) you acknowledge that you have read and
            understood this Sing-Along Privacy Policy.
          </p>
          <p>
            <strong>Important Definitions</strong>
          </p>
          <p>“Policy” refers to this Privacy Policy.</p>
          <p>
            “Hallelujah Gospel Sing-Along”, “Hallelujah Gospel”, “Sing-Along”,
            “we”,
          </p>
          <p>
            “us” and/or “our” refers to Hallelujah Gospel Sing-Along and any of
            our corporate affiliates.
          </p>
          <p>
            “Services” refers to, individually and collectively, our Sing-Along
            video conferencing, collaborations, related services, websites
            (including www.hallelujahgospel.com), support, professional
            services, and end-user software on any platform. Services are not
            intended for personal or consumer use.
          </p>
          <p>
            “You” and “your” refer to individuals using or otherwise interacting
            with our
          </p>
          <p>Services.</p>
          <p>
            “Information” refers to data about you and your use of Services that
            may be retained in electronic or paper format, and may include
            personal information as defined by the California Consumer Privacy
            Act of 2018 and personal data as defined by the General Data
            Protection Regulation, as applicable
          </p>
          <p>
            <strong>Reasons Why We Process Your Information</strong>
          </p>
          <p>We may process your information if:</p>
          <p>
            • You, or the company you work for, or the organization you belong
            to, or the company which provides you access to Services, are a
            customer or a supplier of ours.
          </p>
          <p>
            • You, or the company you work for, or the organization you belong
            to, or the company which provides you access to Services, use our
            Services.
          </p>
          <p>• You work for someone who uses our products or services.</p>
          <p>
            • You work for one of our suppliers, resellers, or other business
            partners.
          </p>
          <p>
            • You communicate with us, or we receive a communication from or
            regarding you, through our Services or other communications channel.
          </p>
          <p>
            • You, or the company you work for, or the organization you belong
            to, may be a candidate for our advertising or marketing efforts.
          </p>
          <p>
            • You request information about us, our business, and/or our
            Services.
          </p>
          <p>
            <strong>Information We Collect</strong>
          </p>
          <p>
            We collect information from you when you voluntarily provide that
            information to us. This may occur, for example, when you register
            for an account, modify your profile and preferences, complete and
            submit a form through our Services, provide payment information to
            complete a transaction, contact us with inquiries, participate in an
            event or promotion, or respond to one of our surveys.
          </p>
          <p>
            We collect information from you when you voluntarily provide that
            information as part of your use of our Services. Examples of this
            may include: when you submit a technical support request,
            participate in a chat function as part of a Hallelujah Gospel
            Sing-Along meeting, or request that a meeting that you are hosting
            be recorded using our Services.
          </p>
          <p>
            We collect information about you from third parties including other
            Service users, third-party service providers which you have linked
            to your use of our Services (including social media accounts,
            single-sign-on services, and schedulingapplications), advertising
            networks, resellers, distributors, your employer, your
            administrator, publicly-available sources, data enrichment vendors,
            analytics providers, payment and delivery service vendors, and our
            business partners.
          </p>
          <p>
            The information which we receive from third parties depends on what
            policies that&nbsp; third party follows and our and your respective
            relationships with the third party.
          </p>
          <p>
            <strong>
              Personal data relating to you that we process may include:
            </strong>
          </p>
          <p>• Your name</p>
          <p>
            • Who you work for, and your job function or specific department
          </p>
          <p>
            • Your address, phone number, email address or other contact details
            (these details may relate to your work or to you personally,
            depending on the nature of our relationship with you or the company
            that you work for).
          </p>
          <p>
            • Information relating to transactions with us involving you or the
            company you work for (for example, details of goods or services that
            we have supplied to, or obtained, from you or the person you work
            for).
          </p>
          <p>
            • Information relating to you which is necessary for us to process
            in order to enter into or perform a contract with you or the company
            you work for (for example, right-to-work information and information
            obtained from credit reference agencies where it is necessary to
            enable us to carry out appropriate checks in relation to contracts
            with you or someone else that you work for or are otherwise related
            to).
          </p>
          <p>
            • Certain device and connection information when you use our
            Services, including the type of device or endpoint (e.g. browser
            type and version, browser plug-in types and versions, operating
            system and platform) you are using to access our Services, IP
            address, geolocation data, duration of
          </p>
          <p>
            <strong>Service use, and connection quality.</strong>
          </p>
          <p>
            The amount of information may vary depending on the nature of the
            equipment you use to access our Services and may also include
            non-identifiable or aggregated information to conduct research on
            customer demographics, interests and behavior.Information about your
            visit, including the full Uniform Resource Locators (URL),
            clickstream to, through and from our website (including date and
            time), products you viewed or searched for, page response times,
            download errors, length of visits to certain pages, page interaction
            information (such as scrolling, clicks, and mouse-overs), methods
            used to browse away from the page, and any phone number used to call
            our customer service number or social media handle used to connect
            with our customer service team.
          </p>
          <p>
            <strong>Cookies</strong>
          </p>
          <p>
            Hallelujah Gospel Sing-Along website also uses “cookies” to collect
            certain information. A cookie is a piece of computer code that your
            internet browser is given when you access our website. Our cookies
            help provide additional functionality to the website, track the
            traffic patterns for our website, and study how our users use and
            interact with our Services. For instance, our website may set a
            cookie on your browser that allows you to access the website without
            needing to remember and then enter a password more than once during
            a visit to our website.
          </p>
          <p>
            Please refer to your web browser’s instruction guide or help section
            for information on how to receive notification when you are
            receiving a new cookie and how to turn cookies off. We recommend
            that you leave cookies turned on because they allow you to better
            take advantage of some of our Services.
          </p>
          <p>
            <strong>How We Use Information</strong>
          </p>
          <p>
            How we use the information is shaped by the source of the
            information, the type of Services you use, and any privacy
            preferences that you have specified to us. Below are the specific
            purposes for which we use the information we collect or receive
            about you.
          </p>
          <p>
            • To take steps in order to enter into any contract or carry out our
            obligations arising from any contract entered into between
            Hallelujah Gospel Sing-Along and you, the company you work for, or
            the organization you belong to, or the company which provides you
            access to our Services
          </p>
          <p>
            • To provide our Services, related customer support, and supporting
            functions. We use the information you provide to make our
            Servicesavailable to you in a personalized manner which optimizes
            your experience. This includes providing supporting functions like
            using the information you provide in your profile to identify you to
            other Service users, performing billing operations, identifying
            whether you are complying with your license grant for our Services,
            detecting fraudulent activity or other improper uses of our
            Services, and verifying your identity
          </p>
          <p>
            • To communicate with you about our Services. We may get in touch
            with you using the information you have provided via email,
            telephone, in- window messaging, through the software for the
            Service, on the website, and otherwise as appropriate for
            transactional communications such a change of password confirmation,
            billing receipts, product updates, and responding to customer
            support requests. We also send you information as a new user to
            better help you use our Services. These communications are part of
            the Services and most of the time, you cannot opt out of receiving
            them.
          </p>
          <p>
            • For engagement communications – We may communicate with you, the
            organization you belong to, or the company you work for to better
            help you engage with our Services and maximize your use of our
            Services. This includes user training, letting you know about
            newly-available features of the Services and seeking quality-related
            and engagement feedback.
          </p>
          <p>
            • For promotional communications - We may communicate with you, the
            organization you belong to, or the company you work for to better
            inform you of the Services available to you. This includes letting
            you know about potential new features of the Services, newsletters,
            events, and other related services we offer that we believe will be
            of interest to you. If we do so, and if required by applicable law,
            each communication we send you will contain instructions permitting
            you to “opt-out” of receiving future communications. You can also
            object to further marketing at any time by sending us an email at:{" "}
            <strong>
              <em>info@hgsingalong.com</em>
            </strong>
            .
          </p>
          <p>
            • To better understand our users, and improve our Services
            accordingly (only when our legitimate interest in doing this is not
            overridden by your personal rights that may apply). We may use such
            information to track, for example, the total number of visitors to
            our website, the number of visitorsto each page of our website, the
            domain names of your Internet service provider, general geographic
            location, and how you use and interact with our Services. We can use
            this information to identify trends, usage patterns, service quality
            interruptions, undiscovered bugs in the Services, and better
            optimize your experience of our Services in the future. Also, in an
            ongoing effort to better understand and serve the users of our
            Services, Hallelujah Gospel Sing-Along often conducts research on
            its customer demographics, interests, and related behavior based on
            the information on an aggregate basis.
          </p>
          <p>
            • For uses as required by law or to otherwise protect our legal
            rights, in situations where we believe it is required by law or
            necessary to protect our legal rights or the interests of others to
            use the information in connection with pending or active litigation,
            regulatory compliance efforts, audits, and disclosures in connection
            with the acquisition, merger or sale of a business.
          </p>
          <p>
            • For other uses with your consent. If Hallelujah Gospel Sing-Along
            intends to use any information in any manner that is not consistent
            with this Privacy Policy, you will be informed of such anticipated
            use and be given an opportunity to provide your consent for such use
            and/or discontinue your use of our Services.
          </p>
          <p>
            Our Services are not intended to be used for profiling, automated
            processing, personal data relating to criminal convictions or
            offenses, other systematic monitoring of a public area, or any other
            operations which may result in a high risk of significantly
            affecting you or your legal rights.
          </p>
          <p>
            <strong>
              If you are European Union resident, the following terms also
              apply:
            </strong>
          </p>
          <p>
            Hallelujah Gospel Sing-Along processes your personal data when we
            have an adequate legal basis for doing so. This means we collect and
            use your personal data where:
          </p>
          <p>• We need it to provide you the Services;</p>
          <p>
            • It satisfies a legitimate interest (which is not overridden by
            your data protection interests);• You give us consent to use the
            personal data for a specific purpose; or
          </p>
          <p>
            • We need to process your personal data to comply with a legal or
            contractual obligation.
          </p>
          <p>
            If you have consented to our use of personal data for a specific
            purpose, you have the right to change your mind at any time, and the
            procedures for communicating that revocation of consent are detailed
            below. Any such decision will not affect any processing that has
            already occurred.
          </p>
          <p>
            Where you withdraw your consent, but we are using your information
            because we or a third party (e.g. your employer) have a legitimate
            interest in doing so, or we have different legal basis for using
            your information (for example, fulfilling a contract with you), we
            may continue to process your information, subject to your rights to
            access and control your information. However, this may mean your
            access to our Services will be limited or suspended, and your
            accounts may be terminated, as applicable.
          </p>
          <p>
            <strong>How Long We Keep Your Information</strong>
          </p>
          <p>
            Hallelujah Gospel Sing-Along will generally retain information for
            as long as you are an active user of our Services. Most information
            is available for you to modify or delete on a self-service basis.
            For more extensive requests, you may make a request using the
            guidelines outlined below. Metadata and/or connection analytics
            following the use of our Services is retained and made available for
            a host user and/or an administrative user to review during an
            administrator-set retention period. Information that is older than
            the pre-set retention period willbe archived.
          </p>
          <p>
            Some information may be retained to comply with our legal
            obligations, to resolve disputes, to enforce our agreements, to
            support business operations, for marketing purposes according to
            your registered preferences if you have optedto receive such
            communication, information derived from cookies, and information
            required to continue to develop and improve our Services.
          </p>
          <p>
            Where we retain information after your use of our Services, we take
            reasonable steps to ensure that data is not personally identifiable
            beyond the extent required to comply with our legal and regulatory
            obligations.
          </p>
          <p>
            <strong>How We Protect Information</strong>
          </p>
          <p>
            Hallelujah Gospel Sing-Along takes appropriate physical, technical,
            and organizational measures to protect your personal information
            from loss, misuse, unauthorized access or disclosure, alteration,
            and destruction. We utilize a combination of industry-standard
            security technologies, procedures, and organizational measures to
            help protect your information from unauthorized access, use or
            disclosure.
          </p>
          <p>
            Our primary data hosting service providers are in the United States.
          </p>
          <p>
            Note that no Internet, e-mail or other electronic transmission is
            ever fully secure or error-free, so you should take extra
            precautions in deciding what information you send to us in this way.
          </p>
          <p>
            <strong>Who We Share Information With</strong>
          </p>
          <p>
            There are certain circumstances in which we may share your
            information with certain third-parties. Any access by a third party
            to the information is managed by Hallelujah Gospel, and the third
            parties are vetted based in part on their ability to protect
            information.
          </p>
          <p>
            As part of your use of our Services, you may share information with
            other users of the Service. Those users of the Service may be
            located in nearly any location around the world, may be
            communicating with Third Party Sites (as defined below) while using
            our Services, and may be limited by law or by an agreement with us
            about their use of information you share. However, this Privacy
            Policy only addresses our use of the information.We may share
            information with employees, contractors, agents, or consultants with
            a strict need-to-know under appropriate confidentiality obligations.
          </p>
          <p>
            We may share information with third parties which provide
            business-related functions on behalf of Hallelujah Gospel
            Sing-Along, including:
          </p>
          <p>
            • Our business partners, customers, suppliers, service providers,
            vendors, and sub- contractors for the performance of any contract we
            enter into or other dealings we have in the normal course of
            business with you or the company that you work for or the company
            that provides you access to our Services. Some examples of such
            business-related functions for which we may share information may
            include data hosting, analyzing data, providing marketing
            assistance, providing customer service and technical support,
            processing orders, sending communications to you on our behalf or at
            our direction, user engagement and onboarding, soliciting feedback
            regarding the Services, facilitating invoicing and/or payments,
            andothers in our reasonable discretion;
          </p>
          <p>
            • Our auditors, legal advisors and other professional advisors or
            service providers;
          </p>
          <p>
            • We may share information with our authorized distributors and
            resellers if you have purchased your license to our Services through
            a party other than Hallelujah Gospel to enable those distributors
            and resellers to fulfill their business obligations to you; and
          </p>
          <p>
            • We may share information obtained via our Services with analytics
            and search engine providers that assist us in the improvement and
            optimization of our website and subject to the cookie section of
            this Privacy Policy.
          </p>
          <p>
            When we employ another company to perform services of this nature,
            we only provide such company the right to use such information that
            is reasonably necessary to perform their specific function.
          </p>
          <p>
            We may share information with other third parties, including when
            you provide consent for a specific situation. If Hallelujah Gospel
            Sing-Along intends on sharing any information in a manner other than
            as described above using any personal data in any manner that is not
            compatible with this Privacy Policy, and we do not have a legal
            basis for sharing that information without your consent,you will be
            informed of such anticipated use and be given an opportunity to
            provide your consent for such use.
          </p>
          <p>
            We may share information with third parties if we reasonably believe
            that such action is necessary to:
          </p>
          <p>
            • comply with a legal obligation, regulation, or government request,
          </p>
          <p>• enforce our policies and agreements,</p>
          <p>
            • protect and defend the rights, property, and safety of Hallelujah
            Gospel Sing-Along, our customers, users, resellers, or others, or
          </p>
          <p>
            • act in urgent circumstances to protect the personal safety of
            users of our Services or the public.
          </p>
          <p>
            This includes exchanging information with other companies and
            organizations for the purposes of fraud protection and credit risk
            reduction and to prevent cybercrime.
          </p>
          <p>
            We may share information with our subsidiaries and corporate
            affiliates who support our processing of personal data under this
            Privacy Policy.
          </p>
          <p>
            In the event of a corporate sale, acquisition, merger,
            reorganization, dissolution or anything similar, information may be
            part of the transferred assets. You will be notified via email
            and/or other means with any news of a transaction and any choices
            you may have regarding your information.
          </p>
          <p>
            For purposes of the California Consumer Privacy Act, we do not
            “sell” your personal information.
          </p>
          <p>
            <strong>How We Transfer Information</strong>
          </p>
          <p>
            We provide our Services primarily from the United States, where we
            are based. Your use of our Services requires the movement of
            information to our locations and the locations of our third-party
            service providers. Your use of our Services may require that our
            international affiliates and subsidiaries in countriesincluding, but
            not limited to, Australia, India, Netherlands, Singapore, and United
            Kingdom have access to the information.
          </p>
          <p>If you are European Union resident:</p>
          <p>
            Your information may be transferred to, and stored at, a destination
            outside the European Economic Area ("EEA") that may not be subject
            to equivalent data protection law. It may be processed by staff
            situated outside the EEA who work for us or for one of our
            suppliers.
          </p>
          <p>We may transfer your personal information outside the EEA:</p>
          <p>• to store it</p>
          <p>
            • to enable us to provide services to and fulfill our contract with
            you or the company your work for or the company that provides you
            access to our Services. This includes order fulfillment, processing
            of payment details, and the provision of support services.
          </p>
          <p>• where we are legally required to do so</p>
          <p>
            • to facilitate the operation of our group of businesses, where it
            is in our legitimate interests and we have concluded these are not
            overridden by your rights
          </p>
          <p>• where we have your consent to do so</p>
          <p>
            When we share information about you within Hallelujah Gospel
            Sing-Along and with entities in countries with local laws which may
            differ from yours, we safeguard the transfer of information we
            collect from the European Economic Area and Switzerland to the
            United States. We no longer participate in the EU-U.S Privacy
            Shield, but we are safeguarding transfers through other means such
            as standard contractual data protection clauses, which have been
            approved by the European Commission and Switzerland. In some cases
            we may use other appropriate legal mechanisms to safeguard the
            transfer.
          </p>
          <p>
            <strong>
              {" "}
              Additional Information Regarding Processing Information of Our
              Customers
            </strong>
          </p>
          <p>
            Where we provide access to our Services to you under contract with
            an organization (for example, your employer), or if you use an email
            addressprovided by an organization to access our Services, that
            organization may act as the controller of the information. Your use
            of our Services may be subject to that organization's policies. Each
            organization may appoint administrative users of our Services. An
            administrator may have the ability to access, modify, and/or delete
            certain information that you have provided, give information to
            Third Party Sites,and restrict your access to our Services and
            information in whole or in part.
          </p>
          <p>
            In this situation, Hallelujah Gospel Sing-Along is the processor,
            rather than the controller, of your information. Where we are the
            processor, we do not control why or how your information is used,
            and you will need to contact your relevant controller (e.g. your
            employer and/or the company which provides you access to our
            Services) to find out about your data protection rights and
            responsibilities. All questions about your organization’s policies
            and administrative user access rights should be directed to your
            organization.
          </p>
          <p>
            <strong>Privacy and Recordings</strong>
          </p>
          <p>
            Video and audio from the video conferencing services may be recorded
            and saved via our Services by the host account for the Service in
            which you are participating. We do not and cannot control whether
            your use of our Services is being video-recorded or audio-recorded,
            via the Services or a third-party technology. If you do not want to
            be recorded during your use of our Services, you may inform your
            host of that decision and/or decline to use our Services.
          </p>
          <p>
            <strong>How You Can Access and Control Information</strong>
          </p>
          <p>
            In accordance with applicable law, your ability to control the
            information may include the right to:
          </p>
          <p>• Request a record of information you have provided</p>
          <p>• Request that information be corrected or removed</p>
          <p>
            • Request that we restrict the processing of your personal data
            (while we verify or investigate your concerns with this information,
            for example)
          </p>
          <p>
            • Request that, to the extent reasonably possible, information be
            provided in a structured and commonly used electronic format for
            portability and transfer
          </p>
          <p>
            • Object to and/or opt-out of our use of your information, including
            the right to object to marketing or advertising, in whole or in
            part, subject to certain exceptions prescribed by law.
          </p>
          <p>
            You can exercise many of these abilities directly through the
            Services on your Hallelujah Gospel Sing-Along profile page. You may
            opt out of non-transactional emails through the email notification
            center. For any issue that cannot be handled on a self-service
            basis, please reach out to our support team for assistance. You can
            also exercise the rights listed above at any time by contacting
          </p>
          <p>
            us at{" "}
            <strong>
              <em>info@hgsingalong.com</em>
            </strong>
            . In some instances, if you access our Services under contract with
            an organization, we may be required to direct your inquiries to an
            administrative user.
          </p>
          <p>
            If you no longer want to use our Services, you may choose not to
            access our website or video-conferencing services at any time and,
            as applicable, you will need to reach out to our support team or an
            administrative user to deactivate your account. If you are an
            organizational user of our Services, you will need to arrange for an
            administrative user to remove personal data associated with your
            account. Otherwise, personal data will be deleted or obfuscated
            within 180 days of the deactivation of your account.
          </p>
          <p>
            You may contact our support team to ask us to stop accessing,
            storing, using and otherwise processing your information where our
            legal basis for doing so relies on your consent or is otherwise
            objectionable by law. Where you gave us consent to use your
            information for a limited purpose, you can contact our support team
            to withdraw that consent, but this will not affect any processing
            already occurred.
          </p>
          <p>
            Where you withdraw your consent, but we are also using your
            information under a different legal basis (for example, fulfilling a
            contract with you), we may continue to process your information,
            subject to your rights to access and control your information.
            Please note that we may need to retain certain information to
            fulfill legal obligations, in accordance with our record retention
            practices, or tocomplete transactions.
          </p>
          <p>
            <strong>Additional Notes</strong>
          </p>
          <p>
            Hallelujah Gospel Sing-Along does not knowingly collect information
            from children under the age of 13, and our Services are not intended
            for use by minors(as defined in your relevant jurisdiction). By
            using our Services, you confirm to us that you are not under the age
            of 13 and/or not a minor.If you are a minor, please do not submit
            any information through our Services.
          </p>
          <p>
            We encourage parents and legal guardians to monitor their children’s
            Internet usage and to help enforce our Privacy Policy by instructing
            their children never to provide information using our Services
            without permission. If you have reason to believe that a minor has
            provided information to Hallelujah Gospel Sing-Along, please contact
            us and we will endeavor to delete that information from our
            databases.
          </p>
          <p>
            The Services may contain links, add-ins applications, social media
            widgets or other access points that will take you and your
            information to other websites and resources on the Internet that are
            not operated or controlled by Hallelujah Gospel (“Third Party
            Sites”). The policies and procedures we described here do not apply
            to the Third Party Sites. We have no control over, are not
            responsible for, and do not endorse the information practices of
            such third party websites and resources. Your access to and use of
            such third party websites or resources, including your use of any
            content, information, data, advertising, products, or other
            materials on or available through them, is solely at your own risk
            and is subject to the terms and conditions of use and privacy
            policies applicable to such Third Party Sites and related resources.
          </p>
          <p>
            Once you choose to be directed to a Third Party Site, you should
            read the applicable privacy statement before sharing any personal or
            other information. If you object to information about you being
            shared with a Third Party Site, please disable any applications or
            plug-ins which communicate with the Third Party Site or contact your
            administrator to do so.
          </p>
          <p>
            <strong>Changes to this Policy</strong>
          </p>
          <p>
            Our Services may change from time to time. As a result, it may be
            necessary for Hallelujah Gospel Sing-Along to make changes to this
            Privacy Policy. Hallelujah Gospel Sing-Along reserves the right to
            update or modify this Privacy Policy at any time and endeavor to
            give you the opportunity to review the revised Privacy Policy before
            you choose to continue using our Services.Please review this Privacy
            Policy periodically. Your continued use of our Services after any
            changes or revisions to this Privacy Policy indicates that you have
            read and understood the terms of the revised version.
          </p>
          <p>
            This Policy shall not apply to any unsolicited information you
            provide to Hallelujah Gospel Sing-Along through this website or
            otherwise through our Services. This includes, but is not limited
            to, any ideas for new products or modifications to existing
            products. All such unsolicited information shall be deemed to be
            non-confidential. Hallelujah Gospel Sing-Along shall be free to
            reproduce, use, disclose, distribute and exploit such unsolicited
            information without limitation or attribution. However, if such
            unsolicited information also includes personal data, we will also
            determine whether we have a lawful basis for the collection and use
            of that information prior to doing so.
          </p>
          <p>
            <strong>How to Submit a Complaint/Dispute Resolution</strong>
          </p>
          <p>
            If you have a complaint about Hallelujah Gospel Sing-Along’s privacy
            practices, please write to us at the address below. We will take
            reasonable endeavors to work with you to attempt to resolve your
            complaint.
          </p>
          <p>
            If you are a European Union resident, and you have a request or
            concern about how we handle your personal information, you can also
            contact your local data protection authorities. A full list can be
            found on the European Commission website.
          </p>
          <p>
            <strong>How to Contact Hallelujah Gospel Sing-Along</strong>
          </p>
          <p>
            If you have any questions about our Privacy Policy or the
            information practices of our Services, please contact Hallelujah
            Gospel Globally Attn: Sing-Along Privacy Team, at our business
            address: 231 Market Place, 195 San Ramon, CA 94583 or by email to{" "}
            <strong>
              <em>info@hgsingalong.com.&nbsp;</em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</>



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
              <polygon points="2560 0 2560 100 0 100" />
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