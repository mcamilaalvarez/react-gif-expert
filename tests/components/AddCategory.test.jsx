import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <Add Category/>', () => {


    test('Debe de cambiar el valor de la caja de texto', () => {


        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Inuyasha' } })

        expect(input.value).toBe('Inuyasha')
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Inuyasha';
        const onNewCategory = jest.fn()
        //TODO
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('No debe de llamer el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
     })
})