import {render , screen} from '@testing-library/react'


import Options from '../Options';

test('displays image for each scoop option from server',async()=>{
    render(<Options optionType="scoops"/>)

    // find images

    const scoopImages = await screen.findAllByRole('img',{
        name: /scoop$/i
    })
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element)=>element.alt);
    // NOTE 
    // 1. Arays or Object use toEqual() matcher.
    // 2. String or Number use toBe matcher.
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})