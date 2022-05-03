import { Post } from 'templates'

export default function Index() {
  return <Post />
}

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'alimentos-para-fortificar-seu-sangue' } }],
    fallback: false
  }
}

export function getStaticProps() {
  return {
    props: {}
  }
}
