import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

export default class About extends Component {
  constructor(options) {
    super(options);

    this.staff = [{
      name: 'Hernan Ayala Sr., P.Eng',
      position: 'President',
      description: `Hernan Ayala Sr. started RICCA Group of Companies more than 40 years ago in South America and managed several successful companies such as: RICCA, Michay and Ayala & Plaja. With Hernan Sr.'s experience, New-Alliance is able to maintain a strong focus on our project goals, minimize potential operational risks and bring seasoned management experience to every project.`
    }, {
      name: 'Hernan J. Ayala Jr., P.Eng',
      position: 'General Manager',
      description: `Hernan Ayala Jr. has been in the construction industry for over 15 years. During this time, he has managed projects that exceed $20 million and has worked abroad in Venezuela and the United States. Hernan Jr.'s professional engineering background combined with his strong problem-solving and project management skills has had direct impact on reducing project costs and ensuring that deadlines are met.`
    }, {
      name: 'Teresa Pascoe',
      position: 'Office Manager',
      description: `Teresa Pascoe has been working in Business Management and Financial Services for the last 20 years and joined New Alliance in 2008. With her experience she enhances the daily operations by controlling all the accounting, bonding and insurance requirements in order to ensure that all our staff and customers interests are paramount to our operation.`
    }, {
      name: 'Natalee Rodriguez',
      position: 'Assistant Project Manager',
      description: `Natalee is a driven and well-rounded graduate from the Master of Architecture at the University of Toronto. Through her education and extra-curricular experience, she has developed exceptional analytical and interpersonal skills. She is committed to fully utilizing her potential in order to develop projects that are both meaningful and useful. She knows how to solve a problem, to satisfy a need, to provide more than what is there, to design. Additionally, She realized that in order to develop an intelligent solution, people has to push boundaries, dig deeper, think harder.`
    }, {
      name: 'Lori Gierling, B.Sc., B.B.A, MBA',
      position: 'Contract Administrator',
      description: `Lori Gierling has worked in the Construction Industry for almost 15 years, joining New Alliance in 2013. Lori brings with her experience in Project and Construction Management principles and practices which ensure that Client Contract requirements and expectations are met on time and on budget.`
    }, {
      name: 'Marie-Elaine Groulx',
      position: 'Construction Supervisor',
      description: `The Ontario Civil Construction world welcome Marie-Elaine Groulx after a 10 year career in the HVAC industry in QC. Her employment with New Alliance has helped improve the structure of the company in that it has become more efficient and organized due to her timely response to all issues on projects she has dealt with. Multiple projects that she have managed have come in under budget, on-time and she has brought ideas that have improved the scope of work and at the same time, motivated our employees to try to excel and improve the quality of the work with safety as a priority. She achieves an effective solution to any challenge. Marie possesses a diploma in HVACR from La Polymechanique de Laval and has completed multiple industry related courses. She has proven to be invaluable asset to our organizational and most importantly to the clients we serve.`
    }, {
      name: 'Jose Tadeo Monagas',
      position: 'Chief Estimator'
    }];
  }

  render() {
    return (
      <Grid className="body-component about-page">
        <PageHeader className="headline">
          A Construction Company with a Track Record
          <br/>
        </PageHeader>
        <p>For years, we have strived to build a reputation that speaks
          “quality” in every development project we work on. With dozens of
          exceptional projects under our belt and the resounding praises of our
          satisfied clients, New-Alliance is known as the team that displays
          quality and integrity, delivering successful projects on time and on
          budget. That’s our commitment and we aim to fulfill it with each
          project, however big or small.</p>

        <div className="about-section">
          <h3>A Power-house of Construction Experts in the Greater Toronto Area & Ontario</h3>
          <p>Our team is not randomly made up of general contract workers like
            many others out there. Instead, our corporate structure is uniquely
            composed of the industry’s most experienced professionals. We have
            carefully handpicked our employees to ensure we employ the most
            trained and qualified individuals on our team. Our power-house of
            building experts has skills ranging across construction, concrete
            work, sewage development and road work. When you choose to work
            with New-Alliance, you can rest assured that you’re working with
            the best of the best in the industry.</p>
        </div>

        <div className="about-section">
          <h3>Exceptional Construction and Development Quality, ALWAYS</h3>
          <p>The New-Alliance corporate structure has been together for many
            years. With a family-like culture in our company, our staff has a
            “client first” philosophy that is manifested in the level of
            integrity we bring to every project. Over the many years that we’ve
            been in business, we have worked with some of the largest
            commercial and residential developers. With an ever-expanding
            client list, some of the big names in our portfolio include:
              Gorruds Auto, Ricenberg Development, The Torgan Group, Monarch
            Corporation, Canadian Pacific Rail and Landmart Homes – to name
            only a few.</p>
        </div>

        <div className="about-section">
          <h3>Management Team – Expertise in Development Project Management</h3>
          <p>Two directors leading our staff of 65 plus members composed of excellent engineers, managers, supervisors and various crews including: Sewer, Watermain, Bridge, Curb/Sidewalk, Excavation and Roadworks.</p>
        </div>

        <hr className="m-y-3" />

        <Row>
          {_.map(this.staff, s =>
            <Col xs={12} md={6} key={s.name}>
              <h4>{ s.name }, <i>{ s.position }</i></h4>
              { s.description && <p>{ s.description }</p> }
            </Col>
          )}
        </Row>
      </Grid>
    );
  }

}
