/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const React = require('react');

class HomeSplash extends React.Component {
  render() {

    // eslint-disable-next-line no-unused-vars
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
                          <span className="pr-2">Get</span>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                        <a 
                          href="https://github.com/XYOracleNetwork"
                          rel="noopener noreferrer" 
                          target="_blank"
                          className="btn btn-secondary btn-square mr-1"
                        >
                          <span className="pr-2">GitHub</span>
                          <i className="fas fa-external-link-alt"></i>
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
                      <span className="pr-2">Get</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a 
                      href="https://github.com/XYOracleNetwork" 
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-secondary btn-square mr-1"
                    >
                      <span className="pr-2">GitHub</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href="https://developers.xyo.network/docs/en/SDK-Core-Swift/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-secondary btn-square mr-1"
                    >
                      Swift Core Guide 
                    </a>
                    <a
                      href="https://developers.xyo.network/docs/en/kotlin-getting-started/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-secondary btn-square mr-1"
                    >
                      Kotlin Core Guide
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

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
