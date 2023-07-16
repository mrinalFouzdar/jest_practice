// import {render, screen, waitFor} from '../../../test-utils/testing-library-utils'
import {render, screen, waitFor} from '../../../test-utils/testing-library-utils'
import OrderEntry from '../OrderEntry';
import { rest } from 'msw'
import { server } from '../../../mocks/server';


// (.only) -- run only that particular test --->ex- text.only(and your test...)
test('handles error for scoops and toppings routes',async()=>{
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req,res,ctx)=>
        res(ctx.status(500))
        ),
        rest.get('http://localhost:3030/toppings',(req,res,ctx)=>{
            res(ctx.status(500))
        })
    )
    render(<OrderEntry/>)

   await waitFor(async()=>{ const alert =await screen.findAllByRole('alert'
   )
   //    ,{
   //     name:'An unexpected error ocurred. Please try again later.'
   // }
    
    expect(alert).toHaveLength(2)})
})

// .skip --- skip that particular test ---> 
// test.skip('not a real test',()=>{

// })