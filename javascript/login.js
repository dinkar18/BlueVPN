




function $(ele) {
    return document.querySelector(ele);
}

function $$(ele) {
    return document.querySelectorAll(ele);
}

// let button = $('.button');
// console.log(button);

let users = [{
            email: 'admin',
            password: '1234',
            name: 'Dinkar'
        }
        
    ]
    // console.log(
    //     $('.button'));

$('.btn3').onclick = function() {
    // event.preventDefault();
    let email = $('#usname').value;
    let password = $('#uspass').value;
    //let name = $('.printname').value;


    // console.log(email, password);
    let userFound = false;
    users.forEach(function(user) {
        // console.log(user.email, user.password);
        if (email === user.email) {
            // console.log('found');
            userFound = true;
            //var userName = user.name;
            /*   alert(user.name); */

            if (password === user.password) {
                // localStorage.setItem("textname", user.name);

                localStorage.name = user.name;
                $('.btn3').href = '../pricing.html';

                // document.getElementById("printname").innerHTML = localStorage.getItem("textname");

                // alert('hello')
            } else {
                // $('.email').placeholder = '';
                $('#uspass').value = '';
                $('#uspass').placeholder = 'Incorrect Password';
            }
        }
    });

    if (!userFound) {
        $('#usname').value = '';
        $('#usname').placeholder = 'Incorrect Email';
        $('#uspass').value = '';
        // console.log('not');

    }
}








/////////////////////////////////////////





myForm= document.forms[0];

myForm.addEventListener('submit',(e)=>{

    //e.preventDefault();
    var usname= document.getElementById('usname').value;

    //localStorage.setItem('contactName',uName);

    var contactObj = {
        'userName' : usname
        
    };
    localStorage.setItem('contactInfo',JSON.stringify(contactObj));
});






