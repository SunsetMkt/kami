import AppStore from './app'
import { Stores } from './types'
import UserStore from './user'
import SocialStore from './social'
import PageStore from './pages'

export default function createMobxStores(): Stores {
  return {
    appStore: new AppStore(),
    userStore: new UserStore(),
    socialStore: new SocialStore(),
    pageStore: new PageStore(),
  }
}
