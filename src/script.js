const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const newLinks = await prisma.link.create({
        data: {
            description: 'Tutorial for GraphQL',
            url: 'www.howtographql.com'            
        }
    })
    const allLinks = await prisma.link.findMany();
    console.log(allLinks);
}

main()
    .catch( e => { throw e })
    .finally( async () => { await prisma.$disconnect() });