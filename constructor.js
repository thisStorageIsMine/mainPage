
// Списки карточек
const cardStorages = document.querySelectorAll(".card-storage");
const lastUpdatesList= document.querySelector(".last-updates-list");
const slickTrack = document.querySelectorAll(".slick-track");

//События перехода на статью



for(let articleId in articles){
    const create = document.createElement("div");
    create.classList.add("update-card","card-link");
    create.setAttribute("data-id",articleId);
    create.innerHTML = `
    
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="150" viewBox="0 0 320 150" fill="none" class="pain-and-suffering">
            <g filter="url(#filter0_b_608_497)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="url(#paint0_angular_608_497)" fill-opacity="0.6"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="url(#paint1_radial_608_497)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="black" fill-opacity="0.6"/>
            </g>
            <defs>
                <filter id="filter0_b_608_497" x="-50" y="-50" width="420" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_608_497"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_608_497" result="shape"/>
                </filter>
                <radialGradient id="paint0_angular_608_497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 55.4577) rotate(90) scale(94.5423 131.729)">
                <stop offset="0.0176888" stop-color="#F449F4"/>
                <stop offset="0.426852" stop-color="#0019C0"/>
                <stop offset="0.693679" stop-color="#7976E8"/>
                </radialGradient>
                <radialGradient id="paint1_radial_608_497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(157 45.4225) rotate(85.835) scale(82.6125 72.3085)">
                <stop stop-color="#31376F"/>
                <stop offset="1" stop-color="#894BA2" stop-opacity="0"/>
                </radialGradient>
            </defs>
        </svg>
        
        
        <h3 class="title-font card-title pad-z-relative">${articles[articleId].title}</h3>
        <p class="regular-font pad-z-relative">${articles[articleId].description}</p>
        <div class="likes-and-views pad-z-relative ">
        <div class="likes regular-font">
            Likes: ${articles[articleId].likes}
        </div>
        <div class="views regular-font">
            Views: ${articles[articleId].views}
        </div>
        </div> `;
    lastUpdatesList.appendChild(create);
}



for(let cardStorage of cardStorages){
    cardStorage.addEventListener("click", event=>{
        let card = event.target.closest(".card-link");
        if(card){
            window.location.href=`article.html?id=${card.dataset.id}`;
        }
    });
}
/* <div class="update-card card-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="150" viewBox="0 0 320 150" fill="none" class="pain-and-suffering">
        <g filter="url(#filter0_b_608_497)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="url(#paint0_angular_608_497)" fill-opacity="0.6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="url(#paint1_radial_608_497)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M180.785 20L173.856 8.00001C167.698 -2.66666 152.302 -2.66668 146.144 7.99999L139.215 20C137.856 22.3541 137.172 24.8381 137.063 27.28C110.938 25.7647 82.3623 22.0757 58.0952 18.3256C30.537 14.0669 16.758 11.9375 8.37899 19.1211C0 26.3047 0 39.88 0 67.0306V150H320V67.0306C320 39.88 320 26.3047 311.621 19.1211C303.242 11.9375 289.463 14.0669 261.905 18.3256C237.638 22.0757 209.061 25.7647 182.937 27.28C182.828 24.8381 182.144 22.3541 180.785 20ZM178.936 27.4958C178.86 25.6529 178.346 23.7771 177.32 22L170.392 10C165.773 2 154.226 1.99999 149.608 10L142.679 22C141.653 23.7771 141.14 25.6529 141.064 27.4958C147.59 27.8206 153.939 28 160 28C166.061 28 172.409 27.8206 178.936 27.4958Z" fill="black" fill-opacity="0.6"/>
        </g>
        <defs>
            <filter id="filter0_b_608_497" x="-50" y="-50" width="420" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_608_497"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_608_497" result="shape"/>
            </filter>
            <radialGradient id="paint0_angular_608_497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 55.4577) rotate(90) scale(94.5423 131.729)">
            <stop offset="0.0176888" stop-color="#F449F4"/>
            <stop offset="0.426852" stop-color="#0019C0"/>
            <stop offset="0.693679" stop-color="#7976E8"/>
            </radialGradient>
            <radialGradient id="paint1_radial_608_497" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(157 45.4225) rotate(85.835) scale(82.6125 72.3085)">
            <stop stop-color="#31376F"/>
            <stop offset="1" stop-color="#894BA2" stop-opacity="0"/>
            </radialGradient>
        </defs>
        </svg>
        
        
        <h3 class="title-font card-title pad-z-relative">Заголовок</h3>
        <p class="regular-font pad-z-relative">A community for VR and novices alike, regular and friendly chat.</p>
        <div class="likes-and-views pad-z-relative ">
        <div class="likes regular-font">
            Likes: 20 000
        </div>
        <div class="views regular-font">
            Views: 1 000 000
        </div>
        </div>
    </div> */
