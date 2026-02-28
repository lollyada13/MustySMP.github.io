function copyIP(event) {
  event.preventDefault(); // Stops the link from following the href
  
  const ip = "zone-final.gl.joinmc.link";
  const btn = document.getElementById("mc-ip-btn");
  const originalContent = btn.innerHTML; // Saves your "Order Now" + SVG

  navigator.clipboard.writeText(ip).then(() => {
    // Visual feedback: Change text to "IP Copied!"
    btn.innerText = "IP Copied!";
    
    // Reset back to original "Order Now + SVG" after 2 seconds
    setTimeout(() => {
      btn.innerHTML = originalContent;
    }, 2000);
  }).catch(err => {
    console.error("Could not copy text: ", err);
  });
}
