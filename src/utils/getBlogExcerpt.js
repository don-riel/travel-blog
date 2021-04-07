import BlogExcerpt from '../queries/blog-excerpt'

const getBlogExcerpt = (place) => {
    const data = BlogExcerpt();
    let title = null;
    let intro = null;
    let date = null;
    
    data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.place === place) {
            title = node.frontmatter.title;
            intro = node.frontmatter.intro;
            date = node.frontmatter.date;
        }
      }
    )
    return [title, intro, date];
}

export default getBlogExcerpt;