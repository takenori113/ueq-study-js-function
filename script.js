const students = [
  {
    name: "Ken",
    score: 80,
    gender: "male",
  },
  {
    name: "Taro",
    score: 45,
    gender: "male",
  },
  {
    name: "Hana",
    score: 55,
    gender: "female",
  },
];

export const func1 = (students) => {
  const overScoreStudents = students.filter((student) => {
    return student.score >= 50;
  });
  const overScoreStudentsNames = overScoreStudents.map((student) => {
    return student.name;
  });
  return overScoreStudentsNames;
};

export const func2 = (students) => {
  const boys = students.filter((student) => {
    return student.gender === "male";
  });
  const boysScores = boys.map((boy) => {
    return boy.score;
  });
  const boysScoresSum = boysScores.reduce((a, b) => {
    return a + b;
  });
  return boysScoresSum;
};

const main = () => {
  // func1の実行例
  const result1 = func1(students);
  console.log(result1);
  // func2の実行例
  const result2 = func2(students);
  console.log(result2);
};

main();