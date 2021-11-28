import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'

const router1 = express.Router()
router1.use(bodyParser.urlencoded({ extended: false }))
router1.get('/kantor', (req, res) => {
    res.render('kantor')
})
router1.post('/kantor',async (req, res, next)=>{
    let result=req.body.waluta
    let quantity=req.body.ile
    let select=req.body.sel
   console.log(req.body.waluta) 
   const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${result}/2021-11-26/?format=json`)
            const info = await response.json()
             const {currency,code}=info
              const {rates}=info
              const {bid,ask}=Object.values(rates)[0]
              console.log(currency,code,bid,ask,result,quantity,select)
                res.render('deal',{currency,code,bid,ask,result,quantity,select})
   
  
 })
export default router1