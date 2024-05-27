import { connection } from "../utility/DButils.js";

export const studentData = (req, res) => {
  const qry = "select * from student";
  connection.query(qry, (error, result) => {
    if (error) {
      res.send(500).send({ message: "Something went wrong.......!" });
      console.log(result);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

export const saveStd = (req, res) => {
  const { id, name, subject, rollno } = req.body;
  const qry = `INSERT INTO student VALUES (${id},'${name}','${subject}',${rollno})`;

  connection.query(qry, (error, result) => {
    if (error) {
      console.log("ERR" + error);

      res.status(500).send({ message: "Something Went Wrong" });
    } else {
      console.log(result);
      res.status(200).send({ message: "Student Data Inserted" });
    }
  });
};

export const fetchbyId = (req, res) => {
  const qry = `select * from student where id=${req.params.id}`;

  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ Message: "Something went wrong" });
    } else {
      if (result.length == 0) {
        res.status(404).send({ Messsage: "Student Not found" });
      } else {
        res.status(200).send(result[0]);
      }
    }
  });
};

export const fetchbyRoll = (req, res) => {
 const qry = `select * from student where rollno=${req.params.rollno}`;


  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ Message: "Something Wrong happend" });
      console.log(error)
    } else {

      if (result.length == 0) {
        res.status(404).send({ Messsage: "Student Not found" });
        console.log(error)
      }
       else {
        res.status(200).send(result[0]);
      }
    }
  });
};

export const removeStd = (req, res) => {
  const qry = `delete from student where id=${req.params.id}`;
  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ Message: "something went wrong" });
      console.log(error);
      console.log(result);
    } else {
      res.status(200).send({ Message: "Student Removed" });
      console.log("data del");
    }
    console.log("result");
  });
};

export const updateStudent = (req, res) => {
  const { name, subject, rollno } = req.body;
  const qry = `update student set
    name='${name}',subject='${subject}',
    rollno=${rollno} where id=${req.params.id}`;

  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ Message: "something went wrong" });
    } else {
      res.status(200).send({ Message: "Student Updated!" });
    }
  });
};
