import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentImage = null;

  constructor(public navCtrl: NavController,
    private file: File,
    private fileOpener: FileOpener) {

  }

  saveImg() {

    let imageName = "empresa.jpg";
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';

    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {

      })

    this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
      .then((entries) => {

        this.fileOpener.open(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'image/jpeg')
          .then(() => console.log('File is opened'))
          .catch(e => alert('Error' + JSON.stringify(e)));

      }).catch((error) => {
        alert('error ' + JSON.stringify(error));
      }).catch((error) => {
        alert('error' + JSON.stringify(error));
      });


  }

 }
