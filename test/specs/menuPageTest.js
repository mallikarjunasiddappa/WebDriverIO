
const homePage =require('../pageobjects/homePage')
const menuPage = require('../pageobjects/menuPage')
const buyPage = require('../pageobjects/buyPage')
const helper = require('../Utilities/helper')
const utils = require('../Utilities/utils')
const assert = require('assert')

describe('Enterprice application', ()=>{

  beforeEach(() => {
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    browser.maximizeWindow()
    
 });

    it('Menu page list items', async ()=>{
      browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    browser.maximizeWindow()
      await homePage.acceptCoocies.waitForDisplayed({ timeout: 3000 });
      console.log('Click on accept cookies')
      await  homePage.clickOnAcceptCoockies()
      await homePage.menuLink.waitForDisplayed({ timeout: 3000 });
      const menuButton = await  helper.isDisplayedOnScreen(await homePage.menuLink)
      assert.equal(menuButton, true, 'Menu button not displayed')
      console.log('Click on Menu link')
      await  homePage.clickOnMenu()
      console.log('Verify menu list items')
      const buyButton = await  helper.isDisplayedOnScreen(await menuPage.buyButton)
      assert.equal(buyButton, true, 'Buy button not displayed')
      const ownButton = await  helper.isDisplayedOnScreen(await menuPage.ownButton)
      assert.equal(ownButton, true, 'Own button not displayed')
      const aboutVolvoButton = await  helper.isDisplayedOnScreen(await menuPage.aboutVolvoButton)
      assert.equal(aboutVolvoButton, true, 'About Vlovouy button not displayed')
      const exploreButton = await  helper.isDisplayedOnScreen(await menuPage.exploreButton)
      assert.equal(exploreButton, true, 'Explore button not displayed')
      const moreButton = await  helper.isDisplayedOnScreen(await menuPage.moreButton)
      assert.equal(moreButton, true, 'More button not displayed')
    
    })

    

})