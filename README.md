# My-Portfolio
 <hr>
# Google Sheet link to html form with js:
 
 

let form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data= new FormData(form);
    document.querySelector('#submit').value="Submitting.."
    fetch('<your url>', { // your url :- paste the url of your active app script from your browser address bar
        method: "POST", 
        body:data
    }).then(res=>res.text()).then(
        data=>{
            alert("submitted");
            document.querySelector('#submit').value="Submit"
        }
    )
})
```

# chatbot integration with html:
```

    
    import { GoogleGenerativeAI } from "@google/generative-ai";
    
    const API_KEY = "<your api key>"; // your api key:- paste your api key
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    //alert("hi");
    
    async function run() {
    
  //  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    const prompt = document.querySelector("#ai-btn").addEventListener('click', run);

    async function run(){

        document.querySelector("#ai-btn").textContent="Generating..";
        const model = genAI.getGenerativeModel({ model: "gemini-pro"}); 
        let userInput = document.querySelector('#prompt');

        const aiResult= await model.generateContent(userInput.value);
        const aiResponse = await aiResult.response;
        const aiText= aiResponse.text();

        let user = document.createElement("You:");
        const bot= document.createElement('Bot');
        let linebreak= document.createTextNode("\n");
        user.textContent = `You : ${userInput.value}`;
     
        bot.textContent =`Bot : ${aiText}`;
        let response = document.querySelector('.responseTxt');

         response.appendChild(user);
        response.innerHTML+="<br>"
        response.append(bot);
        response.innerHTML+="<br><br>"
        userInput.value='';
        document.querySelector("#ai-btn").textContent="Generating..";

    }
    
    // const result = await model.generateContent(prompt);
    
    // const response = await result.response;
    
    // const text = response.text();
    
    // console.log(prompt);
    
   // alert(text);
    
    }
    
    run();
   
```
