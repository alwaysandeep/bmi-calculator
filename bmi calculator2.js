function give_me_bmi(height, weight) {
    bmi = (weight / height ** 2) * 703
    if (bmi < 18.5) {
        return 'underweight'
    } else if (bmi < 25) {
        return 'healthy weight'
    } else if (bmi < 30) {
        return 'overweight'
    } else {
        return 'obese'
    }
}





document.getElementById('bmiButton').onclick = function(){
    weight = document.getElementById('weight').value;
     console.log('weight entered:' + weight);

     height = document.getElementById('height').value;
     console.log("height entered:"+height);
    bmi = give_me_bmi(height = height,weight = weight)
    console.log("BMI:"+ bmi);

    document.getElementById('output').innerHTML = "your BMI is: "+bmi
}




// console.log(give_me_bmi(height = height,weight = weight));