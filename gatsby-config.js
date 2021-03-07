module.exports = {
    siteMetadata: {
        title: `Dev Tips, Tutorials, and Training`,
        author: `Tom Hall`,
        description: `Stuff about what I learn to help you and me learn.`,
        siteUrl: `https://hallwtom.com/`,
        city: `Salt Lake City`,
        social: {
            twitter: `thall1961`
        }
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            }
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Tom Hall Dev Tips`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#88bdbc`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-39687018-4',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                // head: false,
                // Setting this parameter is optional
                // anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                // pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                cookieDomain: 'hallwtom.com'
            }
        },
        {
            resolve: `gatsby-plugin-eslint`,
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        }
        // {
        //   resolve: `gatsby-plugin-typescript`,
        //   options: {
        //     isTSX: true, // defaults to false
        //     jsxPragma: `jsx`, // defaults to "React"
        //     allExtensions: true, // defaults to false
        //   },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}
