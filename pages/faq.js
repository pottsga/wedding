import React from 'react';

import Layout from '../components/layout';

const Question = props => (
  <div>
    <strong>{props.question}</strong>
    {props.answer}
  </div>
);

const Questions = () => (
  <div>
    <Question
      question="Where is the ceremony?"
      answer={
        <p>
          The ceremony will be held at{' '}
          <a
            href="https://www.google.com/maps/place/Main+Street+United+Methodist+Church/@34.1871073,-82.3410296,12z/data=!4m8!1m2!2m1!1smain+street+united+methodist+church!3m4!1s0x88f7fb568c99204d:0x548dcae9dea4a05e!8m2!3d34.1794938!4d-82.3803895"
            target="_blank">
            Main Street United Methodist Church, Abbeville
          </a>
        </p>
      }
    />
    <Question
      question="Where will the meal be held?"
      answer={
        <p>
          We will be holding a meal and drinks at the <a href="https://goo.gl/maps/JZ73BsxAZYEufDH47">James C Self Conference Center at Piedmont Technical College at 620 Emerald Rd. N, Greenwood SC 29646</a>
        </p>
      }
    />
    <Question
      question="Where is the after party?"
      answer={
        <p>
          The after party will be held at the <a href="https://goo.gl/maps/JZ73BsxAZYEufDH47">James C Self Conference Center at Piedmont Technical College at 620 Emerald Rd. N, Greenwood SC 29646</a>
        </p>
      }
    />
    <Question
      question="Where is our Wedding Registry?"
      answer={
        <p>
          Our wedding registry can be found on Amazon via{' '}
          <a
            href="https://www.amazon.com/wedding/greg-potts-michelle-phelps-abbeville-october-2019/registry/5EGW9T4EIEYQ"
            target="_blank">
            this link
          </a>
          .
        </p>
      }
    />
    <Question
      question="Where should we book our hotel reservations?"
      answer={
        <p>
          We have a block of rooms reserved at the <a href="https://www.google.com/maps/place/Hampton+Inn+Greenwood/@34.2175165,-82.1591256,18.59z/data=!4m5!3m4!1s0x88f800e31326d7bf:0xfa55e88a4e3fc27c!8m2!3d34.2174426!4d-82.1587631">Hampton Inn</a> in Greenwood.
        </p>
      }
    />
    <Question
      question="What airports are near the venue?"
      answer={
        <div>
          <p>
            We recommend you fly in to Greenville-Spartanburg International
            Airport (GSP). See the following table with information about
            distance/time information.
          </p>
          <p>
            <a
              href="https://www.google.com/maps/dir/Greenville-Spartanburg+International+Airport+(GSP),+2000+GSP+Dr,+Greer,+SC+29651/Main+Street+United+Methodist+Church,+300+N+Main+St,+Abbeville,+SC+29620/@34.5366321,-82.6652316,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88582a0a39cbf875:0x4d9cda4b48e8eb19!2m2!1d-82.2172338!2d34.8959008!1m5!1m1!1s0x88f7fb568c99204d:0x548dcae9dea4a05e!2m2!1d-82.3803895!2d34.1794938"
              target="_blank">
              Airport to Church
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/dir/Greenville-Spartanburg+International+Airport+(GSP),+2000+GSP+Dr,+Greer,+SC+29651/Holiday+Inn+Express+%26+Suites+Greenwood+Mall,+North+Creek+Boulevard,+Greenwood,+SC/@34.5538289,-82.5215729,10z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x88582a0a39cbf875:0x4d9cda4b48e8eb19!2m2!1d-82.2172338!2d34.8959008!1m5!1m1!1s0x88f801b2607da4ed:0x403bb51e7f0f9dce!2m2!1d-82.1848897!2d34.212397"
              target="_blank">
              Airport to Hotel
            </a>
          </p>
        </div>
      }
    />
  </div>
);

class FAQ extends React.Component {
  state = {};

  render() {
    return (
      <Layout container="true" title="FAQs">
        <Questions />
      </Layout>
    );
  }
}

export default FAQ;
