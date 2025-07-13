// Device detection utility
const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  
  const isIos = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isMobile = /Mobile|Android|iPhone|iPad|iPod/.test(userAgent);
  const isTablet = /Tablet|iPad/.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  return {
    isIos,
    isAndroid,
    isMobile,
    isTablet,
    isDesktop,
    userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    connection: navigator.connection ? {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
    } : null,
  };
};

const deviceInfo = getDeviceInfo();

export default deviceInfo; 