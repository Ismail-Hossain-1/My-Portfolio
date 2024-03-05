
    
    import { GoogleGenerativeAI } from "@google/generative-ai";
    
    const API_KEY = "AIzaSyATAVAnoYbur2VCRGLC5pbULZty5KZ-JvA";
    
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
        user.textContent = `You : ${userInput.value}\n`;
     
        bot.textContent =`Bot : ${aiText}`;
        let response = document.querySelector('.responseTxt');

         response.appendChild(user);
        // userTxt.appendChild(linebreak)
        response.innerHTML+="<br>"
        response.append(bot);
        // response.append(`</br>`);
        response.innerHTML+="<br><br>"
        userInput.value='';
        document.querySelector("#ai-btn").textContent="Generate";

    }
    
    // const result = await model.generateContent(prompt);
    
    // const response = await result.response;
    
    // const text = response.text();
    
    // console.log(prompt);
    
   // alert(text);
    
    }
    
    run();
    
    