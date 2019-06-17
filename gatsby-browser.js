if (
  navigator.userAgent.indexOf('MSIE') !== -1 ||
  navigator.appVersion.indexOf('Trident/') > -1
) {
  window.location.href = '/ie';
} else {
  console.log('not ie');
}
