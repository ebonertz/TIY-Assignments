
  function helloWorld(lang){
  if (lang === 'es'){
    console.log("Hola Mundo");
  }
  else if (lang === "de"){
    console.log("Hallo Welt");
  }
  else if (lang === "en"){
    console.log("Hello world");
  }
  else{
    console.log("pick another language");
  }
}

helloWorld("en");
helloWorld("es");
helloWorld("de");
