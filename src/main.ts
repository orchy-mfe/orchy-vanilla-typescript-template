import './style.css'
import viteLogo from './assets/vite.svg?raw'
import typescriptLogo from './assets/typescript.svg?raw'
import {setupCounter} from './counter.js'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'

export class VanillaMfeTypeScript extends OrchyMicroFrontend {
  async mount() {
    this.getContainer().innerHTML = `
      <div>
        <a class="logo" href="https://vitejs.dev" target="_blank">
          ${viteLogo}
        </a>
        <a class="logo vanilla" href="https://www.typescriptlang.org/" target="_blank">
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

  async unmount() {
    this.getContainer().innerHTML = ''
  }
}

customElements.define('vanilla-mfe-typescript', VanillaMfeTypeScript)