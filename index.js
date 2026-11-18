const products = [
  {id:1,name:"Classic Burger",ru:"Классический бургер",category:"burger",price:28000,desc:"Mol go‘shti, yangi sabzavotlar va maxsus sous.",image:"photo-1568901346375-23c9450c58cd"},
  {id:2,name:"Cheese Burger",ru:"Чизбургер",category:"burger",price:32000,desc:"Mazali pishloq va shirali kotlet.",image:"photo-1550547660-d9450f859349"},
  {id:3,name:"Double Burger",ru:"Двойной бургер",category:"burger",price:42000,desc:"Ikki kotlet, pishloq va maxsus sous.",image:"photo-1571091718767-18b5b1457add"},
  {id:4,name:"Chicken Burger",ru:"Чикен бургер",category:"burger",price:30000,desc:"Qarsildoq tovuq filesi va sabzavotlar.",image:"photo-1606755962773-d324e0a13086"},
  {id:5,name:"Classic Lavash",ru:"Классический лаваш",category:"lavash",price:30000,desc:"Go‘sht, sabzavotlar va maxsus sous.",image:"photo-1529006557810-274b9b2fc783"},
  {id:6,name:"Cheese Lavash",ru:"Сырный лаваш",category:"lavash",price:34000,desc:"Pishloqli, mazali va to‘yimli lavash.",image:"photo-1565299624946-b28f40a0ae38"},
  {id:7,name:"Chicken Lavash",ru:"Лаваш с курицей",category:"lavash",price:29000,desc:"Tovuq go‘shti va yangi sabzavotlar.",image:"photo-1529006557810-274b9b2fc783"},
  {id:8,name:"Mini Lavash",ru:"Мини лаваш",category:"lavash",price:22000,desc:"Yengil tamaddi uchun ajoyib tanlov.",image:"photo-1529006557810-274b9b2fc783"},
  {id:9,name:"Pepperoni Pizza",ru:"Пицца Пепперони",category:"pizza",price:65000,desc:"Pepperoni kolbasasi va mozzarella.",image:"photo-1628840042765-356cda07504e"},
  {id:10,name:"Margherita Pizza",ru:"Пицца Маргарита",category:"pizza",price:55000,desc:"Pomidor, mozzarella va rayhon.",image:"photo-1513104890138-7c749659a591"},
  {id:11,name:"Hot Dog",ru:"Хот-дог",category:"hotdog",price:20000,desc:"Sosiska, ketchup va xantal sousi.",image:"photo-1612392062126-2f1f3f1a5a6d"},
  {id:12,name:"Cheese Hot Dog",ru:"Сырный хот-дог",category:"hotdog",price:25000,desc:"Pishloq va maxsus sous bilan.",image:"photo-1612392062126-2f1f3f1a5a6d"},
  {id:13,name:"Chicken Nuggets",ru:"Куриные наггетсы",category:"snack",price:25000,desc:"Qarsildoq tovuq bo‘laklari.",image:"photo-1562967914-608f82629710"},
  {id:14,name:"French Fries",ru:"Картофель фри",category:"snack",price:16000,desc:"Oltinrang qarsildoq kartoshka.",image:"photo-1573080496219-bb080dd4f877"},
  {id:15,name:"Chocolate Cake",ru:"Шоколадный торт",category:"dessert",price:26000,desc:"Yumshoq shokoladli desert.",image:"photo-1578985545062-69928b1d9587"},
  {id:16,name:"Tiramisu",ru:"Тирамису",category:"dessert",price:28000,desc:"Nozik kremli italyan deserti.",image:"photo-1571877227200-a0d98ea607e9"},
  {id:17,name:"Cola 0.5L",ru:"Кола 0.5л",category:"drink",price:10000,desc:"Sovuq gazlangan ichimlik.",image:"photo-1629203851122-3726ecdf080e"},
  {id:18,name:"Fanta 0.5L",ru:"Фанта 0.5л",category:"drink",price:10000,desc:"Apelsin ta'mli ichimlik.",image:"photo-1581636625402-29b2a704ef13"},
  {id:19,name:"Milkshake",ru:"Молочный коктейль",category:"drink",price:22000,desc:"Sutli, mayin va mazali kokteyl.",image:"photo-1572490122747-3968b75cc699"},
  {id:20,name:"Burger Combo",ru:"Комбо бургер",category:"combo",price:49000,desc:"Burger, fri va ichimlik.",image:"photo-1568901346375-23c9450c58cd"},
  {id:21,name:"Family Box",ru:"Семейный бокс",category:"combo",price:99000,desc:"Oila davrasi uchun katta to‘plam.",image:"photo-1513104890138-7c749659a591"},
  {id:22,name:"Student Box",ru:"Студенческий бокс",category:"combo",price:39000,desc:"Hamyonbop va to‘yimli to‘plam.",image:"photo-1562967914-608f82629710"}
];

