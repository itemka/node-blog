'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// connect to localhost:27017/postsDB
_mongoose2.default.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true });

// bodyParser post require and received all data
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// post handler
app.post('/posts', function (request, response) {
    // data from users
    var data = request.body;
    console.log('Added new post: ', data);

    // create instance PostModel Object
    var post = new _Post2.default({
        title: data.title,
        text: data.text
    });

    // saved post and send response
    post.save().then(function () {
        console.log('New post added!');
        response.send({ status: 'ok' });
    });
});

app.listen(3000, function () {
    return console.log('3000 port is listening...');
});