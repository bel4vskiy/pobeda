const dataList = document.querySelector('.list');

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

const getInnetHTML = (item) => `
    <li class="user">
    <img class="avatar" src="assets\\images\\${item.id}.jpg" width="80" height="80" alt="">
    <div class="infoUser">
            <span class="infoOfName">${item.name}</span>
            <span class="info">${item.email}</span>
            <span class="info">${item.company.name}</span> 
    </div>
   <div class="btnCheck">
   <button class="checkUser">Просмотр</button>
</div>
    </li>
    `

const getInnetHTMLUser = (item) => `
<span>${item.name}</span>
<span>${item.nickname}</span>
<span>${item.email}</span>
<span>${item.company.name}</span>
    `


async function setAction() {
    let fetchedUser = await getUser();
    fetchedUser.forEach(item => {
        dataList.innerHTML += getInnetHTML(item);
    });
}

const searchParams = window.location.search;
const userId = searchParams.split("=");

console.log(userId[1]);
setAction();