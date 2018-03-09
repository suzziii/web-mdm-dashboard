import { I18n } from 'react-i18nify'

import Overview from './components/Overview/'
import SystemInformation from './components/SystemInformation/'
import HelpCenter from './components/HelpCenter/'
import Contact from './components/Contact/'
import ReleaseNotes from './components/ReleaseNotes'
import TermsOfUse from './components/TermsOfUse'
import Licence from './components/License'

const routes = [
  {
    path: '/',
    name: I18n.t('about.overview'),
    component: Overview,
    exact: true
  },
  {
    path: '/system',
    name: I18n.t('about.system_information'),
    component: SystemInformation,
    exact: false
  },
  {
    path: '/help',
    name: I18n.t('about.help_center'),
    component: HelpCenter,
    exact: false
  },
  {
    path: '/contact',
    name: I18n.t('about.contact'),
    component: Contact,
    exact: false
  },
  {
    path: '/release',
    name: I18n.t('about.release_notes'),
    component: ReleaseNotes,
    exact: false
  },
  {
    path: '/term',
    name: I18n.t('about.term_of_use'),
    component: TermsOfUse,
    exact: false
  },
  {
    path: '/license',
    name: I18n.t('about.license'),
    component: Licence,
    exact: false
  }
]

export default routes