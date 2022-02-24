const {gql} = require('apollo-server-express');

const userSchema = gql`
    type Query {
        getUser(
            _id: ID
            first_name: String
            last_name: String
            email: String
            password: String
            isAdmin: String
        ): User
        getAllUser: [User]
    }
    type Mutation {
        createUser(
            first_name: String
            last_name: String
            email: String
            password: String
            isAdmin: String
        ): User
        updateUser(
            _id: ID!
            first_name: String
            last_name: String
            email: String
            password: String
            isAdmin: String
        ): User
        deleteUser(_id: ID!) : ID
    }
    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        isAdmin: String
    }
`

const userResolver = {
    Query: {
        getUser: require('../../queries/user/getUser')
    },
    Mutation: {
        createUser: require('../../mutations/user/createUser'),
        updateUser: require('../../mutations/user/updateUser'),
        deleteUser: require('../../mutations/user/deleteUser'),
    }
}

module.exports = {userSchema, userResolver};