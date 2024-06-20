import React from 'react'

const Age = (props) => <div>The person is {props.age} years old.</div>

const Weight = (props) => (
    <p>The weight of the object on earth is {props.weight} N.</p>
  );

const Status = (props)=>{
  let status  = props.status ? "old enough to drive" : "Too young for driving";
  return (
    <p>{status}</p>
  )
}

const Skills = (props) => {
  return (
    <p> {`Skills are : ${props.skills[0]} , ${props.skills[1]} , ${props.skills[2]}`}</p>
  )
}

// export default Info


export { Age, Weight , Status ,Skills};
// export default Status;





// import React from 'react'

// const Age = (props) =>{
//   return (
//     <div>
//       The person is {props.age} years old.
//     </div>
//   );
// };


// const Weight = (props) =>{
//   return (
//     <p>The weight of the object on earth is {props.weight} N.</p>
//   );
// } ;


// const Status = (props)=>{
//   return (
//     let sttatus  = props.status ? "old enough to drive" : "Too young for driving";
//     return <p>{sttatus}</p>
//   );
// };


// export { Age, Weight };
// export default Status;

