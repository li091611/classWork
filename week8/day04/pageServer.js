let express = require('express');
let app = express();
app.listen(3000,()=>{
    console.log('前端服务起于 3000')
})
app.use(express.static('./page'))