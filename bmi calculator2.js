function give_me_bmi(height, weight) {
    bmi = (weight / (height * height)) * 703
    if (bmi < 18.5) {
        return 'underweight'
    } else if (bmi >=18.5 && bmi < 24.9) {
        return 'healthy weight'
    } else if (bmi >= 25 && bmi <29.9) {
        return 'overweight'
    } else if (bmi >30) {
        return 'obese'
    } else
     return alert('please enter the valid input')
}


document.getElementById('bmiButton').onclick = function(){
    weight = document.getElementById('weight').value;
     console.log('weight entered:' + weight);

     height = document.getElementById('height').value;
     console.log("height entered:"+height);
    bmi = give_me_bmi(height = height,weight = weight)
    console.log("BMI:"+ bmi);

    document.getElementById('output').innerHTML = "You are : "+bmi
}
document.getElementById('bmireset').onclick=function(){
    document.getElementById('output').innerHTML= ""
}
