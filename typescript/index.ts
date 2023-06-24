import { Domain, Company } from "./cmp";

const myCompany: Company = {
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
      domain: Domain.Web,
    },
    {
      name: "Emily",
      age: 23,
      skills: ["Python", "Django"],
      date_of_promotion: new Date(),
      domain: Domain.Backend,
    },
  ],
  Country: "USA",
};

console.log(myCompany);
