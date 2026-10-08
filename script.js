const properties=[
{id:"atico-muntaner",title:"Ático Muntaner",type:"atico",operation:"buy",location:"barcelona",locationLabel:"Barcelona · Eixample",price:"1.250.000 €",numericPrice:1250,size:"148 m²",rooms:"3 habitaciones",baths:"2 baños",extra:"Terraza 32 m²",tag:"DESTACADA",description:"Un ático luminoso en el corazón del Eixample, con una terraza privada pensada para desayunos largos y noches de verano.",features:["Terraza privada","Cocina de diseño","Grandes ventanales","Climatización","Ascensor","Plaza de parking"],images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"]},
{id:"casa-serra",title:"Casa Serra",type:"chalet",operation:"buy",location:"maresme",locationLabel:"Maresme · Alella",price:"780.000 €",numericPrice:780,size:"212 m²",rooms:"4 habitaciones",baths:"3 baños",extra:"Jardín 480 m²",tag:"NUEVA ENTRADA",description:"Casa contemporánea rodeada de verde, con espacios amplios, luz natural y jardín privado.",features:["Jardín privado","Piscina","Chimenea","Garaje","Zona barbacoa","Vistas"],images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"]},
{id:"piso-almagro",title:"Piso Almagro",type:"piso",operation:"rent",location:"madrid",locationLabel:"Madrid · Chamberí",price:"2.600 €/mes",numericPrice:31.2,size:"96 m²",rooms:"2 habitaciones",baths:"2 baños",extra:"Amueblado",description:"Elegancia tranquila en uno de los barrios más deseados de Madrid, con interiores cálidos y mucha luz.",features:["Amueblado","Portero","Cocina equipada","Balcón","Aire acondicionado","Trastero"],images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=90","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"]},
{id:"villa-sa-riera",title:"Villa Sa Riera",type:"villa",operation:"buy",location:"girona",locationLabel:"Costa Brava · Begur",price:"920.000 €",numericPrice:920,size:"176 m²",rooms:"3 habitaciones",baths:"3 baños",extra:"Piscina + vistas",tag:"VISTAS AL MAR",description:"Una villa mediterránea contemporánea a pocos minutos de Sa Riera, con piscina y terrazas orientadas al paisaje.",features:["Piscina privada","Vistas al mar","3 terrazas","Jardín mediterráneo","Chimenea","Parking"],images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90&sat=-8","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90&sat=-5","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"]},
{id:"atico-verdi",title:"Ático Verdi",type:"atico",operation:"buy",location:"barcelona",locationLabel:"Barcelona · Gràcia",price:"495.000 €",numericPrice:495,size:"72 m²",rooms:"2 habitaciones",baths:"1 baño",extra:"Balcón",description:"Un ático con personalidad en Gràcia, reformado con materiales naturales y una distribución muy luminosa.",features:["Reformado","Balcón","Cocina abierta","Parquet natural","Trastero","Orientación sur"],images:["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90&sat=-10","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90"]},
{id:"villa-mar",title:"Villa Mar",type:"villa",operation:"rent",location:"girona",locationLabel:"Costa Brava · L'Escala",price:"4.800 €/mes",numericPrice:57.6,size:"238 m²",rooms:"4 habitaciones",baths:"3 baños",extra:"Piscina + jardín",tag:"TEMPORADA",description:"Villa privada para disfrutar del Mediterráneo con piscina, jardín y espacios exteriores diseñados para vivir fuera.",features:["Piscina","Jardín","Vistas","Barbacoa","Parking","A 8 min de la playa"],images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=90&sat=-10","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90&sat=-5","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"]},
{id:"apartamento-born",title:"Apartamento Born",type:"apartamento",operation:"buy",location:"barcelona",locationLabel:"Barcelona · El Born",price:"365.000 €",numericPrice:365,size:"61 m²",rooms:"1 habitación",baths:"1 baño",extra:"Balcón francés",description:"Apartamento de diseño en una finca histórica, con techos altos y una intervención contemporánea muy cuidada.",features:["Finca histórica","Techos altos","Balcón","Cocina equipada","Luz natural","Reforma integral"],images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"]},
{id:"adosado-blanes",title:"Adosado Sa Palomera",type:"adosado",operation:"buy",location:"girona",locationLabel:"Costa Brava · Blanes",price:"545.000 €",numericPrice:545,size:"154 m²",rooms:"4 habitaciones",baths:"2 baños",extra:"Patio + garaje",description:"Adosado familiar cerca del mar, con patio privado y una distribución cómoda para todo el año.",features:["Patio privado","Garaje","Solárium","Zona de juegos","Cocina equipada","Cerca del mar"],images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90&sat=-15","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90&sat=-10","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"]},
{id:"piso-gracia",title:"Piso Travessera",type:"piso",operation:"rent",location:"barcelona",locationLabel:"Barcelona · Gràcia",price:"1.850 €/mes",numericPrice:22.2,size:"88 m²",rooms:"2 habitaciones",baths:"1 baño",extra:"Terraza",description:"Piso tranquilo y luminoso con terraza, materiales naturales y una ubicación excepcional para vivir Barcelona.",features:["Terraza","Amueblado","Cocina abierta","Ascensor","Aire acondicionado","Zona tranquila"],images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=90&sat=-10","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90"]},
{id:"chalet-madrid",title:"Chalet Encinar",type:"chalet",operation:"buy",location:"madrid",locationLabel:"Madrid · La Moraleja",price:"1.890.000 €",numericPrice:1890,size:"420 m²",rooms:"5 habitaciones",baths:"4 baños",extra:"Jardín + piscina",tag:"PRIVATE LISTING",description:"Chalet de líneas contemporáneas en una parcela privada, pensado para una vida familiar cómoda y elegante.",features:["Piscina","Jardín privado","5 dormitorios","Garaje doble","Despacho","Seguridad"],images:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"]}
];

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const grid=$("#propertyGrid"), empty=$("#emptyState"), count=$("#resultsCount");
let favorites=JSON.parse(localStorage.getItem("novaFavorites")||"[]"), currentProperty=null,currentImage=0;
let showAllProperties=false;

function cardTemplate(p){
 return `<article class="property-card ${p.tag?"featured-card":""}" data-id="${p.id}" data-operation="${p.operation}" data-location="${p.location}" data-price="${p.numericPrice}" data-type="${p.type}">
  <div class="property-image"><img src="${p.images[0]}" alt="${p.title}"><div class="image-shade"></div>${p.tag?`<span class="property-tag">${p.tag}</span>`:""}<button class="favorite ${favorites.includes(p.id)?"active":""}" data-fav="${p.id}" aria-label="Guardar ${p.title}">${favorites.includes(p.id)?"♥":"♡"}</button></div>
  <div class="property-info"><div><span>${p.locationLabel}</span><strong>${p.price}</strong></div><h3>${p.title}</h3><p>${p.size} · ${p.rooms} · ${p.baths} · ${p.extra}</p><button class="details-btn" data-open="${p.id}">Ver propiedad <span>↗</span></button></div>
 </article>`;
}
function render(list=properties){
 const filtered=list;
 const visible=showAllProperties?filtered:filtered.slice(0,4);
 grid.innerHTML=visible.map((p,i)=>cardTemplate(p)).join("");
 count.textContent=`${String(filtered.length).padStart(2,"0")} ${filtered.length===1?"propiedad":"propiedades"}`;
 empty.style.display=filtered.length?"none":"block";
 const more=$("#showMoreBtn");
 if(more){
   more.style.display=filtered.length>4?"inline-flex":"none";
   more.innerHTML=showAllProperties?"Ver menos propiedades <span>↑</span>":"Ver todas las propiedades <span>↓</span>";
 }
 bindCards();
}
function bindCards(){
 $$("[data-fav]").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();toggleFavorite(b.dataset.fav)}));
 $$("[data-open]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.open)));
}
function toggleFavorite(id){
 favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
 localStorage.setItem("novaFavorites",JSON.stringify(favorites));
 updateFavoriteCounts(); renderCurrent();
}
function updateFavoriteCounts(){
 $("#favoritesCount").textContent=favorites.length;
 $("#mobileFavoritesCount").textContent=favorites.length;
 $("#favoritesSectionCount").textContent=`${favorites.length} ${favorites.length===1?"guardada":"guardadas"}`;
 renderFavorites();
}
function renderCurrent(){
 const op=$("#operation").value,loc=$("#location").value,type=$("#type").value,price=$("#price").value;
 const max=price==="all"?Infinity:Number(price)*1000;
 showAllProperties=false;
 render(properties.filter(p=>(op==="all"||p.operation===op)&&(loc==="all"||p.location===loc)&&(type==="all"||p.type===type)&&p.numericPrice<=max));
}
function renderFavorites(){
 const favs=properties.filter(p=>favorites.includes(p.id));
 $("#favoritesGrid").innerHTML=favs.length?favs.map(cardTemplate).join(""):`<div class="favorites-empty"><strong>Aún no has guardado ninguna.</strong><span>Pulsa ♡ en las propiedades que quieras comparar después.</span></div>`;
}
function openModal(id){
 currentProperty=properties.find(p=>p.id===id); currentImage=0;
 $("#modalTitle").textContent=currentProperty.title; $("#modalLocation").textContent=currentProperty.locationLabel;
 $("#modalPrice").textContent=currentProperty.price; $("#modalDescription").textContent=currentProperty.description;
 $("#modalSpecs").innerHTML=`<div><strong>${currentProperty.size}</strong><span>Superficie</span></div><div><strong>${currentProperty.rooms.replace(" habitaciones","")}</strong><span>Habitaciones</span></div><div><strong>${currentProperty.baths.replace(" baños","")}</strong><span>Baños</span></div><div><strong>${currentProperty.extra}</strong><span>Extra</span></div>`;
 $("#modalFeatures").innerHTML=currentProperty.features.map(x=>`<span>✓ ${x}</span>`).join("");
 renderModalImage(); $("#propertyModal").classList.add("open"); $("#propertyModal").setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
}
function renderModalImage(){
 $("#modalImage").src=currentProperty.images[currentImage]; $("#modalImage").alt=`${currentProperty.title} — imagen ${currentImage+1}`;
 $("#galleryDots").innerHTML=currentProperty.images.map((_,i)=>`<button class="${i===currentImage?"active":""}" data-gallery="${i}" aria-label="Imagen ${i+1}"></button>`).join("");
 $$("[data-gallery]").forEach(b=>b.addEventListener("click",()=>{currentImage=Number(b.dataset.gallery);renderModalImage()}));
}
function closeModal(){$("#propertyModal").classList.remove("open");$("#propertyModal").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")}
$("#prevImage").addEventListener("click",()=>{currentImage=(currentImage-1+currentProperty.images.length)%currentProperty.images.length;renderModalImage()});
$("#nextImage").addEventListener("click",()=>{currentImage=(currentImage+1)%currentProperty.images.length;renderModalImage()});
$$("[data-close]").forEach(x=>x.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
$("#visitBtn").addEventListener("click",()=>{closeModal();location.hash="contacto";setTimeout(()=>document.querySelector('[name="interest"]').value="Comprar",300)});

$("#showMoreBtn").addEventListener("click",()=>{showAllProperties=!showAllProperties;renderCurrentList()});
function renderCurrentList(){
 const op=$("#operation").value,loc=$("#location").value,type=$("#type").value,price=$("#price").value;
 const max=price==="all"?Infinity:Number(price)*1000;
 const filtered=properties.filter(p=>(op==="all"||p.operation===op)&&(loc==="all"||p.location===loc)&&(type==="all"||p.type===type)&&p.numericPrice<=max);
 const old=showAllProperties; render(filtered); showAllProperties=old; 
 // render() uses current showAllProperties; this helper exists to keep the button state predictable.
}
$("#searchBtn").addEventListener("click",renderCurrent);
["operation","location","price","type"].forEach(id=>$("#"+id).addEventListener("change",renderCurrent));
$("#resetBtn").addEventListener("click",()=>{["operation","location","price","type"].forEach(id=>$("#"+id).value="all");showAllProperties=false;renderCurrent()});
$("#favoritesNav").addEventListener("click",()=>setTimeout(()=>document.querySelector("#favoritos").scrollIntoView({behavior:"smooth"}),10));
$("#mobileFavorites").addEventListener("click",()=>{$(".mobile-menu").classList.remove("open")});

$(".menu-toggle").addEventListener("click",()=>{const open=$(".mobile-menu").classList.toggle("open");$(".menu-toggle").setAttribute("aria-expanded",open)});
$$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>$(".mobile-menu").classList.remove("open")));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();$("#formNote").textContent="Gracias. Esta es una demo: en una web real, la consulta se enviaría al CRM o al correo del equipo.";e.target.reset()});

function init(){showAllProperties=false;render();updateFavoriteCounts()}
init();
