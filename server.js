var express = require('express');
var app = express();

app.get('/addTwoNumbers', (req, res) => {
        var num1 = parseInt(req.query.num1);
        var num2 = parseInt(req.query.num2);
        if (isNaN(num1) || isNaN(num2)) {
            res.json({ data: null, message: 'Invalid input', status: 400 });
            return;
        }
        var sum = num1 + num2;
        res.json({ data: sum, message: 'Success', status: 200 });

});

app.listen(3000, () => {
    console.log('Server is running on port: ');   
});