const translations = {
  uz:{
    home:"Bosh sahifa",menu:"Menyu",about:"Biz haqimizda",contact:"Aloqa",cart:"Savat",
    heroTag:"HAR LAHZA — MAZALI!",
    heroTitle:'Mazali ta\'m. <em>Unutilmas</em> lahza!',
    heroText:"Sevimli burger, lavash va pitsalaringiz — yangi, issiq va tez yetkazib beriladi.",
    orderNow:"Buyurtma berish",fast:"Tez yetkazish",fresh:"Yangi mahsulotlar",
    promo:"JUMA KUNI — har bir katta buyurtmaga ichimlik sovg‘a!",
    ourMenu:"BIZNING MENYU",chooseFood:"Sevimli taomingizni tanlang",
    search:"Taom qidirish...",notFound:"Hech narsa topilmadi.",
    specialOffer:"MAXSUS TAKLIF",dealTitle:"Do‘stlar bilan yanada mazali!",
    dealText:"Combo to‘plamlarimiz bilan sevimli ta’mlarni birga baham ko‘ring.",
    viewMenu:"Menyuni ko‘rish →",
    feature1:"Tez yetkazib berish",feature1Text:"Buyurtmangizni issiq holda yetkazamiz.",
    feature2:"Sifatli mahsulotlar",feature2Text:"Har kuni yangi masalliqlar.",
    feature3:"Mehr bilan tayyorlangan",feature3Text:"Har bir buyurtmaga alohida e’tibor.",
    workingHours:"Ish vaqti",rights:"Barcha huquqlar himoyalangan.",
    yourCart:"Savatingiz",total:"Jami:",checkout:"Buyurtma berish",
    checkoutTitle:"Buyurtmani rasmiylashtirish",yourName:"Ismingiz",
    phone:"Telefon raqamingiz",address:"Yetkazib berish manzili",
    comment:"Izoh",sendOrder:"Buyurtmani yuborish",
    orderNote:"Buyurtma ma’lumotlari telefon orqali tasdiqlanadi."
  },
  ru:{
    home:"Главная",menu:"Меню",about:"О нас",contact:"Контакты",cart:"Корзина",
    heroTag:"КАЖДЫЙ МОМЕНТ — ВКУСНЫЙ!",
    heroTitle:'Вкус. <em>Незабываемые</em> моменты!',
    heroText:"Любимые бургеры, лаваши и пицца — свежие, горячие и с быстрой доставкой.",
    orderNow:"Заказать",fast:"Быстрая доставка",fresh:"Свежие продукты",
    promo:"ПО ПЯТНИЦАМ — напиток в подарок к каждому большому заказу!",
    ourMenu:"НАШЕ МЕНЮ",chooseFood:"Выберите любимое блюдо",
    search:"Поиск еды...",notFound:"Ничего не найдено.",
    specialOffer:"СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
    dealTitle:"Вкуснее вместе с друзьями!",
    dealText:"Делитесь любимыми вкусами с нашими комбо-наборами.",
    viewMenu:"Смотреть меню →",
    feature1:"Быстрая доставка",feature1Text:"Доставим ваш заказ горячим.",
    feature2:"Качественные продукты",feature2Text:"Свежие ингредиенты каждый день.",
    feature3:"Приготовлено с любовью",feature3Text:"Внимание к каждому заказу.",
    workingHours:"Время работы",rights:"Все права защищены.",
    yourCart:"Ваша корзина",total:"Итого:",checkout:"Оформить заказ",
    checkoutTitle:"Оформление заказа",yourName:"Ваше имя",
    phone:"Ваш телефон",address:"Адрес доставки",
    comment:"Комментарий",sendOrder:"Отправить заказ",
    orderNote:"Детали заказа подтвердим по телефону."
  }
};

