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
    // data = date.slice(1, 3)
    console.log(data.articles.slice(1, 3));
    try {

        data.articles.slice(0, 3).map((Element, index) => {
                console.log(index);
                
                const card = document.createElement('div');
            const img = document.createElement('img');
            const cardBody = document.createElement('div');
            const title = document.createElement('h5');
            const dataTime = document.createElement('div');
            card.classList.add('card');
            cardBody.classList.add('card-body');
            title.classList.add('card-title');
            img.src = Element.urlToImage;
            dataTime.innerHTML = `<input class='border-0 ' type='date'/>`
            title.textContent = Element.author;

            cardBody.appendChild(title);
            card.append(img, dataTime, cardBody);
            row.appendChild(card);

          

            
        })
    } catch (error) {
        console.error(error);
    }
}
ascFun()
