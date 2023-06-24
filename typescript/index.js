"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmp_1 = require("./cmp");
var myCompany = {
    Interns: [
        { name: "John", age: 20, skills: ["React", "HTML", "JS", "TypeScript"] },
        { name: "Jane", age: 21, skills: ["HTML", "CSS", "JavaScript"] },
    ],
    Juniors: [
        {
            name: "Alex",
            age: 25,
            skills: ["React", "Node.js"],
            date_of_promotion: new Date(),
            domain: cmp_1.Domain.Web,
        },
        {
            name: "Emily",
            age: 23,
            skills: ["Python", "Django"],
            date_of_promotion: new Date(),
            domain: cmp_1.Domain.Backend,
        },
    ],
    Country: "USA",
};
console.log(myCompany);
