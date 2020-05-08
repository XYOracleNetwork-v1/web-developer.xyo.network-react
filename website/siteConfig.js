/* eslint-disable no-undef */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const products =[]

const siteConfig = {
   // Title for your website.
  title: 'XYO Foundation Dev Portal', 
  tagline: 'Developer Portal',
  url: 'https://developers.xyo.network', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  disableHeaderTitle: true,

  // Used for publishing and more
  projectName: 'xyo-devs',
  organizationName: 'XYO',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Guides'},
    { href: 'https://reference.xyo.network', label: 'Reference'},
  ],

  // If you have users set above, you add it here:
  users,
  products,

  /* path to images for header/footer */
  headerIcon: 'img/XYO_icon_white.png',
  favicon: 'img/XYO_icon_colored.png',
  /* Colors for website */
  colors: {
    primaryColor: '##2C3E50',
    secondaryColor: '##2C3E50',
  },

  fonts: {
    myFont: [
      "Spartan",
      "Helvetica Neue"
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
  scripts: ['https://buttons.github.io/buttons.js', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', 'https://cdn.xy.company/js/gtm_developers.xyo.network.js'],

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

  stylesheets: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css', 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', 'https://fonts.googleapis.com/css2?family=Spartan:wght@531&display=swap'],

  useEnglishUrl: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
