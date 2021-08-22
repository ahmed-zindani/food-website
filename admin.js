let add =()=>{

    let todo = document.getElementById('todo');
    
    
    firebase.database().ref('PRODUCTS').push({todo:todo.value})
    todo.value= ""
    
    }
    firebase.database().ref('PRODUCTS').on('child_added',(data)=>{
        console.log(data.key)
        let list = document.getElementById('list');
    list.innerHTML +=`
    <li>
    <div class="list-card">
    
        <div>
     
        <input id ="${data.key}" type ="text" value ="  ${ data.val().todo}" disabled/>
    
        
    
        </div>
    
    
    
    
    <div>
    <button   onclick="editBtn('${data.key}')"  type="button" class="btn btn-warning">EDIT PRODUCT</button>
    <button  onclick="delTodo('${data.key}')" type="button" class="btn btn-danger">Delete PRODUCT</button>
    </div>
    </div>
    
    
    
    </li>
    
    `
    })
    
    let del=()=>{
        firebase.database().ref('PRODUCTS').remove()
        let list = document.getElementById('list');
        list.innerHTML=""
    
    
    }
    
    let delTodo = (key)=>{
    // console.log(key)
    firebase.database().ref(`PRODUCTS/${key}`).remove()
    event.target.parentNode.parentNode.remove()
    
    
    
    }
    let editBtn =(id)=>{
        let input= document.getElementById('id')
        input.disabled = false
        console.log(input)
    
    
    }



    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         var uid = user.uid;
    //         firebase.database().ref(`users/${uid}`).once('value', (data) => {
    //             let username = document.getElementById("username");
    //             let email = document.getElementById("email");
    //             let userprofile = document.getElementById("userprofile");
    //             username.innerHTML = data.val().username;
    //             email.innerHTML = data.val().email
    //             userprofile.setAttribute('src', data.val().profile)
    //             console.log(data.val())
    //         })
    //     } else {
    //         window.location = "index.html"
    //     }
    // });
    
    
    
    // let uploadFiles = (file) => {
    //     return new Promise((resolve, reject) => {
    //         let storageRef = firebase.storage().ref(`myfolder/todayImages/${file.name}`);
    //         let uploading = storageRef.put(file)
    //         uploading.on('state_changed',
    //             (snapshot) => {
    
    //                 switch (snapshot.state) {
    //                     case firebase.storage.TaskState.PAUSED:
    //                         console.log('Upload is paused');
    //                         break;
    //                     case firebase.storage.TaskState.RUNNING:
    //                         console.log('Upload is running');
    //                         break;
    //                 }
    //             },
    //             (error) => {
    //                 reject(error)
    //             },
    //             () => {
    //                 uploading.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //                     resolve(downloadURL)
    //                 });
    //             }
    //         );
    //     })
    // }
    