const categoryNames = {
  all:{uz:"Barchasi",ru:"Все"},
  burger:{uz:"🍔 Burgerlar",ru:"🍔 Бургеры"},
  lavash:{uz:"🌯 Lavashlar",ru:"🌯 Лаваши"},
  pizza:{uz:"🍕 Pitsalar",ru:"🍕 Пицца"},
  hotdog:{uz:"🌭 Hot-dog",ru:"🌭 Хот-доги"},
  snack:{uz:"🍟 Yeguliklar",ru:"🍟 Закуски"},
  dessert:{uz:"🍰 Desertlar",ru:"🍰 Десерты"},
  drink:{uz:"🥤 Ichimliklar",ru:"🥤 Напитки"},
  combo:{uz:"🎁 Combo",ru:"🎁 Комбо"}
};

let currentCategory="all";
let language="uz";
let cart=JSON.parse(localStorage.getItem("redbite-cart")||"[]");

const $=s=>document.querySelector(s);
const money=n=>new Intl.NumberFormat("uz-UZ").format(n)+" so‘m";

function productName(p){
  return language==="ru"?p.ru:p.name;
}

function renderCategories(){
  $("#categories").innerHTML=Object.entries(categoryNames)
    .map(([key,v])=>`
      <button class="category-btn ${currentCategory===key?"active":""}" data-category="${key}">
        ${v[language]}
      </button>
    `).join("");
}

function renderProducts(){
  const q=$("#searchInput").value.trim().toLowerCase();

  const filtered=products.filter(p=>
    (currentCategory==="all"||p.category===currentCategory)&&
    (`${p.name} ${p.ru} ${p.desc}`).toLowerCase().includes(q)
  );

  $("#productGrid").innerHTML=filtered.map(p=>`
    <article class="product-card">
      <img
        class="product-image"
        src="https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=700&q=82"
        alt="${productName(p)}"
        loading="lazy"
      >
      <div class="product-info">
        <h3>${productName(p)}</h3>
        <p>${p.desc}</p>
        <div class="product-bottom">
          <span class="price">${money(p.price)}</span>
          <button class="add-btn" data-add="${p.id}" aria-label="Add ${productName(p)}">+</button>
        </div>
      </div>
    </article>
  `).join("");

  $("#emptyState").hidden=filtered.length>0;
}

function saveCart(){
  localStorage.setItem("redbite-cart",JSON.stringify(cart));
  renderCart();
}

function addToCart(id){
  const item=cart.find(x=>x.id===id);

  if(item){
    item.qty++;
  }else{
    cart.push({id,qty:1});
  }

  saveCart();
  showToast(language==="uz"?"Savatga qo‘shildi!":"Добавлено в корзину!");
}

function renderCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0);
  $("#cartCount").textContent=count;

  $("#cartItems").innerHTML=cart.length
    ?cart.map(x=>{
      const p=products.find(p=>p.id===x.id);

      return `
        <div class="cart-row">
          <div>
            <b>${productName(p)}</b>
            <small>${money(p.price)}</small>
          </div>
          <div class="quantity">
            <button data-change="-1" data-id="${p.id}">−</button>
            <b>${x.qty}</b>
            <button data-change="1" data-id="${p.id}">+</button>
          </div>
        </div>
      `;
    }).join("")
    :`<p class="empty-state">${language==="uz"?"Savatingiz hozircha bo‘sh.":"Ваша корзина пока пуста."}</p>`;

  $("#cartTotal").textContent=money(
    cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0)
  );

  $("#checkoutBtn").disabled=!cart.length;
  $("#checkoutBtn").style.opacity=cart.length?1:.5;
}

