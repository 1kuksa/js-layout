import {
  createElement,
  createHeader,
  createImage,
} from '../../script/layuot'

const page = document.querySelector('.page')
const header = createHeader()

page.append(header)
const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)
const TAB_LIST = [
  {
    text: 'База знань',
    viewed: true,
  },

  {
    text: 'Інформація',
    viewed: false,
  },
]
const main = createElement('main')
page.append(main)
const createTab = () => {
  const tabList = createElement('div', 'tab__list')
  TAB_LIST.forEach((tabData) => {
    const tab = createElement(
      'div',
      tabData.viewed ? 'tab button viewed' : 'tab button',
      tabData.text,
    )
    tabList.append(tab)
  })
  return tabList
}
const tab = createTab()
main.insertAdjacentElement('afterbegin', tab)
const img = createImage()
main.insertAdjacentElement('beforeend', img)
const CONTENT_LIST = [
  {
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,являющуюся результатом решения предыдущих задач.',
  },
]

const createContent = () => {
  const contentList = createElement('div', 'content')
  CONTENT_LIST.forEach((contentData) => {
    const contentTitle = createElement(
      'h2',
      'content__title',
      contentData.title,
    )
    const contentText = createElement(
      'span',
      'content__text',
      contentData.text,
    )
    contentList.append(contentTitle)
    contentList.append(contentText)
  })
  return contentList
}

const content = createContent()
main.insertAdjacentElement('beforeend', content)

const button = createElement(
  'button',
  'link button',
  'Перейти до коммюніті у Телеграм',
)
main.insertAdjacentElement('beforeend', button)
