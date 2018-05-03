# videouploader - Uploads videos to Wistia

How it works

* You click an upload button.
* You pick a file.
* The widget uploads the file to Wistia, showing progress in a progress bar.
* Once the file completes uploading, it shows as an embedded Wistia video player.
* The component uses Angular 1.
* The component uses use ES5.

# Installation
Clone repo and put the folder somewhere in a path of your server

git clone https://github.com/petrican/videouploader

cd videouploader

Install dependencies:

yarn install

(I suppose you have yarn. If you don't pls go ahead and get it from here first https://yarnpkg.com/lang/en/docs/install)

Update the  videouploader/app/upload-videos/upload-videos.component.js

with your own Wistia key

Access in the browser http://www.yourdomain.com/videouploader
(suppose you put it in the root of the webserver)

# Sample demo

https://www.nanca.ro/videouploader/


# Testing

To perform the testing run

yarn test