function changeQty(id,delta){
  const x=cart.find(x=>x.id===id);
  if(!x)return;

  x.qty+=delta;

  if(x.qty<=0){
    cart=cart.filter(y=>y.id!==id);
  }

  saveCart();
}

function openCart(){
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("show");
}

function closeCart(){
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("show");
}

function showToast(msg){
  const t=$("#toast");
  t.textContent=msg;
  t.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer=setTimeout(()=>{
    t.classList.remove("show");
  },2200);
}

function applyLanguage(){
  document.documentElement.lang=language;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v=translations[language][el.dataset.i18n];
    if(v!==undefined)el.innerHTML=v;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.placeholder=translations[language][el.dataset.i18nPlaceholder];
  });

  renderCategories();
  renderProducts();
  renderCart();
}

$("#categories").addEventListener("click",e=>{
  const b=e.target.closest("[data-category]");
  if(!b)return;

  currentCategory=b.dataset.category;
  renderCategories();
  renderProducts();
});

$("#productGrid").addEventListener("click",e=>{
  const b=e.target.closest("[data-add]");
  if(b)addToCart(Number(b.dataset.add));
});

$("#cartItems").addEventListener("click",e=>{
  const b=e.target.closest("[data-change]");
  if(b){
    changeQty(Number(b.dataset.id),Number(b.dataset.change));
  }
});

$("#searchInput").addEventListener("input",renderProducts);

$("#openCart").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#overlay").addEventListener("click",closeCart);

$("#checkoutBtn").addEventListener("click",()=>{
  if(cart.length){
    closeCart();
    $("#checkoutModal").classList.add("show");
  }
});

$("#closeModal").addEventListener("click",()=>{
  $("#checkoutModal").classList.remove("show");
});

$("#checkoutModal").addEventListener("click",e=>{
  if(e.target.id==="checkoutModal"){
    $("#checkoutModal").classList.remove("show");
  }
});

$("#orderForm").addEventListener("submit",e=>{
  e.preventDefault();

  const data=Object.fromEntries(new FormData(e.target).entries());

  const lines=cart.map(x=>{
    const p=products.find(p=>p.id===x.id);
    return `${productName(p)} x${x.qty} — ${money(p.price*x.qty)}`;
  }).join("\n");

  const total=cart.reduce(
    (s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0
  );

  const message=`RED BITE BUYURTMA
Ism: ${data.name}
Telefon: ${data.phone}
Manzil: ${data.address}
Izoh: ${data.comment}

${lines}
Jami: ${money(total)}`;

  const wa="https://wa.me/998901234567?text="+encodeURIComponent(message);

  window.open(wa,"_blank");

  cart=[];
  saveCart();
  e.target.reset();
  $("#checkoutModal").classList.remove("show");

  showToast(
    language==="uz"
      ?"Buyurtma WhatsApp orqali yuborishga tayyor!"
      :"Заказ готов к отправке через WhatsApp!"
  );
});

$("#themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  const dark=document.body.classList.contains("dark");

  $("#themeBtn").textContent=dark?"☀️":"🌙";

  localStorage.setItem("redbite-theme",dark?"dark":"light");
});

if(localStorage.getItem("redbite-theme")==="dark"){
  document.body.classList.add("dark");
  $("#themeBtn").textContent="☀️";
}

$("#language").addEventListener("change",e=>{
  language=e.target.value;
  applyLanguage();
});

$("#menuToggle").addEventListener("click",()=>{
  $(".main-nav").classList.toggle("show");
});

document.querySelectorAll(".main-nav a").forEach(a=>{
  a.addEventListener("click",()=>{
    $(".main-nav").classList.remove("show");
  });
});

renderCategories();
renderProducts();
renderCart();