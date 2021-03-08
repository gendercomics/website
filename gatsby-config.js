module.exports = {
  siteMetadata: {
    title: `GenderComics`,
    description: `Visualities of Gender in German-Language Comics.`,
    author: `@gendercomics`,
    twitter: `gendercomics`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-offline`, // this enables Progressive Web App + Offline functionality
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Visualities of Gender in German-Language Comics`,
        short_name: `Gendercomics`,
        start_url: `/`,
        background_color: `#06243d`,
        theme_color: `#06243d`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components', // <- will become ./src/components
          '@templates': './templates', // <- will become ./src/components
          '@assets': './assets', // <- will become ./src/assets
        }
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/public/intl`,
        languages: [`en`, `de`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/helper/redirect.js`),
      },
    },
  ],
}
