// eslint-disable-next-line import/no-extraneous-dependencies
import { browser, protractor } from 'protractor';
import { AppPage } from './app.po';

const TEST_CREDENTIALS = 'SurvOff';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('can login using Keycloak', async () => {
    await browser.waitForAngularEnabled(false);
    await page.navigateTo();

    // wait to be redirected to keycloak
    // expect(
    //   await browser.wait(protractor.ExpectedConditions.urlContains('keycloak'), 5000).catch(() => {
    //     return false;
    //   })
    // ).toBeTruthy();

    // expect(await page.getTitleText()).toEqual('SORMAS');

    // const username = await page.getUserNameInput();
    // const pw = await page.getPwInput();

    // username.sendKeys(TEST_CREDENTIALS);
    // pw.sendKeys(TEST_CREDENTIALS);

    // const submitBtn = await page.getSubmitBtn();
    // submitBtn.click();

    await page.navigateToAngular();
  });
});
