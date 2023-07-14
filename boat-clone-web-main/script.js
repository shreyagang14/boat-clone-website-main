


var cards= [
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1668756103",playback:"60 HRS PLAYBACK",name:"Airdopes 131",price:"999",del:"2990",rating:"4.8",review:"19999",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_200x.png?v=1668756103"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e934902f-345b-4cc4-80b9-9ef3d77a1f34_300x.png?v=1661272676",playback:"BT CALLING",name:"Storm cell",price:"1999",del:"7990",rating:"4.7",review:"200009",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48d16e65-e295-45ef-a59d-ee85f787001d_300x.png?v=1625044995",playback:"",name:"Rockerz 235 V2",price:"799",del:"2990",rating:"4.8",review:"45898",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main2_300x.png?v=1655368638",playback:"CLEAR CALLING",name:"Airdopes 115",price:"1200",del:"3990",rating:"4.9",review:"6735489",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_1_e171664a-1254-45e6-9dde-2ac4f0a815c9_300x.png?v=1648466727",playback:"20 HRS PLAYBACK",name:"Rockerz 235 Pro",price:"999",del:"1999",rating:"4.8",review:"56898",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_300x.png?v=1648466727"},
    
];

// function print(){


    var clutter="";
cards.forEach(function(val){
    clutter +=`  <div class="card-one">
    <div class="image">
        <span>${val.playback}</span>
        <img class="imgone" src="${val.img}" alt="">
        <img class="imgtwo" src="${val.img}" alt="">
        
    </div>
    <div class="saver">
        <p>super saver</p>
    </div>
    

    <div class="info">
        <h3>${val.name}</h3>
        <h4>${val.price} <span>67% off</span> <del>${val.del}</del></h4>

        <h5>${val.rating} | <span>${val.review} reviews</span></h5>
        <h6>r 15 Extra discount on upi</h6>
        <button>Add to Cart</button>
    </div>  

</div>`
})
document.querySelector("#slide-ones").innerHTML=clutter;

// }
// print();

