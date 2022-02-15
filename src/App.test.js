import React from 'react';

import { render, screen , fireEvent} from '@testing-library/react';

import App, { calcularNovoSaldo } from './App'

describe('Componente Principal', () => {
    describe('Quando eu abro o app do banco', () => {
        it(' Mostrar nome do banco', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })

        it(' mostar saldo', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
        it(' mostrar botao de transacao', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    });
    describe('Quando eu realizo uma transacao ', () => {
        it('#calcularNovoSaldo', () => {
            const valores = {
                transacao :'saque',
                valor :50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150)
            expect(novoSaldo).toBe(100)
        })

        it('realizar saque', ()=>{
            render (<App/>);
            const saldo =  screen.getByText('R$ 1000')
            const transacao= screen.getByLabelText('Saque')
            const valor = screen.getByTestId('valor')
            const botaoTransacao= screen.getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, {target:{value:'Saque'}});
            fireEvent.change(valor, {target: {value:10}});
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990')
            
        })
    })
})