const Post = require('../../../model/post_model');

const myCustomLabels = {
    totalDocs: 'postCount',
    docs: 'posts',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
  };

module.exports = async function (parent, args, context, info) {
    console.log("getPostAll")

    const options = {
        page: args.page|| 1,
        limit: args.limit|| 10,
        customLabels: myCustomLabels,
    };

    const posts=await Post.paginate({},options);

    return posts;
}