var boxess =[
    {details:"True Wireless Earbuds",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",},
    {details:"Neckbands",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_small.png?v=1674126581"},
    {details:"Smart Watches",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smartwatch_96457e1e-dfc6-4818-b6f1-a9a7130d018c_small.png?v=1674127383"},
    {details:"Wireless Headphone",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_6c017fdd-66fd-4d00-a1c9-5fd3f8536ee1_small.png?v=1674041615"},
    {details:"Wireless Speaker",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1321db16-d197-40bd-be00-d165868168eb_small.png?v=1674126200"},
    {details:"Wired Headphone",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_small.png?v=1674041616"},
    {details:"Wired Earphone",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_small.png?v=1674041616"},
    {details:"Soundbars",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/aavante-bar_small.png?v=1674041615"},
    {details:"Gaming Headphone",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_dbb4a363-0799-44e3-8b67-a275b092c501_small.png?v=1674041615"},
    {details:"Party Speakers",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_small.webp?v=1674041615"},
    {details:"Trimmers",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_3b8fc3eb-52d6-4519-824f-22873770f747_small.png?v=1674041616"},
    {details:"Charger",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_small.png?v=1674041615"},
    {details:"Power Banks",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/powerbank_small.png?v=1674126228"},
    {details:"Cabels",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_cd468fe0-9b41-4eef-b686-0785c6478534_small.png?v=1674041615"},
    {details:"Car Accessories",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_small.png?v=1674041615"},
    {details:"Trebel Range",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_small.png?v=1674126241"},
    {details:"Limited Edition",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/limited-edition_small.png?v=1674126214"},
    {details:"View All",im:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo123_171ada23-0c67-477b-84d1-21fe1bad3909_small.png?v=1674022741"},
]

var clutter2="";

boxess.forEach(function(data){
    clutter2 += ` <div class="boxess">
    <div class="l-boxess">
      <a href="#">${data.details}</a>
      
    </div>
    <div class="r-boxess">
      <img src="${data.im}" alt="">
    </div>
  </div>
    `
})
document.querySelector(".grid-card").innerHTML=clutter2;



//slider movement code//

// function prev(){
//     document.getElementById('slider-container').scrollLeft -= 270;
// }

// function next()
// {
//     document.getElementById('slider-container').scrollLeft += 270;
// }


// $(".slide img").on("click" , function(){
// $(this).toggleClass('zoomed');
// $(".overlay").toggleClass('active');
// })



const seller = document.querySelector("#seller");
const earbuds = document.querySelector("#earbuds");
const wireless = document.querySelector("#wireless");
const anc = document.querySelector("#anc");

const best = document.querySelector(".best-seller")
const topear = document.querySelector(".top-earbuds")
const trending = document.querySelector(".trending-wireless")
const trend = document.querySelector(".trending-enc")



//seller//

seller.addEventListener("click",(elem)=>{
         best.style.display="flex";
         topear.style.display="none";
        trending.style.display="none";
        trend.style.display="none";


})

var cardsone= [
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737",playback:"CLEAR CALLING",name:"Airdopes 115",price:"1099",del:"2990",rating:"4.7",review:"19349",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_200x.png?v=1668756103"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_300x.png?v=1657775492",playback:"45 HOURS PLAYTIME",name:"Aidopes 131 Pro",price:"1299",del:"2490",rating:"4.9",review:"209",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_a80b6882-1247-439d-a17b-1c87ed4fa7c8_300x.png?v=1641206192",playback:"17 HOURS PLAYBACK",name:"Airdopes 161",price:"1199",del:"2990",rating:"4.9",review:"4898",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WaveCall.1_1_300x.png?v=1680772802",playback:"CLEAR CALLING",name:"Wave Call",price:"1999",del:"7990",rating:"4.9",review:"67389",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_300x.png?v=1678773275",playback:"20 HRS PLAYBACK",name:"Airdopes 121 v2",price:"1199",del:"2990",rating:"4.8",review:"598",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_300x.png?v=1648466727"},
    
];

var clutters ="";
cardsone.forEach(function(value){
    clutters +=`  <div class="card-one">
    <div class="image">
        <span>${value.playback}</span>
        <img class="imgone" src="${value.img}" alt="">
        <img class="imgtwo" src="${value.img}" alt="">
        
    </div>
    <div class="saver">
        <p>Super Saver</p>
    </div>
    

    <div class="info">
        <h3>${value.name}</h3>
        <h4>${value.price} <span>67% off</span> <del>${value.del}</del></h4>

        <h5>${value.rating} | <span>${value.review} reviews</span></h5>
        <h6>r 15 Extra discount on upi</h6>
        <button>Add to Cart</button>
    </div>  

</div>`
})
document.querySelector(".best-seller").innerHTML=clutters;

//earbuds//

earbuds.addEventListener("click",()=>{
    topear.style.display="flex";
    best.style.display="none";
    trending.style.display="none";
    trend.style.display="none";


})

var cardstwo= [
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_300x.png?v=1668599490",playback:"42 HOURS PLAYBACK",name:"Airdopes 141",price:"1299",del:"4490",rating:"4.8",review:"599",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_200x.png?v=1668756103"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1668756103",playback:"60 HOURS PLAYBACK",name:"aIRDOPES 131",price:"999",del:"2990",rating:"4.8",review:"2009",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_white_9263689b-ad66-47cd-8183-f59685e1dff6_300x.png?v=1671193643",playback:"17 HOURS PLAYBACK",name:"Airdopes 163",price:"1399",del:"2990",rating:"4.8",review:"29898",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Bubble_300x.png?v=1662533385",playback:"45 HOURS PLAYBACK",name:"Airdopes 131 Pro",price:"1299",del:"2990",rating:"4.9",review:"679",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_a80b6882-1247-439d-a17b-1c87ed4fa7c8_300x.png?v=1641206192",playback:"17 HRS PLAYBACK",name:"Airdopes 161",price:"1199",del:"2490",rating:"4.9",review:"5688",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_300x.png?v=1648466727"},
    
];

var clutters3 ="";
cardstwo.forEach(function(value){
    clutters3 +=`  <div class="card-one">
    <div class="image">
        <span>${value.playback}</span>
        <img class="imgone" src="${value.img}" alt="">
        <img class="imgtwo" src="${value.img}" alt="">
        
    </div>
    <div class="saver">
        <p>super saver</p>
    </div>
    

    <div class="info">
        <h3>${value.name}</h3>
        <h4>${value.price} <span>67% off</span> <del>${value.del}</del></h4>

        <h5>${value.rating} | <span>${value.review} reviews</span></h5>
        <h6>r 15 Extra discount on upi</h6>
        <button>Add to Cart</button>
    </div>  

</div>`
})
document.querySelector(".top-earbuds").innerHTML=clutters3;

//wireless//
wireless.addEventListener("click",()=>{
    trending.style.display="flex";
    best.style.display="none";
    topear.style.display="none";
    trend.style.display="none";



})

var cardsthree= [
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untblueitled-1_300x.png?v=1661509030",playback:"60 HRS PLAYBACK",name:"Rockerz 103 Pro",price:"1199",del:"2490",rating:"4.9",review:"654",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_200x.png?v=1668756103"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_300x.png?v=1625157890",playback:"BT CALLING",name:"Rockerz 255 Pro+",price:"1399",del:"3990",rating:"4.8",review:"2029",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-red_de759211-e939-4ce9-9a77-c68705104ea7_300x.png?v=1667648184",playback:"",name:"TRebel Rockerz... ",price:"1199",del:"2990",rating:"4.8",review:"98",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_32f4ee23-49e0-4671-a25c-d92c8e085785_300x.png?v=1646389952",playback:"CLEAR CALLING",name:"Trebel Rockerz... ",price:"1599",del:"2990",rating:"4.7",review:"9",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114",playback:"20 HRS PLAYBACK",name:"Rockerz 235 Pro",price:"999",del:"1999",rating:"4.8",review:"56898",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_300x.png?v=1648466727"},
    
];

var clutters4 ="";
cardsthree.forEach(function(value){
    clutters4 +=`  <div class="card-one">
    <div class="image">
        <span>${value.playback}</span>
        <img class="imgone" src="${value.img}" alt="">
        <img class="imgtwo" src="${value.img}" alt="">
        
    </div>
    <div class="saver">
        <p>BESTSELLER</p>
    </div>
    

    <div class="info">
        <h3>${value.name}</h3>
        <h4>${value.price} <span>67% off</span> <del>${value.del}</del></h4>

        <h5>${value.rating} | <span>${value.review} reviews</span></h5>
        <h6>r 15 Extra discount on upi</h6>
        <button>Add to Cart</button>
    </div>  

</div>`
})
document.querySelector(".trending-wireless").innerHTML=clutters4;

// enc//
anc.addEventListener("click",()=>{
    trend.style.display="flex";
    best.style.display="none";
    topear.style.display="none";
    trending.style.display="none";



})

var cardsfour= [
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_300x.png?v=1647426798",playback:"NOISE CANCELLATION",name:"Airdopes 411 ANC",price:"2499",del:"4990",rating:"4.8",review:"69",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_200x.png?v=1668756103"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/413-black_300x.png?v=1658298863",playback:"NOISE CANCELLATION",name:"Airdopes 413 ANC",price:"2499",del:"4990",rating:"5.0",review:"14",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_2951fbc3-391f-448b-9614-47d0f36f133b_300x.png?v=1650020838",playback:"NOISE CANCELLATION",name:"Airdopes 500",price:"4999",del:"9990",rating:"5.0",review:"48",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/B_61732ba6-8448-4c40-858d-557839daff97_300x.png?v=1663758990",playback:"NOISE CANCELLATION",name:"Airdopes 393 ANC",price:"2299",del:"4990",rating:"4.9",review:"9",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-Red_1_300x.png?v=1675859737"},

    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/501-R_300x.jpg?v=1667208091",playback:"NOISE CANCELLATION",name:"Airdopes 501 ANC",price:"4999",del:"9909",rating:"5.0",review:"5",imgtwo:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_300x.png?v=1648466727"},
    
];

var clutters5 ="";
cardsfour.forEach(function(value){
    clutters5 +=`  <div class="card-one">
    <div class="image">
        <span>${value.playback}</span>
        <img class="imgone" src="${value.img}" alt="">
        <img class="imgtwo" src="${value.img}" alt="">
        
    </div>
    <div class="saver">
        <p>super saver</p>
    </div>
    

    <div class="info">
        <h3>${value.name}</h3>
        <h4>${value.price} <span>67% off</span> <del>${value.del}</del></h4>

        <h5>${value.rating} | <span>${value.review} reviews</span></h5>
        <h6>r 15 Extra discount on upi</h6>
        <button>Add to Cart</button>
    </div>  

</div>`
})
document.querySelector(".trending-enc").innerHTML=clutters5;



//video cart//

var videocard=[
    {video:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_ZfPQgdbg6tENXmHDOVAJp.mp4?v=9686892593747937489",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bla.png?v=1679660395&width=450",name:"Lunar Call Pro",price:"4299",mrp:"6990",per:"38"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_2uKuwaK_h8wBMBz_qdVmx.mp4?v=5242179249305694151",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Packaging_v2.5130.png?v=1678378826&width=450",name:"Airdopes 458",price:"1799",mrp:"4990",per:"63"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_qjfegTve441tXqDYUdRyb.mp4?v=8238061298867404375",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WaveFlexConnectPackaging1.2.png?v=1677645513&width=450",name:"Wave Flex Connect",price:"1799",mrp:"7990",per:"77"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn__gG6bR7vknZsYZpec88DF.mp4?v=12799501476959248697",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_1_c28e268f-71e2-44e0-9b7a-f52aebadc3e2.png?v=1677232434&width=450",name:"Rockerz 255 Max",price:"1399",mrp:"3990",per:"65"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_ks0aBr7jUhF5HiDoIE2zR.mp4?v=14157794886590888788",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black_320d7c10-5bdf-435b-a0e5-5f19aaeb8de2.png?v=1673616471&width=450",name:"Wave Style Call",price:"2199",mrp:"7990",per:"72"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_kAt-G6XxtDoUuG4in7uEa_card_thumbnail.mp4?v=2721903566091864242",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_743027d7-94ca-43e1-9c04-72ad6483c226.png?v=1669055392&width=450",name:"Airdopes Atom 181",price:"999",mrp:"3490",per:"71"},
    {video:"//cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_J5jruxliHDOaP6CargKes_card_thumbnail.mp4?v=7823576618366193591",img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey.png?v=1668599490&width=450",name:"Airdopes 141",price:"1299",mrp:"4490",per:"71"},
    
]

var cluttervid ="";

videocard.forEach((vd)=>{
cluttervid +=` <div class="video-cards">
<video autoplay muted loop>

  <source src="${vd.video}">
</video>     
  
<div class="below">
  <div class="pic"><img src="${vd.img}" alt=""></div>
    <h4>${vd.name}</h4>
    <p><i class="ri-star-line"></i> Be The First To Review</p>
    <h6>${vd.per}%Off &nbsp;<span>${vd.price}</span>&nbsp; <del>${vd.mrp}</del></h6>

</div>

</div>`
})
document.querySelector(".video-container").innerHTML=cluttervid;

//marvel cart//

var marvel=[
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_300x.png?v=1655534170",name:"Stone 190 Dc..",rupee:"1299",mrp:"2999",rev:"9",rat:"5.0",per:"57"},
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_3_300x.png?v=1655534211",name:"Rockerz 450 Batman...",rupee:"1299",mrp:"3990",rev:"6",rat:"4.9",per:"67"},
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WatchXtendPackaging5.2223_1_300x.png?v=1679317485",name:"Watch Xtend‌ Batman...",rupee:"3499",mrp:"3990",rev:"Bethe First to Review",rat:"",per:"12"},
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-2_b82967ce-17b6-40ea-a169-d5039dc1cd1d_300x.png?v=1655538157",name:"Airdopes 131 DC Edition",rupee:"1299",mrp:"2990",rev:"10",rat:"5.0",per:"57"},
    {img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2b98dda1-57d3-40ee-80f0-4687b8f8a72b_300x.png?v=1662537789",name:"Watch Xtend‌ Batman...",rupee:"3499",mrp:"3990",rev:"Be the First to review",rat:"",per:"12"},
]

var cluttermvl = "";
marvel.forEach((mv)=>{
    cluttermvl += `
    <div class="marvel-cards">
                        <div class="marvelimg"><img src="${mv.img}" alt=""></div>
                        <div class="limited"><p>Limited Edition</p></div>
                          <div class="marvel-info">
                              <h4>${mv.name}</h4>
                              <h5>${mv.rupee} <span>${mv.per}% off</span>
                              <del>${mv.mrp}</del></h5>&nbsp;<hr>
                              <h6><i class="ri-star-s-line"></i>${mv.rat} &nbsp;! &nbsp;<span>${mv.rev} reviews</span></h6>
                              <p>15 Extra Discount on UPI</p>
                              <a href=""><button>ADD TO CART</button></a>
                          </div>
                      </div>`
})
document.querySelector(".marvel-contain").innerHTML=cluttermvl;

// explore wrapper//

var excard = document.querySelector(".explore-card");

let isdragin = false, prevPageX ,prevScrollLeft;

const dragstart=(e)=>{
    isdragin=true
    prevPageX = e.pageX;
    prevScrollLeft = excard.scrollLeft;

}

const dragging = (e)=>{
    if(!isdragin) return;
    e.preventDefault();
    excard.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    excard.scrollLeft = prevScrollLeft- positionDiff;
    // console.log(e.pageX)
}

const dragstop = () =>{
    isdragin =false;
    excard.classList.remove("dragging");

}
excard.addEventListener("mousemove", dragging);
excard.addEventListener("mousedown", dragstart);
excard.addEventListener("mouseup", dragstop);

var arrowi = document.querySelectorAll(".explore i");
var firstImg = excard.querySelectorAll("img")[0];
let firstimgw =firstImg.clientWidth + 14;

arrowi.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        excard.scrollLeft += icon.id ==  "left" ? - firstimgw : firstimgw;
    })
})