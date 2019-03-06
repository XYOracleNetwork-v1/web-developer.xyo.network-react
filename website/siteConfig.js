/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Coin',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/coin_horizontal_colored.png',
    infoLink: 'https://xyo.network/',
    pinned: true,
  },
  {
    caption: 'Everipedia',
    image: '/img/everipedia.png',
    infoLink: 'https://everipedia.org/',
    pinned: true
  },
  {
    caption: 'DRVR',
    image: '/img/drvr.png',
    infoLink: 'http://www.drvr.co/',
    pinned: true
  },
  {
    caption: 'ESRI',
    image: '/img/esri.png',
    infoLink: 'https://www.esri.com/',
    pinned: true
  },
  {
    caption: 'SMK',
    image: '/img/SMK-Logo.ico',
    infoLink: 'https://www.smkusa.com/',
    pinned: true
  }
];

const siteConfig = {
   // Title for your website.
  title: '', 
  tagline: 'The source for developers to interact with XYO and its suite of products.',
  url: 'https://developers.xyo.network', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'xyo-devs',
  organizationName: 'XYO',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'Introduction', label: 'Guides'},
    { href: 'http://reference.xyo.network/', label: 'Reference'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/XYODevelopers_XYO_Logo.png',
  favicon: 'img/XYO_icon_colored.png',
  /* Colors for website */
  colors: {
    primaryColor: '#232756',
    secondaryColor: '#8d8fc6',
  },

  fonts: {
    myFont: [
      "Titillium Web",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} XYO`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'sunburst',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/XYO_full_colored.png',
  twitterImage: 'img/XYO_full_colored.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  stylesheets: ['https://fonts.googleapis.com/css?family=Titillium+Web', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'],

  useEnglishUrl: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
