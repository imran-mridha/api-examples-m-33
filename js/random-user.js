
const randomUsers = ()=>{
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => diplayUsers(data.results))
}

const diplayUsers = users =>{
  const usersContainer = document.getElementById('users-container');
  for(const user of users){
    console.log(user)
    const usersDiv = document.createElement('div');
    usersDiv.classList.add('users-style')
    usersDiv.innerHTML = `
    <h2>Name: ${user.name.first} ${user.name.first}</h2>
    <h5>Email: ${user.email}</h5>
    <h5>Phone: ${user.phone}</h5>
    <h5>Age: ${user.dob.age}</h5>
    <img src="${user.picture.thumbnail}">
    `;
    usersContainer.appendChild(usersDiv)
  }
}
randomUsers()