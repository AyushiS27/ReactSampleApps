// Arrow characters to use: ▼ ▶ •

// const backendData = [
//   {
//     id: "1",
//     name: "Office Map"
//   },
//   {
//     id: "2",
//     name: "New Employee Onboarding",
//     children: [
//       {
//         id: "8",
//         name: "Onboarding Materials"
//       },
//       {
//         id: "9",
//         name: "Training"
//       }
//     ]
//   },
//   {
//     id: "3",
//     name: "Office Events",
//     children: [
//       {
//         id: "6",
//         name: "2018",
//         children: [
//           {
//             id: "10",
//             name: "Summer Picnic"
//           },
//           {
//             id: "11",
//             name: "Valentine's Day Party"
//           },
//           {
//             id: "12",
//             name: "New Year's Party"
//           }
//         ]
//       },
//       {
//         id: "7",
//         name: "2017",
//         children: [
//           {
//             id: "13",
//             name: "Company Anniversary Celebration"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: "4",
//     name: "Public Holidays"
//   },
//   {
//     id: "5",
//     name: "Vacations and Sick Leaves"
//   }
// ];

// export function fetchData() {
  
//   return new Promise(resolve => {
    
//     setTimeout(resolve, 100, backendData);
//   });
// }


 

import React, { useState, useReducer } from "react";
// Arrow characters to use: ▼ ▶ •

const backendData = [
  {
    id: "1",
    name: "Office Map",
  },
  {
    id: "2",
    name: "New Employee Onboarding",
    children: [
      {
        id: "8",
        name: "Onboarding Materials",
      },
      {
        id: "9",
        name: "Training",
      },
    ],
  },
  {
    id: "3",
    name: "Office Events",
    children: [
      {
        id: "6",
        name: "2018",
        children: [
          {
            id: "10",
            name: "Summer Picnic",
          },
          {
            id: "11",
            name: "Valentine's Day Party",
          },
          {
            id: "12",
            name: "New Year's Party",
          },
        ],
      },
      {
        id: "7",
        name: "2017",
        children: [
          {
            id: "13",
            name: "Company Anniversary Celebration",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Public Holidays",
  },
  {
    id: "5",
    name: "Vacations and Sick Leaves",
  },
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}
const collapseId = {}
export const LeafList = () => {
  const [hidden, setHidden] = useState({});


  
  const processLeafNode = (leafNode, isChild = false) => {
    
    let id = leafNode.id;
    collapseId.id = isChild;
    return (
      <li id={leafNode.id} hidden={hidden[leafNode.id]}>
        • {leafNode.name}
      </li>
    );
  };

  const onNodeClick = (event) => {
        let id = event.target.id;
    setHidden({id: !hidden[event.target.id]});
    };

  const processObject = (backendData, isChild = false) => {
    let renderData = [];
    backendData.forEach((singleObject) => {
      if ("children" in singleObject && !isChild) {
        // Current object is a branch
        renderData.push(
          <ul id={singleObject.id} onClick={onNodeClick}>
            {singleObject.name}
            {processObject(singleObject.children, true)}
          </ul>
        );
      } else if ("children" in singleObject && isChild) {
        // Current object is a branch
        renderData.push(
          <ul id={singleObject.id} onClick={onNodeClick}>
            {singleObject.name}
            {processObject(singleObject.children, true)}
          </ul>
        );
      } else {
        console.log(singleObject);

        //Current object is a leaf node

        renderData.push(processLeafNode(singleObject, isChild));
      }
    });
    
    return renderData;
  };

  let x = processObject(backendData);
  setHidden(collapseId)
  console.log(x);

  return <ul> {x}</ul>;
};

