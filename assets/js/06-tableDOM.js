const inputSearch = document.querySelector(`#input_search`);
const btnSearch = document.querySelector(`#btn_search`);
const tableBody = document.querySelector(`#table_body`);

const products = [
  { id: "PRD01", name: "Vanilla Ice Cream 5L", price: 12.99 },
  { id: "PRD02", name: "Chocolate Ice Cream 5L", price: 13.99 },
  { id: "PRD03", name: "Ice Cubes Bag 2kg", price: 4.50 },
  { id: "PRD04", name: "Mineral Water 1.5L", price: 2.25 },
  { id: "PRD05", name: "Sparkling Water 500ml", price: 1.80 },
  { id: "PRD06", name: "Cola Soda 2L", price: 3.50 },
  { id: "PRD07", name: "Orange Juice 1L", price: 3.20 },
  { id: "PRD08", name: "Apple Juice 1L", price: 3.10 },
  { id: "PRD09", name: "Energy Drink 500ml", price: 2.90 },
  { id: "PRD10", name: "Iced Tea Lemon 1.5L", price: 2.70 },
  { id: "PRD11", name: "Frozen Pizza Margherita", price: 6.99 },
  { id: "PRD12", name: "Frozen Pizza Pepperoni", price: 7.49 },
  { id: "PRD13", name: "Frozen French Fries 1kg", price: 4.99 },
  { id: "PRD14", name: "Frozen Chicken Nuggets 1kg", price: 8.99 },
  { id: "PRD15", name: "Milk 1L", price: 1.60 },
  { id: "PRD16", name: "Chocolate Milk 1L", price: 1.90 },
  { id: "PRD17", name: "Coffee Beans 500g", price: 9.50 },
  { id: "PRD18", name: "Ground Coffee 250g", price: 5.40 },
  { id: "PRD19", name: "Green Tea Box (20 bags)", price: 4.20 },
  { id: "PRD20", name: "Black Tea Box (20 bags)", price: 4.00 }
];

function renderRow(products){
    let HTMLcontent = "";

    products.forEach((product) => {
        HTMLcontent += 
                        `<tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                        </tr>`;
    });

    tableBody.innerHTML = HTMLcontent;
}

renderRow(products);

btnSearch.addEventListener(`click`, () =>{
    const checkValue = inputSearch.value;

    const filteredProducts = products.filter(
        (product) => product.price >= checkValue
    );

renderRow(filteredProducts)

});