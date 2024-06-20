import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const MedicineChatbot = () => {
    const medicineData = [
        {
          name: "Aspirin",
          uses: "Relieves pain, reduces fever, and prevents blood clots.",
          sideEffects: "Nausea, vomiting, stomach pain, heartburn, and rash."
        },
        {
          name: "Paracetamol",
          uses: "Relieves mild to moderate pain and reduces fever.",
          sideEffects: "Rare but can cause serious skin reactions or liver damage."
        },
        
  {
    "name": "Ibuprofen",
    "uses": "Relieves pain, reduces fever, and reduces inflammation.",
    "sideEffects": "Stomach upset, heartburn, nausea, headache, and dizziness."
  },
  {
    "name": "Ciprofloxacin",
    "uses": "Treats bacterial infections such as urinary tract infections, respiratory infections, and skin infections.",
    "sideEffects": "Nausea, diarrhea, vomiting, abdominal pain, and rash."
  },
  {
    "name": "Amoxicillin",
    "uses": "Treats bacterial infections such as ear infections, pneumonia, bronchitis, and urinary tract infections.",
    "sideEffects": "Nausea, vomiting, diarrhea, and rash."
  },
  {
    "name": "Prednisone",
    "uses": "Treats conditions such as arthritis, severe allergies, asthma, multiple sclerosis, and skin conditions.",
    "sideEffects": "Weight gain, high blood pressure, mood changes, and increased risk of infection."
  },
  {
    "name": "Lisinopril",
    "uses": "Treats high blood pressure, heart failure, and improves survival after a heart attack.",
    "sideEffects": "Dizziness, headache, cough, and low blood pressure."
  },
  {
    "name": "Atorvastatin",
    "uses": "Lowers high cholesterol and triglyceride levels in the blood.",
    "sideEffects": "Muscle pain, weakness, joint pain, and digestive problems."
  },
  {
    "name": "Metformin",
    "uses": "Treats type 2 diabetes by lowering blood sugar levels.",
    "sideEffects": "Nausea, vomiting, diarrhea, abdominal pain, and lactic acidosis."
  },
  {
    "name": "Omeprazole",
    "uses": "Reduces stomach acid production and treats conditions such as heartburn, acid reflux, and ulcers.",
    "sideEffects": "Headache, nausea, vomiting, diarrhea, and stomach pain."
  },
  {
    "name": "Albuterol",
    "uses": "Relieves symptoms of asthma and other lung conditions by relaxing muscles in the airways.",
    "sideEffects": "Shakiness, nervousness, headache, fast heart rate, and dizziness."
  },
  {
    "name": "Sertraline",
    "uses": "Treats depression, obsessive-compulsive disorder, panic disorder, and social anxiety disorder.",
    "sideEffects": "Nausea, diarrhea, insomnia, dizziness, and dry mouth."
  },
  {
    "name": "Loratadine",
    "uses": "Relieves symptoms of allergies such as hay fever, hives, and itching.",
    "sideEffects": "Headache, dry mouth, fatigue, and stomach pain."
  },
  {
    "name": "Simvastatin",
    "uses": "Lowers high cholesterol and triglyceride levels in the blood.",
    "sideEffects": "Muscle pain, weakness, joint pain, and digestive problems."
  },
  {
    "name": "Metoprolol",
    "uses": "Treats high blood pressure, angina, and heart failure.",
    "sideEffects": "Dizziness, tiredness, slow heart rate, and low blood pressure."
  },
  {
    "name": "Citalopram",
    "uses": "Treats depression and anxiety disorders.",
    "sideEffects": "Nausea, dry mouth, insomnia, fatigue, and increased sweating."
  },
  {
    "name": "Hydrochlorothiazide",
    "uses": "Treats high blood pressure and fluid retention (edema) caused by various conditions.",
    "sideEffects": "Dizziness, headache, diarrhea, and muscle cramps."
  },
  {
    "name": "Amlodipine",
    "uses": "Treats high blood pressure and chest pain (angina).",
    "sideEffects": "Swelling in the ankles or feet, dizziness, headache, and fatigue."
  },
  {
    "name": "Metoprolol",
    "uses": "Treats high blood pressure, angina, and heart failure.",
    "sideEffects": "Dizziness, tiredness, slow heart rate, and low blood pressure."
  },
  {
    "name": "Citalopram",
    "uses": "Treats depression and anxiety disorders.",
    "sideEffects": "Nausea, dry mouth, insomnia, fatigue, and increased sweating."
  },
  {
    "name": "Hydrochlorothiazide",
    "uses": "Treats high blood pressure and fluid retention (edema) caused by various conditions.",
    "sideEffects": "Dizziness, headache, diarrhea, and muscle cramps."
  },
  {
    "name": "Amlodipine",
    "uses": "Treats high blood pressure and chest pain (angina).",
    "sideEffects": "Swelling in the ankles or feet, dizziness, headache, and fatigue."
  },
  {
    "name": "Metoprolol",
    "uses": "Treats high blood pressure, angina, and heart failure.",
    "sideEffects": "Dizziness, tiredness, slow heart rate, and low blood pressure."
  },
  {
    "name": "Citalopram",
    "uses": "Treats depression and anxiety disorders.",
    "sideEffects": "Nausea, dry mouth, insomnia, fatigue, and increased sweating."
  },
  {
    "name": "Hydrochlorothiazide",
    "uses": "Treats high blood pressure and fluid retention (edema) caused by various conditions.",
    "sideEffects": "Dizziness, headache, diarrhea, and muscle cramps."
  },
  {
    "name": "Amlodipine",
    "uses": "Treats high blood pressure and chest pain (angina).",
    "sideEffects": "Swelling in the ankles or feet, dizziness, headache, and fatigue."
  }
        // Add more medicine data here...
      ];
    const steps = [
        {
          id: "1",
          message: "Hey there! 🌟 How's your day going?",
          trigger: "userResponse1",
        },
        {
          id: "userResponse1",
          user: true,
          trigger: "responseToDay",
        },
        {
          id: "responseToDay",
          message: "That sounds wonderful! 😊 Let's get started. What medicine are you curious about?",
          trigger: "medicineName",
        },
        {
          id: "medicineName",
          user: true,
          trigger: "medicineInfo",
        },
        {
          id: "medicineInfo",
          message: ({ previousValue }) => {
            // based on the user's input
            const medicine = medicineData.find(med => med.name.toLowerCase() === previousValue.toLowerCase());
            if (medicine) {
              return `Here's the information about ${medicine.name}: ${medicine.uses}`;
            } else {
              return `Sorry, I couldn't find information about ${previousValue}.`;
            }
          },
          trigger: "additionalQuestion1",
          
        },
        // Add more questions here
        {
          id: "additionalQuestion1",
          message: "What else would you like to know?",
          trigger: "userChoice1",
        },
        {
          id: "userChoice1",
          options: [

            { value: "anotherMedicine", label: "Another Medicine", trigger: "medicineName" },
            { value: "endChat", label: "End Chat", end: true },
          ],
        },
        
      
      ];

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#197B22',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    botFontColor: '#fff',
    userBubbleColor: '#FF5733',
    userFontColor: '#fff',
  };

  const config = {
    botAvatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PEBAPDw8QDQ8PDw8QDQ8ODQ8PFREWFhUVFRYYHSggGBolGxUVITEiJSkrLy4uFx8zODMvNygtLisBCgoKDg0OGhAQGy0dICUrLTcyLTMtKzMrLTMtKy0rLy0rLS0yOC0tLS02KysuLS0rLi0tKy0tLS0tLSstLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQQCAwUGBwj/xAA9EAACAgIAAwQHBQYFBQEAAAAAAQIDBBESITEFQVFhBgcTcYGRsRQiMqHBM1KCktHwI0JicrIkY3Si8RX/xAAZAQEBAQEBAQAAAAAAAAAAAAAABAEDAgX/xAAhEQEBAAICAwACAwAAAAAAAAAAAQIRAwQSITETUQUiQf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAADFzXiBkDU70Y/aUBvBo+0olZCA3AwVq8TJMCQAAAAAAAAAAAAAAAAAAAAAAAAQ2Vr8pLoBYlJIr2ZaXQoWZLZq6gW55bZpdzZrSJAy42E2QkZJASjJEJGSQEqTM42MwJAsQyGb4XJ+RSCA5EFOu5r3eBZhNMDMAAAAAAAAAAAAAAAAxlJITlpbONy8kDLJyu4pSk2QSkASMkgiQBKQSMkgCRkkEjJACUESAMkgkSkASJQJANELaM0idAbqbt8n1+ptKMo65osUW75Pr9QNwAAAAAAAAAAENklXLu0tAaMzI8CgTJ7YSAJGSQSJAEpBIySAJGN90K4TssnGuuEXKc5yUYQiurbfRG2MTw31j+l0s6+VFUv+ios1BLksi2PJ2y8UntRXTS4ur5B2P0h9a+pOvApjNLa+05CkoN+MKlptecmvcdOyPTvtab28+2PXUa68eqK8vuwT+bZ10AdkxfT7tauW1m2WLe3G6rHtg/J7htL3NHc/Rz1sxk1Xn0qrel9px+KVe/9dT3KK84uXuPKAB9SY18LYRsrnCyucVKFkJKUJxfRxa5NG1HgXq/9MZ9nXKFjcsG2f8AjQb37GTf7aHhr/Ml1XPqufvsJJpOLUk0mmntNNbTT70BkSgkSkARIJSAJGqcdc0biGtgbabOJefebCjF8L3/AG0XUwJAAAAAAABjOWkcTlWbZezLNLRxfUCEjJIJEgCUgkZJAEjJIJGQHXvWB2i8bszLtjJwslWqK5racbLpKtNeaUm/gfPmkl4JL8kezeuqbXZ9CXSXaVMZeaWPkS+qT+B5/wCrvsdZefUpriqoX2m3918El7OL983Hl3qMjMspjN1sm7pyuD6rsuzHjdK+qm6cONYs6pNpNbSnapfdlrXLhevE6f2n2dfi2OnIqlTaufDLTUlv8UZLlKPmj6RKHbPY+PmV+yyao2w5uO9qdcv3oTXOD80RYdq7/t8U5cHr0+cwej9qeqixPeJlRnDuhlRcLF/HWtP+VFDH9VufJ6nbiVR/e9pba/hFQW/mimc3Hfe3D8eX6dHPc/U/2y8jA9hN7sw7PY83972MlxVfBLihv/tnn3pj6BywKIZFdssitNRyNwUHXKT1GUUv8m+XNtptdz5ct6jb9ZeZXv8AaYlc9d26rWk/la/me8cplNx5ssuq9lJBKR6YIkAASkEjJIDVdDa2ZYk+sfDmvcZsrb4ZJ+fP3AXgAAAAAAxsfJgcdmz2yqkbL3tmAAlIJGSAJGSQSMkgCROgSB0X1zY/F2bCfdTn49j90oW1fW1HH+pzs7gxb8l63kX8EH3+ypXDr+eVnyR2j1iYEr+zMuuEJ22KFdkK64SnZOVdsJpRiubfJkeh2C8fs/DpcXCUceEpxacWrZ7ss2nzT45y5E3ay1hp24cd5OZAB85YAACr2phRyKL8ea3C6i2mXjqcHHa81vZ5f6japPNum9bhgNS/3Ttr/WLPWt/HyPPvUThPXaGVKLXHZRjw2mpJwU7J/nbBeTiy7qfKl7E9x6qiQCxOEpBIySAJEgIAjRkxLBhcuQE40txXly+RtKuE/wAS80/7+RaAAAAash/dNpoyugHGT6kJEtcyUgCRkkEjJIAiUgSAMkEiUgIlHafmn9CkX0UrI6bXmRdufKp69+xAAIlIAABu7F7Nqxq3CqPCrLrsia8bLZucn+evckaUt6Xi9HKJd3hyLOpLu1N2L8SSkEjJIuTCRICAIkAAJLkyUhLoBVxX99r/AEv6ouFGn9ovc/oXgAAAGjL6G805K5Aca0SkS0SkAJQ0SAMkgkSkASJQJAkr5dfSXwf6FlI1ZSbhLT09cn57Ry5sZlhZXvjusopg1U28XJ8pLrH+htPlLwEGu65R82+kV1Zou4de3xdy6e8vJFXsyLUOb3Jyk34b5ci4kfT4MZjhEPLlvKiRICOzmIkAASkEiQBDJIk+TAp1P/FXx+heKOL+0flF/VF4AAABhcuTMyJLkBxklzBnYuZiAMkgiUgCRKBkAJQSKvanaNeNTZkWtqqqHHNxi5y1tLlFc29tAW0YZH4Je79UUcbtVW0031xahfTC2HH+JRnFNJpck9Nd7NVs3Pak201rXd8jMpuaJde2N9HFz6SXR/1NPFau7i+G/pzKbnODa4mtPXVnV/Sz00vxrIUUeylNR47pWVuajxfgiuGS562370TZ9HPGbllOL+Rxzy8bjZXdeK193D8NfU200KPN85eP9Dz30c9O8m6+NOR7CMbVw1yrqlBxt6xT3Jpp8179Hb5XTl1lJ76LeufhyMw6OeX+yHN/I4cd142u04H4P4n+hZOAx91pKLaa6tPq+/3mPY/bdtuTl484wcKHS4yjuMtTg299z5ru11KccfGa/RcvL3fW3YUSYxsT6P4PkZHoCUgkSAAAAwufJmZXzJ6QGGAuc37l+v8AQuFfBjqC8XuXz6flosAAAAAAFTKjzNJduhte4pJASkSgjIAG9EN6MUBQ7a7YhiwUpKUpzlwU0wW7LZ+C+fX6tpHEX9kZubCUcu6vHpsWpYlVUbHw7T1ZY3zfJdN9DLsCP2rIu7QltxjOWPhJ9I1R2pWLzk3/AMjsZrPrrH/5udiVxjRZDMoriorGnXGq6EIrS9nNddJck/ky32b2hXkV+0rb1vhlGXKdc11jJdzOcOsds1LFy6sqP3asuax8pf5Va/2dn12/J+I+nxZzq+kv4X+h0D0/7KpjBZcfuXTtjXNL8FzcW+JruklHr3956VZDacX3rXuZ5n6yr3xY1P7qttkvNtQj9JnWZbw1UOfHcexMp8qp6B9lU3zsttXHKiVbhU0vZ7ltxnL97Ti9Lpy2elYVe5cT/wAv/L++Z5n6vMjhyrK+63Hl/NCSkvy4z1aivhil39X7zfKTD0fiufY3fkbDjfR1az+1V/4f/CZS9NPSGWBRCVai77pShTxrihBRSc7Gu/W4pLxkt8joOL6Sdp41k8v2nFK5wd0bI1yhbr8KmopOPV64ddTjF1r282Qta814M47sXtKOVj0ZME4q6pT4G03CXSUG11akmvgXTGrldqfk/A2HHlmi7ufwfiBvAJAHH5L45KK73r4d5bvnpFfBhtub/wBsfDzf6AXEiQAAAAAAAU74aZcMLIbQFRMl8jHoyZgYHDemPayw8HJyGpPVarjw62p2yVcZNvok5Jt+RzIcdpprafJpraa80Bw/odZCXZ+DKCajLFrlqWt8T5yfLuctteTRzA0AB171g3wr7NyZz4tR9k48OuU/awUW2+kdvm+5bOxaIlHaaa2mtNNbTXg0BwXY+esnHx8mKko30xsSlre3yfRtPmnz8NHQPWn2dKN9OUtuFtSofhCytyl/7Rk3/DI9Yup2tJdPw8tJcuhwHpJ2R9rxbsfTU5RU6pNNcN0HxQ+Da4X5SYZY829XPZ0rs6Fq2oYsJXTfi5RlXCHx4m/dBnrkINtJf/PM656A9jyxsKDnCcLsh/abozjJThxRShW0+jjFLa8ZSO3Y1Wltrm/yRtJHUvWT6N2ZlFM8ePHbiuzVe9SsqmlxqHjPcIPXfzPOI4mfkNY8cS9zckpbx7a1yfWcpJRil1b8j3rQe/P8xsscZ6N9l/ZMTHxm1KVdaVko/hla25Tcd93FJ68tHJE6GjGoA0NAXMee15rkzY2VcXq/NfQZd6S0BqyJuclFdW/kvEvVwUUorolo0YdHCuKX4pfkvAsgAAAAAAAAAABqvq3zXX6laMtci8abqd811+oGCJNMZa6m1PYEkoJGSQBIkBADIgASEEiQAAAAEgAQ2VcjK10Azyb0kacWhyasl/Cn9WTj4zk+KfTqov6v+hdAAAAAAAAAAAAAAAAA121KXv8AEqyi4v8AvTLxDWwK0LUzbswsxu+PLyfQ0vij1T9/cBaRJXhkG1WoDMlIhSXiTteK+YEgjY4l4gSDB2xNU8pICyarLkio8iUuUU5e7p8zOGG3zm/4Y/qwMJ3ym+GK2/yRvx8RR+9L70vyXuN9cFFaSSXkZAAAAAAAAAAAAAAAAAAAAAAAAAap48X3a93I1SxPCT+KTLQApvGn3OL+LRj7KzwX8yLwAouq3w/ND7PY++K+Lf6F4AU1hPvn8kbIYcF3cX+57/LoWABCRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z", // Replace this URL with your default image URL
    floating: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default MedicineChatbot;
