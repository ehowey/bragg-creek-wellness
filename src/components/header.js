/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import { useSiteMetadata, SocialHeader } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const { logo, title } = useSiteMetadata()
  return (
    <header
      sx={{
        pt: 3,
        gridArea: "header",
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Img
          sx={{ width: ["200px", "300px", "300px", null, null] }}
          fluid={logo}
          alt={title}
        />
        <Styled.h1
          sx={{
            fontSize: [4, 5, 6, null, null],
          }}
        >
          Kind. Inclusive. Cochrane.
        </Styled.h1>
      </div>
      <div
        sx={{
          bg: "primary",
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          py: 2,
          my: 3,
        }}
      >
        <div
          sx={{
            maxWidth: "maxContentWidth",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto, auto, auto",
            gridAutoFlow: "column",
            gridGap: 3,
            justifyItems: "center",
            a: {
              color: "white",
            },
          }}
        >
          <SocialHeader />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
