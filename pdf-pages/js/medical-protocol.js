WebViewer({
  path: "js/lib",
  pdftronServer: 'https://demo.pdftron.com/', // Make sure to change this option to point to your own server in production
  initialDoc: 'https://firebasestorage.googleapis.com/v0/b/hcfr-pocket-guide-app.appspot.com/o/Medical-Protocol%2FMedical-Protocol-2017-All.pdf?alt=media&token=ff747a2d-50a7-4e74-b323-bbe3a03286c0',
  showLocalFilePicker: true,
  fullAPI: true,

}, document.getElementById('viewer'))
  .then(function(instance) {
    const docViewer = instance.docViewer;
    const annotManager = instance.annotManager;

    docViewer.on('documentLoaded', function() {
    });
    instance.setTheme('dark');
  });