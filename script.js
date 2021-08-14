
// check input fild of 1st semester

document.getElementById('submit-btn').addEventListener('click',function(){
    let num1 = document.getElementById('input-box-1');
    if(num1.value > 4 || num1.value < 1){
        document.getElementById('letter-grate-box').innerHTML = ''
    }
    else if(num1.value == 4.00){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Got <b>A+</b> In 1st Semester</p>'
    }
    else if(num1.value >= 3.75 && num1.value < 4){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>A</b>In 1st Semester</p>'
    }
    else if(num1.value >= 3.50 && num1.value <= 3.74){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>A-</b>In 1st Semester</p>'
    }
    else if(num1.value >= 3.25 && num1.value <= 3.49){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B+</b>In 1st Semester</p>'
    }
    else if(num1.value >= 3.00 && num1.value <= 3.24){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B</b>In 1st Semester</p>'
    }
    else if(num1.value >= 2.75 && num1.value <= 2.99){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B-</b>In 1st Semester</p>'
    }
    else if(num1.value >= 2.50 && num1.value <= 2.74){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>C+</b>In 1st Semester</p>'
    }
    else if(num1.value >= 2.25 && num1.value <= 2.49){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>C</b>In 1st Semester</p>'
    }
    else if(num1.value >= 2.00 && num1.value <= 2.24){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>D+</b>In 1st Semester</p>'
    }
    else if(num1.value >= 1.60 && num1.value <= 1.99){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>D</b>In 1st Semester</p>'
    }
    else if(num1.value < 1.60){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Are<strong>Fail</strong>In 1st Semester</p>'
    }
    else if(typeof(num1.value) != 'number'){
        document.getElementById('letter-grate-box').innerHTML = ''
    }
    else{

        document.getElementById('letter-grate-box').innerHTML = ''
    }
})


// check input fild of 2nd semester

document.getElementById('submit-btn').addEventListener('click',function(){
    let num2 = document.getElementById('input-box-2');
    if(num2.value > 4 || num2.value < 1){
        document.getElementById('letter-grate-box').innerHTML = ''
    }
    else if(num2.value == 4.00){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Got <b>A+</b> In 2nd Semester</p>'
    }
    else if(num2.value >= 3.75 && num2.value < 4){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>A</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 3.50 && num2.value <= 3.74){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>A-</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 3.25 && num2.value <= 3.49){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B+</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 3.00 && num2.value <= 3.24){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 2.75 && num2.value <= 2.99){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>B-</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 2.50 && num2.value <= 2.74){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>C+</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 2.25 && num2.value <= 2.49){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>C</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 2.00 && num2.value <= 2.24){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>D+</b>In 2nd Semester</p>'
    }
    else if(num2.value >= 1.60 && num2.value <= 1.99){

        document.getElementById('letter-grate-box').innerHTML = '<p>You Got<b>D</b>In 2nd Semester</p>'
    }
    else if(num2.value < 1.60){
        document.getElementById('letter-grate-box').innerHTML = '<p>You Are<strong>Fail</strong>In 2nd Semester</p>'
    }
    else if(typeof(num2.value) != 'number'){
        document.getElementById('letter-grate-box').innerHTML = ''
    }
    else{

        document.getElementById('letter-grate-box').innerHTML = ''
    }
})


// check input fild of 3rd semester


// check input fild of 4th semester


// check input fild of 5th semester

// check input fild of 6th semester


// check input fild of 7th semester


// check input fild of 8th semester





// show cgpa grate point in the output box

document.getElementById('submit-btn').addEventListener('click',function(){
    let num1 = document.getElementById('input-box-1').value;
    let num2 = document.getElementById('input-box-2').value;
    let num3 = document.getElementById('input-box-3').value;
    let num4 = document.getElementById('input-box-4').value;
    let num5 = document.getElementById('input-box-5').value;
    let num6 = document.getElementById('input-box-6').value;
    let num7 = document.getElementById('input-box-7').value;
    let num8 = document.getElementById('input-box-8').value;

    let semester1 = (Number(num1)/ 100) * 5;
    let semester2 = (Number(num2)/ 100) * 5;
    let semester3 = (Number(num3)/ 100) * 5;
    let semester4 = (Number(num4)/ 100) * 10;
    let semester5 = (Number(num5)/ 100) * 15;
    let semester6 = (Number(num6)/ 100) * 20;
    let semester7 = (Number(num7)/ 100) * 25;
    let semester8 = (Number(num8)/ 100) * 15;

    let result = semester1 + semester2 + semester3 + semester4 + semester5 + semester6 + semester7 + semester8;

    result = result.toFixed(2);
    
    document.getElementById('result-box').innerText = result;

    document.getElementById('input-box-1').value = '';
    document.getElementById('input-box-2').value = '';
    document.getElementById('input-box-3').value = '';
    document.getElementById('input-box-4').value = '';
    document.getElementById('input-box-5').value = '';
    document.getElementById('input-box-6').value = '';
    document.getElementById('input-box-7').value = '';
    document.getElementById('input-box-8').value = '';
})


// finis code,,,,,,,,,,

