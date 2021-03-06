
var express = require('express')
var router = express.Router()
var ZoneController = require('../controllers/ZoneController')
var controllers = require('../controllers') // if file is not specified index is the default. so in this example it's really '../controllers/index'

router.get('/:resource', function(req, res, next){

  var resource = req.params.resource
  var controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid resource request: ' + resource
    })
    return
  }

  controller.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }

    res.json({
      confirmation: 'success',
      results: results
    })

  })

})

router.get('/:resource/:id', function(req, res, next){

  var resource = req.params.resource
  var controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid resource request: ' + resource
    })
    return
  }

  var id = req.params.id

  controller.findById(id, function(err, result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: 'Not Found'
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })

})

router.post('/:resource', function(req, res, next){

  var resource = req.params.resource
  var controller = controllers[resource]
  if(controller == null){
    res.json({
      confirmation: 'fail',
      message: 'Invalid resource request: ' + resource
    })
    return
  }

  controller.create(req.body, function(err, result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })

})

module.exports = router
