const express = require('express');
var cors = require('cors');
const server = express();
const port = 3000;
server.use(cors());

server.get('/info', (req, res) => {

  const userName = req.query.userName;

  console.log(`returning personal information for userName: ${userName}`); // for debug

  if (userName == 'tomer') {
      res.json(
          {
            image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGO7vdPlEKX6A/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=pNFCga2zHq_ZzWG81vystnU4TlYFOrcnKE-OVXBgkzI',
            name: 'Tomer Amitzur',
            id: '204526255',
            email: 'tomeramitzur@gmail.com',
            address: 'Tel-Aviv, Israel',
          },
      );
      
    }
    else {
        res.json({
            data: [],
        });
    }
});


server.get('/grades', (req, res) => {

  const userName = req.query.userName;

  console.log(`returning grades for userName: ${userName}`); // for debug

  if (userName == 'tomer') {
    
    res.json(
      [
        { course_name: 'Statistical Methods for Big Data', points: 5, grade: 89 },
        { course_name: 'Operating Systems', points: 5, grade: 88},
        { course_name: 'Design of Algorithms', points: 4, grade: 100},
        { course_name: 'Compiler Principles', points: 4, grade: 92 },
        { course_name: 'Probability for Computer Science', points: 3.5, grade: 75 },
        { course_name: 'Computer Architecture', points: 2, grade: 96 },
        { course_name: 'Principles of Programming Languages', points: 4.5, grade: 80 },
      ],
    );

  }
  else {
    res.json({
      data: [],
    });
  }
});

server.get('/timetable', (req, res) => {

  const userName = req.query.userName;

  console.log(`returning timetable for userName: ${userName}`); // for debug

  if (userName == 'tomer') {
    res.json(
      [
        {
          name: "Hedva",
          time: [{
            day: "Sunday",
            hours: '8:00-10:00'
          },
          {
            day: "Thursday",
            hours: '10:00-12:00'
          },
          ]
        },
        {
          name: "Algebra",
          time: [{
            day: "Tuesday",
            hours: '14:00-16:00'
          },
          {
            day: "Tuesday",
            hours: '12:00-14:00'
          },
          ]
        },
        {
          name: "Data-Structures",
          time: [{
            day: "Wednesday",
            hours: '10:00-12:00'
          },
          {
            day: "Monday",
            hours: '16:00-18:00'
          },
          ]
        },
        {
          name: "Operating-System",
          time: [{
            day: "Wednesday",
            hours: '12:00-14:00'
          },
          {
            day: "Monday",
            hours: '10:00-12:00'
          },
          ]
        },
      ]
    );

  }
  else {
    res.json({
      data: [],
    });
  }
});


server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
