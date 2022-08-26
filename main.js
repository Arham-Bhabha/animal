function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KVFav5bMI/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    
}