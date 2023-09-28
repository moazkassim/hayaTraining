window.addEventListener("load", (event) => {
  //links div
  let linksDiv = document.querySelector(".links");
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((element) => {
        let capitalElement = element.replace(/^./, element[0].toUpperCase());
        let linksLi = document.createElement("li");
        let linksA = document.createElement("a");
        linksA.className = `${element}Li hover:text-[#ee50ff] cursor-pointer`;
        linksA.addEventListener("click", () => {
          getCateData(capitalElement, element);
        });
        linksA.appendChild(document.createTextNode(capitalElement));
        linksLi.appendChild(linksA);
        linksDiv.appendChild(linksLi);
      });
      let elementName = linksDiv.children[0].firstChild.innerHTML;
      getCateData(elementName, elementName.toLowerCase());
      // console.log;
    });
});

function loadingScreen() {
  let loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.classList.add("hidden");
}
setTimeout(loadingScreen, 1000);

// select cart icon
let cartIcon = document.querySelector(".cart-icon");
cartIcon.addEventListener("click", () => {
  // select cart element

  let cart = document.querySelector(".cart");
  cart.classList.toggle("hidden");
});
let productSpan = document.querySelector(".product-span");

// create slider
let sliderImgArray = [
  // "/images/playstation.png",
  "/images/mobile.png",
  "/images/jpl.png",
  "/images/labtob.jpg",
  "/images/shoes22.jpg",
  "/images/shoes.jpg",
  "/images/jan-vlacuha-7cSLfi5mWOA-unsplash.jpg",
];
let liAdvertisement = document.querySelector(".li-advertisement");
let slideImage = document.createElement("img");
slideImage.className = "bg-transparent w-[410px] h-[300px] shrink-0 ";
slideImage.src = sliderImgArray[1];
liAdvertisement.appendChild(slideImage);

//change slider img
let sliderLeftButton = document.querySelector(".slider-left-button");
sliderLeftButton.onclick = () => {
  let currentIndex = sliderImgArray.indexOf(slideImage.src.slice(21));
  if (currentIndex > 0) {
    slideImage.src = sliderImgArray[currentIndex - 1];
  } else {
    slideImage.src = sliderImgArray[sliderImgArray.length - 1];
  }
};

let sliderRightButton = document.querySelector(".slider-right-button");
sliderRightButton.onclick = () => {
  let currentIndex = sliderImgArray.indexOf(slideImage.src.slice(21));
  if (currentIndex < sliderImgArray.length - 1) {
    slideImage.src = sliderImgArray[currentIndex + 1];
  } else {
    slideImage.src = sliderImgArray[0];
  }
};

// let menu = document.querySelector("menu");
// menu.addEventListener("click", () => {
//   let menuSection = document.querySelector(".first-section");
//   menuSection.classList.toggle("max-md:hidden  ");
// });

