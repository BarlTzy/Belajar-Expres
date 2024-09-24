const express = require("express")//impor modul express
const app = express() //inisialisasi express
const port = 3000 //port

// route /
app.get("/", (req, res) => {
    res.send("Hello World");
});

// route / about
app.get("/about", (req, res) => {
    res.send("About As");
});

// route / contact
app.get("/contact", (req, res) => {
    //res.send("Contact As");
    res.sendFile(__dirname + "/contact.html")
});

// route / mahasiswa
app.get("/mahasiswa", (req, res) =>{
    res.json({
        "status" :"Succes",
        "messege" : "Data Mahasiswa",
        "data" : [
            {npm : 2226240088, nama : "Akbar"}, 
            {npm : 2226240099, nama : "Putra"}, 
            {npm : 2226240001, nama : "Yanto"}
        ],

    
    })
});


// route / dosen
app.get("/dosen", (req, res) =>{
    res.json({
        "status" :"Succes",
        "messege" : "Data Mahasiswa",
        "data" : [
            {
                prodi : "Sistem Informasi",
                dosen : ["Iis", "Faris", "Dafid"]
            },
            {
                prodi : "Informatika",
                dosen : ["Derry", "Siska", "Yohannes"]
            },
        ]
    })
})

// handle route yang tidak terdaftar
app.use("/", (req, res) =>{
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
})