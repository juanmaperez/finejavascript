import React from 'react'
import styled from 'styled-components'
import SEO from './../components/seo';
import Layout from './../components/layout'
import { graphql } from 'gatsby'
import Image from './../components/image';

const WorkView = styled.div`
  margin: 180px auto 100px;
  box-sizing: border-box;
  width: 40%;
  @media(max-width:1590px){ width: 40% }
  @media(max-width:1100px){ width:55% }
  @media(max-width:878px){ width:75% }
  @media(max-width:510px){
    width:95%;
    padding:25px 0px;
    margin: 100px auto 50px;
  }

  .title-wrapper {
    margin-bottom: 50px;
    h1 {
      text-align: center;
      font-size: 160px;
      color: var(--tertiaryColor);
      margin-bottom: 0px;
      font-weight: normal;
      @media(max-width: 768px){ font-size: 90px}
      @media(max-width: 480px){ font-size: 60px}
    }
    .tags {
      width: 100%;
      text-align: center;
      margin-top: 30px;
      span { 
        font-size: 20px;
        margin: -50px 5px 0;
        &:after {
          content: '|';
          margin-left: 10px;
        }
        &:last-of-type {
          &:after {
            content: '';
          }
        }
      }
    }
  }

  .thumbnail-wrapper {
    text-align: center;
    img {
      max-width: 600px;
      width: 100%;
    }
  }

  .work-content {
    margin-top: 150px;
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 1px;
    color: var(--primaryColor);
    @media(max-width: 480px){
      margin-top: 50px;
      padding: 20px;
    }
    h2 {
      color: var(--secondaryColor);
      margin: 10px 0px 10px;
      font-size: 28px;
      line-height: 1.2;
    }
    p {
      margin-bottom: 45px;
    }

    a {
      color: var(--tertiaryColor);
      text-decoration: none;
    }
    ul {
      margin: 40px 0px 60px;
      li:before {
        content: '💊';
        padding-right: 15px;
        font-size: 14px;
      }
    }
  }

`

const WorkTemplate = ({data, location, pageContext }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html } = work;
  // const { next, prev } = pageContext;
  return (
    <Layout>
      <SEO title={ frontmatter.title } description={frontmatter.excerpt} keywords={frontmatter.tags}/>
      <WorkView>
        <div className="title-wrapper">
          <h1> { frontmatter.title } </h1>
          <div className="tags">
            {frontmatter.tags.map((tag, index)=> (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="thumbnail-wrapper">
          <Image title={ frontmatter.title } imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src } />
        </div>
        
        <div className="work-content" dangerouslySetInnerHTML={{__html: html}}>
        </div>
      
      </WorkView>
    </Layout>
  )
}


export const WorkQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
        thumbnail {
          childImageSharp {
              fluid(maxWidth: 1500) {
                  src
              }
          }
        }
      }
    }
  }
`

export default WorkTemplate