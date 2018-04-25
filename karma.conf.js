module.exports = function(config) {
    config.set({  
      basePath: './app',  
      files: [                
        '../../node_modules/jquery/dist/jquery.js',                                     
        '../../node_modules/angular/angular.js',                                        
        '../../node_modules/angular-ui-router/release/angular-ui-router.js',            
        '../../node_modules/angular-mocks/angular-mocks.js',                                   
        'https://blueimp.github.io/jQuery-File-Upload/css/style.css',                   
        'https://blueimp.github.io/Gallery/css/blueimp-gallery.min.css',
        'https://blueimp.github.io/jQuery-File-Upload/css/jquery.fileupload.css',
        'https://blueimp.github.io/jQuery-File-Upload/css/jquery.fileupload-ui.css',
        'https://fast.wistia.com/assets/external/E-v1.js',                              
        'https://blueimp.github.io/jQuery-File-Upload/js/vendor/jquery.ui.widget.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.iframe-transport.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-process.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-image.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-angular.js',
        './upload-videos/upload-videos.component.js',                                                                
        './upload-videos/upload-videos.component.spec.js'                                                            
      ],  
      autoWatch: true,  
      frameworks: ['jasmine'],  
      browsers: ["Firefox"],
      browserConsoleLogOptions: {
        level: 'log',
        terminal: true
      },
      plugins: [
        'karma-firefox-launcher',        
        'karma-jasmine',
        'karma-junit-reporter'
      ],  
      junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      }  
    });
  };
