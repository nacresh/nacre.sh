const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Nacre',
    shortName: 'nacre',
    description: 'Intuitive Shell',
    lang: 'en',
    imageUrl: 'https://user-images.githubusercontent.com/11426226/153443520-b4712899-cd91-4474-9a60-c39e8cb2ec7d.svg',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-doctornpm',
      options: {
        icon: './src/images/nacre-favicon.svg',
        editOnGitHub: false,
        showContributors: false,
        showSidebarEditLink: false,
        repo: {
          url: 'https://github.com/npm/doctornpm',
          defaultBranch: 'main',
          path: 'docs'
        }
      },
    }
  ],
  pathPrefix: process.env.PREFIX_PATHS ? path.basename(require('../package.json').repository.url) : '',
}
