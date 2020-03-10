/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const { logo, title } = useSiteMetadata()
  return (
    <header
      sx={{
        pt: 3,
        pb: 5,
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
          sx={{ width: ["300px", "400px", "500px", null, null] }}
          fluid={logo}
          alt={title}
        />
      </div>
    </header>
  )
}

export default SiteHeader
