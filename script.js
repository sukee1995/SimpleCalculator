document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 


 // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    console.log("num1",num1)
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    var sum = num1 + num2;
    document.getElementById('result').textContent = sum;
})