import React from 'react';
import Layout from '../components/layout';
import Router from 'next/router';

import './rsvp.css';

import firebase from '../lib/firebase';

class RSVP extends React.Component {
  state = {
    message: null,
    attendingWedding: null,
    attendingWeddingShower: null,
    attendingWeddingReception: null,
    numAdultsAttendingWedding: null,
    numChildrenAttendingWedding: null,
    numAdultsAttendingWeddingShower: null,
    numChildrenAttendingWeddingShower: null,
    numAdultsAttendingWeddingReception: null,
    numChildrenAttendingWeddingReception: null,
    firstName: null,
    lastName: null,
    submittedOn: new Date(),
  }

  onSubmit(e) {
    e.preventDefault();

    const db = firebase.firestore();

    const {message, ...data} = this.state;

    db.collection("rsvps").add(data)
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.setState({message: `${this.state.firstName}, we got your RSVP! If you need to change this at any time, please just re-fill out the form. Thank you!`});
          window.scrollTo(0, 0);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <Layout container="true" title="RSVP">
        {this.state.message &&
          <div style={{background: 'lightgrey', border: '2px solid darkgrey', borderRadius: '2px', padding: '20px'}}>
            {this.state.message} 
          </div>
        }
        {!this.state.message &&
        <form onSubmit={(e) => this.onSubmit(e) }>
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
              <label className="required" htmlFor="attendingWedding">RSVP for Wedding</label>
              <small>Will you be able to attend our wedding in Abbeville, SC on Oct 05, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWedding: true})} name="attendingWedding" id="attendingWedding_yes" type="radio" required />
                <label htmlFor="attendingWedding_yes">Accepts</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWedding: false, numAdultsAttendingWedding: null, numChildrenAttendingWedding: null})} name="attendingWedding" id="attendingWedding_no" type="radio" required />
                <label htmlFor="attendingWedding_no">Regrets</label>
              </div>
            </div>
          </div>

          {this.state.attendingWedding &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsAttendingWedding">Number of Adults Attending Wedding</label>
                <input onChange={(e) => this.setState({ numAdultsAttendingWedding: Number(e.target.value)})} name="numAdultsAttendingWedding" id="numAdultsAttendingWedding" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenAttendingWedding">Number of Children Attending Wedding</label>
                <input onChange={(e) => this.setState({ numChildrenAttendingWedding: Number(e.target.value)})} name="numChildrenAttendingWedding" id="numChildrenAttendingWedding" type="number" pattern="\d*" required />
              </div>
            </div>
          }

          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="attendingWeddingReception">RSVP for Reception</label>
              <small>Will you be able to attend our wedding reception at the <a target="_blank" href="https://www.ptc.edu/continuing-ed/meeting-event-facilities/conference-center">Conference Center</a> Piedmont Technical College in Greenwood, SC after the wedding on Oct 05, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWeddingReception: true})} name="attendingWeddingReception" id="attendingWeddingReception_yes" value="yes" type="radio" required />
                <label htmlFor="attendingWeddingReception_yes">Accepts</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWeddingReception: false, numAdultsAttendingWeddingReception: null, numChildrenAttendingWeddingReception: null})} name="attendingWeddingReception" id="attendingWeddingReception_no" value="no" type="radio" required />
                <label htmlFor="attendingWeddingReception_no">Regrets</label>
              </div>
            </div>
          </div>

          {this.state.attendingWeddingReception &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsAttendingWeddingReception">Number of Adults Attending Wedding Reception</label>
                <input onChange={(e) => this.setState({ numAdultsAttendingWeddingReception: Number(e.target.value)})} name="numAdultsAttendingWeddingReception" id="numAdultsAttendingWeddingReception" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenAttendingWeddingReception">Number of Children Attending Wedding Reception</label>
                <input onChange={(e) => this.setState({ numChildrenAttendingWeddingReception: Number(e.target.value)})} name="numChildrenAttendingWeddingReception" id="numChildrenAttendingWeddingReception" type="number" pattern="\d*" required />
              </div>
            </div>
          }

          <div className="flexContainer">
            <div className="flexItem">
              <label className="required" htmlFor="attendingWeddingShower">RSVP for Wedding Shower</label>
              <small>Will you be able to attend our wedding shower at the Old Kent Jailhouse at 497 Middlebury Rd., Kent, OH 44240 on Sunday, July 28th, 2019?</small>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWeddingShower: true})} name="attendingWeddingShower" id="attendingWeddingShower_yes" value="yes" type="radio" required />
                <label htmlFor="attendingWeddingShower_yes">Accepts</label>
              </div>

              <div className="radioGroup">
                <input onChange={() => this.setState({attendingWeddingShower: false, numAdultsAttendingWeddingShower: null, numChildrenAttendingWeddingShower: null})} name="attendingWeddingShower" id="attendingWeddingShower_no" value="no" type="radio" required />
                <label htmlFor="attendingWeddingShower_no">Regrets</label>
              </div>
            </div>
          </div>

          {this.state.attendingWeddingShower &&
            <div className="flexContainer">
              <div className="flexItem">
                <label className="required" htmlFor="numAdultsAttendingWeddingShower">Number of Adults Attending Wedding Shower</label>
                <input onChange={(e) => this.setState({ numAdultsAttendingWeddingShower: Number(e.target.value)})} name="numAdultsAttendingWeddingShower" id="numAdultsAttendingWeddingShower" type="number" pattern="\d*" required />
              </div>
              <div className="flexItem">
                <label className="required" htmlFor="numChildrenAttendingWeddingShower">Number of Children Attending Wedding Shower</label>
                <input onChange={(e) => this.setState({ numChildrenAttendingWeddingShower: Number(e.target.value)})} name="numChildrenAttendingWeddingShower" id="numChildrenAttendingWeddingShower" type="number" pattern="\d*" required />
              </div>
            </div>
          }

          <input type="submit" />

        </form>
        }
      </Layout>
    );
  }
}

export default RSVP;
