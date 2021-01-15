document.addEventListener('DOMContentLoaded', function () {
    const getSamples = () => {
        const result = Promise.all([
            fetch('sample_products.txt').then(x => x.text()),
        ]).then(([data, sample2Resp]) => {
            return data.replace('products = ', "");
        }).then(last => {
            return JSON.parse(last)
        })
        return result
    }

    const getData = async (start, stop) => {
        let result = await getSamples();
        let slicedResult = result.slice(start, stop)
        return slicedResult
    }

    const calculateDiscount = (old,now) => {
    if (old)
    {
        let result =  ((old-now)/old)*100
       return Math.round(result)
    }
    else {
       return null
    }
    }


    const setSamplesFirstWidget = () => {
        getData(0, 10).then((data) => {
            const firstWidget = document.querySelector("#first-slider > .splide__track");
            const list = firstWidget.querySelector(".splide__list")
            for (var i = 0; i < 10; i++) {
                list.innerHTML += `<div class="splide__slide">
                           <div class="item">
                                <div class="item-image-container">
                                    <img src="${data[i].image}">
                                    <div class="icons">
                ${calculateDiscount(data[i].oldPrice,data[i].price) !== null ? `<i class="icon-discount"><p>-${calculateDiscount(data[i].oldPrice,data[i].price)}%</p></i>`: ''}  
                                  ${data[i].params.land !== '' ? `<i class="icon-new"><p>${data[i].params.land.substring(1, 4)}</p></i>` : ''}   
                                  ${data[i].params.likeCount !== '' ? `<i class="icon-fav"><p>${data[i].params.likeCount}</p></i>` : ''}
                                  </div>
                                </div>
                                <span class="item-title">${data[i].name}</span>
                              ${data[i].params.rebsorte !== '' ? `<span class="item-categories">${data[i].params.rebsorte}</span>` : '<span class="spacing"></span>'}   
                                <div class="item-text-container">
                                   <span class="item-price">${data[i].priceText}</span>
                        <span class="item-oldprice">${data[i].oldPriceText}</span>
                                    <span class="item-detail">${data[i].params.basePrice}</span>
                                </div>
                            </div>
                        </div>`
            }
        })
    }

    const setSampleSecondWidget = () => {
        getData(10, 20).then((data) => {
            const secondWidget = document.querySelector("#secondary-slider > .splide__track");
            const list = secondWidget.querySelector(".splide__list")
            for (var i = 0; i < 10; i++) {
                list.innerHTML += `<div class="splide__slide">
                           <div class="item">
                                <div class="item-image-container">
                                    <img src="${data[i].image}">
                                    <div class="icons">
                ${calculateDiscount(data[i].oldPrice,data[i].price) !== null ? `<i class="icon-discount"><p>-${calculateDiscount(data[i].oldPrice,data[i].price)}%</p></i>`: ''}  
                                  ${data[i].params.land !== '' ? `<i class="icon-new"><p>${data[i].params.land.substring(1, 4)}</p></i>` : ''}   
                                  ${data[i].params.likeCount !== '' ? `<i class="icon-fav"><p>${data[i].params.likeCount}</p></i>` : ''}
                                  </div>
                                </div>
                                <span class="item-title">${data[i].name}</span>
                              ${data[i].params.rebsorte !== '' ? `<span class="item-categories">${data[i].params.rebsorte}</span>` : '<span class="spacing"></span>'}   
                                <div class="item-text-container">
                                   <span class="item-price">${data[i].priceText}</span>
                        <span class="item-oldprice">${data[i].oldPriceText}</span>
                                    <span class="item-detail">${data[i].params.basePrice}</span>
                                </div>
                            </div>
                        </div>`
            }
        })
    }

    const setSampleThirdWidget = () => {
        getData(20, 30).then((data) => {
            const thirdWidget = document.querySelector("#third-slider > .splide__track");
            const list = thirdWidget.querySelector(".splide__list")
            for (var i = 0; i < 10; i++) {
                list.innerHTML += `<div class="splide__slide">
                           <div class="item">
                                <div class="item-image-container">
                                    <img src="${data[i].image}">
                                    <div class="icons">
                ${calculateDiscount(data[i].oldPrice,data[i].price) !== null ? `<i class="icon-discount"><p>-${calculateDiscount(data[i].oldPrice,data[i].price)}%</p></i>`: ''}  
                                  ${data[i].params.land !== '' ? `<i class="icon-new"><p>${data[i].params.land.substring(1, 4)}</p></i>` : ''}   
                                  ${data[i].params.likeCount !== '' ? `<i class="icon-fav"><p>${data[i].params.likeCount}</p></i>` : ''}
                                  </div>
                                </div>
                                <span class="item-title">${data[i].name}</span>
                              ${data[i].params.rebsorte !== '' ? `<span class="item-categories">${data[i].params.rebsorte}</span>` : '<span class="spacing"></span>'}   
                                <div class="item-text-container">
                                   <span class="item-price">${data[i].priceText}</span>
                        <span class="item-oldprice">${data[i].oldPriceText}</span>
                                    <span class="item-detail">${data[i].params.basePrice}</span>
                                </div>
                            </div>
                        </div>`
            }

        })
    }

    /* const checkUndefineds = () => {
       const list = document.querySelectorAll("#splide__list")
         list.forEach((each) => {
        console.log(each.getElementsByClassName("icon-fav")[1])
         })

     }*/


    setSamplesFirstWidget()
    setSampleSecondWidget()
    setSampleThirdWidget()

    var options = {
        // Define them separately in the ttb(vertical) mode.
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }

    setTimeout(function () {
        new Splide('#first-slider', options).mount();
    }, 100);
    setTimeout(function () {
        new Splide('#secondary-slider', options).mount();
    }, 100);
    setTimeout(function () {
        new Splide('#third-slider', options).mount();
    }, 100);

});



