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
    
    const DevzillaContainer = props => (
      <div className="ethHomeContainer">
        {props.children}
      </div>
    )

    const DevzillaDescription = () => (
      <div className="heroDescription">
        <div className="heroButtonContainer">
          <a className="button rp" href="https://devzilla.xyo.network/">
            MORE INFO
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
        <DevzillaContainer>
          <div className="heroTitle text-center pb-5">
            <img src="/img/Devzilla_Type_Colored.png" className="mx-auto d-block" alt="devzilla" />
          </div>
          <DevzillaDescription />
        </DevzillaContainer>
        <SplashContainer>
            <h1>OUR PRODUCTS</h1>
        </SplashContainer>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, products} = siteConfig;

    const publicProducts = (products || []).filter((prod) => prod.fields.visibility === "Public");
    
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

    const ConnectionMatrix = () => (
      <div>
        <h1 className="text-center">Current Connection State</h1>
        <div className="row justify-content-center">
          <div className="col-auto">
            <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">iOS App</th>
                    <th scope="col">Android App</th>
                    <th scope="col">Node Bridge X</th>
                    <th scope="col">Sentinel X</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">iOS App</th>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-danger"><i className="fas fa-times"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">Android App</th>
                    <td className="table-danger"><i className="fas fa-times"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">Node Bridge X</th>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th scope="row">Sentinel X</th>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-success"><i className="fas fa-check"></i></td>
                    <td className="table-danger"><i className="fas fa-times"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    );
    
    const FeatureCallout = () => (
      <div
      id="learn" className="productShowcaseSection paddingBottom xyoContainer"
      style={{ textAlign: 'center' }} background="dark">
          <div className="container">
            <div className="row align-self-center">
                <h1 className="col">LEARN ABOUT THE MATRIX</h1> 
            </div>
          <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/WL0TRTj_wOM?rel-0" 
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
          {(publicProducts || []).map(prod => (
            <div className="col-12 col-md-4 pb-5" key={prod.fields.id}>
              <div className="card shadow h-100">
                <div className="card-body">
                    { prod.fields.logo ? <img src={prod.fields.logo} className="img-fluid d-inline h-auto" alt={prod.fields.marketingName}/>: <p></p>}
                    <h3 className="card-title">{prod.fields.marketingName}</h3>
                  {prod.fields.publicDesc === "No Description" ? <br></br> : <p className="smaller">{prod.fields.publicDesc}</p> }
                    <p>{prod.fields.valDivision} Division</p>
                    <p><strong>Status:</strong> {prod.fields.status}</p>
                    <br></br>
                      <div className="card-bottom smallest">
                    {prod.fields.iOSAppLink || prod.fields.androidAppLink? 
                    <div>
                      <button className="btn-primary btn-light-purple rounded smallest">
                        <a href={prod.fields.iOSAppLink} target="_blank" rel="noopener noreferrer">
                            iOS
                        </a>
                      </button>
                      <button className="btn-primary btn-light-purple rounded smallest ml-3">
                        <a href={prod.fields.androidAppLink} target="_blank" rel="noopener noreferrer">
                          ANDROID
                        </a>
                      </button> 
                    </div> : <p></p>
                    }
                      <div className="pt-2">
                        <button className="btn-primary btn-light-purple rounded smallest">
                          <a href={prod.fields.docsLink} target="_blank" rel="noopener noreferrer">
                            DOCS
                          </a>
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
            )
          )
        }
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
          <ConnectionMatrix />
          <Showcase />
      </div>
    );
  }
}

module.exports = Index;
