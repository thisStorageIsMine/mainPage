const articles = [
  {
    img: "imgs/book/book1.png",
    autorName: "Александр",
    autorSurname: "Пушкин",
    title: 'Пушкин и его пельмени',
    pdf: 'pdf/pushkin_stikhotvoreniya_aleksandra_pushkina_1997_text.pdf'
  },
  {
    img: "imgs/book/book1.png",
    autorName: "Александр",
    autorSurname: "Пушкин",
    title: 'Пушкин и его пельмени1',
    pdf: 'pdf/pushkin_stikhotvoreniya_aleksandra_pushkina_1997_text.pdf'
  }
];

function getMonthName(monthNumber) {
  const months = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабря"
  };
  
  return months[monthNumber];
}

const storage = document.querySelector('.storage');
const book_storage = document.querySelector('.book_storage');
const embed = document.getElementById("embed");
const modal = document.querySelector(".modal");
const _alert = document.querySelector('.alert');
const _favourites = document.querySelector('.favourites');

let data = new Date();

for (let i in articles) {
    const create = document.createElement('div');
    const storage_create = document.createElement('div');
    const createBtn = document.createElement('button');
    const createBtnRemove =  document.createElement('button');
    createBtnRemove.textContent = "Удалить из избранного"
    createBtnRemove.classList.add('removeBtn',"link-font");
    create.setAttribute("data-liked", "false");
    create.setAttribute("data-id", i);

    function addBtn() {
      if(create.dataset.liked==="true"){
        create.append(createBtnRemove)
      } else{
        create.append(createBtn);
      }
    }
    createBtnRemove.addEventListener("click",function(event) {
      event.stopPropagation();
      createBtnRemove.remove();
      const books = document.querySelectorAll(".storage > .card");
      for (const book of books) {
        if(book.dataset.id===create.dataset.id) {
          book.remove();
        }
      }
      create.dataset.liked = false;
      addBtn();
    });

    createBtn.textContent = "Добавить в избранное";
    createBtn.classList.add('createBtn',"link-font");
    createBtn.addEventListener("click",function(event) {
      createBtn.remove();
      create.dataset.liked = true;
      storage_create.classList.add('card', "fade");
      storage_create.setAttribute("data-id", i);
      storage_create.innerHTML = `
      <p class="title-font" style="font-size:14px;">${articles[i].title}</p>
      <p class="regular-font" style="font-size:12px;position: relative;
      right: -50%;">${articles[i].autorName} ${articles[i].autorSurname}</p>
      <p class='time regular-font' style="font-size:12px">${data.getDate()} ${getMonthName(data.getMonth())}</p>
      `;
      storage.prepend(storage_create);
      event.stopPropagation();
      _alert.style.transform = "translateY(0)";
      setInterval(() => {
      _alert.style.transform = "translateY(-100%)";
      }, 2000);
      addBtn();
    });

    
    create.classList.add('book');
    create.innerHTML= `
            <img src="${articles[i].img}" alt="">
            <p>${articles[i].title}</p>
            <p>${articles[i].autorName} ${articles[i].autorSurname}</p>
    `;
    addBtn();
    
    
    createBtnRemove
    create.onclick = () => {
      
      modal.style.zIndex = "100";
      modal.style.opacity = "1";
      embed.src=`${articles[i].pdf}`;
      btn = document.querySelector('button');
      modal.addEventListener("click", function(event) {
        if(event.target.tagName==="EMBED"){
          event.stopPropagation();
        } else {
          modal.style.zIndex = "";
          modal.style.opacity = "";
        }
      });
    }
    
    book_storage.appendChild(create);
}

  

_favourites.addEventListener('click', ()=>{
  
})