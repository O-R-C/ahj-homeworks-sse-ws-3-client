import OnlineReport_UI from './OnlineReport_UI'

/**
 * Online report component class
 * @class
 */
export default class OnlineReport {
  /**
   * UI component
   * @type {OnlineReport_UI}
   * @private
   */
  #ui

  /**
   * URL of the SSE server
   * @type {string}
   * @private
   */
  #url

  /**
   * Server API instance
   * @type {ServerApi}
   * @private
   */
  #serverApi

  /**
   * @param {Element} element - element to render the component in
   * @param {ServerApi} [ServerApi] - server API instance
   * @throws {Error} if element or ServerApi is not provided
   */
  constructor(element, ServerApi) {
    if (!element) {
      throw new Error('Element not found')
    }

    if (!ServerApi) {
      throw new Error('ServerApi not found')
    }

    this.#ui = new OnlineReport_UI(element)
    this.#url = 'http://localhost:10000/report'
    this.#serverApi = new ServerApi(this.#url)
    this.#init()
  }

  /**
   * Initializes the component
   * @private
   */
  #init() {
    this.#serverApi.init()
    this.#addListeners()
  }

  /**
   * Adds listeners to receive messages from the server
   * @private
   */
  #addListeners() {
    document.addEventListener('reportMessage', this.#handleReportMessage)
    document.addEventListener('connectionOpen', this.#handleConnectionOpen)
  }

  /**
   * Handles incoming report messages
   * @param {MessageEvent} event - event object
   * @private
   */
  #handleReportMessage = ({ detail: { payload: data } }) => {
    const { type } = data
    type === 'gameStarted' && this.#ui.clear()
    this.#ui.addPost(data)
  }

  /**
   * Handles connection open event
   * @param {Event} event - event object
   * @private
   */
  #handleConnectionOpen = () => {
    this.#ui.clear()
  }
}
