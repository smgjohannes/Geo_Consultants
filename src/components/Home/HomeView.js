import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookAtlas,
  faEye,
  faFistRaised,
} from '@fortawesome/free-solid-svg-icons';
import './HomeStyles.css';
import serviceImage from '../../assets/images/IMG-20230721-WA0001.jpg';
import homeImage from '../../assets/images/IMG-20230721-WA0001.jpg';
function HomeView() {
  return (
    <>
      {/* sectionOne starts */}
      <div className='sectionOne'>
        <div className='sectionOne_innerDiv'>
          <h1>Unlocking the World's Rare Metal Treasures</h1>
          <div className='sectionOne_innerDiv__card'>
            <h3>
              Expert Geological Consulting for <br></br>Rare Metal Exploration
              and Development
            </h3>
            <div className='w3-card-4'>
              <button class='w3-button'>Read More...</button>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* sectionOne ends */}
      {/* sectiontwo starts */}
      <div className='sectiontwo_main'>
        <h2>Services Offered at glance</h2>
        <div className='sectiontwo_main__container'>
          <div className='sectiontwo_main__container--card1 w3-card-4'>
            <img
              src={serviceImage}
              alt='service'
              style={{ height: '150px', width: '100%', objectFit: 'cover' }}
            />
            <h3>Geological Surveys for Rare Metal Deposits:</h3>
            <p>
              Geological surveys for rare metal deposits involve comprehensive
              assessments of geological formations and structures to identify
              areas with concentrations of rare metals.
            </p>
            <div className='serviceReadMoreButton'>
              read more{' '}
              <span className='arrow' style={{ fontSize: '30px' }}>
                &#8594;
              </span>
            </div>
          </div>

          <div className='sectiontwo_main__container--card2 w3-card-4'>
            <img
              src={serviceImage}
              alt='service'
              style={{ height: '150px', width: '100%', objectFit: 'cover' }}
            />
            <h3>Geological Surveys for Rare Metal Deposits:</h3>
            <p>
              Geological surveys for rare metal deposits involve comprehensive
              assessments of geological formations and structures to identify
              areas with concentrations of rare metals.
            </p>
            <div className='serviceReadMoreButton'>
              read more{' '}
              <span className='arrow' style={{ fontSize: '30px' }}>
                &#8594;
              </span>
            </div>
          </div>
          <div className='sectiontwo_main__container--card3 w3-card-4'>
            <img
              src={serviceImage}
              alt='service'
              style={{ height: '150px', width: '100%', objectFit: 'cover' }}
            />
            <h3>Geological Surveys for Rare Metal Deposits:</h3>
            <p>
              Geological surveys for rare metal deposits involve comprehensive
              assessments of geological formations and structures to identify
              areas with concentrations of rare metals.
            </p>
            <div className='serviceReadMoreButton'>
              read more{' '}
              <span className='arrow' style={{ fontSize: '30px' }}>
                &#8594;
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* sectione two ends */}
      {/* { Section3 starts  */}
      <div className='section3Pallarax'>
        <div className='section3'>
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
          <div className='section3_main__container'>
            <div className='section3_main__container--item1'>
              <div className='sec3_item1__header'>
                <FontAwesomeIcon
                  icon={faBookAtlas}
                  style={{ fontSize: '30px' }}
                />
                <hr></hr>
                <h2>Mission</h2>
              </div>
              <div className='sec3_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
            <div className='section3_main__container--item2'>
              <div className='sec3_item1__header'>
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '30px' }} />
                <hr></hr>
                <h2>Vision</h2>
              </div>
              <div className='sec3_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
            <div className='section3_main__container--item3 '>
              <div className='sec3_item1__header'>
                <FontAwesomeIcon
                  icon={faFistRaised}
                  style={{ fontSize: '30px' }}
                />
                <hr></hr>
                <h2>Achievements</h2>
              </div>
              <div className='sec3_item1__body'>
                <p>
                  Our passionate and proficient team of geologists have managed
                  both private and state funded projects and RME proudly handled
                  the geological aspects of the Lofdal REE deposit from 2013 to
                  October 2017.
                </p>
              </div>
            </div>
          </div>
          <div className='sec3_button__Container'>
            <div className='serviceReadMoreButton'>
              read more{' '}
              <span className='arrow' style={{ fontSize: '30px' }}>
                &#8594;
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 ends  */}
      {/* { Section4 starts  */}
      <div className='section4'>
        <div className='section4_main__container'>
          <div className='section4_div'>
            <div className='section4_div__item1'>
              <img src={homeImage} alt='asd' />
            </div>

            <div className='section4_div__item2'>
              <hr></hr>
              <div>
                {' '}
                <h3>Rare Metal explorers</h3>
                <p>
                  Like the name implies we are specialists for green technology
                  metals such REEs and Lithium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sectione 4 ends */}
    </>
  );
}

export default HomeView;
