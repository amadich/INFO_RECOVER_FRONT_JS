const user = [
   {
      id: "0",
      Email : "jeridi.ui@mail.net"
   },
   {
      id: "1",
      Email : "jeridi.Master@mail.net"
   }
]

console.table(user);

function upJ() {
   x = document.getElementsByTagName("article")[0];
   user.map((key) => {
      
      
      let mail = convmail(key)

      x.innerHTML +=  "<span class='keyj'>"+mail+"<br>"+"</span>";
      //console.log(key.Email);
   })
}


function convmail(key) {

   let emailU = "<span id='f_m_t'>"+key.Email.charAt(0).toLocaleUpperCase()+"</span>";
   let tic = "<span id='f_m'>"+key.Email.substring(1,key.Email.length)+"</span>"
   return emailU+tic

}

// Programme General !!
upJ();