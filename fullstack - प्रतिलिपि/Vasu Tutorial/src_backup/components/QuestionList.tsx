// import React, { useEffect, useState } from "react";
// import { API } from "../api/api";

// interface Question {
//   id: number;
//   title: string;
//   difficulty: string;
// }

// interface Props {
//   section: string;
//   questions: Question[];
// }

// const QuestionList: React.FC<Props> = ({ section, questions }) => {
//   const [solvedIds, setSolvedIds] = useState<number[]>([]);

//   // 🔹 page load hone par DB se solved questions lao
//   useEffect(() => {
//     const fetchProgress = async () => {
//       const res = await API.get(`/progress/${section}`);
//       const ids = res.data.map((item: any) => item.question_id);
//       setSolvedIds(ids);
//     };
//     fetchProgress();
//   }, [section]);

//   // 🔹 checkbox click handler
//   const handleCheckbox = async (questionId: number, checked: boolean) => {
//     await API.post("/progress/solve", {
//       question_id: questionId,
//       solved: checked,
//     });

//     if (checked) {
//       setSolvedIds([...solvedIds, questionId]);
//     } else {
//       setSolvedIds(solvedIds.filter((id) => id !== questionId));
//     }
//   };

//   return (
//     <table className="w-full border">
//       <thead>
//         <tr>
//           <th>Status</th>
//           <th>Question</th>
//           <th>Difficulty</th>
//         </tr>
//       </thead>

//       <tbody>
//         {questions.map((q) => (
//           <tr key={q.id}>
//             <td>
//               <input
//                 type="checkbox"
//                 checked={solvedIds.includes(q.id)}
//                 onChange={(e) =>
//                   handleCheckbox(q.id, e.target.checked)
//                 }
//               />
//             </td>
//             <td>{q.title}</td>
//             <td>{q.difficulty}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default QuestionList;


// import React, { useEffect, useState } from "react";
// import { API } from "../api";

// interface Question {
//   id: string;
//   title?: string;
//   category?: string;
//   difficulty?: string;
//   company?: string;
// }

// interface QuestionListProps {
//   sheetName: string;          // Blind75, AllDSA, etc.
//   questions: Question[];      // page ka question data
// }

// const QuestionList: React.FC<QuestionListProps> = ({
//   sheetName,
//   questions,
// }) => {
//   const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);

//   /* ================================
//      1️⃣ Load already checked questions
//      ================================ */
//   useEffect(() => {
//     const fetchChecked = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user") || "{}");
//         if (!user?.id) return;

//         const res = await API.get(`/get-progress/${user.id}`, {
//           params: { sheet_name: sheetName },
//         });

//         const ids = res.data.map((q: any) => q.question_id);
//         setCheckedQuestions(ids);
//       } catch (err) {
//         console.error("Failed to load progress", err);
//       }
//     };

//     fetchChecked();
//   }, [sheetName]);

//   /* ================================
//      2️⃣ Checkbox toggle handler
//      ================================ */
//   const handleCheckboxChange = async (
//     question: Question,
//     checked: boolean
//   ) => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     if (!user?.id) return;

//     if (checked) {
//       // ✅ SAVE
//       await API.post("/save-progress", {
//         user_id: user.id,
//         question_id: question.id,
//         title: question.title,
//         category: question.category,
//         difficulty: question.difficulty,
//         company: question.company,
//         sheet_name: sheetName,
//       });

//       setCheckedQuestions((prev) => [...prev, question.id]);
//     } else {
//       // ❌ DELETE (UNTICK)
//       await API.delete("/delete-progress", {
//         data: {
//           user_id: user.id,
//           question_id: question.id,
//           sheet_name: sheetName,
//         },
//       });

//       setCheckedQuestions((prev) =>
//         prev.filter((id) => id !== question.id)
//       );
//     }
//   };

//   /* ================================
//      3️⃣ UI
//      ================================ */
//   return (
//     <div className="space-y-3">
//       {questions.map((q) => (
//         <div
//           key={q.id}
//           className="flex items-center gap-3 border p-3 rounded"
//         >
//           <input
//             type="checkbox"
//             checked={checkedQuestions.includes(q.id)}
//             onChange={(e) =>
//               handleCheckboxChange(q, e.target.checked)
//             }
//           />

//           <div>
//             <p className="font-semibold">{q.title || q.id}</p>
//             <p className="text-sm text-gray-500">
//               {q.category} {q.difficulty} {q.company}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionList;
