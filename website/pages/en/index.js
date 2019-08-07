const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Products = () => (
      <div className="pt-5">
        <div className="pt-5">
          <h1 className="text-center">THE PORTAL FOR DEVELOPMENT ON XYO</h1>
        </div>
        <div className="p-5">
          <div className="row justify-content-center">
            <div className="p-5 ">
                <div className="card shadow">
                <div className="card-header">
                    XYO Client
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Install Official Client to use XYO</h3>
                    <p className="card-text">Turn your devices into a Sentinel, Bridge, Archivist or Diviner</p>
                    <div>
                      <div>
                        <a 
                          href="https://xyo.network/install/"
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
                  XYO SDKs
                </div>
                <div className="card-body">
                  <h3 className="card-title">SDKs for XYO Components</h3>
                  <p className="card-text">Add XYO Proof of Origin and Bound Witness functions to your project</p>
                  <div>
                    <a 
                      href="https://xyo.network/sdks/" 
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
        <Products />
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
          <h1><a name="connection-matrix">CONNECTION STATE</a></h1>
          <h3><strong>View the current state of connectivity between nodes and apps</strong></h3>
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
      id="learn" className="paddingBottom"
      style={{ textAlign: 'center' }}>
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

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
