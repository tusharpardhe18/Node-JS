const fs = require('fs');

//synchronous call
// fs.writeFileSync('./test.txt','Sync')

//asynchronous call
// fs.writeFile( './test.txt', 'Async', (err) => {} )

// const result = fs.readFile('./contacts.txt',"utf-8")
// console.log(result);

// fs.readFile( './contacts.txt' , 'utf-8' , ( err, result ) => {
//     // callback func
//     if (err) {
//         console.log('Error',err);
//     } else{
//         console.log(result);
        
//     }
// })


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt', `${Date.now()} hey there!!!\n`)

// console.log(fs.statSync('./test.txt'))
// fs.mkdirSync('myDocs/a/b', {recursive: true})
// fs.unlinkSync('myDocs/a/b/hi.txt')




