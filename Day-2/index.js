const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

const names = [];
// function hello(req, res) {
//   res.json({ message: "hello" });
// }

// function add(req, res) {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);
//   const sum = a + b;
//   res.json({
//     result: sum,
//   });
// }

// function volumeSphere(req, res) {
//   const r = Number(req.query.r);
//   const volume = (4 * Math.PI * r ** 3) / 3;
//   res.json({
//     radius: r,
//     volumeOfSphere: volume,
//   });
// }
// //POST localhost:3000/names
// function pnames(req, res) {
//   console.log("Body:", req.body);
//   const { name } = req.body;
//   if (!name) {
//     return res.json({
//       error: "Please add the name",
//     });
//   }
//   names.push(name);
//   res.json({
//     message: "success",
//     data: names,
//   });
// }

// app.get("/", hello);
// app.get("/add", add);
// app.get("/volumeSphere", volumeSphere);
// app.post("/name", pnames);

//------------------------------------------------------------------------
app.post("/names", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      error: "enter name",
    });
  }
  names.push(name);
  res.status(201).json({
    message: "name added",
    data: names,
  });
});
//read all
app.get("/names", (req, res) => {
  res.status(200).json({
    message: "success",
    data: names,
  });
});
//read one
app.get("/names/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= names.length) {
    return res.status(404).json({
      error: "Not found",
    });
  }
  res.status(200).json({
    name: names[index],
  });
});

//update
app.put("/names/:index", (req, res) => {
  const index = Number(req.params.index);
  const { name } = req.body;
  if (index < 0 || index >= names.length) {
    return res.status(404).json({
      error: "Not found",
    });
  }
  names[index] = name;
  res.status(200).json({
    message: "successfully updated",
    data: names,
  });
});

//delete
app.delete("/names/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= names.length) {
    return res.status(404).json({
      error: "Not found",
    });
  }
  names.splice(index, 1);
  res.status(200).json({
    message: "successfully deleted",
    data: names,
  });
});

//-------------------------------------------------------------------------
app.listen(PORT);
