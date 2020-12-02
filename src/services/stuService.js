const KEYS = {
  students: "students",
  studentId: "studentId",
};

export const getDeptCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export const insertStudent = (data) => {
  let students = getAllStudents();
  data["id"] = generateStudentId();
  students.push(data);
  localStorage.setItem(KEYS.students, JSON.stringify(students));
};

export function generateStudentId() {
  if (localStorage.getItem(KEYS.studentId) == null)
    localStorage.setItem(KEYS.studentId, "0");
  var id = parseInt(localStorage.getItem(KEYS.studentId));
  localStorage.setItem(KEYS.studentId, (++id).toString());
  return id;
}

export function getAllStudents() {
  if (localStorage.getItem(KEYS.students) === null)
    localStorage.setItem(KEYS.students, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.students));
}
