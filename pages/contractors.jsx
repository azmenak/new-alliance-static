import React, { Component } from 'react';
import { Grid, PageHeader } from 'react-bootstrap';

const hsManual = require('file?name=[name].[ext]!../files/new-alliance-hs-manual-06-26-2015.pdf');
const hsStandards = require('file?name=[name].[ext]!../files/new-alliance-standards-2015.pdf');
const hsAck = require('file?name=[name].[ext]!../files/safety-policy-acknowledgement.pdf');

export default class Contractors extends Component {

  render() {
    return (
      <Grid className="body-component contractors-page">
        <PageHeader className="headline">
          Contractors
          <br/>
        </PageHeader>
        <p>All contractors working for New-Alliance must read the Health
          & Safety Policy, and sign and return the form acknowledging that
          they have done so.</p>

        <div className="hs-policy-step">
          <h3>Step 1: Download and read the Health and Safety manual</h3>
          <a className="btn btn-link text-wrap" href={hsManual}>Download Health & Safety manual</a>
        </div>

        <div className="hs-policy-step">
          <h3>Step 2: Download and read the Safety, Health and Enironmental Standards document</h3>
          <a className="btn btn-link text-wrap" href={hsStandards}>Download Safety, Health and Enironmental Standards document</a>
        </div>

        <div className="hs-policy-step">
          <h3>Step 3: Download, sign and return the Saftey Policy Acknowledgement form</h3>
          <a className="btn btn-link text-wrap" href={hsAck}>Download Saftey Policy Acknowledgement form</a>
        </div>
      </Grid>
    );
  }
}
