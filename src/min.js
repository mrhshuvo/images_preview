// get userForm

const userForm = document.getElementById("userForm");
const userPhoto = document.getElementById("userPhoto");
const userPhotoPrev1 = document.getElementById("userPhotoPrev1");
const userPhotoPrev2 = document.getElementById("userPhotoPrev2");
const userPhotoPrev3 = document.getElementById("userPhotoPrev3");
const userPhotoPrev4 = document.getElementById("userPhotoPrev4");
const msg = document.querySelector(".msg");

userForm.onsubmit = (e) =>{
  e.preventDefault();

  const form_data = new FormData(e.target);

  const data = Object.fromEntries(form_data);

 // validation

   if(!data.name || !data.email || !data.mobile){
   msg.innerHTML= createAlert("All fields are required");
   }else{
    msg.innerHTML= createAlert("Data stable","warning");
   };

};

// create image preview

userPhoto.onchange = (e) =>{

 const imagePrev1 = URL.createObjectURL(e.target.files[0]);
 const imagePrev2 = URL.createObjectURL(e.target.files[0]);

 userPhotoPrev1.setAttribute("src",imagePrev1);
 userPhotoPrev2.setAttribute("src",imagePrev2);
 
}

