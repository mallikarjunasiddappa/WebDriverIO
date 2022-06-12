
const homePage =require('../pageobjects/homePage')
const assert = require('assert')

describe('Enterprice application', ()=>{

  beforeEach(() => {
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    browser.maximizeWindow()
    
 });

    it('Login fail page', async ()=>{
        
      browser.pause(5000)
      const acceptCoockie = $('onetrust-accept-btn-handler')
      console.log('Click on accept cookies')
      await  homePage.clickOnAcceptCoockies()
      browser.pause(5000)
      const menuButton = await  homePage.isDisplayedOnScreen(await homePage.menuLink)
      assert.equal(menuButton, true, 'Menu button not displayed')
      await homePage.menuLink.waitForDisplayed({ timeout: 3000 });
      console.log('Click on Menu link')
      await  homePage.clickOnMenu()
       
    
    })

    xit('Login fail page test 2', async ()=>{
        
      await  browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more")
      
      browser.pause(5000)
      const acceptCoockie = $('onetrust-accept-btn-handler')
      console.log('Click on accept cookies')
      await  homePage.clickOnAcceptCoockies()
      browser.pause(5000)
      await homePage.isMenuDisplayed()
      console.log('Click on Menu link')
      await  homePage.clickOnMenu()
       
    
    })

    afterEach(() => {
     
      
   });

})