module.exports ={
    devServer:{
        poroxy:{
            '^/api':{
                target: 'http://localhost:3080',
            },
        },
    },
}