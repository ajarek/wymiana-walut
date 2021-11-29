import express from 'express'
import fetch from 'node-fetch'

 const router = express.Router()
 const url='http://api.nbp.pl/api/exchangerates/tables/a/'
 const url1='http://api.nbp.pl/api/cenyzlota/last/30/?format=json'
 const url2='http://api.nbp.pl/api/exchangerates/rates/a/'
  
 router.get('/', async (req, res)=>{ 
  const response = await fetch(url)
  const info = await response.json()
  const arr=info[0].rates
  const date =info[0].effectiveDate
     res.render('index', { title: 'Kursy Walut', arr, date})
  })
 
.get('/zloto', async (req, res)=>{ 
  const response = await fetch(url1)
  const info = await response.json()
    res.render('zloto', { title: 'Cena złota', info})
  })

  .get('/usd', async (req, res)=>{ 
    const response = await fetch(url2+'usd')
    const info = await response.json()
     const {currency,code,rates}=info
     const {mid}=Object.values(rates)[0]
     const { effectiveDate}=Object.values(rates)[0]
      res.render('usd',{title:'Kurs waluty',currency,code,mid,effectiveDate})
    })
    .get('/eur', async (req, res)=>{ 
      const response = await fetch(url2+'eur')
      const info = await response.json()
       const {currency,code,rates}=info
       const {mid}=Object.values(rates)[0]
       const { effectiveDate}=Object.values(rates)[0]
        res.render('eur',{title:'Kurs waluty',currency,code,mid,effectiveDate})
      })
      .get('/chf', async (req, res)=>{ 
        const response = await fetch(url2+'chf')
        const info = await response.json()
         const {currency,code,rates}=info
         const {mid}=Object.values(rates)[0]
         const { effectiveDate}=Object.values(rates)[0]
          res.render('chf',{title:'Kurs waluty',currency,code,mid,effectiveDate})
        })
        .get('/gbp', async (req, res)=>{ 
          const response = await fetch(url2+'gbp')
          const info = await response.json()
           const {currency,code,rates}=info
           const {mid}=Object.values(rates)[0]
           const { effectiveDate}=Object.values(rates)[0]
            res.render('gbp',{title:'Kurs waluty',currency,code,mid,effectiveDate})
          })
         

  export default router
  