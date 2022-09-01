import './style.css'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import viteLogo from './assets/vite.svg?raw'
import typescriptLogo from './assets/typescript.svg?raw'
import {setupCounter} from './counter.js'

const retrieveContainer = (props: QiankunProps): HTMLElement => (props.container ?? document) as HTMLElement

const render = (props: QiankunProps) => {
  const container = retrieveContainer(props)
  const appContainer = container.querySelector('#app') as HTMLElement
  appContainer.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      ${viteLogo}
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      ${typescriptLogo}
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

  setupCounter(document.querySelector('#counter') as HTMLButtonElement)
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    retrieveContainer(props).innerHTML = ''
  },
  update() {
    console.log('update')
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}