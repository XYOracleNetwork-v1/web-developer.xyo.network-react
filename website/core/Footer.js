/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="col-12 col-md-4">
        <section className="copyright">
            <img
              src={`${this.props.config.baseUrl}img/XYO_full_colored.png`}
              alt="XYO"
              width="150"
              height="50"
            />
            <div>
              {this.props.config.copyright}
            </div>
        </section>
      </div>
          <section className="sitemap">
            <div>
              <h5>Docs</h5>
              <a href={this.docUrl('getting-started.html', this.props.language)}>
                Getting Started 
              </a>
              <a href={this.docUrl('payable-demo.html', this.props.language)}>
                Guides 
              </a>
              <a 
                href="http://reference.xyo.network.s3-website-us-east-1.amazonaws.com/"
                rel="noreferrer noopener"
                >
                Reference 
              </a>
            </div>
            <div>
              <h5>Community</h5>
              <a href={this.pageUrl('users.html', this.props.language)}>
                User Showcase
              </a>
              <a href="https://gitter.im/XYOracleNetwork/Dev"
                target="blank"
                rel="noreferrer noopener"
              >
                Project Chat
              </a>
              <a
                href="https://twitter.com/xyodevs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </div>
            <div>
              <h5>More</h5>
              <a 
                href="https://github.com/XYOracleNetwork/"
                target="_blank"
                rel="noreferrer noopener" 
              >
                GitHub
              </a>
            </div>
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTCW96N"
              height="0" width="0" style={{display: "none; visibility:hidden"}}>
              </iframe>
            </noscript>
          </section>
      </footer>
    );
  }
}

module.exports = Footer;
