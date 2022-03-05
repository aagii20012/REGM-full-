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
        getPostByLimit(
            page:Int,
            limit:Int
        ): PostPanitor!
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
    type PostPanitor {
        posts: [Post!]
        paginator:PostLabel
    }

    type PostLabel{
        postCount: Int!
        perPage: Int!
        pageCount: Int!
        currentPage: Int!
        slNo: Int!
        hasNextPage: Boolean!
        hasPrevPage: Boolean!
        prev: Int
        next: Int
    }
`

const postResolver = {
    Query: {
        getPost: require('../../queries/post/getPost'),
        getAllPost: require('../../queries/post/getAllPost'),
        getPostByLimit: require('../../queries/post/getPostByLimit'),
    },
    Mutation: {
        createPost: require('../../mutations/post/createPost'),
        updatePost: require('../../mutations/post/updatePost'),
        deletePost: require('../../mutations/post/deletePost'),
    }
}

module.exports = {postSchema, postResolver};