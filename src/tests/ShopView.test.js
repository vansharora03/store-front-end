import { render, screen } from "@testing-library/react"
import ShopView from "../components/ShopView"

jest.mock('../components/ShopItem', () => ({item}) => {
    return (<div data-testid="item">
                <div data-testid="imgSrc">{item.imgSrc}</div>
                <div data-testid="name">{item.name}</div>
                <div data-testid="id">{item.id}</div>
                <div data-testid="price">{item.price}</div>
            </div>)
})

const mockItem1 = {
    'imgSrc': 'dummyLink1',
    'name': 'Shop Item 1',
    'id': 'shopItem1',
    'price': '11',
    'type': 'phone'
}
const mockItem2 = {
    'imgSrc': 'dummyLink2',
    'name': 'Shop Item 2',
    'id': 'shopItem3',
    'price': '22',
    "type": "laptop"
}
const mockItem3 = {
    'imgSrc': 'dummyLink3',
    'name': 'Shop Item 3',
    'id': 'shopItem3',
    'price': '33',
    'type': 'console'
}

it('Should render multiple items', () => {
    render(<ShopView items={[mockItem1, mockItem2, mockItem3]}/>)
    //Check length
    expect(screen.queryAllByTestId('item').length).toBe(3)

    expect(screen.queryAllByTestId('imgSrc')[0].textContent).toEqual(mockItem1.imgSrc)
    expect(screen.queryAllByTestId('name')[0].textContent).toEqual(mockItem1.name)
    expect(screen.queryAllByTestId('id')[0].textContent).toEqual(mockItem1.id)
    expect(screen.queryAllByTestId('price')[0].textContent).toEqual(mockItem1.price)

    expect(screen.queryAllByTestId('imgSrc')[1].textContent).toEqual(mockItem2.imgSrc)
    expect(screen.queryAllByTestId('name')[1].textContent).toEqual(mockItem2.name)
    expect(screen.queryAllByTestId('id')[1].textContent).toEqual(mockItem2.id)
    expect(screen.queryAllByTestId('price')[1].textContent).toEqual(mockItem2.price)

    expect(screen.queryAllByTestId('imgSrc')[2].textContent).toEqual(mockItem3.imgSrc)
    expect(screen.queryAllByTestId('name')[2].textContent).toEqual(mockItem3.name)
    expect(screen.queryAllByTestId('id')[2].textContent).toEqual(mockItem3.id)
    expect(screen.queryAllByTestId('price')[2].textContent).toEqual(mockItem3.price)
})

