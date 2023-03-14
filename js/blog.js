const blogUrl = `https://fakestoreapi.com/products`
const post = document.querySelector('.post')
const crud__form = document.querySelector('.crud__form')

async function blogFun() {
    const reespose = await fetch(blogUrl);
    const data = await reespose.json();
    // console.log(data.slice(0, 9));
    data.slice(0, 9).map((el) => {

        const blogCard = document.createElement('div')
        const img = document.createElement('img')
        const title = document.createElement('h5');
        const id = document.createElement('h1')
        const Dbtn = document.createElement('button');
        const Edit = document.createElement('button');
        const par = document.createElement('p')

        blogCard.setAttribute('data-id', `${el.id}`)
        blogCard.classList.add('col-lg-4', 'cartt')
        title.classList.add('w-50')
        Dbtn.className = 'delete';
        Edit.className = 'edit'
        img.src = el.image
        id.textContent = el.id
        title.textContent = el.title
        par.textContent = el.description
        Dbtn.textContent = 'Delete';
        Edit.textContent = 'Edit'
        blogCard.append(img, id, title, par, Edit, Dbtn)
        post.appendChild(blogCard)
    })
}

blogFun()
crud__form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputFile = document.querySelector('.inputFile').files[0]
    const inputTitle = document.querySelector('.inputTitle').value
    const inputText = document.querySelector('.unputText').value
    const heddinId = document.querySelector('.idheddin').value;
    if (heddinId) {
        idetFun(inputTitle, inputText, heddinId)

    } else {
        const obj = {
            title: inputTitle.value,
            description: inputText.value
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
                const Dbtn = document.createElement('button');
                const Edit = document.createElement('button');
                blogCard.classList.add('col-lg-4', 'cartt')
                blogCard.setAttribute('data-id', `${data.id}`)

                title.classList.add('w-50')
                Dbtn.className = 'delete';
                Edit.className = 'edit'
                img.src = avatarUrl
                id.textContent = data.id
                title.textContent = data.title
                par.textContent = data.description
                Dbtn.textContent = 'Delete';
                Edit.textContent = 'Edit'
                blogCard.append(img, id, title, par, Dbtn, Edit)
                post.appendChild(blogCard)

            }
        })
    }

})
post.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        console.log(id);
        fun(id).then(() => {
            const blogCard = e.target.closest('.cartt')
            blogCard.remove()
        }).catch((error) => {
            console.error(error);
        })
    } else if (e.target.classList.contains('edit')) {
        const list = e.target.parentElement;
        const idT = list.querySelector('h1').textContent;
        const aTitle = list.querySelector('h5').textContent;
        const pText = list.querySelector('p').textContent;

        document.querySelector('.inputFile').classList.add('d-none')
        crud__form.querySelector('.idheddin').value = idT;
        crud__form.querySelector('.inputTitle').value = aTitle;
        crud__form.querySelector('.unputText').value = pText;



    }

})

async function fun(id) {
    try {
        const reespose = await fetch(`${blogUrl}/${id}`, {
            method: 'DELETE'
        })
        if (reespose.ok) {
            return reespose.text()
        }

    } catch (error) {
        console.error(error);
    }


}
async function idetFun(inputTitle, inputText, heddinId) {
    const dataF = new FormData();
    dataF.append('title', inputTitle);
    dataF.append('description', inputText);
    try {
        const reespose = await fetch(`${blogUrl}/${heddinId}`, {
            method: 'PUT',
            body: dataF
        })
        const data = reespose.json()
        if (document.querySelector('h1').textContent === heddinId.toString()) {
            document.querySelector('h5').textContent = inputTitle.value;
            document.querySelector('p').textContent = inputText.value;

        }
        return data
    } catch (error) {
        console.error(error);
    }
}