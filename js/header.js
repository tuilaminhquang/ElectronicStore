$(".language").hover(function () {
    // over
    $(".language__drop-down").fadeIn(200);
    $(".language").css("color", "red");
    $(".language__drop-down").css("color", "black")


}, function () {
    // out
    $(".language").css("color", "black");
    $(".language__drop-down").fadeOut(200);
}
);
$(".currency").hover(function () {
    // over
    $(".currency__drop-down").fadeIn(200);
    $(".currency").css("color", "red");
    $(".currency__drop-down").css("color", "black");
}, function () {
    // out
    $(".currency").css("color", "black");
    $(".currency__drop-down").fadeOut(200);
}
);
//set width shop dropdown
$(".shop__dropdown").css("width", $(".top-of-page").css("width"));
//hover 
$(".shop__dropdown").hide();
$(".shop").hover(function () {
    // over
    $(".shop__dropdown").fadeIn(200);


}, function () {
    // out
    $(".shop__dropdown").fadeOut(0);
}
);
$(".page__dropdown").hide();
$(".page").hover(function () {
    // over
    $(".page__dropdown").fadeIn(200);


}, function () {
    // out
    $(".page__dropdown").fadeOut(0);
}
);
$(".blog__dropdown").hide();
$(".blog").hover(function () {
    // over
    $(".blog__dropdown").fadeIn(200);


}, function () {
    // out
    $(".blog__dropdown").fadeOut(0);
}
);
$(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
})
const products = [
    {
        "id": 1,
        "name": "New Unlocked 128GB of Stogare Smartphone",
        "price": 599.00,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-23-3-450x450.jpg",
        "category": "Smartphone & Tablet"
    },
    {
        "id": 2,
        "name": "Samsung Electronics Galaxy S215G",
        "price": 599.00,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-37-450x450.jpg",
        "category": "Smartphone & Tablet"
    },
    {
        "id": 3,
        "name": "Blackview A8 Android 10 Smartphone 6.21 in",
        "price": 799.00,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-1-450x450.jpg",
        "category": "Smartphone & Tablet"
    },
    {
        "id": 4,
        "name": "Note 9 128GB Factory Unlocked Tablet",
        "price": 899,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-51-450x450.jpg",
        "category": "Smartphone & Tablet"
    },
    {
        "id": 5,
        "name": "Lightweight Android Tablet 32GB Storage",
        "price": 699,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-23-2-450x450.jpg",
        "category": "Smartphone & Tablet"
    },
    {
        "id": 6,
        "name": "Samsung A100 White  32GB Storage",
        "price": 499,
        "image": "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-22-450x450.jpg",
        "category": "Smartphone & Tablet"
    }
]
const renderProducts = (products) => {
    products.forEach(p => {
        $(".list-normal").append(`
    <div class="product col-md-4">
                        <div class="img">
                            <img src=${p.image} alt="">
                            <div class="product-hover">
                            </div>
                            <div class="product-button">
                                <button class="btn compare"><i class="fas fa-random"></i>
                                    <div class="btn-content">Compare</div>
                                </button>
                                <button class="btn wishlist"><i class="far fa-heart"></i>
                                    <div class="btn-content">Wishlist</div>
                                </button>
                            </div>
                        </div>
                        <div class="product-content">
                            <span>${p.name}</span>
                            <p class="price">$${p.price.toFixed(2)}</p>
                            <div class="list-options">
                                <span class="select-options">SELECT OPTIONS</span>
                                <span class="quickview">QUICK VIEW</span>
                            </div>
                        </div>
                    </div>
    `);
    })
}
renderProducts(products);
