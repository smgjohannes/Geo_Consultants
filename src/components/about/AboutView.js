import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBookAtlas,
  faEye,
  faFistRaised,
  faShieldAlt,
  faLightbulb,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import useToggle from './AboutFunctions';
import './AboutView.css';
import katangaImage from '../../assets/images/ceo.png';
import GideonImage from '../../assets/images/ceo1.jpeg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function AboutView() {
  const [accordin1Visible, toggleAccordin1] = useToggle(false);
  const [accordin2Visible, toggleAccordin2] = useToggle(false);
  const [accordin3Visible, toggleAccordin3] = useToggle(false);
  const [accordin4Visible, toggleAccordin4] = useToggle(false);
  const [accordin5Visible, toggleAccordin5] = useToggle(false);
  const [accordin6Visible, toggleAccordin6] = useToggle(false);
  const [accordin7Visible, toggleAccordin7] = useToggle(false);
  const [accordin8Visible, toggleAccordin8] = useToggle(false);

  return (
    <>
      <div className='Aboutsection1Pallarax'>
        <div className='About_sectionOne'>
          <h1>About us</h1>
          <h3>
            Rare Metals Explorers (RME) cc is a Namibian registered close
            corporation, and it is one of the trusted consultancies for mineral
            exploration (green field) and mining (brown fields) in the country.
            It was incorporated during the fall of year 2013 and has gained a
            wealth of experience over the years, exploring for a variety of
            commodities ranging from base and rare metals, industrial minerals,
            dimension stones, as well as precious and semi-precious stones.{' '}
          </h3>
          <div className='AboutUsMain'>
            <div className='AboutUsMain__item1'>
              <p>
                Our passionate and proficient team of geologists have managed
                both private and state funded projects and RME proudly handled
                the geological aspects of the Lofdal REE deposit from 2013 to
                October 2017.
              </p>
              <p>
                Like the name implies we are specialists for green technology
                metals such REEs and Lithium.
              </p>
            </div>
            <div className='AboutUsMain__item2'>
              <h3 className='Corporate_Resume__h3'>Corporate Resume</h3>
              <table className='Corporate_Resume__table'>
                <tbody>
                  <tr>
                    <td>
                      <strong>Name:</strong>
                    </td>
                    <td>Rare Metals Explorers:</td>
                    <td>
                      {' '}
                      <strong>Type:</strong>
                    </td>
                    <td>Close Corporation</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Reg. Year:</strong>
                    </td>
                    <td>December, 2013</td>
                    <td>
                      <strong>Reg. No:</strong>
                    </td>
                    <td>to be Added..</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Ministry:</strong>
                    </td>
                    <td>
                      <h6>Ministry of Workers and Transport</h6>
                    </td>
                    <td>
                      <h4>to be added..</h4>
                    </td>
                    <td>
                      <h4>to be added..</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Experience:</strong>
                    </td>
                    <td>
                      <h4>10 Years</h4>
                    </td>
                    <td>
                      <strong>Target:</strong>
                    </td>
                    <td>Metals and Water Resource</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='Aboutsection1_main__container'>
            <div className='Aboutsection1_main__container--item1'>
              <div className='sec1_item1__header'>
                <FontAwesomeIcon
                  icon={faBookAtlas}
                  style={{ fontSize: '30px' }}
                />
                <hr></hr>
                <h2>Mission</h2>
              </div>
              <div className='sec1_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
            <div className='Aboutsection1_main__container--item2'>
              <div className='sec1_item1__header'>
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '30px' }} />
                <hr></hr>
                <h2>Vision</h2>
              </div>
              <div className='sec1_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
            <div className='Aboutsection1_main__container--item3'>
              <div className='sec1_item1__header'>
                <FontAwesomeIcon
                  icon={faFistRaised}
                  style={{ fontSize: '30px' }}
                />
                <hr></hr>
                <h2>Achievements</h2>
              </div>
              <div className='sec1_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className='Aboutsection2Pallarax'>
        <div className='About_section2'>
          <h2> Our Team</h2>
          <div className='About_section2__item1'>
            <div className='About_section2__item2--1'>
              <img
                src={katangaImage}
                alt='imge'
                style={{
                  height: '300px',
                  width: '260px',
                }}
              />
            </div>
            <div className='About_section2__item2--2'>
              <div className='About_management__header'>
                {' '}
                <h2>Bonifacius K Katanga: [Member] </h2>
              </div>
              <div className='About_management__body'>
                <div className='About_management__body--academic'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin1}>
                    {accordin1Visible ? 'Close Academic' : 'Open Academic'}
                  </button>

                  {/* Section 1 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin1Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>B.Sc. Chemistry & B.Sc. Geology, ArcGIS cert.</p>
                  </div>
                </div>
                {/* Accordion for Experience */}
                <div className='About_management__body--experience'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin2}>
                    {accordin2Visible ? 'Close Experience' : 'Open Experience'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin2Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>
                      <strong>Years:</strong> 12 Years.
                    </p>
                    <p>
                      <strong>Commodities:</strong> Base & Rare Metals (REE,
                      Lithium), Industrial Minerals, Dimension stones,
                      semi-precious & Precious Stones.{' '}
                    </p>
                  </div>
                </div>
                {/* Accordion for SUCCESSFUL PROJECTS */}
                <div className='About_management__body--projects'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin3}>
                    {accordin3Visible
                      ? 'Close SUCCESSFUL PROJECTS'
                      : 'Open SUCCESSFUL PROJECTS'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin3Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>Lofdal HREE from discovery to PEA.</p>
                    <p>
                      WIA Gold, Navachab Gold Mine, Uis Tin Mine, Epembe Nb, Ta
                      deposit, Ondoto/ Swartbooisdrift LREE (discovery),
                      Teufelskuppe LREE, Ongombo Au, Cu, & Ag deposit, Witvlei
                      Cu, Au, & Ag, DOF Cobalt.{' '}
                    </p>
                  </div>
                </div>
                {/* Accordion for History */}
                <div className='About_management__body--projects'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin7}>
                    {accordin7Visible ? 'Close History' : 'Open History'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin7Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>
                      Mr Katanga Bonifacius Katanga began his career as an
                      exploration in 2007, a year he participated in mapping of
                      the Otjozondu manganese seam, geochemical soil sampling at
                      Omitiomire copper deposit, geochemical soil sampling at
                      Berg Aukas mine with BGR, mapping of Rehoboth gold/copper
                      occurrences and as well as Klein Aub copper while a
                      student at the University of Namibia.{' '}
                    </p>
                    <p>
                      In 2010, he joined the Lofdal REE as a junior geologist
                      and participated in the many discoveries of mineralized
                      zones such as LREE rich area 6, Area 4 HREE deposit, Area
                      5 and more. Mr Katanga progressed from junior geologist to
                      a role of a project geologist and gained a wealth of
                      experience in exploration programme design and execution,
                      targeting, mapping, training of junior personnel, project
                      management and oversight, performance of many mineral
                      exploration activities lead the entire field exploration
                      programme under Rare Metals Explorers cc (RME) from 2014
                      to 2017.
                    </p>
                    <p>
                      Year 2018 saw him involved with the DOF Cobalt deposit as
                      a senior exploration geologist working under Gecko
                      Exploration Pty Ltd before moving on to become an
                      independent consultant for Shali Group Pty Ltd, WIA Gold
                      Pty Ltd and Navachab QKR Gold mine.
                    </p>
                    <p>
                      He joined AfriTin Mining Namibia Pty Ltd (now Andrada
                      Mining Pty Ltd) as an exploration geologist for the
                      company in the fall of 2021 to manage and supervise the
                      entire resource drilling programme targeting Tin and
                      Lithium at Uis Tin Mine.
                    </p>
                    <p>
                      Mr Katanga currently offers his expertise to several
                      exploration companies through both RME and as an
                      independent consultant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second member */}
          <hr className='About_hr_special' />
          <div className='About_section2__item1'>
            <div className='About_section2__item2--1'>
              <img
                src={GideonImage}
                alt='imge'
                style={{
                  height: '300px',
                  width: '260px',
                  border: '4px red solid',
                }}
              />
            </div>
            <div className='About_section2__item2--2'>
              <div className='About_management__header'>
                {' '}
                <h2>Shishasha M Johannes : [CEO] </h2>
              </div>
              <div className='About_management__body'>
                <div className='About_management__body--academic'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin4}>
                    {accordin4Visible ? 'Close Academic' : 'Open Academic'}
                  </button>

                  {/* Section 1 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin4Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>B.Sc. Chemistry & B.Sc. Geology, ArcGIS cert.</p>
                  </div>
                </div>
                {/* Accordion for Experience */}
                <div className='About_management__body--experience'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin5}>
                    {accordin5Visible ? 'Close Experience' : 'Open Experience'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin5Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>
                      <strong>Years:</strong> 12 Years.
                    </p>
                    <p>
                      <strong>Commodities:</strong> Base & Rare Metals (REE,
                      Lithium), Industrial Minerals, Dimension stones,
                      semi-precious & Precious Stones.{' '}
                    </p>
                  </div>
                </div>
                {/* Accordion for SUCCESSFUL PROJECTS */}
                <div className='About_management__body--projects'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin6}>
                    {accordin6Visible
                      ? 'Close SUCCESSFUL PROJECTS'
                      : 'Open SUCCESSFUL PROJECTS'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin6Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>Lofdal HREE from discovery to PEA.</p>
                    <p>
                      WIA Gold, Navachab Gold Mine, Uis Tin Mine, Epembe Nb, Ta
                      deposit, Ondoto/ Swartbooisdrift LREE (discovery),
                      Teufelskuppe LREE, Ongombo Au, Cu, & Ag deposit, Witvlei
                      Cu, Au, & Ag, DOF Cobalt.{' '}
                    </p>
                  </div>
                </div>
                {/* Accordion for History */}
                <div className='About_management__body--projects'>
                  <button
                    className='w3-button w3-block w3-left-align AccordinButton'
                    onClick={toggleAccordin8}>
                    {accordin8Visible ? 'Close History' : 'Open History'}
                  </button>

                  {/* Section 2 */}
                  <div
                    id='experienceAccordin'
                    className={
                      accordin8Visible
                        ? 'w3-container w3-show'
                        : 'w3-container w3-hide'
                    }>
                    <p>
                      Mr Katanga Bonifacius Katanga began his career as an
                      exploration in 2007, a year he participated in mapping of
                      the Otjozondu manganese seam, geochemical soil sampling at
                      Omitiomire copper deposit, geochemical soil sampling at
                      Berg Aukas mine with BGR, mapping of Rehoboth gold/copper
                      occurrences and as well as Klein Aub copper while a
                      student at the University of Namibia.{' '}
                    </p>
                    <p>
                      In 2010, he joined the Lofdal REE as a junior geologist
                      and participated in the many discoveries of mineralized
                      zones such as LREE rich area 6, Area 4 HREE deposit, Area
                      5 and more. Mr Katanga progressed from junior geologist to
                      a role of a project geologist and gained a wealth of
                      experience in exploration programme design and execution,
                      targeting, mapping, training of junior personnel, project
                      management and oversight, performance of many mineral
                      exploration activities lead the entire field exploration
                      programme under Rare Metals Explorers cc (RME) from 2014
                      to 2017.
                    </p>
                    <p>
                      Year 2018 saw him involved with the DOF Cobalt deposit as
                      a senior exploration geologist working under Gecko
                      Exploration Pty Ltd before moving on to become an
                      independent consultant for Shali Group Pty Ltd, WIA Gold
                      Pty Ltd and Navachab QKR Gold mine.
                    </p>
                    <p>
                      He joined AfriTin Mining Namibia Pty Ltd (now Andrada
                      Mining Pty Ltd) as an exploration geologist for the
                      company in the fall of 2021 to manage and supervise the
                      entire resource drilling programme targeting Tin and
                      Lithium at Uis Tin Mine.
                    </p>
                    <p>
                      Mr Katanga currently offers his expertise to several
                      exploration companies through both RME and as an
                      independent consultant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='About_section2__item2'></div>
          <div className='About_section2__item3'></div>
        </div>
      </div>
      {/* Section 2 ends */}

      {/* Section 3 starts */}
      <div className='Aboutsection3'>
        <h2>We are guided by the following core values:</h2>

        <div className='Aboutsection3_Main__container'>
          <div className='Aboutsection3_Main__container--item1'>
            <div className='item1_main__container--item1'>
              <FontAwesomeIcon
                icon={faShieldAlt}
                style={{ fontSize: '70px' }}
              />
            </div>
            <div className='item1_main__container--item2'>
              <h3>Integrity:</h3>
              <h4>
                We conduct our business with honesty, transparency, and ethical
                integrity.
              </h4>
            </div>
          </div>
          <div className='Aboutsection3_Main__container--item2'>
            <div className='item2_main__container--item1'>
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{ fontSize: '70px' }}
              />
            </div>
            <div className='item2_main__container--item2'>
              <h3>Innovation:</h3>
              <h4>
                We embrace innovation and continually seek new technologies and
                methodologies to improve our services.
              </h4>
            </div>
          </div>
          <div className='Aboutsection3_Main__container--item3'>
            <div className='item3_main__container--item1'>
              <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '70px' }} />
            </div>
            <div className='item3_main__container--item2'>
              <h3>Sustainability:</h3>
              <h4>
                We are committed to minimizing our environmental footprint and
                promoting sustainable mining practices.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 ends */}

      {/* Section 4 starts */}
      <div className='Aboutsection4'>
        <h2>Our Approach to Rare Metal Exploration:</h2>
        <div className='Aboutsection4_Main__container'>
          <div className='Aboutsection4_Main__container--item1'>
            <h3> Comprehensive Geological Surveys:</h3>
            <h4>
              {' '}
              We utilize advanced geological mapping techniques and geophysical
              surveys to identify promising rare metal deposits.
            </h4>
          </div>
          <div className='Aboutsection4_Main__container--item2'>
            <h3> Rigorous Resource Assessment:</h3>
            <h4>
              Our team employs sophisticated modeling and estimation methods to
              assess the quantity and quality of rare metal resources.
            </h4>
          </div>
          <div className='Aboutsection4_Main__container--item3'>
            <h3>Sustainable Practices:</h3>
            <h4>
              {' '}
              We prioritize environmental stewardship and community engagement
              throughout the exploration and development process.
            </h4>
          </div>
        </div>
      </div>
      {/* Section 4 Ends */}
      {/* testimonial section */}
      <div className='testimonial'>
        {' '}
        <h2>testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <figure className='snip1390'>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg'
                alt='profile-sample3'
                className='profile'
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item>
            <figure className='snip1390 hover'>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg'
                alt='profile-sample5'
                className='profile'
              />
              <figcaption>
                <h2>Gordon Norman</h2>
                <h4>Accountant</h4>
                <blockquote>
                  Wormwood : Calvin, how about you? Calvin : Hard to say ma'am.
                  I think my cerebellum has just fused.
                </blockquote>
              </figcaption>
            </figure>
          </Carousel.Item>
          <Carousel.Item>
            <figure className='snip1390'>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg'
                alt='profile-sample6'
                className='profile'
              />
              <figcaption>
                <h2>Sue Shei</h2>
                <h4>Public Relations</h4>
                <blockquote>
                  The strength to change what I can, the inability to accept
                  what I can't and the incapacity to tell the difference.
                </blockquote>
              </figcaption>
            </figure>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* testimonial section */}
    </>
  );
}

export default AboutView;
