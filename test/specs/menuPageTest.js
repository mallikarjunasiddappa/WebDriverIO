
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
      await homePage.acceptCoocies.waitForDisplayed({ timeout: 3000 });
      console.log('Click on accept cookies')
      await  homePage.clickOnAcceptCoockies()
      await homePage.menuLink.waitForDisplayed({ timeout: 3000 });
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

    it('Buy page list items', async ()=>{
        await homePage.menuLink.waitForDisplayed({ timeout: 3000 });
      console.log('Click on Menu link')
      await  homePage.clickOnMenu()
        await menuPage.buyButton.waitForDisplayed({ timeout: 3000 });
        console.log('Click on Buy link')
        await menuPage.clickOnBuy()
        await buyPage.carConfiguratorButton.waitForDisplayed({ timeout: 3000 });
        console.log('Verify Buy list items')
        const carConfiguratorButton = await  helper.isDisplayedOnScreen(await buyPage.carConfiguratorButton)
        assert.equal(carConfiguratorButton, true, 'Car configurator button not displayed')
        const fleetSalesButton = await  helper.isDisplayedOnScreen(await buyPage.fleetSalesButton)
        assert.equal(fleetSalesButton, true, 'Fleet sales button not displayed')
        const specialVehiclesButton = await  helper.isDisplayedOnScreen(await buyPage.specialVehiclesButton)
        assert.equal(specialVehiclesButton, true, 'Spaecial vehicles     button not displayed')
        const usedCarsButton = await  helper.isDisplayedOnScreen(await buyPage.usedCarsButton)
        assert.equal(usedCarsButton, true, 'Used Cars  button not displayed')
        const dolomaticSalesButton = await  helper.isDisplayedOnScreen(await buyPage.dolomaticSalesButton)
        assert.equal(dolomaticSalesButton, true, 'Doplomatic sales button not displayed')
        const childSeatsButton = await  helper.isDisplayedOnScreen(await buyPage.childSeatsButton)
        assert.equal(childSeatsButton, true, 'c=Child seats button not displayed')
      
      })

    

})