// import {render,screen,fireEvent} from '@testing-library/react'
import { render, screen, fireEvent } from '@testing-library/react';

import SummaryForm from '../SummaryForm'

test('Initial Conditions', ()=>{
    render(<SummaryForm/>);

    // FOR CHECK BOX CAPTURING FROM DOM
    const checkbox = screen.getAllByRole('checkbox',{
        name: /terms and conditions/i,
    });

    // CHECKING CHECKBOX CURRENT STATE
    console.log(checkbox)
    expect(checkbox).not.toBeChecked();

    //CAPTURING BUTTON
    const confirmButton = screen.getByRole('button',{
        name: /confirm order/i,
    })
    //CHECKING BUTTON CURRENT STATE
    expect (confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", ()=>{
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox',{
        name:/terms and conditions/i,
    })
    const confirmButton = screen.getByRole('button',{
        name: /confrim order/i
    })

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
})