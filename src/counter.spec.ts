import {describe, expect, it} from 'vitest'

import {setupCounter} from './counter'

describe('counter', () => {
    it('correctly increment', () => {
        const button = document.createElement('button')

        setupCounter(button)

        expect(button.innerHTML).toBe('count is 0')
    })
})