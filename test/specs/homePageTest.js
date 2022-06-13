
const homePage =require('../pageobjects/homePage')
const helper = require('../Utilities/helper')
const assert = require('assert')

describe('Enterprice application', ()=>{

  beforeEach(() => {
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    browser.maximizeWindow()
    
 });

    it('Login fail page', async ()=>{
      await homePage.acceptCoocies.waitForDisplayed({ timeout: 3000 });
      console.log('Click on accept cookies')
      await  homePage.clickOnAcceptCoockies()
      await homePage.menuLink.waitForDisplayed({ timeout: 3000 });
      const menuButton = await  helper.isDisplayedOnScreen(await homePage.menuLink)
      assert.equal(menuButton, true, 'Menu button not displayed')
      console.log('Click on Menu link')
      await  homePage.clickOnMenu()
    
    })

    

})