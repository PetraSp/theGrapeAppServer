var AWS = require('aws-sdk');

AWS.config.loadFromPath('./.env');

var s3 = new AWS.S3();

var bucketParams = {Bucket: 'myBucket'};
s3.createBucket(bucketParams);

var s3Bucket = new AWS.S3( { params: {Bucket: 'myBucket'} } );

var urlParams = {Bucket: 'the-grape-app-bucket', Key: 'imageName'};
s3Bucket.getSignedUrl('getObject', urlParams, function(err, url){
  console.log('the url of the image is', url);
});

let arrayOfMediaLinks = [];
var params = {Bucket: 'the-grape-app-bucket'};
s3.listObjects(params, function(err, data){
  var bucketContents = data.Contents;
    for (var i = 0; i < bucketContents.length; i++){
      var urlParams = {Bucket: 'the-grape-app-bucket', Key: bucketContents[i].Key};
        s3.getSignedUrl('getObject',urlParams, function(err, url){
          arrayOfMediaLinks.push(url);
          console.log('the url of the image is', url);
        });
    }
  console.log('################ ################ ################')
  console.log("OUR MEDIA LINKS", arrayOfMediaLinks);
});

module.exports = arrayOfMediaLinks;