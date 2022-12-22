import React, { useState, useEffect } from 'react';

function Goods() {

    const [arrChooseClothes, setArrChooseClothes] = useState([])

    let arrClothes = [{
        name: "кроссовки",
        price: 4500,
        img: 'https://cdn1.ozone.ru/s3/multimedia-z/wc1000/6450553175.jpg',
        id: 1
    }, {
        name: "Рубашка",
        price: 2500,
        img: 'https://britishstyle.ru/images/detailed/16/7607a_6_.jpg',
        id: 2
    }, {
        name: "Шорты",
        price: 1000,
        img: 'https://cdn.sela.ru/wa-data/public/shop/products/25/99/119925/images/178557/178557.932x1242.jpg',
        id: 3
    }, {
        name: "Пальто",
        price: 15000,
        img: 'https://edem-room.ru/image/cache/catalog/2021/shubi-sherst/240821050-1-800x1200.jpg',
        id: 4
    }, {
        name: "Футболка",
        price: 3500,
        img: 'https://kkaravaev.com/wa-data/public/shop/products/27/23/12327/images/19376/19376.1200.jpg',
        id: 5
    }]

    const choose = (id) => {
        let newArrClothes = [...arrChooseClothes];

        for (let i = 0; i < arrClothes.length; i++) {

            if (arrClothes[i].id === id) {
                newArrClothes.push(arrClothes[i])
                break
            }
        }
        console.log({ newArrClothes })
        setArrChooseClothes(newArrClothes)
    }

    return (
        <>
            <h1>Товары</h1>
            <div id="container">
                {arrClothes.map(
                    (item) => {
                        return <div className="card" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}><div className="info"><span style={{ backgroundColor: 'white' }}>{item.name}</span><br /><button className='add-button' onClick={() => choose(item.id)}>Кнопка</button></div></div>
                    }
                )}
            </div>

        </>
    )
}

export default Goods