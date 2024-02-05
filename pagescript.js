async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let dataPost = await response.json();
    return dataPost;
}

const getInnetHTML = (item) => `
<img class="avatar" src="assets\\images\\${item.id}.jpg" alt="">
            <div class="info">
                <span class="name">${item.name}</span>
                <div class="city">
                    <img src="assets\\images\\iconPlace.png" alt="">
                    <span class="cityName">${item.address.city}</span>
                </div>
            </div>`

const getInnetPost = (item) => `
<li class="post">
                        <div class="blockPost">
                            <span class="headerPost">${item.title}</span>
                            <span class="contentPost">${item.body}</span>
                        </div>
                    </li>`

const getInnetInf = (item) => `
                    <li>Сайт: ${item.website}</li>
                    <li>Телефон: ${item.phone}</li>
                    <li>Почта: ${item.email}</li>
                    <li>Компания: ${item.company.name}</li>`

const searchNum = [];                    
const searchParams = window.location.search.split("&");
searchParams.forEach(item => {
    searchNum.push(item.split("=")[1]);
})

const getInnetPag = (counter, dataPag) => {
    for (let i = 0; i < counter + 1; i++) {
        dataPag.innerHTML += `<a href="http://127.0.0.1:5500/user.html?userId=${searchNum[0]}&page=${i}">${i}</a>`
        
    }
}

async function setAction() {
    const dataUser = document.querySelector('.user');
    const dataPost = document.querySelector('.listPosts');
    const dataMoreInf = document.querySelector('.listInf');
    let fetchedUser = await getUser();
    let fetchedPost = await getPost();
    fetchedUser.forEach(item=> {
        if (searchNum[0] == item.id) {

            dataUser.innerHTML = getInnetHTML(item);
            dataMoreInf.innerHTML = getInnetInf(item);
        }
    });
    fetchedPost.forEach((item, index) => {
        if (searchNum[0] == item.userId) {
                dataPost.innerHTML += getInnetPost(item);
        }
    })
}





setAction();