
let url2 = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${myKey}`
async function ascFun2() {
    const resp = await fetch(url2);
    const data2 = await resp.json();;
    console.log(data2.articles
        );
}
ascFun2()