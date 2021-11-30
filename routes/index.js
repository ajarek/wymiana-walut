import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()
const url = 'http://api.nbp.pl/api/exchangerates/tables/a/'
const url1 = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json'
const url2 = 'http://api.nbp.pl/api/exchangerates/rates/a/'

router.get('/', async (req, res) => {
    try {
      const response = await fetch(url)
      const info = await response.json()
      const arr = info[0].rates
      const date = info[0].effectiveDate
      res.render('index', {
        title: 'Kursy Walut',
        arr,
        date
      })
    } catch (err) {
      console.log(err)
    }
  })

  .get('/zloto', async (req, res) => {
    try {
      const response = await fetch(url1)
      const info = await response.json()
      res.render('zloto', {
        title: 'Cena złota',
        info
      })
    } catch (err) {
      console.log(err)
    }
  })

  .get('/usd', async (req, res) => {
    try {
      const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/last/10/?format=json')
      const info = await response.json()
      const {
        currency,
        code,
        rates
      } = info
     
      
      res.render('usd', {
        title: 'Kurs waluty',
        currency,
        code,
        rates
      })
    } catch (err) {
      console.log(err)
    }
  })
  .get('/eur', async (req, res) => {
    try {
      const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/last/10/?format=json')
      const info = await response.json()
      const {
        currency,
        code,
        rates
      } = info
     
      
      res.render('eur', {
        title: 'Kurs waluty',
        currency,
        code,
        rates
      })
    } catch (err) {
      console.log(err)
    }
  })
  .get('/chf', async (req, res) => {
    try {
      const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/last/10/?format=json')
      const info = await response.json()
      const {
        currency,
        code,
        rates
      } = info
     
      
      res.render('chf', {
        title: 'Kurs waluty',
        currency,
        code,
        rates
      })
    } catch (err) {
      console.log(err)
    }
  })
  .get('/gbp', async (req, res) => {
    try {
      const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json')
      const info = await response.json()
      const {
        currency,
        code,
        rates
      } = info
     
      
      res.render('gbp', {
        title: 'Kurs waluty',
        currency,
        code,
        rates
      })
    } catch (err) {
      console.log(err)
    }
  })


export default router