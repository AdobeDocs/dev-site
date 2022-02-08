/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    home: {
      hidden: true
    },
    pages: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Products',
        path: '/apis'
      },
      {
        title: 'Community',
        menu: [
          {
            title: 'Tech Blog',
            path: 'https://medium.com/adobetech'
          },
          {
            title: 'Open Source at Adobe',
            path: '/open'
          },
          {
            title: 'Adobe on GitHub',
            path: 'https://github.com/adobe'
          },
          {
            title: 'Adobe Developer Support',
            path: '/developer-support'
          },
          {
            title: 'Community Forums',
            path: 'https://adobe.com/communities/index.html'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/'
};
