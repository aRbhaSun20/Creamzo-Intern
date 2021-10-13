import React from "react";
import { Link } from "react-router-dom";
import style from "./style/TermStyle.module.css";
import { useState } from "react";

const TermsAndConditions = () => {
  const [state, setState] = useState(1);
  return (
    <React.Fragment>
      <div className={style.TermsAndConditionsContainer}>
        <div className={style.LeftTerms}>
          <h2 style={{ color: "gray", fontSize: "35px" }}>Creamzo</h2>

          <Link to="#" onClick={() => setState(1)}>
            <p style={{ marginTop: "25px" }}>Terms of service</p>
          </Link>
          <Link to="#" onClick={() => setState(2)}>
            <p>Privacy Policy & Cookies</p>
          </Link>
        </div>
        {state === 1 && (
          <div className={style.RightTerms}>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "35px",
                padding: "30px",
              }}
            >
              TERMS OF SERVICE
            </h1>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Introduction</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Welcome to Creamzo (“Company”, “we”, “our”, “us”)! These Terms
                  of Service (“Terms”, “Terms of Service”) govern your use of
                  our website located at Creamzo.com (together or individually
                  “Service”) operated by Creamzo. Our Privacy Policy also
                  governs your use of our Service and explains how we collect,
                  safeguard and disclose information that results from your use
                  of our web pages. Your agreement with us includes these Terms
                  and our Privacy Policy (“Agreements”). You acknowledge that
                  you have read and understood Agreements, and agree to be bound
                  of them. If you do not agree with (or cannot comply with)
                  Agreements, then you may not use the Service, but please let
                  us know by emailing at creamzo1995@gmail.com so we can try to
                  find a solution. These Terms apply to all visitors, users and
                  others who wish to access or use Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Communications</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  By using our Service, you agree to subscribe to newsletters,
                  marketing or promotional materials and other information we
                  may send. However, you may opt out of receiving any, or all,
                  of these communications from us by following the unsubscribe
                  link or by emailing at creamzo1995@gmail.com.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Contests, Sweepstakes and Promotions</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Any contests, sweepstakes or other promotions (collectively,
                  “Promotions”) made available through Service may be governed
                  by rules that are separate from these Terms of Service. If you
                  participate in any Promotions, please review the applicable
                  rules as well as our Privacy Policy. If the rules for a
                  Promotion conflict with these Terms of Service, Promotion
                  rules will apply.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Content</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Our Service allows you to post, link, store, share and
                  otherwise make available certain information, text, graphics,
                  videos, or other material (“Content”). You are responsible for
                  Content that you post on or through Service, including its
                  legality, reliability, and appropriateness. By posting Content
                  on or through Service, You represent and warrant that: (i)
                  Content is yours (you own it) and/or you have the right to use
                  it and the right to grant us the rights and license as
                  provided in these Terms, and (ii) that the posting of your
                  Content on or through Service does not violate the privacy
                  rights, publicity rights, copyrights, contract rights or any
                  other rights of any person or entity. We reserve the right to
                  terminate the account of anyone found to be infringing on a
                  copyright. You retain any and all of your rights to any
                  Content you submit, post or display on or through Service and
                  you are responsible for protecting those rights. We take no
                  responsibility and assume no liability for Content you or any
                  third party posts on or through Service. However, by posting
                  Content using Service you grant us the right and license to
                  use, modify, publicly perform, publicly display, reproduce,
                  and distribute such Content on and through Service. You agree
                  that this license includes the right for us to make your
                  Content available to other users of Service, who may also use
                  your Content subject to these Terms. Creamzo has the right but
                  not the obligation to monitor and edit all Content provided by
                  users. In addition, Content found on or through this Service
                  are the property of Creamzo or used with permission. You may
                  not distribute, modify, transmit, reuse, download, repost,
                  copy, or use said Content, whether in whole or in part, for
                  commercial purposes or for personal gain, without express
                  advance written permission from us.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Prohibited Uses</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  You may use Service only for lawful purposes and in accordance
                  with Terms. You agree not to use Service:
                </p>
                <ol style={{ marginLeft: "12px" }}>
                  <li>
                    {" "}
                    In any way that violates any applicable national or
                    international law or regulation.
                  </li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to
                    exploit or harm minors in any way by exposing them to
                    inappropriate content or otherwise.
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material, including any “junk mail”, “chain
                    letter,” “spam,” or any other similar solicitation.
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Company, a Company
                    employee, another user, or any other person or entity.
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in
                    any way is illegal, threatening, fraudulent, or harmful, or
                    in connection with any unlawful, illegal, fraudulent, or
                    harmful purpose or activity.
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits
                    anyone’s use or enjoyment of Service, or which, as
                    determined by us, may harm or offend Company or users of
                    Service or expose them to liability.
                  </li>
                </ol>
                <p>Additionally, you agree not to:</p>
                <ol style={{ marginLeft: "12px" }}>
                  <li>
                    Use Service in any manner that could disable, overburden,
                    damage, or impair Service or interfere with any other
                    party’s use of Service, including their ability to engage in
                    real time activities through Service.
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process,
                    or means to access Service for any purpose, including
                    monitoring or copying any of the material on Service.
                  </li>

                  <li>
                    Use any manual process to monitor or copy any of the
                    material on Service or for any other unauthorized purpose
                    without our prior written consent.
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with
                    the proper working of Service.
                  </li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or
                    other material which is malicious or technologically
                    harmful.
                  </li>
                  <li>
                    {" "}
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of Service, the server on which
                    Service is stored, or any server, computer, or database
                    connected to Service.
                  </li>
                  <li>
                    Attack Service via a denial-of-service attack or a
                    distributed denial-of-service attack.
                  </li>
                  <li>
                    Take any action that may damage or falsify Company rating.
                  </li>
                  <li>
                    Otherwise attempt to interfere with the proper working of
                    Service.
                  </li>
                </ol>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Analytics</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We may use third-party Service Providers to monitor and
                  analyze the use of our Service
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>No Use By Minors</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Service is intended only for access and use by individuals at
                  least eighteen (18) years old. By accessing or using Service,
                  you warrant and represent that you are at least eighteen (18)
                  years of age and with the full authority, right, and capacity
                  to enter into this agreement and abide by all of the terms and
                  conditions of Terms. If you are not at least eighteen (18)
                  years old, you are prohibited from both the access and usage
                  of Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Accounts</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  When you create an account with us, you guarantee that you are
                  above the age of 18, and that the information you provide us
                  is accurate, complete, and current at all times. Inaccurate,
                  incomplete, or obsolete information may result in the
                  immediate termination of your account on Service. You are
                  responsible for maintaining the confidentiality of your
                  account and password, including but not limited to the
                  restriction of access to your computer and/or account. You
                  agree to accept responsibility for any and all activities or
                  actions that occur under your account and/or password, whether
                  your password is with our Service or a third-party service.
                  You must notify us immediately upon becoming aware of any
                  breach of security or unauthorized use of your account. You
                  may not use as a username the name of another person or entity
                  or that is not lawfully available for use, a name or trademark
                  that is subject to any rights of another person or entity
                  other than you, without appropriate authorization. You may not
                  use as a username any name that is offensive, vulgar or
                  obscene. We reserve the right to refuse service, terminate
                  accounts, remove or edit content, or cancel orders in our sole
                  discretion.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Intellectual Property</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Service and its original content (excluding Content provided
                  by users), features and functionality are and will remain the
                  exclusive property of Creamzo and its licensors. Service is
                  protected by copyright, trademark, and other laws of and
                  foreign countries. Our trademarks may not be used in
                  connection with any product or service without the prior
                  written consent of Creamzo.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Copyright Policy</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We respect the intellectual property rights of others. It is
                  our policy to respond to any claim that Content posted on
                  Service infringes on the copyright or other intellectual
                  property rights (“Infringement”) of any person or entity. If
                  you are a copyright owner, or authorized on behalf of one, and
                  you believe that the copyrighted work has been copied in a way
                  that constitutes copyright infringement, please submit your
                  claim via email to creamzo1995@gmail.com, with the subject
                  line: “Copyright Infringement” and include in your claim a
                  detailed description of the alleged Infringement as detailed
                  below, under “DMCA Notice and Procedure for Copyright
                  Infringement Claims” You may be held accountable for damages
                  (including costs and attorneys’ fees) for misrepresentation or
                  bad-faith claims on the infringement of any Content found on
                  and/or through Service on your copyright.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>
                  DMCA Notice and Procedure for Copyright Infringement Claims
                </h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  You may submit a notification pursuant to the Digital
                  Millennium Copyright Act (DMCA) by providing our Copyright
                  Agent with the following information in writing (see 17 U.S.C
                  512(c)(3) for further detail):
                </p>
                <ol style={{ marginLeft: "12px" }}>
                  <li>
                    {" "}
                    an electronic or physical signature of the person authorized
                    to act on behalf of the owner of the copyright’s interest;
                  </li>
                  <li>
                    {" "}
                    a description of the copyrighted work that you claim has
                    been infringed, including the URL (i.e., web page address)
                    of the location where the copyrighted work exists or a copy
                    of the copyrighted work;
                  </li>
                  <li>
                    {" "}
                    identification of the URL or other specific location on
                    Service where the material that you claim is infringing is
                    located;
                  </li>
                  <li>your address, telephone number, and email address;</li>
                  <li>
                    a statement by you that you have a good faith belief that
                    the disputed use is not authorized by the copyright owner,
                    its agent, or the law;
                  </li>
                  <li>
                    a statement by you, made under penalty of perjury, that the
                    above information in your notice is accurate and that you
                    are the copyright owner or authorized to act on the
                    copyright owner’s behalf.
                  </li>
                </ol>
                <p>
                  You can contact our Copyright Agent via email at
                  creamzo1995@gmail.com.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Error Reporting and Feedback</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  You may provide us either directly at creamzo1995@gmail.com or
                  via third party sites and tools with information and feedback
                  concerning errors, suggestions for improvements, ideas,
                  problems, complaints, and other matters related to our Service
                  (“Feedback”). You acknowledge and agree that: (i) you shall
                  not retain, acquire or assert any intellectual property right
                  or other right, title or interest in or to the Feedback; (ii)
                  Company may have development ideas similar to the Feedback;
                  (iii) Feedback does not contain confidential information or
                  proprietary information from you or any third party; and (iv)
                  Company is not under any obligation of confidentiality with
                  respect to the Feedback. In the event the transfer of the
                  ownership to the Feedback is not possible due to applicable
                  mandatory laws, you grant Company and its affiliates an
                  exclusive, transferable, irrevocable, free-of-charge,
                  sub-licensable, unlimited and perpetual right to use
                  (including copy, modify, create derivative works, publish,
                  distribute and commercialize) Feedback in any manner and for
                  any purpose.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Links To Other Web Sites</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  Our Service may contain links to third party web sites or
                  services that are not owned or controlled by Creamzo. Creamzo
                  has no control over, and assumes no responsibility for the
                  content, privacy policies, or practices of any third party web
                  sites or services. We do not warrant the offerings of any of
                  these entities/individuals or their websites. For example, the
                  outlined Terms of Use have been created using PolicyMaker.io,
                  a free web application for generating high-quality legal
                  documents. PolicyMaker’s Terms and Conditions generator is an
                  easy-to-use free tool for creating an excellent standard Terms
                  of Service template for a website, blog, e-commerce store or
                  app. YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE
                  RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE
                  OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION
                  WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES
                  AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR
                  SERVICES. WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE
                  AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES
                  THAT YOU VISIT.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Disclaimer Of Warranty</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
                  AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE
                  OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR
                  MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE
                  OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS
                  OBTAINED FROM US IS AT YOUR SOLE RISK. NEITHER COMPANY NOR ANY
                  PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR
                  REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                  RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
                  SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR
                  ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE
                  SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED
                  THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE,
                  OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE
                  SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR
                  ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL
                  OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. COMPANY HEREBY
                  DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                  IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
                  ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND
                  FITNESS FOR PARTICULAR PURPOSE. THE FOREGOING DOES NOT AFFECT
                  ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER
                  APPLICABLE LAW.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Limitation Of Liability</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR
                  OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY
                  INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
                  DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL
                  RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR
                  AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR
                  ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT,
                  NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN
                  CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION
                  ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM
                  THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE,
                  OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF
                  COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH
                  DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY
                  FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT
                  PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO
                  CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.
                  SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                  PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR
                  LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Termination</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We may terminate or suspend your account and bar access to
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of Terms. If
                  you wish to terminate your account, you may simply discontinue
                  using Service. All provisions of Terms which by their nature
                  should survive termination shall survive termination,
                  including, without limitation, ownership provisions, warranty
                  disclaimers, indemnity and limitations of liability.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Governing Law</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  These Terms shall be governed and construed in accordance with
                  the laws of India, which governing law applies to agreement
                  without regard to its conflict of law provisions. Our failure
                  to enforce any right or provision of these Terms will not be
                  considered a waiver of those rights. If any provision of these
                  Terms is held to be invalid or unenforceable by a court, the
                  remaining provisions of these Terms will remain in effect.
                  These Terms constitute the entire agreement between us
                  regarding our Service and supersede and replace any prior
                  agreements we might have had between us regarding Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Changes To Service</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We reserve the right to withdraw or amend our Service, and any
                  service or material we provide via Service, in our sole
                  discretion without notice. We will not be liable if for any
                  reason all or any part of Service is unavailable at any time
                  or for any period. From time to time, we may restrict access
                  to some parts of Service, or the entire Service, to users,
                  including registered users.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Amendments To Terms</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We may amend Terms at any time by posting the amended terms on
                  this site. It is your responsibility to review these Terms
                  periodically. Your continued use of the Platform following the
                  posting of revised Terms means that you accept and agree to
                  the changes. You are expected to check this page frequently so
                  you are aware of any changes, as they are binding on you. By
                  continuing to access or use our Service after any revisions
                  become effective, you agree to be bound by the revised terms.
                  If you do not agree to the new terms, you are no longer
                  authorized to use Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Waiver And Severability</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  No waiver by Company of any term or condition set forth in
                  Terms shall be deemed a further or continuing waiver of such
                  term or condition or a waiver of any other term or condition,
                  and any failure of Company to assert a right or provision
                  under Terms shall not constitute a waiver of such right or
                  provision. If any provision of Terms is held by a court or
                  other tribunal of competent jurisdiction to be invalid,
                  illegal or unenforceable for any reason, such provision shall
                  be eliminated or limited to the minimum extent such that the
                  remaining provisions of Terms will continue in full force and
                  effect.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Acknowledgement</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU
                  ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND
                  AGREE TO BE BOUND BY THEM.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Contact Us</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU
                  ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND
                  AGREE TO BE BOUND BY THEM.
                </p>
              </div>
            </div>
          </div>
        )}
        {state === 2 && (
          <div className={style.RightTerms}>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "35px",
                padding: "30px",
              }}
            >
              PRIVACY POLICY AND SERVICES
            </h1>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Introduction</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                Welcome to Creamzo.
                Creamzo (“us”, “we”, or “our”) operates Creamzo.com (hereinafter referred to as “Service”).
                Our Privacy Policy governs your visit to Creamzo.com, and explains how we collect, 
                safeguard and disclose information that results from your use of our Service.
                We use your data to provide and improve Service. 
                By using Service, you agree to the collection and use of information in accordance with this policy. 
                Unless otherwise defined in this Privacy Policy, 
                the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy 
                constitutes your agreement with us (“agreement”).
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Definitions</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                SERVICE means the Creamzo.com website operated by Creamzo.
                </p>
                <p>
                PERSONAL DATA means data about a living individual who can be identified from those data 
                (or from those and other information either in our possession or likely to come into our possession).
                </p>
                <p>
                USAGE DATA is data collected automatically either 
                generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).
                </p>
                <p>
                COOKIES are small files stored on your device (computer or mobile device).
                </p>
                <p>
                DATA CONTROLLER means a natural or legal person who (either alone or jointly or in common with other persons) determines the 
                purposes for which and the manner in which any personal data are, or are to be, processed. 
                For the purpose of this Privacy Policy, we are a Data Controller of your data.
                </p>
                <p>
                DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person who processes the data on behalf of the Data Controller. 
                We may use the services of various Service Providers in order to process your data more effectively.
                </p>
                <p>
                DATA SUBJECT is any living individual who is the subject of Personal Data.
                </p>
                <p>
                THE USER is the individual using our Service. The User corresponds to the Data Subject, 
                who is the subject of Personal Data.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Information Collection and Use</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We collect several different types of information for 
                various purposes to provide and improve our Service to you.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Types of Data Collected</h2>
              </div>
              
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Personal Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                While using our Service, we may ask you to provide us with certain personally 
                identifiable information that can be used to contact or identify you (“Personal Data”). Personally 
                identifiable information may include, but is not limited to:
                </p>
                <ol style={{ marginLeft: "12px" }}>
                  <li>
                  Email address
                  </li>
                  <li>
                  First name and last name
                  </li>
                  <li>
                  Phone number
                  </li>
                  <li>
                  Address, Country, State, Province, ZIP/Postal code, City
                  </li>
                  <li>
                  Cookies and Usage Data
                  </li>
                </ol>
                <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and 
                  other information that may be of interest to you. 
                  You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Usage Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may also collect information that your browser sends whenever you visit our Service or 
                when you access Service by or through any device (“Usage Data”).
                </p>
                <p>
                This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), 
                browser type, browser version, the pages of our Service that you visit, the time and date of your visit, 
                the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p>
                When you access Service with a device, this Usage Data may include information such as the type of device you use, 
                your device unique ID, the IP address of your device, your device operating system, the type of 
                Internet browser you use, unique device identifiers and other diagnostic data
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Tracking Cookies Data</h2>
              </div>
              <div className={style.tos_content}>
              <p>
                We use cookies and similar tracking 
                technologies to track the activity on our Service and we hold certain information.
                </p>
                <p>
                  Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags 
                  and scripts to collect and track information and to improve and analyze our Service.
                </p>
                <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
                <p>Examples of Cookies we use:</p>
              </div>
            </div>
            
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>1.1.Session Cookies:</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  We use Session Cookies to operate our Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>1.2.Preference Cookies: </h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We use Preference Cookies to remember your preferences and various settings.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>1.3.Security Cookies:</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We use Security Cookies for security purposes.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>1.4.We use Security Cookies for security purposes.</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Other Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, 
                passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), 
                details of documents on education, qualification, professional training, employment agreements, NDA agreements, 
                information on bonuses and compensation, information on marital status, family members, social security (or other 
                taxpayer identification) number, office location and other data..
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Use of Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                Creamzo uses the collected data for various purposes:
                </p>
                <ol style={{ marginLeft: "12px" }}>
                  <li>
                  to provide and maintain our Service;
                  </li>
                  <li>
                  to notify you about changes to our Service;
                  </li>
                  <li>
                  to allow you to participate in interactive features of our Service when you choose to do so;
                  </li>
                  <li>
                  to provide customer support;
                  </li>
                  <li>
                  to gather analysis or valuable information so that we can improve our Service;
                  </li>
                  <li>
                  to monitor the usage of our Service;
                  </li>
                  <li>
                  to detect, prevent and address technical issues;
                  </li>
                  <li>
                  to fulfil any other purpose for which you provide it;
                  </li>
                  <li>
                  to carry out our obligations 
                  and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;
                  </li>
                  <li>
                  to provide you with notices about your account and/or subscription, 
                  including expiration and renewal notices, email-instructions, etc.;
                  </li>
                  <li>
                  to provide you with news, special offers and general information about other goods, services and events which we offer 
                  that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;
                  </li>
                  <li>
                  in any other way we may describe when you provide the information;
                  </li>
                  <li>
                  for any other purpose with your consent.
                  </li>
                </ol>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>
                Retention of Data
                </h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. 
                We will retain and use your Personal Data to the extent necessary to comply with our legal obligations 
                (for example, if we are required to retain your data to comply with 
                applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p>
                We will also retain Usage Data for internal analysis purposes. 
                Usage Data is generally retained for a shorter period, 
                except when this data is used to strengthen the security or to improve the functionality 
                of our Service, or we are legally obligated to retain this data for longer time periods.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Transfer of Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, 
                province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                </p>
                <p>
                If you are located outside India and 
                choose to provide information to us, please note that we transfer the data, 
                including Personal Data, to India and process it there. 
                </p>
                <p>
                Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. 
                </p>
                <p>
                Creamzo will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this 
                Privacy Policy and no transfer of your Personal Data will take place to an organisation 
                or a country unless there are adequate controls in place including the security of your data and other personal information.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Disclosure of Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may disclose personal information that we collect, or you provide:
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>0.1. Disclosure for Law Enforcement</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                Under certain circumstances, we may be required to disclose your Personal Data if required to do so by 
                law or in response to valid requests by public authorities.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>0.2. Business Transaction.</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                If we or our subsidiaries are 
                involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>0.3. Other cases. We may disclose your information also:</h2>
              </div>
              <div className={style.tos_content}>
              <ol style={{ marginLeft: "12px" }}>
                  <li>
                  to our subsidiaries and affiliates;
                  </li>
                  <li>
                  to contractors, service providers, and other third parties we use to support our business;
                  </li>
                  <li>
                  to fulfill the purpose for which you provide it;
                  </li>
                  <li>
                  for the purpose of including your company’s logo on our website;
                  </li>
                  <li>
                  for any other purpose disclosed by us when you provide the information;
                  </li>
                  <li>
                  with your consent in any other cases;
                  </li>
                  <li>
                  if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, 
                  our customers, or others.
                  </li>
                </ol>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Security of Data</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or 
                method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your 
                Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
              </div>
              <div className={style.tos_content}>
              <p>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.</p>
              <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
              <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at creamzo1995@gmail.com.</p>
              <p>In certain circumstances, you have the following data protection rights:</p>
              <p>0.1. the right to access, update or to delete the information we have on you;</p>
              <p>0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</p>
              <p>0.3. the right to object. You have the right to object to our processing of your Personal Data;</p>
              <p>0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;</p>
              <p>0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</p>
              <p>0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</p>
              <p>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
              <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>

              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</h2>
              </div>
              <div className={style.tos_content}>
              <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.</p> 
              <p>The law’s reach stretches well beyond California to require a person or company in the United States 
              (and conceivable the world) that operates websites collecting personally identifiable information from California 
              consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and 
              those individuals with whom it is being shared, and to comply with this policy.</p>
              <p>According to CalOPPA we agree to the following:</p>
              <p>0.1. users can visit our site anonymously;</p>
              <p>0.2. our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;</p>
              <p>0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;</p>
              <p>0.4. users are able to change their personal information by emailing us at creamzo1995@gmail.com.</p>
              <p>Our Policy on “Do Not Track” Signals:</p>
              <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser 
              mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites 
              that you do not want to be tracked.</p>
              <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>

              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                If you are a California resident, you are entitled to learn what data we collect about you, 
                ask to delete your data and not to sell (share) it. 
                To exercise your data protection rights, you can make certain requests and ask us:
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Amendments To Terms</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                  <strong>0.1. What personal information we have about you. If you make this request, we will return to you:</strong>

                  <p>0.0.1. The categories of personal information we have collected about you.</p>
                  <p>0.0.2. The categories of sources from which we collect your personal information.</p>
                  <p>0.0.3. The business or commercial purpose for collecting or selling your personal information.</p>
                  <p>0.0.4. The categories of third parties with whom we share personal information.</p>
                  <p>0.0.5. The specific pieces of personal information we have collected about you.</p>
                  <p>0.0.6. A list of categories of personal information that we have sold, 
                  along with the category of any other company we sold it to. 
                  If we have not sold your personal information, we will inform you of that fact.</p>
                  <p>0.0.7. A list of categories of personal information that we have disclosed for a business purpose, 
                  along with the category of any other company we shared it with.</p>
                  <p>Please note, you are entitled to ask us to provide you with this information up to two times in a 
                  rolling twelve-month period. When you make this request, the information provided may be limited to the personal 
                  information we collected about you in the previous 12 months.</p>

                </p>
                <p>
                  <strong>0.2. To delete your personal information. If you make this request, we will delete the personal information we hold 
                    about you as of the date of your request from our records and direct any service providers to do the same. 
                    In some cases, deletion may be accomplished through de-identification of the information. If you choose to 
                    delete your personal information, you may not be able to use certain functions that require your personal information to operate.</strong>
                </p>
                <p>
                  <strong>0.3. To stop selling your personal information. 
                    We don’t sell or rent your personal information to any third parties for any purpose. 
                    We do not sell your personal information for monetary consideration. However, under some circumstances, 
                    a transfer of personal information to a third party, or within our family of companies, 
                    without monetary consideration may be considered a “sale” under California law. 
                    You are the only owner of your Personal Data and can request disclosure or deletion at any time.</strong>
                </p>
                <p>If you submit a request to stop selling your personal information, we will stop making such transfers.</p>
                <p>Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, 
                  and you may not be able to participate in certain programs or membership services which require the usage of your personal 
                  information to function. But in no circumstances, we will discriminate against you for exercising your rights.</p>
                <p>To exercise your California data protection rights described above, please send your request(s) by email: creamzo1995@gmail.com.</p>
                <p>Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. 
                  To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.</p>

              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Service Providers</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may employ third party companies and individuals to facilitate our Service (“Service Providers”), 
                provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.
                </p>
                <p>
                These third parties have access to your Personal Data only to perform these tasks on our behalf 
                and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Analytics</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may use third-party Service Providers to monitor and analyze the use of our Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>CI/CD tools</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may use third-party Service Providers to automate the development process of our Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Behavioral Remarketing</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                We may use remarketing services to advertise on third party websites to you after you visited our Service. 
                We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.
                </p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Links to Other Sites</h2>
              </div>
              <div className={style.tos_content}>
              <p>Our Service may contain links to other sites that are not operated by us. 
              If you click a third party link, you will be directed to that third party’s site. 
              We strongly advise you to review the Privacy Policy of every site you visit.</p>
              <p>We have no control over and assume no responsibility for the content, 
              privacy policies or practices of any third party sites or services.</p>
              <p>For example, the outlined privacy policy has been made using PolicyMaker.io, 
              a free tool that helps create high-quality legal documents. 
              PolicyMaker’s privacy policy generator is an easy-to-use tool for creating a privacy policy for blog, website, 
              e-commerce store or mobile app.</p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Children’s Privacy</h2>
              </div>
              <div className={style.tos_content}>
              <p>Our Services are not intended for use by children under the age of 18 (“Child” or “Children”).</p>
              <p>We do not knowingly collect personally identifiable information from Children under 18. 
                If you become aware that a Child has provided us with Personal Data, please contact us. 
                If we become aware that we have collected Personal Data from Children without verification of parental consent, 
                we take steps to remove that information from our servers.</p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Changes to This Privacy Policy</h2>
              </div>
              <div className={style.tos_content}>
              <p>We may update our Privacy Policy from time to time. 
                We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p>We will let you know via email and/or a prominent notice on our Service, 
                prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.</p>
              <p>You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </div>
            </div>
            <div className={style.tos_inner}>
              <div className={style.tos_title}>
                <h2>Contact Us</h2>
              </div>
              <div className={style.tos_content}>
                <p>
                If you have any questions about this Privacy Policy, please contact us by email: creamzo1995@gmail.com.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default TermsAndConditions;
