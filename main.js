Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
    
});

camera = document.getElementById("webcam_view");
Webcam.attach("#webcam_view");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xcqJzbNB7/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML=results[0].label;
        document.getElementById("numbers").innerHTML=results[0].confidence.toFixed[2];
    }
    
}