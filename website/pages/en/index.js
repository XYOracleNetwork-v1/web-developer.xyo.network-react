/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const EthDenverContainer = props => (
      <div className="ethHomeContainer">
        {props.children}
      </div>
    )

    const EthDenverDescription = () => (
      <div className="heroDescription">
        <div className="heroButtonContainer">
          <a className="button rp" href="https://developers.xyo.network/docs/en/getting-started/">
            GET STARTED
          </a>
        </div>
      </div>
    )

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        XYO Devs
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div>
        <EthDenverContainer>
          <div className="heroTitle text-center pb-5">
            <h1>THE PORTAL FOR THE GEOMINING REVOLUTION</h1>
          </div>
          <EthDenverDescription />
        </EthDenverContainer>
        <SplashContainer>
            <h1>Currently in Production</h1>
        </SplashContainer>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        >
      <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
          className="card shadow card-body"
        />
      </Container>
    );

    const FeatureCallout = () => (
        <div
          id="learn" className="productShowcaseSection paddingBottom xyoContainer"
          style={{ textAlign: 'center' }} background="dark">
          <div className="container">
            <div className="row align-self-center">
                <h1 className="col">LEARN ABOUT XYO</h1> 
            </div>
          <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/KhVLjX-k5ic?rel=0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe> 
            </div>
          </div>
        </div>   
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Location data decentralization use cases',
            image: `${baseUrl}img/type_white.svg`,
            imageAlign: 'right',
            title: 'Why XYO?',
          },
        ]}
      </Block>
    );

    const Features = () => (
    <div className=" pl-5 pr-5 pb-5 mt-3">
      <div className="row pb-5">
          <div className="col-12 col-md-4 pb-2">
            <div className="card shadow">
              <div className="card-body">
                <img src={`${baseUrl}img/dapploy_logo_color.png`} className="img-fluid d-inline mr-3" alt="dApploy"/>
                <h3 className="d-inline card-title">dApploy</h3>
                <p className="card-text smaller mr-3">Deployment solution</p>
                <div className="card-bottom smallest">
                  <button className="btn-primary btn-light-purple rounded smallest">
                    <a href="https://developers.xyo.network/docs/en/dapploy/">
                        DOCS
                    </a>
                  </button>
                </div>
              </div>
            </div>
        </div>
          <div className="col-12 col-md-4 pb-2">
            <div className="card shadow">
              <div className="card-body">
                <img src={`${baseUrl}img/dapper-without-text.svg`} className="img-fluid d-inline mr-3" alt="dApper"/>
                  <h3 className="d-inline card-title">dApper</h3>
                <p className="card-text smaller mr-3">Smart contract environment</p>
                <div className="card-bottom smallest">
                  <button className="btn-primary btn-light-purple rounded smallest">
                    <a href="https://developers.xyo.network/docs/en/dapper/">
                      DOCS
                    </a>
                  </button>
                </div>
              </div>
            </div>
        </div>
          <div className="col-12 col-md-4 pb-2">
            <div className="card shadow">
              <div className="card-body">
                <img src={`${baseUrl}img/XYO_icon_colored.svg`} className="img-fluid d-inline mr-3" alt="ble-sdk"/>
                  <h3 className="d-inline card-title">Android BLE SDK</h3>
                <p className="card-text smaller mr-3">XYO for BLE Devices</p>
                <div className="card-bottom smallest">
                  <button className="btn-primary btn-light-purple rounded smallest">
                    <a href="https://developers.xyo.network/docs/en/SDK-Ble-Android/">
                        DOCS
                    </a>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
        <div className="row pb-5">
          <div className="col-12 col-md-4 pb-2">
              <div className="card shadow">
                <div className="card-body">
                  <img src={`${baseUrl}img/coin_horizontal_colored.png`} className="img-fluid d-inline mr-3 coin-img" alt="coin"/>
                  <h3 className="d-inline card-title">COIN</h3>
                  <p className="card-text smaller mr-3">The New Economy</p>
                  <div className="card-bottom smallest">
                    <a href="https://itunes.apple.com/app/id1450443351" target="_blank" rel="noopener noreferrer">
                      <button className="btn-primary btn-light-purple rounded smallest">
                        APP
                      </button>
                    </a>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-12 col-md-4 pb-2">
            <div className="card shadow">
              <div className="card-body">
                <img src={`${baseUrl}img/XYO_icon_colored.svg`} className="img-fluid d-inline mr-3" alt="android-app"/>
                  <h3 className="d-inline card-title"><strong>Android App</strong></h3>
                <p className="card-text smaller mr-3">XYO on Android</p>
                <div className="card-bottom smallest">
                  <a href="https://play.google.com/store/apps/details?id=network.xyo.appxyoandroid.phone&hl=en_US" target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary btn-light-purple rounded smallest">
                      APP
                    </button>
                  </a>
                </div>
              </div>
            </div>
        </div>
          <div className="col-12 col-md-4 pb-2">
        <div className="card shadow">
            <div className="card-body">
              <img src={`${baseUrl}img/XYO_icon_colored.svg`} className="img-fluid d-inline mr-3" alt="archivist-node-app"/>
              <h3 className="d-inline card-title"><strong>Node Archivist</strong></h3>
              <p className="card-text smaller mr-3">Archivist on Node</p>
              <div className="card-bottom smallest">
                <button className="btn-primary btn-light-purple rounded smallest">
                  <a href="https://developers.xyo.network/docs/en/archivist/">
                      DOCS
                  </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
    
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h1>Who is Using <img src="/img/type_colored.svg" alt="xyo" height="100px" width="100px"></img>?</h1>
          <h2>Take a look at some of our partners</h2>
          <div className="container pt-5">
            <div id="productCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data="0">
                  <img src="/img/coin_horizontal_colored.png" alt="coin" />
                </div>
                <div className="carousel-item" data="1">
                  <img src="/img/esri.png" alt="ESRI" />
                </div>
                <div className="carousel-item" data="2">
                  <img src="/img/SMK-Logo.ico" alt="SMK" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
          <Features />
          <FeatureCallout />
          <Showcase />
      </div>
    );
  }
}

module.exports = Index;
