let uploadFiles = (file) => {
  return new Promise((resolve, reject) => {
      let storageRef = firebase.storage().ref(`myfolder/todayImages/${file.name}`);
     
      let uploading = storageRef.put(file)
      uploading.on('state_changed',
          (snapshot) => {
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              
              switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED:
                      console.log('Upload is paused');
                      break;
                  case firebase.storage.TaskState.RUNNING:
                      console.log('Upload is running');
                      break;
              }
          },
          (error) => {
              reject(error)
          },
          () => {
              uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
                  resolve(downloadURL)
              });
          }
      );
  })
}
















// console.log(firebase)












let singupbtn = ()=>{
    window.location.href = "singup.html"
}

let register = async ()=>{
    let email =document.getElementById('email');
    let password = document.getElementById('pass');
    let fname = document.getElementById('name');
    let country = document.getElementById('country');
    let phoneNum = document.getElementById('phoneNum');
   let profile =document.getElementById('profile');
   let admin = document.getElementById('admin');
   let user = document.getElementById('user');

   let image = await uploadFiles(profile.files[0]);
    let data = {
      Name : fname.value,
      number : phoneNum.value,
      country: country.value,
      email : email.value,
      password : password.value,
      profile : image
    }

    


    // let id = firease.database().ref(`users`).push().key;
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      firebase.database().ref(`users/${res.user.uid}`).set(data)
      // let sucessAlert =document.getElementById('success-alert');
      // sucessAlert.innerHTML = "YOU SUBSCRIBE SUCCESFULLY"
      // sucessAlert.style.display = "block"
      // email.value = "";
      // password.value = "";
      // number.value="";
      // name.value = "";


      // errorAlert.style.display="none"
.then(()=>{
  setTimeout(() => {
    window.location.href = "login.html"
      
 },1000);


    })
    .catch((error) => {
       let errorAlert =document.getElementById("error");
       errorAlert.innerHTML = "ERROR" + error.message
       errorAlert.style.display="block"
      
      var errorCode = error.code;
      var errorMessage = error.message;
     console.log('error=>',errorMessage)
     
    });
})
};

let login =()=>{
  let email =document.getElementById('email');
  let password = document.getElementById('password');
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    localStorage.setItem(`uid`,userCredential.user.uid)
    var user = userCredential.user.uid;
     firebase.database().ref(`users/${user.uid}`)
     .once('value',(data)=>{
     console.log(data.val())
      setTimeout(() => {
        window.location = "profile.html"
          
      },500);
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
    swal({
        text:errorMessage,
        title: "Error"
        })
  });

}
