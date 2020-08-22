// dummy data
const links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]


// Link Creation
let idCount = links.length;

const createLink = (parent, args) => {
    const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
    };

    links.push(link);
    return link;
}


const resolvers = {
    Query: {
        info: () => `Hello Word whith GraphQL !`,
        feed: () => links
    },        
    Mutation: {
        post: (parent, args) => createLink(parent, args)
    }
};

module.exports = { resolvers: resolvers };