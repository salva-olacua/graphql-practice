const typeDefs = require("./typeDefs");

const resolvers = {
    Query: {
        info: () => `Hello Word whith GraphQL !`
    }
};

module.exports = { resolvers: resolvers };