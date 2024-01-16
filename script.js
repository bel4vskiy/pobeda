const dataList = document.querySelector('.list');

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

const getInnetHTML = (item) => `
    <li>
    <a href="user.html?userId=${item.id}">
        <img src="C:\\Users\\stud307\\Desktop\\pobeda\\images\\${item.id}.jpg" alt="">
        <span>${item.name}</span>
        <span>${item.email}</span>
        <span>${item.company.name}</span>  
    </a>
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