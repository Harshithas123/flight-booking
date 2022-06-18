const  express =  require("express");

const { firebaseDatabase } = require("../../backend/firebase-handler.js");

const { ref, set, onValue } = require("firebase/database");

const app = express();

app.get("/", (req, res) => {
  res.send("Enter url");
});
 
app.get("/add-passanger", async (req, res) => {
  const { name, gender, phonenumber, emailid } = req.query;
  res.send("Data Added to firebase");
  const databaseRef = ref(firebaseDatabase, `passander/${phonenumber}`);
  await set (databaseRef, { name:name, gender:gender, phonenumber:number, emailid:email });
});

app.get("/get-passanger", (req, res) => {
  const { phonenumber } = req.query;
  const databaseRef = ref(firebaseDatabase, `passander/${phonenumber}`);
  onValue(databaseRef, (snapshot) => {
    res.send(snapshot.val());
  }, { onlyOnce: true }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log("server started on port", port)
});