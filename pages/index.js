import React from 'react';

import Layout from '../components/layout';

const Hero = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
    }}>
    <div
      style={{
        background: 'url("/static/images/bridge.png")',
        backgroundSize: 'cover',
        height: 'calc(100vh - 96px)',
        backgroundPosition: 'center top',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '40vh',
        left: '5%',
        width: '90%',
        margin: 'auto',
        padding: '20px',
        zIndex: '10',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '3px',
      }}>
      <h1>We're getting married!</h1>
      <em style={{display: 'block', margin: '10px 0px'}}>
        Greg &amp; Michelle
      </em>
      <p>Sat, October 5th 2019 @ 4:00pm</p>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Main+Street+United+Methodist+Church/@34.1794938,-82.3825782,17z/data=!3m1!4b1!4m5!3m4!1s0x88f7fb568c99204d:0x548dcae9dea4a05e!8m2!3d34.1794938!4d-82.3803895">
        Main Street United Methodist Church, Abbeville, SC 29620
      </a>
    </div>
  </div>
);

const Index = () => (
  <Layout footer="false">
    <Hero />
  </Layout>
);

export default Index;
