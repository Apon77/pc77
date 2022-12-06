const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyBMuM1cjarAzykkB2WtMjLsJWAZJW161hg",
    authDomain: "pc77-3b54c.firebaseapp.com",
    databaseURL: "https://pc77-3b54c-default-rtdb.firebaseio.com",
    projectId: "pc77-3b54c",
    storageBucket: "pc77-3b54c.appspot.com",
    messagingSenderId: "180595221680",
    appId: "1:180595221680:web:f37263b051666ecd0cc775"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };