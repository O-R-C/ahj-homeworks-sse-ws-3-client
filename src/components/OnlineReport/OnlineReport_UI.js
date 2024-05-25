import BaseUI from '@/js/Classes/BaseUI'
import getElement from '@/js/getElement'
import ReportPost from '../ui/ReportPost/ReportPost'

import styles from './OnlineReport.module.css'

/**
 * UI class for OnlineReport component
 */
export default class OnlineReport_UI extends BaseUI {
  /**
   * Creates OnlineReport app element
   * @returns {Element} app element
   */
  createApp() {
    const app = getElement({
      tag: 'div',
      classes: styles['online-report'],
    })

    return app
  }

  /**
   * Adds new report post to the app
   * @param {Object} post - report post data
   */
  addPost(post) {
    const postElement = ReportPost(post)
    this.app.append(postElement)
    postElement.scrollIntoView({ behavior: 'smooth' })
  }

  /**
   * Clears the app
   */
  clear() {
    this.app.innerHTML = ''
  }
}
