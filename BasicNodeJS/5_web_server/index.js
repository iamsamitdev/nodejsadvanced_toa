// HTTP
const http = require('http')
const path = require('path')
const fs = require('fs')
const moment = require('moment')

function getPage(page){
    const filePath = path.join(__dirname, page)
    return fs.readFileSync(filePath)
}

function handleFiles(req, res){
    const fileType = path.extname(req.url) || '.html'

    if(fileType === '.html'){

        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        // res.write('<h1>Hello</h1>')

        if(req.url === '/'){
            res.write(getPage('index.html'))
        }else if(req.url === '/about'){
            res.write(getPage(`${req.url}.html`))
        }
        
        res.end()
        
    } else if(fileType === '.css'){

        res.setHeader('Content-Type','text/css')
        res.writeHead(200)
        res.write(getPage('style.css'))
        res.end()

    }else{

        res.writeHead(404)
        res.end()

    }
}

function getData(url){
    let data;
    if(url === '/api/users'){
        data = [{name:'Samit'},{name:'Siriwat'}]
    }else if(url === '/api/posts'){
        data = [
            {
                title: 'Story 1',
                publishedDate: moment().startOf('day').fromNow()
            },
            {
                title: 'Story 2',
                publishedDate: moment().set('month',1).startOf('day').fromNow()
            },
        ]  
    }
    return data
}


function handleAPis(req, res){

    let data = getData(req.url)
    // console.log(data);

    if(data){
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify(data))
    }else{
        res.writeHead(404)
    }

    res.end()
}

http.createServer((req, res)=>{

    if(req.url.startsWith('/api/')){
        handleAPis(req, res);
    }else{
        handleFiles(req,res);
    }

}).listen(5500)

