module.exports = {
  siteMetadata: {
    title: 'Site Name',
  },
  pathPrefix: '/gulp-boilerplate',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#000`,
        showSpinner: false,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        url: `https://api.darksky.net/forecast/e2b5bad35429a23de86372b6aa6ed3a8/40.6971494,-74.2598655`,
        name: `weather`,
        localSave: true,
        path: `${__dirname}/src/data/`
      }
    }

  ],
}
