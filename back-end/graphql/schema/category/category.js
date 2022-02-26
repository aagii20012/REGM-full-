const {gql} = require('apollo-server-express');

const categorySchema = gql`
    extend type Query {
        getCategory(
            _id: ID,
            label:String,
        ): Category
        getAllCategory: [Category]
    }
    extend type Mutation {
        createCategory(
            label:String,
        ): Category
        updateCategory(
            _id: ID!,
            label:String,
        ): Category
        deleteCategory(_id: ID!) : ID
    }
    type Category {
        _id: ID,
        label:String,
    }
`

const categoryResolver = {
    Query: {
        getCategory: require('../../queries/category/getCategory'),
        getAllCategory: require('../../queries/category/getAllCategory')
    },
    Mutation: {
        createCategory: require('../../mutations/category/createCategory'),
        updateCategory: require('../../mutations/category/updateCategory'),
        deleteCategory: require('../../mutations/category/deleteCategory'),
    }
}

module.exports = {categorySchema, categoryResolver};