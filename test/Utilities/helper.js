class Helper{

    isDisplayedOnScreen(element){
        console.log('>>>>>>>>>> Verifying if element is displayed >>>>>>>>>>>>>')
        return element.isDisplayedInViewport();
    }
}
module.exports= new Helper()