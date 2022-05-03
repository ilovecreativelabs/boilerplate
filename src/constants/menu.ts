import { v4 } from 'uuid'

import Route, { TRoute } from 'constants/routes'

const navigation = [
  { name: 'Home', route: Route.Home, id: v4() },
  { name: 'Blog', route: Route.Blog, id: v4() },
  { name: 'Quem somos', route: Route.AboutUs, id: v4() },
  { name: 'Contatos', route: Route.Contact, id: v4() }
] as Array<{ name: string; route: TRoute; id: string }>

export default navigation
