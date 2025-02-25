import api from './api';
import React from 'react';
import App from './App'

import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('./api')
describe('Requisicoes para API', () => {
    it('Exibir liste de transacoes atraves da API', async () => {
        api.listaTransacoes.mockResolvedValue ( [
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
            }
        ])
        render(<App/>)
        
        expect(await screen.findByText('saque')).toBeInTheDocument()
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})