

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

const getInnetHTML = (item) => `
    <li class="user">
    <img class="avatar" src="assets\\images\\${item.id}.jpg" width="80" height="80" alt="">
    <div class="infoUser">
            <span class="infoOfName">${item.name} (${item.username})</span>
            <span class="info">${item.email}</span>
            <span class="info">${item.company.name}</span> 
    </div>
   <div class="btnCheck">
   <div class="btn">
   <a href="http://127.0.0.1:5500/user.html?userId=${item.id}&page=1" class="checkUser">Просмотр</a>
   </div>
</div>
    </li>
    `


async function setAction() {
    const dataList = document.querySelector('.list');
    let fetchedUser = await getUser();
    fetchedUser.forEach(item => {
        dataList.innerHTML += getInnetHTML(item);
    });
}





setAction();