export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/icon.png',
  },
]

const TELEGRAM_IMAGE = [
  {
    src: '/img/telegram.png',
    alt: 'telegram',
  },
]
export const createImage = () => {
  const div = createElement('div', 'image')
  TELEGRAM_IMAGE.forEach((params) => {
    const img = createElement('img', 'telegram')
    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    div.insertAdjacentElement('afterbegin', img)
  })
  return div
}

export const createHeader = () => {
  const header = createElement('nav', 'nav')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })
  return header
}
