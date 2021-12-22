const app = require('./app')

app.listen(app.get('port'), _=>{
    console.log(`${app.get('name')} running on port ${app.get('port')}`)
})