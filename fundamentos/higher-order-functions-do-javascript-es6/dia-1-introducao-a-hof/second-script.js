const employeeData = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join(' ');
    return {fullName, email: `${email}@trybe.com`};
  }

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drummond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };

  console.log(newEmployees(employeeData));