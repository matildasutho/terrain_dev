import { gql, GraphQLClient } from 'graphql-request';

// require('dotenv').config(); // Load environment variables from .env

// const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

// const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
//   },
// });

const endpoint = `https://graphql.contentful.com/content/v1/spaces/jkvqgx106yvq`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer AxV-LmtS_eqXV9lONS-7MKtMzxZ5YgzMj1faGYohPMU`,
  },
});

export const getProjects = async () => {
    const projectsQuery = gql`
      {
        projectsCollection(order: date_DESC) {
          items {
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            title
            slug
            date
            sys {
              id
            }
            thumbnail {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            shortDescription {
              json
            }
          }
        }
      }
    `;
    return graphQLClient.request(projectsQuery);
  };

  export const getPastProjects = async () => {
    const currentDate = new Date(); // Get the current date

    // Construct the query with a filter for past projects
    const projectsQuery = gql`
      query GetPastProjects($currentDate: DateTime) {
        projectsCollection(
          where: {
            date_lt: $currentDate
          },
          order: date_DESC
        ) {
          items {
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            title
            slug
            date
            contributor
            location
            category
            sys {
              id
            }
            thumbnail {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            shortDescription {
              json
            }
          }
        }
      }
    `;

    // Define variables for the query
    const variables = {
      currentDate: currentDate.toISOString(), // Convert the date to ISO format
    };

    return graphQLClient.request(projectsQuery, variables);
  }

  export const getFutureProjects = async () => {
    const currentDate = new Date(); // Get the current date

    const projectsQuery = gql`
      query GetPastProjects($currentDate: DateTime) {
        projectsCollection(
          where: {
            date_gte: $currentDate
          },
          order: date_DESC
        ) {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          items {
            title
            slug
            date
            sys {
              id
            }
            thumbnail {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            shortDescription {
              json
            }
          }
        }
      }
    `;

    // Define variables for the query
    const variables = {
      currentDate: currentDate.toISOString(), // Convert the date to ISO format
    };

    return graphQLClient.request(projectsQuery, variables);
  }
  
  export const getProjectBySlug = async (slug) => {
    const projectBySlugQuery = gql`
      query projectBySlug($slug: String!) {
        projectsCollection(where: { slug: $slug }, limit: 1) {
          items {
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            title
            subtitle
            location
            slug
            date
            sys {
              id
            }
            thumbnail {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            imagesCollection {
              items {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
            }
            description {
              json
              links {
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    size
                    title
                    height
                    width
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;
  
    return graphQLClient.request(projectBySlugQuery, { slug });
  };
  
  export const getResources = async () => {
    const resourcesQuery = gql`
      {
        resourcesCollection(order: date_DESC) {
          items {
            contentfulMetadata {
              tags {
                id
                name
              }
            }
            date
            title
            externalUrl
            tagline {
              json
            }
            sys {
              id
            }
          }
        }
      }
    `;
    return graphQLClient.request(resourcesQuery);
  };