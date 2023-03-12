
let url2 = `https://newsapi.org/v2/everything?q=2023-03-11&sortBy=popularity&apiKey=${myKey}`
// let url2=`https://newsapi.org/v2/everything?domains=${input.value}thenextweb.com&apiKey=${myKey}`
async function ascFun2() {
    const resp = await fetch(url2);
    const data2 = await resp.json();
    try {
        data2.articles.map((Element) => {
            const row3 = document.querySelector('.row2');
            const card2 = document.createElement('div');
            const img2 = document.createElement('img');
            const card1Body2 = document.createElement('div');
            const bodyLeni2 = document.createElement('span');
            const bodyTitle2 = document.createElement('h2');
            const bodtText2 = document.createElement('p');
            card2.classList.add('card2','d-lg-flex','align-items-center','justify-content-lg-between');
            card1Body2.classList.add('ps-5')
            img2.src = Element.urlToImage;
            img2.alt = Element.author;
            bodyTitle2.textContent = Element.title
            bodyLeni2.textContent = Element.author;
            bodtText2.textContent = Element.content
            card1Body2.append(bodyLeni2, bodyTitle2, bodtText2);
            card2.append(img2, card1Body2);
            row3.appendChild(card2)
        })
    } catch (error) {
        console.error(error);
    }
}
ascFun2()