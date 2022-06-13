class HomePage
{
    get acceptCoocies() { return $('//*[contains(text(), "Accept")]') }
    get ourCarsLink() { return $('//*[contains(@id, "topNavCarMenu")]')  }
    get menuLink() { return $('//*[@id="site-nav-topbar-wrapper"]//*[contains(text(), "Menu")]')}

    async clickOnAcceptCoockies(){
        await this.acceptCoocies.click();
    }

    async clickOnMenu(){
        await this.menuLink.click();
    }

}

module.exports= new HomePage()