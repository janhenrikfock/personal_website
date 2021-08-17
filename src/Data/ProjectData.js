import ProjectScreenshot from '../images/screenshot.svg'
import PizzaScreenshot from '../images/pizza_screenshot.svg'
import MapScreenshot from '../images/Screenshot_Map.svg'
import reactIcon from '../images/react_icon.svg'
import jsIcon from '../images/Icon_JS.svg'
import CounterScreen from '../images/counter-screen.png'

export const featuredProjects = [
  {
    title: 'Codechallenge: Flipcard Countdown',
    display: 'Responsive',
    screenshot: CounterScreen,
    techIcon: reactIcon,
    description:
      'Meine Lösung zu der Flipcard-Countdown Challenge von FrontendMentor.io. Neben React.js und Styled-Components für CSS habe ich react-spring für die Animation angewendet.',
    github: 'https://github.com/janhenrikfock/flipcard-countdown',
    deployment: 'https://flipcard-countdown.vercel.app/',
  },
  {
    title: 'Gesellenstück: Monsters of DnD',
    display: 'Mobile first',
    screenshot: ProjectScreenshot,
    techIcon: reactIcon,
    description:
      'Mein Gesellenstück des Bootcamps war ein Monsterkatalog für mein Hobby "Dungeons and Dragons". Ich konnte hierfür auf eine API zurückgreifen die die Informationen zur Verfügung stellt. Das Projekt ist realisiert mit React.js. Alle Komponenten sind mit Unit-Tests versehen und mit Storybook wurde auch ein interaktiver Styleguide implementiert.',
    github: 'https://github.com/janhenrikfock/monsters-of-dnd',
    deployment: 'https://capstone-project-six.vercel.app/',
  },
]

export const learning = [
  {
    title: 'React Tutorial: Pizzashop',
    display: 'Desktop only',
    screenshot: PizzaScreenshot,
    techIcon: reactIcon,
    description:
      'Das Produkt eines weiterführenden Onlinekurses zu meinem TechStack. Ein Pizzashop als Onepager im Desktopformat, umgesetzt mit React.js und Styled-Components.  ',
    github: 'https://github.com/janhenrikfock/react_ordering_app',
    deployment: 'https://react-ordering-app.vercel.app/',
  },
  {
    title: 'JavaScript Tutorial: "Mapty" by Jonas Schmedtmann',
    display: 'Desktop only',
    screenshot: MapScreenshot,
    techIcon: jsIcon,
    description:
      'Teil eines JS Onlinekurses. Für mich ist dieses Projekt eine gute Übung im Umgang mit externen Libraries, sowie Code-Architektur und Objektbasiertem Code in VanillaJS. ',
    github: 'https://github.com/janhenrikfock/JSTutorial_Maps',
    deployment: 'https://js-tutorial-maps.vercel.app/',
  },
]
