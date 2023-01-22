import Shop from "../components/Shop";
import { screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import data from "../assets/data/shoptItemData";

let renderedItems = [];
//Mock ShopView 
jest.mock('../components/ShopView', ()=>({items})=>{
    renderedItems = items;
    return (
        <div>
            {items.map(item => <div data-testid={item.type} key={item.id}>{JSON.stringify(item)}</div>)}
        </div>
    )
})

//Console list
const consoles = data.filter(item => item.type === 'console');

it('Should display consoles', () => {
    render(<Shop addToCart={null}/> )
    //User events
    userEvent.click(screen.getAllByRole('button')[3])
    //Check that all rendered items are consoles
    expect(renderedItems.length).toEqual(consoles.length)
    expect(renderedItems.length).toEqual(screen.getAllByTestId('console').length)
})

it('Should display all items', () => {
    render(<Shop addToCart={null}/>)
    //User events
    userEvent.click(screen.getAllByRole('button')[0]);
    //Check that all items are rendered
    expect(renderedItems.length).toEqual(data.length);
})

