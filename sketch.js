var canvas, backgroundImage;

var citymap, boystanding, girlstanding,viruss,soap,vac1,sanitizer, roaday , roadnight
var citymap_img, boystanding_img, girlstnading_img,viruss1_img, soap_img, vac1_img, sanitizer_img , roaday_img , roadnight_img

function preload(){
citymap_img=loadImage("images/citymap.jpg");
boystanding_img=loadImage("images/boystanding.png");
girlstanding_img=loadImage("images/girlstanding.png");
viruss_img=loadImage("images/viruss1.jpg")
vac1_img=loadImage("images/vac1.png");
soap_img=loadImage("images/soap.png")
sanitizer_img=loadImage("images/sanitizer.png")
roaday_img=loadImage("images/roaday.jpg")


}


function setup() {
  createCanvas(displayWidth-20,displayHeight-150);
  boystanding=createSprite(displayWidth/2 , displayHeight-265)
  boystanding.addImage("boystanding",boystanding_img)

}

function draw() {
  background(citymap_img)
  drawSprites()
  boystanding.display()
}


