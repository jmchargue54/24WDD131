// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum) {
        console.log(sections);
    }
  };

// aCourse.sections[2].roomNum
// aCourse.sections.find(function(item) {return item.roomNum = "STC 347"})

function setcourseinfo(course) {
    const courseNameEl = document.querySelector("#courseName");
    const courseCodeEl = document.querySelector("#courseCode");

    courseNameEl.innerHTML = `<em>${course.name}</em>`;
    courseCodeEl.innerHTML= course.code
}

function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
                </tr>`
}

function rendersections(sections) {
    const sectionList = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionList.innerHTML = html.join("");
}

setcourseinfo(aCourse);
rendersections(aCourse.sections);
aCourse.enrollStudent(1);




