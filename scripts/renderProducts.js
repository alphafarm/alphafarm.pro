function renderProducts() {
    var productList = document.getElementById('products-offers');
    var productsHTML = '';

    products.forEach(function (product) {

        var titleHTML = `
            <div class="title-box" id="offer">
                <div class="front">
                    <h1 class="subtitle text-shadow">
                        ${product.title}
                    </h1>
                </div>
                <div class="back">
                    <h1 class="title text-color-purple text-shadow">OFERTA</h1>
                </div>
            </div>
            <div class="display-flex wrap">
        `;

        productsHTML += titleHTML;

        product.items.forEach(function (item) {
            var cardHTML = '';

            if(item.isActive ==  true){
                if (item.isMostSell) {
                    cardHTML = `
                        <div class="card-offer-yellow padding-2 margin-2 shadow">
                            <div class="offer-tag bg-yellow text-black text-shadow">
                                <span>
                                    <b>MAIS VENDIDO</b>
                                </span>
                            </div>
                            <h1 class="offer-title"> 
                                <b>${item.name}</b>
                            </h1>
                            <ul class="list-offer">`; // Abre a ul dentro do card
    
                    const descriptions = item.description;
                    descriptions.forEach(description => {
                        const listItemHTML = `<li>${description}</li>`;
                        cardHTML += listItemHTML;
                    });
    
                    cardHTML += `</ul>
                            <div class="offer-anchor margin-2">
                                <h4 class="font-regular small">
                                    De
                                    <span class="text-color-pink">
                                        <s>R$${item.originalPrice},00</s>
                                    </span>
                                </h4>
                                <h3 class="font-regular">Por apenas</h3>
                            </div>
                            <div class="offer-price-handler text-color-pink">
                                <div class="offer-currency">R$</div>
                                <div class="offer-price">
                                    ${item.price}<span class="offer-currency">,00</span>
                                </div>
                            </div>
                            <div class="offer-holder">
                                <a href="${item.paymentLink[0]}" class="offer-new-button no-link offer-button-purple product-link">
                                    <div class="text-white">
                                    <i class="fa-brands fa-pix"></i>
                                        Pagar com PIX
                                    </div>
                                </a>
                                <a href="${item.paymentLink[1]}" class="offer-new-button no-link offer-button-leaky product-link">
                                    <div class="text-white">
                                    <i class="fa-solid fa-credit-card"></i>
                                        Pagar com Cartão
                                    </div>
                                </a>
                            </div>
                            <h5 class="margin-2 font-light">
                                Entrega em até 24 horas, via Email*
                            </h5>
                        </div>
                    `;
                } else {
                    cardHTML = `
                        <div class="card-offer padding-5 margin-2 shadow">
                            <h1 class="offer-title">
                                <b>${item.name}</b>
                            </h1>
                            <ul class="list-offer">`; // Abre a ul dentro do card
    
                    const descriptions = item.description;
                    descriptions.forEach(description => {
                        const listItemHTML = `<li>${description}</li>`;
                        cardHTML += listItemHTML;
                    });
    
                    cardHTML += `</ul>
                            <div class="offer-anchor margin-2">
                                <h4 class="font-regular small">
                                    De
                                    <span class="text-color-pink">
                                        <s>R$${item.originalPrice},00</s>
                                    </span>
                                </h4>
                                <h3 class="font-regular">Por apenas</h3>
                            </div>
                            <div class="offer-price-handler text-color-pink">
                                <div class="offer-currency">R$</div>
                                <div class="offer-price">
                                    ${item.price}<span class="offer-currency">,00</span>
                                </div>
                            </div>
                            <div class="offer-holder">
                                <a href="${item.paymentLink[0]}" class="offer-new-button no-link offer-button-purple product-link">
                                    <div class="text-white">
                                    <i class="fa-brands fa-pix"></i>
                                        Pagar com PIX
                                    </div>
                                </a>
                                <a href="${item.paymentLink[1]}" class="offer-new-button no-link offer-button-leaky product-link">
                                    <div class="text-white">
                                    <i class="fa-solid fa-credit-card"></i>
                                        Pagar com Cartão
                                    </div>
                                </a>
                            </div>
                            <h5 class="margin-2 font-light">
                                Entrega em até 24 horas, via Email*
                            </h5>
                        </div>
                    `;
                }
            } else {
                cardHTML = `
                    <div class="card-offer padding-2 margin-2 shadow">
                        <div class="offer-tag-disabled bg-red text-white text-shadow">
                            <span>
                                <b>FORA DE ESTOQUE</b>
                            </span>
                        </div>
                        <h1 class="offer-title"> 
                            <b>${item.name}</b>
                        </h1>
                        <ul class="list-offer">`; // Abre a ul dentro do card

                const descriptions = item.description;
                descriptions.forEach(description => {
                    const listItemHTML = `<li>${description}</li>`;
                    cardHTML += listItemHTML;
                });

                cardHTML += `</ul>
                        <div class="offer-anchor margin-2">
                            <h4 class="font-regular small">
                                De
                                <span class="text-color-pink">
                                    <s>R$${item.originalPrice},00</s>
                                </span>
                            </h4>
                            <h3 class="font-regular">Por apenas</h3>
                        </div>
                        <div class="offer-price-handler text-color-pink">
                            <div class="offer-currency">R$</div>
                            <div class="offer-price">
                                ${item.price}<span class="offer-currency">,00</span>
                            </div>
                        </div>
                        <div class="offer-holder">
                            <a href="#" class="offer-new-button no-link offer-button-purple product-link opacity-50">
                                <div class="text-white">
                                <i class="fa-brands fa-pix"></i>
                                    Pagar com PIX
                                </div>
                            </a>
                            <a href="#" class="offer-new-button no-link offer-button-leaky product-link opacity-50">
                                <div class="text-white">
                                <i class="fa-solid fa-credit-card"></i>
                                    Pagar com Cartão
                                </div>
                            </a>
                        </div>
                        <h5 class="margin-2 font-light">
                            Entrega em até 24 horas, via Email*
                        </h5>
                    </div>
                `;
            }

            productsHTML += cardHTML;
        });

        var closingDivHTML = `</div>`;
        productsHTML += closingDivHTML
    });

    productList.innerHTML = productsHTML;
}

renderProducts();