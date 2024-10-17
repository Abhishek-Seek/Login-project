// export default class Api {
    
//     get(url: string) {
//         return fetch(`http://localhost:3000/${url}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }).then(response => response.json());
//     }

//     post(url: string, payload: any) {
//         return fetch(`http://localhost:3000/${url}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload),
//         }).then(response => response.json());
//     }

//     put(url: string, payload: any) {
//         return fetch(`http://localhost:3000/${url}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload),
//         }).then(response => response.json());
//     }

//     delete(url: string) {
//         return fetch(`http://localhost:3000/${url}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }).then(response => response.json());
//     }
// }
