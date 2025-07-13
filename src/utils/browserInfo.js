// Browser detection utility
const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let isSafari = false;

  // Detect Safari
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browserName = 'Safari';
    isSafari = true;
  }
  // Detect Chrome
  else if (userAgent.includes('Chrome')) {
    browserName = 'Chrome';
  }
  // Detect Firefox
  else if (userAgent.includes('Firefox')) {
    browserName = 'Firefox';
  }
  // Detect Edge
  else if (userAgent.includes('Edg')) {
    browserName = 'Microsoft Edge';
  }
  // Detect Opera
  else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
    browserName = 'Opera';
  }

  return {
    browserName,
    isSafari,
    userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    vendor: navigator.vendor,
    appVersion: navigator.appVersion,
    appName: navigator.appName,
  };
};

const browserInfo = getBrowserInfo();

export default browserInfo; 