import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "../components/ShopItem";



it('Should render the item', () => {
    //Mock item
    const mockItem = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '11',
        'type': 'console'
    }
    //Test Mock item is rendered
    render(<ShopItem item={mockItem}/>)
    expect(screen.getByRole('heading').textContent).toEqual('Shop Item 1');
})

it('Should add to cart', () => {
    //Mock cart
    let mockCart = [];
    //Mock cart size
    let mockCartSize = 0;

    //Mock addToCart
    const addToCart = (item, amount=1) => {
        item.quantity = item.quanity? item.quanity + parseInt(amount) : parseInt(amount);
        mockCart.push(item);
        mockCartSize += parseInt(amount);
    }
    //Mock item
    const mockItem = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '11',
        'type': 'console'
    }
    //Test is added to cart
    render(<ShopItem item={mockItem} addToCart={addToCart}/>)
    //Click to add to cart
    userEvent.click(screen.getByRole('button'))
    //Should be in cart
    expect(mockCartSize).toEqual(1);
    expect(mockCart[0].id).toEqual(mockItem.id);
})

it('Should add multiple items to the cart', () => {
     //Mock cart
    let mockCart = [];
    //Mock cart size
    let mockCartSize = 0;
    //Mock addToCart
    const addToCart = (item, amount=1) => {
        item.quantity = item.quanity? item.quanity + parseInt(amount) : parseInt(amount);
        mockCart.push(item);
        mockCartSize += parseInt(amount);
    }
    //Mock item
    const mockItem = {
        'imgSrc': 'dummyLink1',
        'name': 'Shop Item 1',
        'id': 'shopItem1',
        'price': '11',
        'type': 'console'
    }
    //Test if multiple items are added
    render(<ShopItem item={mockItem} addToCart={addToCart}/>)
    //Type in quantity and click addToCart
    userEvent.clear(screen.getByTestId('amount'));
    expect(mockCartSize).toEqual(0);
    userEvent.type(screen.getByTestId('amount'), '11')
    userEvent.click(screen.getByRole('button'));
    //Should be in cart
    expect(mockCartSize).toEqual(11);
    expect(mockCart[0].id).toEqual(mockItem.id)
})

it('Should have correct quantity', () => {
     //Mock cart
     let mockCart = [];
     //Mock addToCart
     const addToCart = (item, amount=1) => {
         item.quantity = item.quanity? item.quanity + parseInt(amount) : parseInt(amount);
         mockCart.push(item);
     }
     //Mock item
     const mockItem = {
         'imgSrc': 'dummyLink1',
         'name': 'Shop Item 1',
         'id': 'shopItem1',
         'price': '11',
         'type': 'console'
     }
    //Test if quantity is correct
    render(<ShopItem item={mockItem} addToCart={addToCart}/>)
    //User events
    userEvent.clear(screen.getByTestId('amount'));
    userEvent.type(screen.getByTestId('amount'), '7');
    userEvent.click(screen.getByRole('button'))
    //Quantity should be 7
    expect(mockCart[0].quantity).toEqual(7);
     
})
