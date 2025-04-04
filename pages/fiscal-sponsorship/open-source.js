import {
  Avatar,
  Badge,
  BaseStyles,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text
} from 'theme-ui'
import {
  PillHolder,
  AuthorPill,
  DatePill
} from '../../components/announcements/pills'
import Head from 'next/head'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import theme from '../../lib/theme'
import Meta from '@hackclub/meta'
import Nav from '../../components/nav'
import ForceTheme from '../../components/force-theme'
import Footer from '../../components/footer'
import Copy from '../../components/announcements/hcb-open-source.mdx'
import Amount from '../../components/announcements/amount'
import SlackCTA from '../../components/announcements/cta'
import AnnouncementHolder from '../../components/announcements/holder'

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${theme.colors.white};
`

const RelonLink = props => {
  const { href } = props
  return (
    <NextLink href={href} passHref>
      <StyledLink>{props.children}</StyledLink>
    </NextLink>
  )
}

const RelonPage = () => (
  <>
    <Meta
      as={Head}
      title="HCB is now open source!"
      description="Our fiscal sponsorship platform’s codebase is now publicly available under the AGPL license and we’re continuing to encourage transparency amongst nonprofits."
      image="https://cloud-6w46cupdh-hack-club-bot.vercel.app/0social-card.png"
    />
    <ForceTheme theme="light" />
    <Nav />
    <Box
      as="section"
      sx={{
        pt: [5, 6],
        pb: [4, 5],
        bg: 'rgb(104, 41, 205)',
        backgroundImage: theme => theme.util.gx('purple', 'orange')
      }}
    >
      <Container sx={{ textAlign: 'center', color: 'white' }}>
        <Heading
          as="h1"
          variant="title"
          sx={{
            fontSize: [5, 6, null, 7],
            span: {
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: ['2px', '3px'],
              WebkitTextFillColor: 'transparent'
            }
          }}
        >
          <RelonLink href="/fiscal-sponsorship">HCB</RelonLink> is now open source!
        </Heading>
        <Heading
          as="h2"
          variant="title"
          sx={{
            fontSize: [5, 5, 5, 5],
            fontWeight: 400,
            marginTop: '24px',
            maxWidth: '900px',
            mx: 'auto'
          }}
        >
          Our fiscal sponsorship platform’s <RelonLink href="https://github.com/hackclub/hcb">codebase</RelonLink> is now publicly available under the AGPL license and we’re continuing to encourage transparency amongst nonprofits.
        </Heading>
      </Container>
    </Box>
    <AnnouncementHolder>
      <PillHolder>
        <AuthorPill
          firstName="Sam"
          tag="Sam Poder"
          image="https://github.com/sampoder.png"
        />
        <AuthorPill
          firstName="Ian"
          tag="Ian Madden"
          image="https://github.com/YodaLightsabr.png"
        />
        <AuthorPill
          firstName="Gary"
          tag="Gary Tou"
          image="https://github.com/garyhtou.png"
        />
        <DatePill tag="Mar 29, 2025" />
      </PillHolder>
      <Copy />
    </AnnouncementHolder>
    <SlackCTA />
    <Footer />
  </>
)

export default RelonPage
