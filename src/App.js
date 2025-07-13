import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import browserInfo from './utils/browserInfo';
import deviceInfo from './utils/deviceInfo';
import './App.css';

const supportedBrowsers = ['Chrome', 'Firefox', 'Safari', 'Microsoft Edge'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {
        'app.legacy.upgradeBrowser': 'Please upgrade your browser for full support.',
        'app.legacy.unsupportedBrowser': 'Your browser is not supported.',
        'app.legacy.criosBrowser': 'Please use Safari on iOS for full support.',
        'app.legacy.unsupportedSafari': 'Please upgrade Safari for full support.'
      },
      normalizedLocale: 'en',
      viewState: 'ready'
    };
  }

  render() {
    const { browserName, isSafari, userAgent, platform, language, languages, vendor, appVersion, appName } = browserInfo;
    const { isIos, isAndroid, isMobile, isTablet, isDesktop, maxTouchPoints, hardwareConcurrency, deviceMemory, connection } = deviceInfo;

    const isSupportedBrowser = supportedBrowsers.includes(browserName);
    const isUnsupportedIos = isIos && !isSafari;
    const inUnsupportedSafari = isSafari && !isSupportedBrowser;

    let messageId = isSupportedBrowser ? 'app.legacy.upgradeBrowser' : 'app.legacy.unsupportedBrowser';
    if (isUnsupportedIos) messageId = 'app.legacy.criosBrowser';
    if (inUnsupportedSafari) messageId = 'app.legacy.unsupportedSafari';

    const fallbackMessageSafari = inUnsupportedSafari
      ? 'Please upgrade your browser to Safari 14 or newer for full support.'
      : 'Please use Safari 14 or newer on iOS for full support.';

    return (
      <div className="App">
        <header className="App-header">
          <h1>Safari Debug Project</h1>
          <p>Отладочная информация для тестирования на iPhone</p>
        </header>

        <main className="App-main">
          <div className="debug-section">
            <h2>Информация о браузере</h2>
            <div className="debug-grid">
              <div><strong>Browser Name:</strong> {browserName}</div>
              <div><strong>Is Safari:</strong> {isSafari.toString()}</div>
              <div><strong>Is Supported Browser:</strong> {isSupportedBrowser.toString()}</div>
              <div><strong>In Unsupported Safari:</strong> {inUnsupportedSafari.toString()}</div>
              <div><strong>User Agent:</strong> {userAgent}</div>
              <div><strong>Platform:</strong> {platform}</div>
              <div><strong>Language:</strong> {language}</div>
              <div><strong>Languages:</strong> {JSON.stringify(languages)}</div>
              <div><strong>Vendor:</strong> {vendor}</div>
              <div><strong>App Version:</strong> {appVersion}</div>
              <div><strong>App Name:</strong> {appName}</div>
            </div>
          </div>

          <div className="debug-section">
            <h2>Информация об устройстве</h2>
            <div className="debug-grid">
              <div><strong>Is iOS:</strong> {isIos.toString()}</div>
              <div><strong>Is Android:</strong> {isAndroid.toString()}</div>
              <div><strong>Is Mobile:</strong> {isMobile.toString()}</div>
              <div><strong>Is Tablet:</strong> {isTablet.toString()}</div>
              <div><strong>Is Desktop:</strong> {isDesktop.toString()}</div>
              <div><strong>Is Unsupported iOS:</strong> {isUnsupportedIos.toString()}</div>
              <div><strong>Max Touch Points:</strong> {maxTouchPoints}</div>
              <div><strong>Hardware Concurrency:</strong> {hardwareConcurrency}</div>
              <div><strong>Device Memory:</strong> {deviceMemory}</div>
              <div><strong>Connection:</strong> {connection ? JSON.stringify(connection) : 'Not available'}</div>
            </div>
          </div>

          <div className="debug-section">
            <h2>Логика определения сообщения</h2>
            <div className="debug-grid">
              <div><strong>Message ID:</strong> {messageId}</div>
              <div><strong>Fallback Message Safari:</strong> {fallbackMessageSafari}</div>
            </div>
          </div>

          <div className="debug-section">
            <h2>Результат (как в оригинальном коде)</h2>
            <div className="result-box">
              <IntlProvider locale={this.state.normalizedLocale} messages={this.state.messages}>
                <p className="browserWarning">
                  <FormattedMessage
                    id={messageId}
                    description="Warning when someone joins with a browser that isn't supported"
                    values={{
                      supportedBrowser1: <a href="https://www.google.com/chrome/">Chrome</a>,
                      supportedBrowser2: <a href="https://getfirefox.com">Firefox</a>,
                    }}
                  />
                </p>
              </IntlProvider>
            </div>
          </div>

          <div className="debug-section">
            <h2>Fallback сообщение</h2>
            <div className="result-box">
              <p className="browserWarning">
                {isUnsupportedIos || inUnsupportedSafari ? (
                  <span>{fallbackMessageSafari}</span>
                ) : (
                  <span>
                    <span>
                      It looks like you&#39;re using a browser that
                      is not fully supported. Please use either
                      {' '}
                    </span>
                    <a href="https://www.google.com/chrome/">Chrome</a>
                    <span> or </span>
                    <a href="https://getfirefox.com">Firefox</a>
                    <span> for full support.</span>
                  </span>
                )}
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App; 