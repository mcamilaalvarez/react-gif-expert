import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 

    test('No debe incluir la categoria si ya existe', () => { 
        const {container} = render(<GifExpertApp/>);

        const form = screen.getByRole('form');
        const input =  screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Inuyasha'} })
        fireEvent.submit(form)

        fireEvent.input(input, { target: { value: 'Inuyasha'} })
        fireEvent.submit(form)
         expect(container.getElementsByClassName('card-grid').length).toBe(3);
        
    })

    test('Debe agregar una nueva categoria', () => { 

        const {container} = render(<GifExpertApp/>);

        const form = screen.getByRole('form');
        const input =  screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Inuyasha'} })
        fireEvent.submit(form)

        fireEvent.input(input, { target: { value: 'Jinshi'} })
        fireEvent.submit(form)

        expect(container.getElementsByClassName('card-grid').length).toBe(4);

    })
   
     
})