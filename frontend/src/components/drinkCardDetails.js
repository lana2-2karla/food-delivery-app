import React from 'react'

function DrinkCardDetails () {
  return (
      <div className="mx-auto bg-white p-10 md:pl-72 md:pt-10">
        <div>
            <div className="pb-2 md:pl-10">
                <p className="text-xl">Bebidas:</p>
            </div>
            <div className="shadow-lg p-10">
                <img src="https://sachefmio.blob.core.windows.net/fotos/refrigerante-lata-350ml-98091.jpg" alt="drinkImage"/>
                <p>Refrigerante</p>
            </div>
            <div className="shadow-lg p-10">
                <img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k7X5DQ6J/200/200/original?country=br" alt="drinkImage"/>
                <p>Água</p>
            </div>
            <div className="shadow-lg p-10">
                <img src="https://www.natuslanches.com.br/wp-content/uploads/2014/12/natus-lanches-passo-fundo-20-sucos-natural-31-200x200.png" alt="drinkImage"/>
                <p>Suco</p>
            </div>
        </div>
      </div>
  )
}
export default DrinkCardDetails
