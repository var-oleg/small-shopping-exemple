import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import Main from "./components/Main/Main";

import React, {useState} from "react";
import data from './store/data';

function App() {
    const {products} = data;
    const [cardItem, setCardItem] = useState([]);

    const onAddHandler = (products) => {
        const exist = cardItem.find(x => x.id === products.id);
        if (exist) {
            setCardItem(cardItem.map(x =>
                x.id === products.id ? {...exist, qty: exist.qty + 1} : x));
        } else {
            setCardItem([...cardItem, {...products, qty: 1}])
        }
    };

    const onRemoveHandler = (products) => {
        const exist = cardItem.find(x => x.id === products.id);
      if (exist.qty === 1) {
          setCardItem(cardItem.filter(x => x.id !== products.id))
      } else {
          setCardItem(cardItem.map(x =>
              x.id === products.id ? {...exist, qty: exist.qty - 1} : x));
      }
    };

    return (
        <div className="App">
            <Header countCardsItems = {cardItem.length}/>
            <div className='row'>
                <Main onAddHandler = {onAddHandler} onRemoveHandler = {onRemoveHandler} products={products}/>
                <Basket onAddHandler = {onAddHandler} onRemoveHandler = {onRemoveHandler} cardItem={cardItem}/>
            </div>
        </div>
    );
}

export default App;
