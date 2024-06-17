import React from 'react';
import './ServicesStyles.css';
function ServicesView() {
  return (
    <>
      <div className='service_section1'>
        <h2>Ministrations </h2>
        <h4>Mineral Exploration and Mining </h4>

        <div className='service_cardHolder'>
          <div className='service_cardHolder__card1'>
            <h3>Regional & Detailed Geological Mapping</h3>
            <div className='serviceHolder'>
              <li>Trench Mapping</li>
              <li> Regolith/Scree/Gravel Mapping</li>
              <li> Alteration Mapping</li>
              <li> Structural Mapping</li>
              <li> Report writing</li>
              <li> Personnel training</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3>Regional & Detailed Geochemical Survey</h3>
            <div className='serviceHolder'>
              <li>Termite Mounts Sampling</li>
              <li> Stream Sediments</li>
              <li> Panning</li>
              <li> Personnel training</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3>Drill (RC/Core) Program Design & Supervision</h3>
            <div className='serviceHolder'>
              <li>Workflow & communication design</li>
              <li> Drill fence planning & design</li>
              <li>Oversight & coordination</li>
              <li>Personnel training</li>
            </div>
          </div>
        </div>

        <div className='service_cardHolder'>
          <div className='service_cardHolder__card1'>
            <h3>Project Management & Budgeting</h3>
            <div className='serviceHolder'>
              <li> Office Administration</li>
              <li> ArcGIS administration</li>
              <li> System administration</li>
              <li> Technical advisory</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3>EIA & EMP </h3>
            <div className='serviceHolder'>
              <li>
                Equipment deployment (weather station, dust kits & radiation
                kits)
              </li>
              <li> Data collection oversight & coordination</li>
              <li> Recommendation & report writing</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3>Data Management</h3>
            <div className='serviceHolder'>
              <li> Server setup</li>
              <li> Data source setup</li>
              <li>Dictionary and restriction setup</li>
              <li>Redundancy checks</li>
              <li>Presentation setup</li>
            </div>
          </div>
        </div>
        <div className='loggingService w3-card-4'>
          <h3>Logging, Sampling & QAQC Implementation</h3>
          <div className='loggingService__container'>
            <div className='loggingService__container--item'>
              <div className='serviceHolder'>
                <li> Data capture documentation</li>

                <li>Procedural design & implementation</li>
                <li>Structural logging, analysis and interpretation</li>
                <li> Engineering geotechnical logging</li>
                <li> Detailed logging of mineralized zones</li>
              </div>
            </div>
            <div className='loggingService__container--item'>
              <li> Channel sampling (inclusive of grinding)</li>

              <li>Trench sampling</li>
              <li>
                {' '}
                QAQC implementation compatible with JORC-2012 code data
                validation
              </li>
              <li> Channel sampling (inclusive of grinding)</li>
              <li> Report writing</li>
            </div>
          </div>
        </div>
        <div className='separator '>
          <h4>Open pit & Underground Grade Control </h4>
        </div>
        <div className='service_cardHolder'>
          <div className='service_cardHolder__card1'>
            <h3>Urban Development</h3>
            <div className='serviceHolder'>
              <li> Town planning (Street layout & land use design)</li>
              <li> Solid waste management</li>
              <li> Civil development & construction</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3> Rural Development</h3>
            <div className='serviceHolder'>
              <li>Environmental & Wildlife Conservation Awareness</li>
              <li> Community Engagement & Strategic planning</li>
              <li> Water Well Sitting, Installation & Decommissioning</li>
              <li> Civil Construction</li>
              <li> Heritage Impact Assessments</li>
            </div>
          </div>
          <div className='service_cardHolder__card1'>
            <h3>Water Resource</h3>
            <div className='serviceHolder'>
              <li> Hydrogeology</li>
              <li> Investigations & Mapping.</li>
              <li>Aquifer Assessments.</li>
              <li>Source Water Assessment.</li>
              <li>Contamination & Transport.</li>
              <li>Groundwater Sampling & Monitoring.</li>
              <li>Database Development & Statistical Data Analysis.</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesView;
