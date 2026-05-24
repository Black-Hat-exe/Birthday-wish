document.getElementById("wishBtn").addEventListener("click", function() {
    // Find the hidden message
    var message = document.getElementById("surpriseMessage");
    
    // Reveal the hidden message
    message.className = "show";
    
    // Change the button text
    this.innerText = "Enjoy Your Day! 🥳";
    
    // Simple alert popup box
    alert("🎉 Sending you virtual cake and a big hug! 🎉");
});
