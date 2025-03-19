import { describe, expect, test } from 'vitest'
import { Button } from './button'
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";


describe('Testando a função "sum"', () => {
    beforeEach(() => {
        document.body.innerHTML = ''; // Limpa o body antes de cada teste
    });

    test('Verificando o texto do button', () => {
        Button();
        const button = screen.getByText('1');

        expect(button).toBeInTheDocument();
    })

    test('Verificando se o botão atualiza o texto ao clicar', async () => {
        Button();
        const button = screen.getByText('1');

        await userEvent.click(button);
        expect(button.textContent).toBe('2');
    });
})