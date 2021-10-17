module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "TaskRanger Landing",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: 'none'
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
