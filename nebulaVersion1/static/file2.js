
        import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

        
        const profileImage = document.querySelector(".profileimg")
        const menu = document.querySelector(".hamburger-menu");
        const cross = document.querySelector(".hamburger-menu .cross .crossIcon");
        menu.classList.add("hidden");
        profileImage.addEventListener("click",()=>{
            // menu.classList.remove("hidden");
            menu.classList.remove("hidden");
        })

        cross.addEventListener("click",()=>{
            menu.classList.add("hidden");
        })

        document.querySelector(".main").addEventListener("click",()=>{
            menu.classList.add("hidden");
        })

        // ................................ Title Animation ....................

        const title = document.querySelector(".titlebox .heading1");
        const value ="nebula";
        let i=0;
        const speed = 300;
        const titleAnimation = ()=>{
            if(i<value.length){
                title.textContent = title.textContent + value.charAt(i);
                i++;
                setTimeout(titleAnimation,speed);
            }
        }

        titleAnimation();

        // ..................... USER INPUT .......................

        const textarea = document.querySelector(".userinput");
        const enterbutton = document.querySelector(".inputarea .icons .enter");
        const microphone = document.querySelector(".inputarea .microphone");
        const chatboxMessageContent = document.querySelector(".chatbox-message-content");
        const inputForm = document.querySelector(".inputarea");

        const API_KEY = "AIzaSyDguZXUVkmvYd8xNBKkEfDvofCnH58qhmM"; // Replace with your actual API key
        const genAI = new GoogleGenerativeAI(API_KEY);

        let userinput;


        inputForm.addEventListener("submit",async (e)=>{
            e.preventDefault();
            userinput = textarea.value;
            pushMessage();
            let result= await generateResponse(userinput);
            result= FormatResponse(result)
            
            setTimeout(pushResponse(result), 1000);


        })

        function pushMessage(){
            const today = new Date();

            let message = `<div class="chatbox-message-item sent">
                    <span class="chatbox-message-item-text">
                        ${textarea.value.trim().replace(/\n/g, "<br>\n")}

                    </span>
                    <span class="chatbox-message-item-time">
                        ${today.toLocaleTimeString()}
                    </span>

                </div>`;

            chatboxMessageContent.insertAdjacentHTML("beforeend", message);
            textarea.value = null;
            scrollBottom();

        }
        
        function pushResponse(result){
            const apiResponse = result;
            const today = new Date();

            let message = `<div class="chatbox-message-item recieved">
                    <span class="chatbox-message-item-text">
                        
                        ${apiResponse}
    
                    </span>
                    <span class="chatbox-message-item-time">
                        ${today.toLocaleTimeString()}
                    </span>
    
                </div>`;
            
            chatboxMessageContent.insertAdjacentHTML("beforeend", message);
            scrollBottom();

        }


        // Scrolling Funtion ......

        function scrollBottom(){
            chatboxMessageContent.scrollTo(0,chatboxMessageContent.scrollHeight);
        }

        // Async Function 
        async function generateResponse(prompt) {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
            }

        
        // //function **  remover
        // function replaceWithNewline(text) {
        //     // Use regular expression to match all occurrences of "**"
        //     return text.replace(/\*\*/g, "<br>");
        //     }
        
        // .............. FormatResponse funtion .............
            function FormatResponse(str) {
                // Replace "**" with "<br>"
                str = str.replace(/\*\*/g, "<br>");
                
                // Replace "*" with dot bullet
                str = str.replace(/\*/g, "&#8226;");


                // Replace "." with <br>dot.......
                str = str.replace(/\&#8226;/g, "<br>&#8226;"); 
            
                return str;
            }
            

