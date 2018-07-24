import React, { Component } from 'react';

//components
import ButtonGwd from './components/ButtonGwd';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import ButtonNat1 from './components/ButtonNat1';
import MenuNat from './components/MenuNat';
import CompNat from './components/CompNat';

// fragments
import HeaderGwd from './fragments/HeaderGwd';
import HeroGwd from './fragments/HeroGwd';


import Column from './layout/Column';
import Row from './layout/Row';

//modules
import styles from './App.module.css';


class App extends Component {
  render() {
    const headerLinks = [
      {label: 'Our Beginning' , link: '#beginning' },
      {label: 'Features' , link: '#features' },
      {label: 'Testimonials' , link: '#testimonials' }
    ];

    const menuLinks = [
      {label: 'about' , link: '#about' },
      {label: 'contacts' , link: '#contacts' },
      {label: 'skills' , link: '#skills' },
      {label: 'testimonials' , link: '#testimonials' }
    ];

    return (
      <div>
        <HeaderGwd links={headerLinks} />
        <HeroGwd />
        <MenuNat links={menuLinks} />

        <Row theme="mainBlue">
          <CompNat />
        </Row>

        <Row theme="mainBlue">
          <Column type="col1of2">
            <ButtonNat1 href="#tours">Discover our tours</ButtonNat1>
          </Column>
        </Row>

        <Row>
          <Column type="col1of2">
            <ButtonGwd color="blue">Get in Touch!</ButtonGwd>
            <ButtonGwd color="orange" size="large">Get Started Today</ButtonGwd>
          </Column>
        </Row>



        <Row theme="mainBlue">
          <Column type="col1of2">
            <Feature title="We’ll Watch the Weather">
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
            </Feature>
          </Column>
          <Column type="col1of2">
            <Feature title="We’ll Watch the Weather">
              Download our app and we’ll send you a notice if it’s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.
            </Feature>
          </Column>
        </Row>

        <Row theme="testimonial">
          <Column type="col1of2">
            <Testimonial title="Jane Doe" subtitle="9 Time Escaper">
              “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </Testimonial>
          </Column>
        </Row>


      </div>
    );
  }
}

export default App;
