import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
                  &nbsp;
              <small>
                {' '}
                <em>published on</em>{frontmatter.date}
              </small>
              <p>{frontmatter.excerpt}</p>
              <br />
            </div>
          );
        })}
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>

  )
}
export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`;

export default IndexPage



// import React from 'react';
// import { graphql, Link } from 'gatsby';

// import Layout from '../components/layout';

// const IndexPage = ({ data }) => {
// 	const { edges } = data.allMarkdownRemark;
//   console.log("data", data);
// 	return (
// 		<Layout>
// 			<div>
// 				{edges.map(edge => {
// 					const { frontmatter } = edge.node;
// 					return (
// 						<div key={frontmatter.path}>
// 							<Link to={frontmatter.path}>{frontmatter.title}</Link>
// 							&nbsp;
// 							<small>
// 								{' '}
// 								<em>published on</em> {frontmatter.date}
// 							</small>
// 							<p>{frontmatter.excerpt}</p>
// 							<br />
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</Layout>
// 	);
// };

// export const query = graphql`
// 	query HomePageQuery {
// 		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
// 			totalCount
// 			edges {
// 				node {
// 					id
// 					frontmatter {
// 						title
// 						date(formatString: "MMMM DD, YYYY")
// 						path
// 						tags
// 						excerpt
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

// export default IndexPage;
