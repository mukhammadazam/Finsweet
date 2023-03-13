const key = '_4s8LKQJb427jl0lWrgIN6UYTAKSowXN'
const blogUrl = `https://jsonplaceholder.typicode.com/photos`
const post = document.querySelector('.post')
const crud__form = document.querySelector('.crud__form')

async function blogFun() {
    const reespose = await fetch(blogUrl);
    const data = await reespose.json();
    console.log(data.slice(0, 9));
    data.slice(0, 9).map((el) => {

        const blogCard = document.createElement('div')
        const img = document.createElement('img')
        const title = document.createElement('h5');
        const id = document.createElement('h1')
        const Dbtn = document.createElement('button');
        const Edit = document.createElement('button');
        blogCard.classList.add('col-lg-4')
        title.classList.add('w-50')
        img.src = el.thumbnailUrl
        id.textContent = el.id
        title.textContent = el.title
        Dbtn.textContent = 'Delete';
        Edit.textContent = 'Edit'
        blogCard.append(img, id, title, Edit, Dbtn)
        post.appendChild(blogCard)
    })
}

blogFun()
crud__form.addEventListener('submit', (e) => {

    e.preventDefault();
    const inputFile = document.querySelector('.inputFile').files[0]
    const inputTitle = document.querySelector('.inputTitle')
    const inputText = document.querySelector('.unputText')
    const obj = {
        title: inputTitle.value,
        text: inputText.value
    }
    fetch(blogUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(obj)
    }).then((reespose) => reespose.json()).then((data) => {
        const reader = new FileReader();
        reader.readAsDataURL(inputFile);
        reader.onload = () => {
            const avatarUrl = reader.result;

            const blogCard = document.createElement('div')
            const img = document.createElement('img')
            const title = document.createElement('h5');
            const id = document.createElement('h1')
            const par = document.createElement('p')
            blogCard.classList.add('col-lg-4')
            title.classList.add('w-50')
            img.src = avatarUrl
            id.textContent = data.id
            title.textContent = data.title
            par.textContent = data.text
            blogCard.append(img, id, title, par)
            post.appendChild(blogCard)

            console.log(avatarUrl);
        }
    })
})

async function fun(id) {
    try {
        const reespose = await fetch(`${blogUrl}/${id}`,{
            method: 'DELETE'
        })

    } catch (error) {

    }
  

}