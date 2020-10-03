const puppeteer = require('puppeteer');

(async () => {
    // set some options (set headless to false so we can see
    // this automated browsing experience)
    let launchOptions = { headless: true,
                          args: ['--start-maximized',]
                                 // '--proxy-server=socks4://96.9.77.192:55796'] // this is where we set the proxy
                        };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1366, height: 768});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // go to whatismycountry.com to see if proxy works (based on geography location)
    await page.goto('https://www.expedia.com/Hotel-Search?destination=baltimore&latLong=32.71444%2C-117.16237&regionId=3073&startDate=07%2F30%2F2020&endDate=07%2F31%2F2020&rooms=1&adults=2');
    await page.screenshot({path: 'baltimore.png'});
    await page.pdf({path: 'baltimore.pdf', format: 'A4'});
    // close the browser
    // await browser.close();
})();
