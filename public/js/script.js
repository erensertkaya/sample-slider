document.addEventListener('DOMContentLoaded', function () {
    var options = {
        // Define them separately in the ttb(vertical) mode.
        type: 'loop',
        autoWidth: true,
        focus: 'center',
    }
    new Splide('#first-slider', options).mount();
    new Splide('#secondary-slider', options).mount();
    new Splide('#third-slider', options).mount();
});

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

 const setSamplesFirstWidget = () => {
    getSamples().then((data) => {
       const  list =  document.getElementById("first-slider")
       for (var i=0; i<10; i++){
         console.log( data[i].image)
           list.innerHTML = "<div class=\"splide__slide\">\n" +
               "                    <div class=\"item\">\n" +
               "                        <div class=\"item-image-container\">\n" +
               "                            <img src="+data[i].image+" alt=\"\">\n" +
               "                            <i class=\"icon-newitem\"></i>\n" +
               "                            <i class=\"icon-discount\"></i>\n" +
               "                            <i class=\"icon-fav\"></i>\n" +
               "                        </div>\n" +
               "                        <span class=\"item-title\">Title</span>\n" +
               "                        <span class=\"item-categories\">Categories | Will | Be | Here</span>\n" +
               "                        <span class=\"item-price\">55$</span>\n" +
               "                        <span class=\"item-oldprice\">59$</span>\n" +
               "                        <span class=\"item-detail\">5 Liter (11$ / 1 Liter)</span>\n" +
               "                    </div>\n" +
               "                </div>"
       }
    })
}

setSamplesFirstWidget()

