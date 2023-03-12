
//2-FUNCTION ---------------------------------------------------------------2-----------------------------------
const inputv = document.querySelector('.input');
async function ascFun1() {
    let url1;
    // console.log(url1);
    if (inputv.value) {
        url1 = `https://newsapi.org/v2/everything?q=${inputv.value}&from=2023-03-11&to=2023-03-11&sortBy=popularity&apiKey=${myKey}`;
        console.log(url1);
    } else {
        url1 = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${myKey}`

    }

    const row1 = document.querySelector('.row1');
    const respone = await fetch(url1);
    const data = await respone.json();
    try {
        row1.innerHTML='';
        data.articles.map((blogpeg) => {
            console.log(data.articles[0].content
                );
            const card1 = document.createElement('div');
            const img1 = document.createElement('img');
            const card1Body = document.createElement('div');
            const bodyLeni = document.createElement('span');
            const bodyTitle = document.createElement('h2');
            const bodtText = document.createElement('p');
            card1.classList.add('d-lg-flex', 'align-items-lg-center', 'justify-content-lg-between', 'p-sm-5');
            card1Body.classList.add('ps-lg-5')
            bodyLeni.classList.add('text-uppercase', 'text-primary', 'd-block', 'pb-3', 'pt-2', 'text-center', 'text-sm-start');
            bodyTitle.classList.add('bodytitle', 'width-50', 'pb-5', 'fs-2', 'text-center', 'text-sm-start');
            bodtText.classList.add('bodytext', 'w-sm-75', 'text-center', 'mx-0', 'text-sm-start');
            img1.classList.add('p-5', 'p-sm-0')
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
        console.error(error);
    }
}
const input = document.querySelector('.input');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ascFun1()

    }
})
ascFun1()

