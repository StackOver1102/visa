const puppeteer = require('puppeteer');
const apiKey = "4KQ5ITJ3SBVY36KZCQOKOZRNR6LR2RG5";
const path = require('path');
const Solver = require('puppeteer-recaptcha-bypass');

(async () => {
    // Launch the browser and open a new blank page
    try {
        const extensionPath = path.resolve('./caahalkghnhbabknipmconmbicpkcopl.crx');

        const browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disable-gpu-shader-disk-cache',
                '--media-cache-size=0',
                '--disk-cache-size=0',
            ],
            // userDataDir: './tmp'
        });
        const page = await browser.newPage();
        await page.setCacheEnabled(false);

        // Navigate the page to a URL
        await page.goto('https://onlineservices.immigration.govt.nz/');

        // Set screen size
        await page.setViewport({ width: 1980, height: 1024 });


        await page.type("body > div > form > div > div.block-form-container > div > div.block-form-right > div:nth-child(2) > input[type=text]", "thangtatoo2003")
        await page.type("body > div > form > div > div.block-form-container > div > div.block-form-right > div:nth-child(3) > input[type=password]", "Thangdz213@2003")

        const buttonLogin = "body > div > form > div > div.block-form-container > div > div.block-form-right > div:nth-child(4) > input"
        await page.waitForSelector(buttonLogin)
        await page.click(buttonLogin)

        await page.goto("https://onlineservices.immigration.govt.nz/WorkingHoliday/")

        await new Promise(resolve => setTimeout(resolve, 1000));

        await page.goto("https://onlineservices.immigration.govt.nz/WorkingHoliday/Application/Create.aspx?CountryId=214&OffShore=1&STZ=0")

        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.goto("https://onlineservices.immigration.govt.nz/rs-captcha?redirect=%2FWorkingHoliday%2FWizard%2FPersonal1.aspx%3FApplicationId%3D3429264%26IndividualType%3DPrimary%26IndividualIndex%3D1%26StatusChanged%3DFalse")

        // const buttonStep2 = "#ContentPlaceHolder1_applyNowButton"
        // await page.waitForSelector(buttonStep2)
        // await page.click(buttonStep2)
        const checcaptra1 = await page.evaluate(() => {
            const capcha = document.querySelector('iframe[src*="api2/anchor"]');
            if (capcha) {
                return true
            }
            return false;
        })
        if (checcaptra1) {
            await Solver(page, apiKey);
        }
        // // Chèn jQuery vào trang
        // await page.evaluate(() => {
        //     return new Promise((resolve, reject) => {
        //         const script = document.createElement('script');
        //         script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        //         script.onload = resolve;
        //         script.onerror = reject;
        //         document.head.appendChild(script);
        //     });
        // });
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // // Mở dropdown và chọn tùy chọn
        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_personDetails_genderDropDownList > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'Male') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 500);
        //     }
        // });

        // await page.type("#ContentPlaceHolder1_personDetails_dateOfBirthDatePicker_DatePicker", "11/02/2002")

        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_personDetails_CountryDropDownList > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'Vietnam') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 500);
        //     }
        // });

        // await page.type("#ContentPlaceHolder1_addressContactDetails_address_address1TextBox", "Cao Lo")
        // await page.type("#ContentPlaceHolder1_addressContactDetails_address_suburbTextBox", "Cao Lo")
        // await page.type("#ContentPlaceHolder1_addressContactDetails_address_cityTextBox", "Cao Lo")

        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_addressContactDetails_address_countryDropDownList > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'Vietnam') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 500);
        //     }
        // });
        // await new Promise(resolve => setTimeout(resolve, 1000));

        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'No') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 500);
        //     }
        // });
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'No') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 1000);
        //     }
        // });
        // await new Promise(resolve => setTimeout(resolve, 1000));

        // const buttonStep3 = "#ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton"
        // await page.waitForSelector(buttonStep3)
        // await page.click(buttonStep3)

        // const checcaptra = await page.evaluate(() => {
        //     const capcha = document.querySelector('iframe[src*="api2/anchor"]');
        //     if (capcha) {
        //         return true
        //     }
        //     return false;
        // })
        // if (checcaptra) {
        //     await Solver(page, apiKey);
        // }
        // await page.type("#ContentPlaceHolder1_identification_passportNumberTextBox", "123121")
        // await page.type("#ContentPlaceHolder1_identification_confirmPassportNumberTextBox", "123121")
        // await page.type("#ContentPlaceHolder1_identification_passportExpiryDateDatePicker_DatePicker", "29/04/2026")
        // // #s2id_ContentPlaceHolder1_identification_otherIdentificationDropdownlist > a
        // await page.evaluate(() => {
        //     const element = document.querySelector('#s2id_ContentPlaceHolder1_identification_otherIdentificationDropdownlist > a');
        //     if (element) {
        //         element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        //         setTimeout(() => {
        //             const items = document.querySelectorAll('.select2-result-label');
        //             items.forEach((item) => {
        //                 if (item.textContent.trim() === 'Driver License') {
        //                     item.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        //                 }
        //             });
        //         }, 1000);
        //     }
        // });
        // await page.type("#ContentPlaceHolder1_identification_otherIssueDateDatePicker_DatePicker", "29/04/2026")

        // const buttonStep4 = "#ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_nextImageButton"
        // await page.waitForSelector(buttonStep4)
        // await page.click(buttonStep4)

    } catch (error) {
        console.log(error)
    }
    // await page.waitForNavigation()


    // Type into search box
    // await page.type('.devsite-search-field', 'automate beyond recorder');

    // // Wait and click on first result
    // const searchResultSelector = '.devsite-result-item-link';
    // await page.waitForSelector(searchResultSelector);
    // await page.click(searchResultSelector);

    // // Locate the full title with a unique string
    // const textSelector = await page.waitForSelector(
    //   'text/Customize and automate'
    // );
    // const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);

    // await browser.close();
})();