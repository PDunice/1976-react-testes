import React from 'react';
import Conta from './Conta'
import { render, screen, fireEvent } from '@testing-library/react';

describe('componente de conta', () => {
    it('Exibir o saldo da conta como valor monetario', () => {
        render(<Conta saldo={1000} />)
        const saldo = screen.getByTestId('saldo-conta')

        expect(saldo.textContent).toBe('R$ 1000')
    });
    it('Chama a funcao a realizar a transacao quando o botao for clicado', () => {
        const funcaoRealizarTranscao = jest.fn()
        render(<Conta saldo={1000} realizarTransacao ={funcaoRealizarTranscao} />)
        fireEvent.click(screen.getByText('Realizar operação'))
        expect(funcaoRealizarTranscao).toHaveBeenCalled()
    })
})