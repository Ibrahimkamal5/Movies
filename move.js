
// Or with jQuery
$(document).ready(function(){
    $('.carousel').carousel();
  });
      // تهيئة الـ carousel عند تحميل الصفحة
      document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".carousel");
        M.Carousel.init(elems);
      });

      
          function toggleVideos() {
            const trailer = document.querySelector('.trailer');
            const video = document.querySelector('video');
            video.pause();
            trailer.classList.toggle('active');

      }

      function changeBg(bg, title) {
        let banner = document.querySelector(".banner");
        let contents = document.querySelectorAll(".content");

        banner.style.backgroundImage = `url('movies/${bg}')`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";

        contents.forEach((content) => {
          content.classList.remove("active");
          if (content.classList.contains(title)) {
            content.classList.add("active");
          }
        });
      }
        
        
        //   function toggleVideos() {
        //     const trailer = document.querySelector('.trailer');
        //     const video = document.querySelector('video');
        //     video.pause();
        //     trailer.classList.toggle('active');
        //   }
        
        //   function changeBg(bg , title){
        //     let banner = document.querySelector('.banner');
        //     let contents = document.querySelector('.content');
        
        //     banner.style.backgroundImage = `url('../movies/imagesTitle${bg}')`;
        //    banner.style.backgroundSize = "cover";
        //     banner.style.backgroundPosition = "center";
        
        //     contents.forEach(content => {
        //         content.classList.remove('active');
        //         if(content.classList.contains(title)){
        //             content.classList.add('active');
        //         }
        //     })
        //   }