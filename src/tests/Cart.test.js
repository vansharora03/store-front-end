import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

it("Should have the proper item total", () => {
    //Mock item
    const mockItem1 = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '11.1',
        'quantity': '7',
        'type': 'console'
    }
    const cartItems = [mockItem1]
    //Render
    render(<Cart cartItems={cartItems}/>)
    //Check
    expect(screen.getByTestId('item-total').textContent).toEqual('77.70')
})

it("Should have proper total", () => {
    //Mock items
    const mockItem1 = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '11.1',
        'quantity': '2',
        'type': 'console'
    }
    const mockItem2 = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '20.00',
        'quantity': '3',
        'type': 'console'
    }
    const cartItems = [mockItem1, mockItem2]
    //Render
    render(<Cart cartItems={cartItems}/>)
    //Check
    expect(screen.getByTestId('total').textContent).toEqual('82.20')
})

