 window.addEventListener("load", function() {
      document.body.classList.add("loaded");
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
      }, 1200); // small delay for smooth fade
    });