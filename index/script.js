const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.table(teamMembers);

 
const teamListEl = document.querySelector('.team-list');

teamMembers.forEach((member) =>{

  const article = document.createElement('article'); 
  article.classList.add('item'); 

  const imgContainer = document.createElement('div'); 
  imgContainer.classList.add('img-container'); 
  
  const img = document.createElement('img'); 
  img.classList.add('img');
  img.src = member.img;
  img.alt = `foto di ${member.name}`;
  
  const divDati = document.createElement('div'); 
  divDati.classList.add('dati');

  const name = document.createElement('h2'); 
  name.classList.add('nome'); 
  name.textContent = member.name;
  
  const role = document.createElement('p'); 
  role.textContent = member.role;

  const email = document.createElement('a');
  email.href = 'mailto:' + member.email; 
  email.textContent = member.email;

  imgContainer.append(img) 
  divDati.append(name, role, email) 
  article.append(imgContainer, divDati) 
  teamListEl.append(article)
})