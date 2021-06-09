import ProjectScreenshot from '../images/screenshot.svg'
import PizzaScreenshot from '../images/pizza_screenshot.svg'
import MapScreenshot from '../images/Screenshot_Map.svg'

export const featuredProject = {
  title: 'Gesellenstück: Monsters of DnD',
  screenshot: ProjectScreenshot,
  description:
    'Mein Gesellenstück des Bootcamps war ein Monsterkatalog für mein Lieblingshobby "Dungeons and Dragons". Ich konnte hierfür auf eine API zurückgreifen die die Informationen zur Verfügung stellt. Das Projekt ist realisiert mit React.js. Alle Komponenten sind mit Unit-Tests versehen und mit Storybook wurde auch ein interaktiver Styleguide implementiert.',
  github: 'https://github.com/janhenrikfock/monsters-of-dnd',
  deployment: 'https://capstone-project-six.vercel.app/',
}

export const learning = [
  {
    title: 'React Tutorial: Pizzashop',
    screenshot: PizzaScreenshot,
    description:
      'Das Produkt eines weiterführenden Onlinekurses zu meinem TechStack. Ein Pizzashop als Onepager in Desktopformat, umgesetzt mit React.js und Styled-Components.  ',
    github: 'https://github.com/janhenrikfock/react_ordering_app',
    deployment: 'https://react-ordering-app.vercel.app/',
  },
  {
    title: 'JavaScript Tutorial: "Mapty" by Jonas Schmedtmann',
    screenshot: MapScreenshot,
    description:
      'Teil eines JS Onlinekurses. Für mich ist dieses Projekt eine gute Übung im Umgang mit externen Libraries, sowie Code-Architektur und Objektbasiertem Code in VanillaJS. ',
    github: 'https://github.com/janhenrikfock/JSTutorial_Maps',
    deployment: 'https://js-tutorial-maps.vercel.app/',
  },
]
