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
         <p className="text-dark">           
         <a
            href="https://xyo.network/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={`${this.props.config.baseUrl}img/XYO_full_colored.png`}
              alt="XYO"
              width="82"
              height="30"
            />
          </a> | Developers</p>
            <div>
              {this.props.config.copyright}
            </div>
        </section>
      </div>
          <section className="sitemap">
            <div>
              <h5>Docs</h5>
              <a href="https://explore.xyo.network/" target="_blank">
                Explore
              </a>
              <a href="https://xyo.network/protocol/" target="_blank">
                Protocol
              </a>
              <a href={this.docUrl('payable-demo.html', this.props.language)}>
                Guides 
              </a>
              <a 
                href="https://github.com/XYOracleNetwork/"
                target="_blank"
                rel="noreferrer noopener" 
              >
                Source Code
              </a>
            </div>
            <div>
              <h5>Community</h5>
              <a
                href="https://twitter.com/xyodevs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
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
