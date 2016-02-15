import React, { Component } from 'react';
import { Grid, PageHeader } from 'react-bootstrap';

export default class extends Component {

  render() {
    return (
      <Grid className="body-component">
        <PageHeader className="headline">
          New-Alliance
          <br/>
          <small>Quality Construction for
          Commercial and Residential Developments in
          Ontario</small>
        </PageHeader>
        <p>
          At New-Alliance, we specialize in providing state-of-the-art
          Construction services for commercial, residential and municipal
          projects, on time and on budget. Whether you need a commercial
          building developed, a real estate property constructed or a city
          block designed, we have a solution for you. Our team of professionals
          is committed to working with you to develop a customized solution for
          your development at a competitive price.
        </p>

        <PageHeader className="headline" id="about">
          About Us
        </PageHeader>
        <h3>A Construction Company with A Difference</h3>
        <p>
          Rather than bringing together a group of random contract
          workers like many other construction companies do, we’ve
          taken the time to seek qualified and trained professionals
          to join our staff. With expertise in construction, concrete
          works, bridge work, sewage, watermain and road work, our
          team will provide customized development that will exceed
          your expectations. Our staff has been together for several
            years and is dedicated to the success of each project we
          handle. With our exceptional customer service and on-time
          delivery, we have built a strong reputation of quality and
          integrity serving our clients.
        </p>

        <h3>Commercial & Residential Construction and Development Services</h3>
        <p>
          We offer a wide range of construction services to suit
          every construction need including: Commercial developments,
          Public Road Reconstructions including all underground
          utilities, Bridge Structures and Residential Site
          Servicing. Together, we will work with you to understand
          your needs and come up with a project plan based on your
          timelines and budget.
        </p>

        <div className="what-to-expect">
          <ul>
            <li>We will meet with you for a free consultation to discuss your
              goals and understand your vision</li>
            <li>Based on your budget, timelines and requirements, we will
              provide you with a free estimate as well as a general project
              plan designed to meet your needs</li>
            <li>We will share our design and architecture expertise with you to
              ensure your development reaches its full aesthetic potential</li>
            <li>Our team will commit to the project launch date and will work
              diligently to complete the construction on time</li>
            <li>We will provide you with regular project updates, so you have
              peace of mind assured that we will deliver on time</li>
            <li>Our clean-up crew will dispose of waste in a safe manner and
              ensure the site is clean during and after the job</li>
            <li>To make sure you are satisfied with our services, we will
              follow up with you after the project is complete to collect your
              feedback</li>
          </ul>
          <p>
            A well-developed construction project for your commercial building
            or residential property doesn’t have to be costly or stressful. By
            working with a trusted company that has years of construction
            experience backed by a second-to-none reputation for quality, you
              will ensure your development is skillfully handled. Trust
            New-Alliance to deliver your next project to your complete
            satisfaction.
          </p>
        </div>
      </Grid>
    );
  }

}
