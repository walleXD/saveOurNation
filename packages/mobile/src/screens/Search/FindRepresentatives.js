import React from "react"
import {
  Content,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from "native-base"
import Searcher from "containers/Searcher"

const FindRepresentatives = () => (
  <Container>
    <Content padder>
      <Searcher />
    </Content>
  </Container>
)

FindRepresentatives.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Body>
        <Title>Find Your Representatives</Title>
      </Body>
    </Header>
  )
})

export default FindRepresentatives
