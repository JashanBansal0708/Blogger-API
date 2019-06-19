import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT || 'http://192.168.99.100:4466',
    secret: 'thisisjimmysecret',
    fragmentReplacements
})

export { prisma as default }