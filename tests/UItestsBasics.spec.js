const {test, expect} = require('@playwright/test');
test('Navigate to playwright site',async ({page}) => {
      //const context = await browser.newContext();
      //const page = await context.newPage();
        await page.goto('https://playwright.dev/');
      console.log(await page.title());
});
test('Google Test- Page',async ({page}) => {
     
        await page.goto('https://google.com/');
        const title = await page.title();
        console.log(title);
      await expect(page).toHaveTitle('Google');
});