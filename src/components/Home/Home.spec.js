import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home"
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Home",()=>{
    test("debe renderizar el texto invertido al buscar una palabra", async ()=>{
       const home = render(
            <Provider store={store}>
                <Home/>
            </Provider>
            )
        const input = home.getByPlaceholderText('Insert text')
        const button = home.getByText('Send')
        fireEvent.change(input, {target: {value: 'hola'}})
        fireEvent.click(button)
        await screen.findByText('aloh')
    })
    test("debe renderizar el texto invertido que contiene 'palindromo' al buscar un texto palindromo", async ()=>{
        const home = render(
            <Provider store={store}>
                <Home/>
            </Provider>
            )
        const input = home.getByPlaceholderText('Insert text')
        const button = home.getByText('Send')
        fireEvent.change(input, {target: {value: 'ana'}})
        fireEvent.click(button)
        await screen.findByText('Palindromo')
       
    })
    test("debe alertar al usuario que solo se ingresa texto", async ()=>{
        const home = render(
            <Provider store={store}>
                <Home/>
            </Provider>
            )
        const input = home.getByPlaceholderText('Insert text')
        const button = home.getByText('Send')
        fireEvent.change(input, {target: {value: '123'}})
        fireEvent.click(button)
        await screen.findByText('Tienes que ingresar solo texto')
       
    })

})