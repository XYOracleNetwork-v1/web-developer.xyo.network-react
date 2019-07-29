const React = require('react');

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
          <a className="button rp" href="https://developers.xyo.network/docs/en/getting-started/">
            GET STARTED
          </a>
        </div>
      </div>
    )
    
    // const SplashContainer = props => (
    //   <div className="homeContainer">
    //     <div className="homeSplashFade">
    //       <div className="wrapper homeWrapper">{props.children}</div>
    //     </div>
    //   </div>
    // );

    const LatestProducts = () => (
      <div className="pt-5">
        <div className="pt-5">
          <h1 className="text-center">THE PORTAL FOR DEVELOPMENT ON XYO</h1>
        </div>
        <div className="p-5">
          <div className="row justify-content-center">
            <div className="p-5 ">
                <div className="card shadow">
                <div className="card-header">
                    The XYO Client
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Install the official Client to use XYO</h3>
                    <p className="card-text">Available in Android, iOS, and NodeJS</p>
                    <div>
                      <div>
                        <a 
                          href="http://web-xyo.network-bootstrap.s3-website-us-east-1.amazonaws.com/install"
                          rel="noopener noreferrer" 
                          target="_blank"
                          className="btn btn-square mr-1"
                          style={{ backgroundColor: '#2c3e50', color: '#fff'}}
                        >
                          Get
                        </a>
                        <a 
                          href="https://github.com/XYOracleNetwork"
                          rel="noopener noreferrer" 
                          target="_blank"
                          className="btn btn-secondary btn-square mr-1"
                        >
                          GitHub
                        </a>
                        <a 
                          href="https://developers.xyo.network/docs/en/bridge-x/"
                          rel="noopener noreferrer" 
                          target="_blank"
                          className="btn btn-secondary btn-square disabled mr-1"
                        >
                          Docs - Coming Soon
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="p-5">
              <div className="card shadow">
                <div className="card-header">
                  SDKs
                </div>
                <div className="card-body">
                  <h3 className="card-title">SDKs for XYO Components</h3>
                  <p className="card-text">The software that powers your queries and interactions</p>
                  <div>
                    <a 
                      href="http://web-xyo.network-bootstrap.s3-website-us-east-1.amazonaws.com/sdks/" 
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-square mr-1"
                      style={{ backgroundColor: '#2c3e50', color: '#fff'}}
                    >
                      Get
                    </a>
                    <a 
                      href="https://github.com/XYOracleNetwork" 
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-secondary btn-square mr-1"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://developers.xyo.network/docs/en/bridge-x/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-secondary btn-square disabled mr-1"
                    >
                      Docs - Coming Soon
                        </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
    return (
      <div>
        <LatestProducts />
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
      <div className="bg-light p-5">
        <div className="text-center p-3">
          <h1><a name="connection-matrix">Current Connection State</a></h1>
          <h3><strong>You can view the current state of connectivity between nodes and apps here</strong></h3>
        </div>
        <div className="row justify-content-center p-3">
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
                <h1 className="col">SETUP A GEOMINING KIT</h1> 
            </div>
          <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/rRRX80EX7fU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                >
              </iframe> 
            </div>
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
    
    const Features = () => (
      <div className="pl-5 pr-5 pb-5 mt-3">
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
                      <button className="btn-primary rounded smallest">
                        <a href={prod.fields.iOSAppLink} target="_blank" rel="noopener noreferrer">
                            iOS
                        </a>
                      </button>
                      <button className="btn-primary rounded smallest ml-3">
                        <a href={prod.fields.androidAppLink} target="_blank" rel="noopener noreferrer">
                          ANDROID
                        </a>
                      </button> 
                    </div> : <p></p>
                    }
                      <div className="pt-2">
                        <button className="btn-primary rounded smallest">
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
      </div>
    );
  }
}

module.exports = Index;
