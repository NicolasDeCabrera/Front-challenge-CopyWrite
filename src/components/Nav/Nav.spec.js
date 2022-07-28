import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render,screen } from "@testing-library/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Nav",()=>{
    let nav=""
    beforeEach(()=>{
        nav = render(
        <Provider store={store}>
            <Nav/>
        </Provider>
        )
    })
    test("deberia poderse escribir en el input",()=>{
        const input = nav.getByPlaceholderText('Search')
        fireEvent.change(input, {target: {value: 'hola'}})
        expect(input.value).toBe("hola")
    })
    test("debe limpiarse el input al buscar",()=>{
        const input = nav.getByPlaceholderText('Search')
        const button = nav.getByText('Search')
        fireEvent.change(input, {target: {value: 'hola'}})
        fireEvent.click(button)
        expect(input.value).toBe("")

    })
    test("debe alertar al usuario si clickea el boton sin ningun valor en el input", async ()=>{
        const button = nav.getByText('Search')
        fireEvent.click(button)
        await screen.findByText('Escribe una palabra')
           
    })
})