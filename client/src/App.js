import React, { Component } from 'react';

//components
import ButtonGwd from './components/ButtonGwd';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import ButtonNat1 from './components/ButtonNat1';
import MenuNat from './components/MenuNat';
import CompNat from './components/CompNat';
import CardNat1 from './components/CardNat1';
import CardNat2 from './components/CardNat2';
import CardNat3 from './components/CardNat3';

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

    const cardNats = [
      {icon: 'icon-basic-world', title: 'explore the world', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'},
      {icon: 'icon-basic-compass', title: 'meet nature', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'},
      {icon: 'icon-basic-map', title: 'find your way', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'}
    ]

    return (
      <div>
        <HeaderGwd links={headerLinks} />
        <HeroGwd />
        <MenuNat links={menuLinks} />

        <Row>
          <CardNat3 caption="mary smith" picture="img1">
            <h4>i had the best week ever with my family</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p>
          </CardNat3>
          <CardNat3 caption="jack wilson" picture="img2">
            <h4>wow! my life is completely different now!</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur</p>
          </CardNat3>
        </Row>

        <Row>
          <Column type="col1of3">
            <CardNat2 title="the sea explorer" picture="picture1">
              <li>3 day tours</li>
              <li>Up to 30 people</li>
              <li>2 tour guides</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: easy</li>
            </CardNat2>
          </Column>
          <Column type="col1of3">
            <CardNat2 title="the forest hiker" picture="picture2">
              <li>7 day tours</li>
              <li>Up to 40 people</li>
              <li>6 tour guides</li>
              <li>Sleep in provided tents</li>                <li>Difficulty: medium</li>
            </CardNat2>
          </Column>
          <Column type="col1of3">
            <CardNat2 title="the snow advenurer" picture="picture3">
              <li>5 day tours</li>
              <li>Up to 15 people</li>
              <li>3 tour guides</li>
              <li>Sleep in provided tents</li>                <li>Difficulty: hard</li>
            </CardNat2>
          </Column>
        </Row>

        <Row theme="mainBlue">
          <Column type="col1of3">
            <CardNat1
              icon='icon-basic-world'
              title='explore the world'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'
               />
          </Column>
          <Column type="col1of3">
            <CardNat1
              icon='icon-basic-compass'
              title='meet nature'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'
              />
          </Column>
          <Column type="col1of3">
            <CardNat1
              icon='icon-basic-map'
              title='find your way'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur'
              />
          </Column>
        </Row>

        <Row theme="mainBlue">
          <CompNat />
        </Row>

        <Row theme="mainBlue">
          <Column type="col1of2">
            <ButtonNat1 globalC="moveInBottom" href="#tours">Discover our tours</ButtonNat1>
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
