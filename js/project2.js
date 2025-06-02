 $(document).ready(function () {
      const images = [
        "./recources/room1.jpg", // image 1
        "./recources/room2.jpg", // image 2
        "./recources/room3.jpg", // image 3
        "./recources/room4.jpg", // image 4
        "./recources/room0.jpg", // image 5
       
        
      ];

      let index = 0;

      setInterval(() => {
        index = (index + 1) % images.length;
        $('#tal').fadeOut(1000, function () {
          $(this).attr('src', images[index]).fadeIn(1000);
        });
      }, 3000); // Change image every 3 seconds
    });