const typeDefs = require("./typeDefs");

// dummy data
const links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]


const resolvers = {
    Query: {
        info: () => `Hello Word whith GraphQL !`,
        feed: () => links
    }/*,

    Link: {
        id: ( parent ) => parent.id,
        description: ( parent ) => parent.description,
        url: ( parent ) => parent.url
    }*/
};

module.exports = { resolvers: resolvers };