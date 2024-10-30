const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}
  
  
const cars = {
    name: "Toyota Landcruiser",
    manufacturingYear: 2004,
    color: "white",
    model: "200 Series",
    weight: 750
}




const products = [
    {
        id: 1,
        name: 'Hp Elitebook 840 G3',
        description: "Some description here",
        image: "https://dummyimages.com/image/01"
    },
    {
        id: 2,
        name: 'Hp Elitebook 1030 G2',
        description: "Some description here",
        image: "https://dummyimages.com/image/01"
    },
    {
        id: 3,
        name: 'Hp Elitebook 850 G3',
        description: "Some description here",
        image: "https://dummyimages.com/image/01"
    }
]

// const students = ["John", "Doe", "Mwangi", "Chemutai"]

// dot notation
// console.log(product.name)

// array notation
// console.log(product['name'])


// array object methods
// map
const productList = products.map((item) => `${item.name} ${item.description} ${item.image}`)

console.log(productList)


const product = {
    id: 1,
    name: 'Hp Elitebook 840 G3',
    description: "Some description here",
    image: "https://dummyimages.com/image/01"
}

product.name = 'Lenovo Carbon X1'

console.log(product)



