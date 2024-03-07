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