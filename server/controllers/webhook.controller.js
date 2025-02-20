import { Webhook } from "svix";

import User from "../models/user.model.js";

const clerkWebHook = async (request, response) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!!!");
  }

  const payload = request.body;
  const headers = request.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "Webhook verification failed!!!",
    });
  }

  // console.log(evt.data);

  if (evt.type === "user.created") {
    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.username,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_image_url,
    });

    await newUser.save();

    // console.log("User created!!!");
  }

  if (evt.type === "user.deleted") {
    await User.findOneAndDelete({
      clerkUserId: evt.data.id
    })

    // delete posts
    // delete comments
  }

  if (evt.type === "user.updated") {
    await User.findOneAndUpdate(
      { clerkUserId: evt.data.id },
      {
        username: evt.data.username,
        email: evt.data.email_addresses[0].email_address,
        img: evt.data.profile_image_url,
      }
    );
  }

  return response.status(200).json({
    message: "Webhook received!!!",
  });
};

export { clerkWebHook };
