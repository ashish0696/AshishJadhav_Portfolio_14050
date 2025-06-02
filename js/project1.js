 $(document).ready(function () {
      const images = [
        "./recources/tal1.jpg", // image 1
        "./recources/tal2.jpg", // image 2
        "./recources/tal3.jpg", // image 3
        "./recources/tal4.jpg", // image 4
        "./recources/tal5.jpg", // image 5
        "./recources/tal6.jpg", // image 6
        "./recources/tal7.jpg", // image 7
        "./recources/tal8.jpg", // image 8
        "./recources/tal0.jpg", // image 9

        
      ];

      let index = 0;

      setInterval(() => {
        index = (index + 1) % images.length;
        $('#tal').fadeOut(1000, function () {
          $(this).attr('src', images[index]).fadeIn(1000);
        });
      }, 3000); // Change image every 3 seconds
    });