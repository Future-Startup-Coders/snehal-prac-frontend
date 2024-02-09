let myCard = {
    profile : './SnehalPhoto1.jpeg',
    role : 'Software Developer',
    name : 'Snehal Dhindle',
    phone : '7066798939',
    mail : 'snehaldhindle@gmail.com'

}

let root = document.getElementById('root')

let profile = document.createElement('img')
profile.setAttribute('src',myCard.profile)
profile.setAttribute('alt','profile')
profile.className = 'img'

let role = document.createElement('h2')
role.textContent = myCard.role

let name = document.createElement('h1')
name.textContent = myCard.name

let phone = document.createElement('h4')
phone.textContent = myCard.phone

let mail = document.createElement('h4')
mail.textContent = myCard.mail

let info = document.createElement('div')
info.className = 'info'

let mainDiv = document.createElement('div')
mainDiv.className = 'mainDiv'

mainDiv.appendChild(profile)

info.appendChild(role)
info.appendChild(name)
info.appendChild(phone)
info.appendChild(mail)

mainDiv.appendChild(info)

root.appendChild(mainDiv)