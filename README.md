# More JSON Practice!!!

You've had some practice with the Game of Thrones API, now it's time to render. Your goal is to integrate with the Game of Thrones API.

Basic Requirements:
* A user can see a GOT character on page load
* A user can click a button to scroll to a different GOT character

## Introduction

Make use of the fantastic GOT api:
https://anapioficeandfire.com/

Check out the documentation here:
https://anapioficeandfire.com/Documentation

## The Details


```js
let get = (url) => {
    return fetch(url).then(response => response.json());
};

let getRandomUser = get('https://randomuser.me/api/')
  .then(response => { return response.results });

let getStarkHouseFounder = () => {
  let houseData = get('https://www.anapioficeandfire.com/api/houses/362')
    .then(response => { return response; });

  let founderUrl = houseData.then(data => {
    return data.founder;
  });

  let founderName = founderUrl.then(url => {
    get(url).then(response => {
      $('#bigtext').html(response.aliases[0])
      return response.aliases[0]
    });
  });
}

getStarkHouseFounder();


let manipulateDom = () => {
  let name, email, dob, address, phone, pw, image;
  getRandomUser.then(data => {
    name = data[0].name.first;
    email = data[0].email;
    dob = data[0].dob;
    address = data[0].location;
    phone = data[0].phone;
    pw = data[0].login.password;
    image = data[0].picture.thumbnail

    // this is the vanilla javascript way of doing things
   // document.getElementById('bigtext').innerHTML = name;
   document.getElementById('photo').style['background-image'] = `url(${image})`;

   // this is the jquery way of doing things
   $('#email').on('mouseover', event => {
    $('#smalltext').html(`My email is ${email}`);
   });
  })
}

manipulateDom();
```
