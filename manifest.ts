import { Manifest } from "deno-slack-sdk/mod.ts";
import { FindGIF } from "./functions/index.ts";
import { ShareKudos } from "./workflows/share-kudos.ts";

export default Manifest({
  name: "Kudo",
  description: "Brighten someone's day with a heartfelt thank you",
  icon: "assets/icon.png",
  functions: [FindGIF],
  workflows: [ShareKudos],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
