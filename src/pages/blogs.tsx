import Posts, { PostsProps } from 'templates/Posts'

import blogMock from 'components/Blogs/mock'
import { blogsBanner } from 'components/Hero/mock'

export default function Index(props: PostsProps) {
  return <Posts {...props} />
}

export function getStaticProps() {
  return {
    props: {
      blogContent: blogMock,
      blogBanner: blogsBanner
    }
  }
}
