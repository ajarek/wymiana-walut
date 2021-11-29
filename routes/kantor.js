import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import dateFormat, { masks } from "dateformat";
const now = new Date();

let  todaysDate
if(dateFormat(now, "N")==0){
    var time = new Date().getTime()
    let piatek= new Date(time - (48*60*60*1000))
    todaysDate = piatek.toLocaleDateString('ko-KR').replaceAll('. ', '-')
    
}
if(dateFormat(now, "N")==6){
    var time = new Date().getTime()
    let piatek= new Date(time - (24*60*60*1000))
    todaysDate = piatek.toLocaleDateString('ko-KR').replaceAll('. ', '-')
    
}
else{
 todaysDate = dateFormat(now, "yyyy-mm-dd");
}

const router1 = express.Router()
router1.use(bodyParser.urlencoded({ extended: false }))
router1.get('/kantor', (req, res) => {
    res.render('kantor')
})
router1.post('/kantor',async (req, res, next)=>{
    let result=req.body.waluta
    let quantity=req.body.ile
    let select=req.body.sel
    try{
        console.log(todaysDate);
   const response = await fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${result}/${todaysDate}/?format=json`)
            const info = await response.json()
             const {currency,code}=info
              const {rates}=info
              const {bid,ask}=Object.values(rates)[0]
                res.render('deal',{currency,code,bid,ask,result,quantity,select,error:''})
    }catch(error){
        const err = 'Błędny kod Waluty lub brak notowań ! 😕'
   res.render('deal', {currency:'',code:'',bid:'',ask:'',result:'',quantity:'',select:'',error:err})
    }
  
 })
export default router1