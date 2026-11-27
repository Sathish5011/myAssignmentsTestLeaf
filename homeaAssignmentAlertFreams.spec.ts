import  { test,expect  } from "@playwright/test";

test('Learning Alert Frames', async ({page}) => {

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    page.on('dialog', async(dialog) => {
        //get message

        const message = dialog.message
        console.log(message);

        await dialog.accept()  
    })

    let frame = page.frameLocator('#iframeResult')
    await frame.getByRole('button',{name: 'Try it'}).click()

    await expect(frame.locator('[id="demo"]')).toHaveText('You pressed OK!')
        
    
})