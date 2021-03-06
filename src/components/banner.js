/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      bg: file(relativePath: { eq: "night-sky.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      <BackgroundImage
        sx={{ width: "100%" }}
        fluid={data.bg.childImageSharp.fluid}
      >
        <div
          sx={{
            maxWidth: "maxContentWidth",
            margin: "0 auto",
            py: 5,
            px: 3,
          }}
        >
          <Styled.h1
            sx={{
              textAlign: "center",
              fontSize: [4, 5, null, null, null],
              color: "white",
            }}
          >
            We are a local collaborative that fosters connections and supports
            activities to promote community wellbeing.
          </Styled.h1>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Banner
