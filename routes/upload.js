var upload = require('jquery-file-upload-middleware');


 upload.on('begin', function (fileInfo) { 
	    // fileInfo structure is the same as returned to browser
	    // { 
	    //     name: '3 (3).jpg',
	    //     originalName: '3.jpg',
	    //     size: 79262,
	    //     type: 'image/jpeg',
	    //     delete_type: 'DELETE',
	    //     delete_url: 'http://yourhost/upload/3%20(3).jpg',
	    //     url: 'http://yourhost/uploads/3%20(3).jpg',
	    //     thumbnail_url: 'http://youhost/uploads/thumbnail/3%20(3).jpg' 
	    // }
});

upload.on('abort', function (fileInfo) {
	console.log(fileInfo);
});
upload.on('end', function (fileInfo) {
	console.log(fileInfo);
});
upload.on('delete', function (fileInfo) {
	console.log(fileInfo);
});
upload.on('error', function (e) {
    console.log(e.message);
});
