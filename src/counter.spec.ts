import {describe, expect, it} from 'vitest'

import {setupCounter} from './counter'

describe('counter', () => {
    it('correctly increment', () => {
        const button = document.createElement('button')

        setupCounter(button)

        new Array(10).forEach((_, index) => {
            expect(button.innerHTML).toBe(`count is ${index}`)
            button.click()
        })
    })
})