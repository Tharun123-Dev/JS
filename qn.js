var marks = { nani: 73, srikanth: 81, Tharun: 23 };

for (var per of Object.entries(marks)) {
  console.log(per);
}


var marks = { nani: 73, srikanth: 81, Tharun: 23 };

for (var per in marks) {
  console.log(`${per}:${marks[per]}`);
}

