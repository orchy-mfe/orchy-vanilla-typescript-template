import {getByText, fireEvent} from '@testing-library/dom'

import {describe, it, expect} from 'vitest'

const appContainer = document.createElement('vanilla-mfe-typescript')

document.body.appendChild(appContainer)

import './main'

describe('main', () => {
    it('renders correctly', () => {
        expect(getByText(document.body, 'Click on the Vite and TypeScript logos to learn more')).toBeDefined()
    })

    it('count increments correctly', () => {
        const initialCountButton = document.getElementById('counter') as HTMLElement
        expect(initialCountButton).toBeDefined()
        expect(initialCountButton.innerHTML).toEqual('count is 0')

        fireEvent.click(initialCountButton)

        expect(initialCountButton.innerHTML).toEqual('count is 1')
    })
})