// Register `uploadVideos` component on the uploadVideos module
angular.
module('uploadVideos').
component('uploadVideos', {
    template:
    '<div class="jumbotron text-center uploader-container">' +
      '<div class="row uploader-container">' +
        '<h2>{{title}}</h2>' +
       '</div>' +
       '<div class="row uploader-container">' +
          '<div id="progress" class="uploader-progress-bar">' +
             '<div class="progress" style="height:20px">' +
                '<div class="progress-bar" ng-style="cssprogress"></div>'+
             '</div>' +
            '</div>' +
           '<span class="btn btn-primary fileinput-button pull-left">' +
           '<span>Add file...</span>' +
           '<input id="fileupload" type="file" name="files[]">' +
           '</span>' +
           '<span id="message-container" class="pull-right .myclass">{{message}}</span>' +
          '</div>' +
          '<div class="row" id="video-container">' +
       '</div>' +
    '</div>',
    controller: function uploadController($scope) {
        $scope.title       = 'AngularJS - Component Upload videos to Wistia';
        $scope.message     = '';
        var urlWistia      = 'https://upload.wistia.com/?api_password=';
        var apiPassword    = '9dec26d987366a762409a72b46627a6e2d0fcba0f1868cfd69df0f4c69d9909a';
        $scope.cssprogress = { 'width' : '0%', background : '#ff7400'};

        angular.element('#fileupload').fileupload({
            url : urlWistia + apiPassword,
            add: function (e, data) {
                data.submit();
            },
            start: function(e){
                $scope.cssprogress = {'width' : '0%', background : '#ff7400'};
                $scope.message     = 'Uploading the file...';
                $scope.$apply();
            },
            progress: function (e, data) {
                var progress       = parseInt(data.loaded / data.total * 100, 10);
                $scope.cssprogress = {'width' : progress + '%', background : '#ff7400'};
                $scope.$apply();
            },
            done: function (e, data) {
                $scope.cssprogress = {'width' : '100%', background : '#5cb85c'};
                var container = angular.element(document.querySelector('#video-container'));
                container.append('<div class="wistia_embed wistia_async_' + data.result.hashed_id + ' video-item"></div>');
                $scope.message = 'Your file has been uploaded!';
                $scope.$apply();
            },
            fail: function(e, data){
                $scope.cssprogress = {'width' : '100%', background : 'red'};
                $scope.message = 'An error has occurred: "' + data.errorThrown + '".' + ' Please check if Wistia account exceeded uploaded videos limit.';
                $scope.$apply();
            }
        });
    }
});