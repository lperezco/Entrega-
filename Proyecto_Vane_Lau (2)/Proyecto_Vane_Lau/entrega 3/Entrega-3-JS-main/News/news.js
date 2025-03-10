let listOfProducts = []

function createAllProducts ()  {
    for(let i = 0; i < data.length; i++)  {
        if (data[i].trending) {
            let object = data [i]
            let mugId = object.mugId
            let name = object.name
            let altText = object.altText
            let price = object.price
            let description = object.description
            let imgUrl = object.imgUrl
            let product = new Product(mugId, name, altText, price, imgUrl, description)
            listOfProducts.push(product)
        }
        
    }
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i]
        container.innerHTML += product.createHtml();
    }
}


 createAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id="+ref
}
function redirectToIndex() {
    window.location.href = "../index.html";
}

 function redirectToMain() {
    window.location.href = "../Mainpage/main.html";
}
function redirectToModerns() {
    window.location.href = "../Moderns/moderns.html";
}
function redirectFantasy() {
    window.location.href = "../Fantasy/Fantasy.html";
}
function redirectToNews() {
    window.location.href = "./news.html";
}
function redirectToOffers() {
    window.location.href = "../Offers/offers.html";
}
function redirectToTrendings() {
    window.location.href = "../Trending/trending.html";
}
function redirectToRecommendatios() {
    window.location.href = "../recommendations/recommend.html";
}
function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}
function redirectToAccount() {
    window.location.href = "../Myacountpage/account.html";
}
