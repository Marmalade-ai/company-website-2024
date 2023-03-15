import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
// import Seo from '../../components/seo'

const FaqPage = ({ data }) => {
  return (
    <Layout pageTitle="My FAQ Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/faq/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
     </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

// export const Head = () => <Seo title="My FAQ Posts" />

export default FaqPage