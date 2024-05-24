import getElement from '@/js/getElement'

import styles from './ReportPost.module.css'

/**
 * Generates a report post element with the given type, date, and description.
 *
 * @param {Object} props - The properties for the report post.
 * @param {string} props.type - The type of the report post ('goal' or 'freekick').
 * @param {string} props.date - The date of the report post.
 * @param {string} props.description - The description of the report post.
 * @return {HTMLElement} The generated report post element.
 */
export const ReportPost = ({ type, date, description }) => {
  const post = getElement({
    tag: 'div',
    classes: styles['report-post'],
  })

  const iconWrapper = getElement({
    tag: 'div',
    classes: styles['icon-wrapper'],
  })
  const icon = getElement({
    tag: 'div',
    classes: styles['icon'],
  })

  if (type === 'goal') {
    icon.classList.add(styles['goal'])
  }
  if (type === 'freekick') {
    icon.classList.add(styles['freekick'])
  }

  const content = getElement({
    tag: 'div',
    classes: styles['content'],
  })

  const dateElement = getElement({
    tag: 'div',
    classes: styles['date'],
    textContent: date,
  })

  const text = getElement({
    tag: 'p',
    classes: styles['text'],
    textContent: description,
  })

  iconWrapper.append(icon)
  content.append(dateElement, text)
  post.append(iconWrapper, content)

  return post
}

export default ReportPost
