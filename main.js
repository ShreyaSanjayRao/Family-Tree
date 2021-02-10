var images=["father-clipart.png","mother.png","grandfather.jpg","grandmother.jpg","girl.png"];
var family=0;
function change()
{
    document.getElementById("pictures").src=images[family];
    family++;
}