let toTopButton = document.getElementById("to-top-button");
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
};

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// men fashion
function getCateData(capitalElement, element) {
  document.querySelector(".head-divider").innerHTML = capitalElement;
  let containerCategories = document.querySelector(".container-categories");
  containerCategories.innerHTML = "";
  fetch("https://fakestoreapi.com/products") //api for the get request
    .then((response) => response.json())
    .then((result) => {
      result.forEach((product) => {
        if (product.category === element) {
          // create cate Product
          let cate = document.createElement("div");
          cate.dataId = product.id;
          cate.className =
            "cate p-[2px] pt-6 outline-white  bg-white relative border-2 rounded-md w-64 flex items-center justify-center cursor-pointer flex-col";
          ///////////////////////////////////////////////////////////////////////////////////////////////////
          /// create love icon abd watch icon div
          let actionIcons = document.createElement("div");
          actionIcons.className = "action-icons top-1 right-1 absolute";

          /// create love image in action icon
          let loveImg = document.createElement("img");
          loveImg.src = "/images/heart small.svg";
          // loveImg.addEventListener("click",()=>{
          //   loveImg.classList.toggle("bg-red")
          // })
          loveImg.className = "mb-1 cursor-pointer bg-white rounded-full p-1";

          /// create watch image in action icon
          let watchImg = document.createElement("img");
          watchImg.src = "/images/Group.svg";
          watchImg.className = "cursor-pointer bg-white rounded-full p-[4px]";
          ////////////////////////////////////////////////////////////////////////////////////////////////////////
          //create product image
          let productImg = document.createElement("img");
          productImg.src = product.image;
          productImg.className = "pt-8 w-[115px] h-[165px] ";
          ////////////////////////////////////////////////////////////////////////////////////////////////////////
          //create inner cate
          let innerCate = document.createElement("div");
          innerCate.className =
            "rounded  opacity-80 inner-cat mt-8 border-t-2 pt-3 h-[120px] w-full p-2 truncate";
          //create price data div
          let priceData = document.createElement("div");
          priceData.className = "price-data flex items-center justify-between";
          //create price
          let price = document.createElement("p");
          price.appendChild(document.createTextNode(`$ ${product.price} `));
          price.className =
            "product-Price text-lg font-medium leading-5 mb-3 text-[#ee50ff]";
          // create add button
          let addButton = document.createElement("BUTTON");
          addButton.appendChild(document.createTextNode("Add"));
          addButton.className =
            " addProductToCart text-sm border-2 rounded bg-[#ee50ff] text-white p-[3px] absolute right-2 ";

          //button function
          addButton.onclick = (e) => {
            let productId = e.target.parentElement.closest(".cate").dataId;
            addToCart(product.image, product.title, product.price);
            let productSpanValue = productSpan.innerHTML;
            productSpan.innerHTML = parseInt(productSpanValue) + 1;
          };
          ///////////////////////////////////////////////////////////////////////////////////////////////////
          //create ul
          let starUl = document.createElement("ul");
          starUl.className = "flex items-center";
          // create li
          for (var i = 0; i < Math.floor(product.rating.rate); i++) {
            let starLi = document.createElement("li");
            let liImg = document.createElement("img");
            liImg.src = "/images/Vector.svg";
            starUl.appendChild(starLi);
            starLi.appendChild(liImg);
          }
          ///////////////////////////////////////////////////////////////////////////////////////////////////
          //create product title
          let productTitle = document.createElement("p");
          productTitle.className = "mt-3 text-[#8B96A5] text-over";
          productTitle.appendChild(document.createTextNode(product.title));

          ////////////////////////////////////////////////////////////////////////////////////////////////////////

          //append cate to body

          containerCategories.appendChild(cate);
          // append action icon to cate

          cate.appendChild(actionIcons);
          // append images to action div/
          actionIcons.appendChild(loveImg);
          actionIcons.appendChild(watchImg);
          //append product image to cate
          cate.appendChild(productImg);
          // append inner-cate to cate
          cate.appendChild(innerCate);
          // append price data to inner cate
          innerCate.appendChild(priceData);
          // append data to price data
          priceData.appendChild(price);
          price.appendChild(addButton);
          //append ul to inner cate
          innerCate.appendChild(starUl);
          // append product tittle to inner cate
          innerCate.appendChild(productTitle);
          ////////////////////////////////
        }
      });
    });
}
function addToCart(imgSrc, title, price) {
  //create product div
  let product = document.createElement("div");
  product.className =
    "product mb-2 border-2 border-solid p-5 z-20 flex-row flex gap-14 relative items-center";

  //create product img div
  let productImg = document.createElement("div");
  productImg.className = "product-image border-2 border-solid p-2";

  //create img
  let imgIt = document.createElement("img");
  imgIt.src = imgSrc;
  imgIt.className = "w-[75px] h-[85px] w-max";

  //  create product details
  let productDetails = document.createElement("div");
  productDetails.className =
    "product-details flex flex-col - items-center gap-2";

  // create product details para
  let productTitle = document.createElement("p");
  productTitle.className = "text-[#505050] text-base font-normal ";
  productTitle.appendChild(document.createTextNode(title));

  // create product details span
  let productPrice = document.createElement("SPAN");
  productPrice.className = "text-[#333] text-base font-semibold mt-2 mb-2 bold";
  productPrice.appendChild(document.createTextNode(`$ ${price}`));

  // create product details button's div
  let productDetailsButtons = document.createElement("div");
  productDetailsButtons.className = "buttons flex flex-row";

  // create buttons
  let confirmBtn = document.createElement("BUTTON");
  confirmBtn.className =
    "confirm-btn border-2 border-solid text-sm font-normal text-[#0D6EFD] mr-3 bg-white p-[6px] rounded";
  confirmBtn.appendChild(document.createTextNode("View"));

  let removeBtn = document.createElement("BUTTON");
  removeBtn.className =
    "remove-btn border-2 border-solid text-sm font-normal text-[#FA3434] p-[6px] bg-white rounded";
  removeBtn.appendChild(document.createTextNode("Remove"));
  removeBtn.onclick = (e) => {
    e.target.parentElement.closest(".product").remove();
    let productSpanValue = productSpan.innerHTML;
    productSpan.innerHTML = parseInt(productSpanValue) - 1;
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  let cart = document.querySelector(".cart");
  cart.appendChild(product);
  product.appendChild(productImg);
  productImg.appendChild(imgIt);
  product.appendChild(productDetails);
  productDetails.appendChild(productTitle);
  productDetails.appendChild(productPrice);
  productDetails.appendChild(productDetailsButtons);
  productDetailsButtons.appendChild(confirmBtn);
  productDetailsButtons.appendChild(removeBtn);
}
