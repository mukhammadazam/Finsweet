const navList = document.querySelector('.nav__list');
const burger = document.querySelector(".nav__burger");
const navbar = document.querySelector(".nav");
const row = document.querySelector('.row');
const myKey = 'f4067fe682044e6787e881d30a1c01ba';
// MODAL UCHUN FUNKSIYA
burger.addEventListener('click', () => {
    navList.classList.toggle('nav__list1');
    // navbar.classList.toggle('navbar')
})
// API FETCH QILISH UCHUN FUNKSIYA
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${myKey}`
console.log(url);
const loader_container = document.querySelector('.loader-container');
const loader = document.createElement('div');
loader.classList = 'loader';
loader_container.appendChild(loader);
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
    }finally {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader_container.remove()
        }
    }
}
ascFun()