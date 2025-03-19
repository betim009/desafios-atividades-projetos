import { describe, expect, test } from 'vitest'
import { sum } from './sum'


describe('Testando a função "sum"', () => {
    test('Somando 4 + 4', () => {
        expect(sum(4, 4)).toBe(8)
    })

    test('Somando -2 + 4', () => {
        expect(sum(-2, 4)).toBe(2)
    })
})