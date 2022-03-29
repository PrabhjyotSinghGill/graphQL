const githubQuery = (pageCount, queryString) => {
  return {
        query:`
        {
          viewer{
            name
          }
            search(query:"${queryString} user:prabhjyotsinghgill sort:updated-desc", type: REPOSITORY, first:${pageCount} ){
              nodes{
                ... on Repository{
                  name
                  description
                  id 
                  url
                  viewerSubscription
                  licenseInfo{
                    spdxId
                  }
                }
              }
            }
        }
        `,
    };
  }

 export default githubQuery