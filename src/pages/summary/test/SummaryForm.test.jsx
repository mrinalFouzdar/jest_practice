import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
  render(<SummaryForm />);

  // FOR CHECK BOX CAPTURING FROM DOM
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  // CHECKING CHECKBOX CURRENT STATE
  // console.log(checkbox)
  expect(checkbox).not.toBeChecked();

  //CAPTURING BUTTON
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  //CHECKING BUTTON CURRENT STATE
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("overlay responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // overly starts out hidden
  const nullOverlay = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullOverlay).not.toBeInTheDocument();

  //overly appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const overlay = screen.getByText(/no ice cream will actually be delivered/i);
  expect(overlay).toBeInTheDocument();

  // overly disappers when we mouse out
  await user.unhover(termsAndConditions);
  expect(overlay).not.toBeInTheDocument();
});
