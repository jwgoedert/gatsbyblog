import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({ data, pathContext }) => {
    const title = data.markdownRemark.frontmatter.title;
    const date = data.markdownRemark.frontmatter.date;
    const html = data.markdownRemark.html;
    const tags = data.markdownRemark.frontmatter.tags;
    const { next, prev } = pathContext;
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <em>{date}</em>
            </div>
            <div>
                <em><b>{tags[0]}, {tags[1]}</b></em>
            </div>

            <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
            <p>
                {prev && (
                    <Link to={prev.frontmatter.path}>
                        {prev.frontmatter.title}{' '}
                        <span role="img" aria-label="point-left">
                            👈{' '}
                        </span>
                        previous
                    </Link>
                )}
            </p>
            <p>
                {next && (
                    <Link to={next.frontmatter.path}>
                        next{' '}
                        <span role="img" aria-label="point-left">
                            👉
                        </span>
                        {next.frontmatter.title}

                    </Link>
                )}
            </p>
            <p>
                <Link to="/">home</Link> <br />

            </p>
        </div>
    );
};

export const postQuery = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: {path: {eq: $pathSlug }}){
            html 
            frontmatter {
                title 
                date(formatString:"MMMM, DD, YYYY")
                path 
                tags
                excerpt
            }
        }
    }`;

export default Template;