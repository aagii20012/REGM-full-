const {gql} = require('apollo-server-express');

const userSchema = gql`
    type Query {
        Login(
            email: String
            password: String
        ): Token
        Decode(
            token: String!
        ): User
        getAllUser: [User]
    }
    type Mutation {
        createUser(
            first_name: String
            last_name: String
            email: String
            password: String
            isAdmin: Boolean
        ): Token
        updateUser(
            _id: ID!
            first_name: String
            last_name: String
            email: String
            password: String
            isAdmin: Boolean
        ): User
        deleteUser(_id: ID!) : ID
    }
    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        isAdmin: Boolean
    }
    type Token{
        token:String!
    }
`

const userResolver = {
    Query: {
        Login: require('../../queries/user/getUser'),
        Decode: require('../../queries/user/decodeToken'),
        getAllUser: require('../../queries/user/getAllUser')
    },
    Mutation: {
        createUser: require('../../mutations/user/createUser'),
        updateUser: require('../../mutations/user/updateUser'),
        deleteUser: require('../../mutations/user/deleteUser'),
    }
}

module.exports = {userSchema, userResolver};