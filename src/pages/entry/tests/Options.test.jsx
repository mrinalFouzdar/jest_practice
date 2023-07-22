import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images

  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  // NOTE
  // 1. Arays or Object use toEqual() matcher.
  // 2. String or Number use toBe matcher.
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  // find image

  const toopingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  expect(toopingImages).toHaveLength(3);

  const allText = toopingImages.map((element) => element.alt);

  expect(allText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
