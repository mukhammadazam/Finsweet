const input = document.querySelector('.input1')

async function ascFun2() {
    let url2;
    if (input.value) {
        url2 = `https://newsapi.org/v2/everything?q=${input.value}&from=2023-03-11&to=2023-03-11&sortBy=popularity&apiKey=${myKey}`
    }
     else {
        url2 = `https://newsapi.org/v2/everything?q=apple&from=2023-03-12&to=2023-03-12&sortBy=popularity&apiKey=${myKey}`
    }
    const resp = await fetch(url2);
    const data2 = await resp.json();
    try {
        const row3 = document.querySelector('.row2');
        row3.innerHTML = '';
        data2.articles.map((Element) => {
            const card2 = document.createElement('div');
            const img2 = document.createElement('img');
            const card1Body2 = document.createElement('div');
            const bodyLeni2 = document.createElement('span');
            const bodyTitle2 = document.createElement('h2');
            const bodtText2 = document.createElement('p');
            card2.classList.add('card2', 'd-lg-flex', 'align-items-center', 'justify-content-lg-between');
            card1Body2.classList.add('ps-lg-5', 'p-5', 'p-sm-0')
            img2.classList.add('p-5', 'p-sm-0');
            bodyTitle2.classList.add('text-center', 'text-sm-start')
            bodyLeni2.classList.add('d-block', 'text-center', 'text-sm-start','pb-3')
            bodtText2.classList.add('text-center', 'text-sm-start')
            img2.src = Element.urlToImage;
            img2.alt = Element.author;
            bodtText2.textContent = Element.description.slice(0, 100)
            bodyTitle2.textContent = Element.title
            bodyLeni2.textContent = Element.author;
            card1Body2.append(bodyLeni2, bodyTitle2, bodtText2);
            card2.append(img2, card1Body2);
            row3.appendChild(card2)
        })
    } catch (error) {
        console.error(error);
    }
}
ascFun2()
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ascFun2()

    }
})