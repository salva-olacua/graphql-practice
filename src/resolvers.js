// Link Creation
const createLink = (parent, args, context) => {
    const link = context.prisma.link.create({
        data: {
            url: args.url,
            description: args.description,
        },        
    });
    return link;
}


const resolvers = {
    Query: {
        info: () => `Hello Word whith GraphQL !`,
        feed: () => async (parent, args, context) => {
            return context.prisma.link.findmany();
        },
    },        
    Mutation: {
        post: (parent, args, context, info) => createLink(parent, args, context),
    },
};

module.exports = { resolvers: resolvers };