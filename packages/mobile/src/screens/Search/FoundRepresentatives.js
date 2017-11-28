import React, { PureComponent } from "react"
import { Content, Container } from "native-base"

import SearchResults from "containers/SearchResults"

const FindRepresentatives = () => (
  <Container>
    <Content padder>
      <SearchResults />
    </Content>
  </Container>
)

export default FindRepresentatives
