const navList = document.querySelector('.nav__list');
const burger = document.querySelector(".nav__burger");
const navbar = document.querySelector(".nav");
const row = document.querySelector('.row');
const myKey = 'a5bf6f3b316846b689ef768df6effaad';
// MODAL UCHUN FUNKSIYA
burger.addEventListener('click', () => {
    navList.classList.toggle('nav__list1');
    // navbar.classList.toggle('navbar')
})
// API FETCH QILISH UCHUN FUNKSIYA
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${myKey}`
async function ascFun() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles);
    console.log(data.articles.slice(1, 3));
    try {
        console.log(data.articles);
        data.articles.slice(0, 3).map((Element, index) => {
            console.log(index);

            const card = document.createElement('div');
            const img = document.createElement('img');
            const cardBody = document.createElement('div');
            const wrapper = document.createElement('div');
            const title = document.createElement('h5');
            const title1 = document.createElement('h6');
            const text = document.createElement('p');
            const dataTime = document.createElement('div');
            card.classList.add('card', 'border-0',);
            cardBody.classList.add('card-body');
            title1.classList.add('card-title', 'text-center');
            text.classList.add('text-center')
            wrapper.classList.add('d-flex', 'align-items-start', 'gap-4', 'pt-2', 'justify-content-center')
            img.src = Element.urlToImage;
            dataTime.innerHTML = `<input class='border-0' type='date'/>`
            title.textContent = Element.author;
            title1.textContent = Element.content
            text.textContent = Element.description
            cardBody.appendChild(title);
            wrapper.append(dataTime, title);
            card.append(img, wrapper, cardBody, title1, text);
            row.appendChild(card);




        })
    } catch (error) {
        console.error(error);
    }
}
ascFun()
const url1 = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${myKey}`
async function ascFun1() {
    const row1 = document.querySelector('.row1');
    const respone = await fetch(url1);
    const data = await respone.json();
    try {
        data.articles.map((blogpeg) => {
            const card1 = document.createElement('div');
            const img1 = document.createElement('img');
            const card1Body = document.createElement('div');
            const bodyLeni = document.createElement('span');
            const bodyTitle = document.createElement('h2');
            const bodtText = document.createElement('p');
            bodyLeni.classList.add('text-uppercase','text-primary');
            console.log(blogpeg.description.slice(1, 100));
            img1.src = blogpeg.urlToImage;
            img1.alt = blogpeg.source.name
            bodyLeni.textContent = `Business`;
            bodyTitle.textContent = blogpeg.title.slice(1, 80)
            bodtText.textContent = blogpeg.description.slice(1, 150)
            card1Body.append(bodyLeni, bodyTitle, bodtText);
            card1.append(img1, card1Body);
            row1.appendChild(card1);
        })

    } catch (error) {

    }
}
ascFun1()