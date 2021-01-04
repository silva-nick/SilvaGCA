const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const AOG = require("actions-on-google");
const app = AOG.dialogflow();

app.intent("Big Cloud", async (conv) => {
  conv.close(
    new AOG.SimpleResponse({
      text: "Hello world!",
      speech: "Northwestern bad",
    })
  );
  conv.close(
    new AOG.BasicCard({
      title: "check out this!",
      image: new AOG.Image({
        url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fharambe-the-gorilla-put-zoo-in-a-lose-lose-situation-by-being-himself-60278&psig=AOvVaw1pEmlnu4rixXEzMEMB9hsg&ust=1609805295018000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiy9pj-gO4CFQAAAAAdAAAAABAE",
        alt: "rip",
      }),
      buttons: new AOG.Button({
        title: "test",
        url: "https://youtu.be/dQw4w9WgXcQ",
      }),
    })
  );
});

exports.fulfillment = functions.https.onRequest(app);
