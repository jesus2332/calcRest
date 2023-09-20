const express = require('express')

const app= express();

app.use(express.json());

app.get('/results/:n1/:n2', (req, res)=>{
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    
    const result = n1 + n2;
    res.send("El resultado es: " + result);
}
);

app.post('/results/', (req, res)=>{
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = n1 * n2;
    res.send("El resultado es: " + result);
}   
);

app.put('/results/', (req,res)=>{
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = n1 / n2;
    res.send("El resultado es: " + result);
})

app.patch('/results/', (req, res)=>{
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const result = n1 ** n2;
    res.send("El resultado es: " + result);
});

app.delete('/results/:n1/:n2', (req, res)=>{
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    const result = n1 - n2;
    res.send("El resultado es: " + result);
    
})



app.listen(4000, ()=>{
    console.log("Sever is running on port 4000")
}
);

