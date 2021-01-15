document.addEventListener('DOMContentLoaded', function () {
    const getSamples = () =>  {
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



    const setSamplesFirstWidget = () => {
        getData(0,10).then((data) => {
            const firstWidget = document.querySelector("#first-slider > .splide__track");
            const  list =  firstWidget.querySelector(".splide__list")
            for (var i=0; i<10; i++){
                list.innerHTML += "<div class=\"splide__slide\">\n" +
                    "                    <div class=\"item\">\n" +
                    "                        <div class=\"item-image-container\">\n" +
                    "                            <img src="+data[i].image+" alt=\"\">\n" +
                    "                            <i class=\"icon-discount\"><p></p></i>\n" +
                    "                            <i class=\"icon-new\"><p>"+data[i].params.land.substring(1, 4)+"</p></i>\n" +
                    "                            <i class=\"icon-fav\"><p>"+data[i].params.likeCount+"</p></i>\n" +
                    "                        </div>\n" +
                    "                        <span class=\"item-title\">"+data[i].name+"</span>\n" +
                    "                        <span class=\"item-categories\">"+data[i].params.rebsorte+"</span>\n" +
                    "                        <div class=\"item-text-container\">\n" +
                    "                        <span class=\"item-price\">"+data[i].priceText+"</span>\n" +
                    "                        <span class=\"item-oldprice\">"+data[i].oldPriceText+"</span>\n" +
                    "                        <span class=\"item-detail\">"+data[i].params.basePrice+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>"
            }
            if (list.querySelector(".icon-new p").innerText === ''){
                list.querySelector(".icon-new").innerHTML = ''
            }
        })
    }

    const setSampleSecondWidget = () => {
        getData(10,20).then((data) => {
            const secondWidget = document.querySelector("#secondary-slider > .splide__track");
            const  list =  secondWidget.querySelector(".splide__list")
            for (var i=0; i<10; i++){
                list.innerHTML += "<div class=\"splide__slide\">\n" +
                    "                    <div class=\"item\">\n" +
                    "                        <div class=\"item-image-container\">\n" +
                    "                            <img src="+data[i].image+" alt=\"\">\n" +
                    "                            <i class=\"icon-discount\"><p></p></i>\n" +
                    "                            <i class=\"icon-new\"><p>"+data[i].params.land.substring(1, 4)+"</p></i>\n" +
                    "                            <i class=\"icon-fav\"><p>"+data[i].params.likeCount+"</p></i>\n" +
                    "                        </div>\n" +
                    "                        <span class=\"item-title\">"+data[i].name+"</span>\n" +
                    "                        <span class=\"item-categories\">"+data[i].params.rebsorte+"</span>\n" +
                    "                        <div class=\"item-text-container\">\n" +
                    "                        <span class=\"item-price\">"+data[i].priceText+"</span>\n" +
                    "                        <span class=\"item-oldprice\">"+data[i].oldPriceText+"</span>\n" +
                    "                        <span class=\"item-detail\">"+data[i].params.basePrice+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>"
            }

        })
    }

    const setSampleThirdWidget = () => {
        getData(20,30).then((data) => {
            const thirdWidget = document.querySelector("#third-slider > .splide__track");
            const  list =  thirdWidget.querySelector(".splide__list")
            for (var i=0; i<10; i++){
                list.innerHTML += "<div class=\"splide__slide\">\n" +
                    "                    <div class=\"item\">\n" +
                    "                        <div class=\"item-image-container\">\n" +
                    "                            <img src="+data[i].image+" alt=\"\">\n" +
                    "                            <i class=\"icon-discount\"><p></p></i>\n" +
                    "                            <i class=\"icon-new\"><p>"+data[i].params.land.substring(1, 4)+"</p></i>\n" +
                    "                            <i class=\"icon-fav\"><p>"+data[i].params.likeCount+"</p></i>\n" +
                    "                        </div>\n" +
                    "                        <span class=\"item-title\">"+data[i].name+"</span>\n" +
                    "                        <span class=\"item-categories\">"+data[i].params.rebsorte+"</span>\n" +
                    "                        <div class=\"item-text-container\">\n" +
                    "                        <span class=\"item-price\">"+data[i].priceText+"</span>\n" +
                    "                        <span class=\"item-oldprice\">"+data[i].oldPriceText+"</span>\n" +
                    "                        <span class=\"item-detail\">"+data[i].params.basePrice+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>"
            }

        })
    }

    const checkUndefineds = () => {
      const list = document.querySelectorAll("#splide__list")
        list.forEach((each) => {
       console.log(each.getElementsByClassName("icon-fav")[1])
        })

    }


    setSamplesFirstWidget()
    setSampleSecondWidget()
    setSampleThirdWidget()
    checkUndefineds()

    var options = {
        // Define them separately in the ttb(vertical) mode.
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }

    setTimeout(function(){ new Splide('#first-slider', options).mount(); }, 100);
    setTimeout(function(){ new Splide('#secondary-slider', options).mount(); }, 100);
    setTimeout(function(){ new Splide('#third-slider', options).mount(); }, 100);

});



