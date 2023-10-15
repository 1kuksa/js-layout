import {
  createElement,
  createHeader,
} from '../../script/layuot'

const page = document.querySelector('.page')
const header = createHeader()

page.append(header)
const title = createElement('h1', 'title', 'Мій блог')
page.append(title)
const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 'important' },
      { text: 'Нова', id: 'new' },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс ',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 'new' }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewed: true,
  },
  {
    category: [
      { text: 'Важливо', id: 'important' },
      { text: 'Нова', id: 'new' },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс ',
    date: '25.01',
    viewed: false,
  },
]
const createPost = () => {
  const postList = createElement('main')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'card button viewed'
        : 'card button',
    )

    const postHeader = createElement('div', 'header_card')

    const categoryList = createElement(
      'div',
      'card__status',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `card--status ${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'content',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    postList.append(post)
  })
  return postList
}

const post = createPost()
page.append(post)
