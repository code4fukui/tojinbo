function showImage(src) {
    var img = new Image();
    img.src = src;
    var width = img.width;
    var height = img.height;
    window.open(src,'','width=' + width + ',height=' + height);
  }