const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const bodyParser = require('body-parser')
const cors = require('cors')

const url = 'mongodb://marketmonitor:21nikolotesla21@ds011732.mlab.com:11732/polymath'
var contacts_list;

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	  extended: false
}));

MongoClient.connect(url, function(err, db) {
   console.log(err)
   contacts_list = db.collection('contacts')
   console.log('connected')

   app.listen(app.get('port'), function() {
     console.log('Node app is running on port', app.get('port'));
   });

})

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
  response.send('server');
});

app.get('/contacts', function(request, response) {
  contacts_list.find({}).toArray(function(err, result){
    response.json(result);
  })
});

app.get('/contacts/:id', function(request, response) {
  console.log(request.params.id)
  contacts_list.findOne({_id: ObjectID(request.params.id)}).then(function(result, err){
    response.json(result);
  })
});

app.put('/contacts/:id', function(request, response) {
  contacts_list.update({_id: ObjectID(request.params.id)}, {$set: request.body.item}, {}, function(errSaving, result){
    console.log(errSaving)
			if (errSaving){
				response.status(400).send('graphs: error during saving node')
			} else {
				response.status(200).json({status: 'ok'});
			}
	})

});


app.post('/contacts', function(request, response) {
  contacts_list.insert(
  		request.body.item
  	, function(err, doc){
  		if (err){
  			response.status(400).send("graphs: failed to create new item");
  		} else {
  			response.status(200).json({data: doc});
  		}
  	})

});

app.delete('/contacts/:id', function(request, response) {
  contacts_list.remove({_id: ObjectID(request.params.id)}).then(function(){
    response.status(200).json({status: 'ok'});
  })

});
