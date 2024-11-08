import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Inuyasha';
    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Inuyasha',
            url: 'https://localhost/inuyasha.jpg'
        },
        {
            id: '123',
            title: 'Jinshi',
            url: 'https://localhost/jinshi.jpg'
        }

        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})