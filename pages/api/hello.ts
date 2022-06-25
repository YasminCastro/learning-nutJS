// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  mouse,
  straightTo,
  Point,
  centerOf,
  screen,
  Region,
  Button,
  up,
  keyboard,
  left,
  right,
  Key,
} from "@nut-tree/nut-js";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  (async () => {
    mouse.config.mouseSpeed = 1000;
    keyboard.config.autoDelayMs = 100;
    await mouse.setPosition(new Point(912, 1050));
    await mouse.click(Button.LEFT);
    await mouse.move(up(200));
    await mouse.click(Button.LEFT);
    await keyboard.type("teste");
    await mouse.move(left(150));
    await mouse.click(Button.LEFT);
    await mouse.move(up(200));
    await mouse.click(Button.LEFT);
    await mouse.click(Button.LEFT);
    await keyboard.pressKey(Key.Enter);
  })();

  res.status(200).json({ name: "John Doe" });
}
