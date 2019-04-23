import React from 'react';
import Layout from '../components/layout';

import './rsvp.css';

class RSVP extends React.Component {
  state = {
    rsvpWedding: null,
    rsvpWeddingShower: null,
    rsvpWeddingReception: null,
    numAdultsWedding: 0,
    numChildrenWedding: 0,
    numAdultsWeddingShower: 0,
    numChildrenWeddingShower: 0,
    numAdultsWeddingReception: 0,
    numChildrenWeddingReception: 0,
    firstName: null,
    lastName: null,
  };

  render() {
    return (
      <Layout container="true" title="RSVP">
        <form>
          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="firstName">First Name</label>
              <input onChange={(e) => this.setState({ firstName: e.target.value })} name="firstName" id="firstName" type="text" required />
            </div>
            <div className="flexItem">
              <label className="required" htmlFor="lastName">Last Name</label>
              <input onChange={(e) => this.setState({ lastName: e.target.value })} name="lastName" id="lastName" type="text" required />
            </div>
          </div>

          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="rsvpWedding">RSVP for Wedding</label>
              <small>Will you be able to attend our wedding in Abbeville, SC on Oct 05, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWedding: 'yes'})} name="rsvpWedding" id="rsvpWedding_yes" value="yes" type="radio" required />
                <label htmlFor="rsvpWedding_yes">Yes</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWedding: 'no', numAdultsWedding: 0, numChildrenWedding: 0})} name="rsvpWedding" id="rsvpWedding_no" value="no" type="radio" required />
                <label htmlFor="rsvpWedding_no">No</label>
              </div>
            </div>
          </div>

          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="rsvpWeddingReception">RSVP for Reception</label>
              <small>Will you be able to attend our wedding reception at the <a target="_blank" href="https://www.ptc.edu/continuing-ed/meeting-event-facilities/conference-center">Conference Center</a> Piedmont Technical College in Greenwood, SC after the wedding on Oct 05, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWeddingReception: 'yes'})} name="rsvpWeddingReception" id="rsvpWeddingReception_yes" value="yes" type="radio" required />
                <label htmlFor="rsvpWeddingReception_yes">Yes</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWeddingReception: 'no', numAdultsReception: 0, numChildrenReception: 0})} name="rsvpWeddingReception" id="rsvpWeddingReception_no" value="no" type="radio" required />
                <label htmlFor="rsvpWeddingReception_no">No</label>
              </div>
            </div>
          </div>

          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="rsvpWeddingShower">RSVP for Wedding Shower</label>
              <small>We will be holding a wedding shower for friends and family at the Old Kent Jailhouse at <address style={{display: 'inline'}}>497 Middlebury Rd, Kent, OH 44240</address> on July 28th, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWeddingShower: 'yes'})} name="rsvpWeddingShower" id="rsvpWeddingShower_yes" value="yes" type="radio" required />
                <label htmlFor="rsvpWeddingShower_yes">Yes</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({rsvpWeddingShower: 'no', numAdultsShower: 0, numChildrenShower: 0})} name="rsvpWeddingShower" id="rsvpWeddingShower_no" value="no" type="radio" required />
                <label htmlFor="rsvpWeddingShower_no">No</label>
              </div>
            </div>
          </div>

          {this.state.rsvpWedding == 'yes' &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsWedding">Number of Adults Attending Wedding</label>
                <input onChange={(e) => this.setState({ numAdultsWedding: Number(e.target.value)})} name="numAdultsWedding" id="numAdultsWedding" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenWedding">Number of Children Attending Wedding</label>
                <input onChange={(e) => this.setState({ numChildrenWedding: Number(e.target.value)})} name="numChildrenWedding" id="numChildrenWedding" type="number" pattern="\d*" required />
              </div>
            </div>
          }


          {this.state.rsvpWeddingReception == 'yes' &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsWeddingReception">Number of Adults Attending Wedding Reception</label>
                <input onChange={(e) => this.setState({ numAdultsWeddingReception: Number(e.target.value)})} name="numAdultsWeddingReception" id="numAdultsWeddingReception" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenWeddingReception">Number of Children Attending Wedding Reception</label>
                <input onChange={(e) => this.setState({ numChildrenWeddingReception: Number(e.target.value)})} name="numChildrenWeddingReception" id="numChildrenWeddingReception" type="number" pattern="\d*" required />
              </div>
            </div>
          }

          {this.state.rsvpWeddingShower == 'yes' &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsWeddingShower">Number of Adults Attending Wedding Shower</label>
                <input onChange={(e) => this.setState({ numAdultsWeddingShower: Number(e.target.value)})} name="numAdultsWeddingShower" id="numAdultsWeddingShower" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenWeddingShower">Number of Children Attending Wedding Shower</label>
                <input onChange={(e) => this.setState({ numChildrenWeddingShower: Number(e.target.value)})} name="numChildrenWeddingShower" id="numChildrenWeddingShower" type="number" pattern="\d*" required />
              </div>
            </div>
          }
        </form>
      </Layout>
    );
  }
}

export default RSVP;
