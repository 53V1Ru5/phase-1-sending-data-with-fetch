function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          'name': name,
          'email': email,
        }),
        
    })
   .then((response) => response.json())
  .then((data) => document.body.append(data.id))
    
 .catch((error) => document.body.append(error))
 
  //  .catch((error) => {
  //    console.error('Error:', error);
  //  });
}



/*
fetch('http://localhost:3000/usewrs')
.then(response => response.json())
.then(studentData => {
    const studentsList = document.querySelector('#students-list')

    studentData.forEach(student => {
        addStudentsToTheList(student.name)
 
    })

*/