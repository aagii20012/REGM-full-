const {gql} = require('apollo-server-express');

const postSchema = gql`
    extend type Query {
        getPost(
            _id: ID,
            title:String,
            category:String,
            date:String,
            person:String,
            comment:Int,
            description:String,
            img:String,
        ): Post
        getAllPost: [Post]
    }
    extend type Mutation {
        createPost(
            title:String,
            category:String,
            date:String,
            person:String,
            comment:Int,
            description:String,
            img:String,
        ): Post
        updatePost(
            _id: ID!,
            title:String,
            category:String,
            date:String,
            person:String,
            comment:Int,
            description:String,
            img:String,
        ): Post
        deletePost(_id: ID!) : ID
    }
    type Post {
        _id: ID,
        title:String,
        category:String,
        date:String,
        person:String,
        comment:Int,
        description:String,
        img:String,
    }
`

const postResolver = {
    Query: {
        getPost: require('../../queries/post/getPost'),
        getAllPost: require('../../queries/post/getAllPost')
    },
    Mutation: {
        createPost: require('../../mutations/post/createPost'),
        updatePost: require('../../mutations/post/updatePost'),
        deletePost: require('../../mutations/post/deletePost'),
    }
}

module.exports = {postSchema, postResolver};