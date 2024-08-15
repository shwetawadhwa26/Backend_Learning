const fs = require('fs');
// console.log(fs);

// fs.mkdir('/tmp/a/apple',{recursive:true},(err)=>{
//     console.log("IN THE CALL BACK!!");
//     if(err)
//         throw err;
// });

// console.log("I COME AFTER MKDIR!!");
try{
const foldername = process.argv[2] || 'project';
fs.mkdirSync(foldername);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)}
catch(e){
    console.log("SOMETHING IS WRONG!!");
    console.log(e);
}