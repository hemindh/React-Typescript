import React from "react";

const FirstLearningfile = () => {
  let num: number = 1000;
  //   console.log(num);

  let name: string = "karn";
  //   console.log(name);

  let value: Boolean = false;
  //   console.log(value);

  //InnerFunction how to get the data with passing perameter

  function getName(FirstName: string, LastName: string) {
    console.log("Hello , " + FirstName + LastName);
  }

  getName("raghav", "Dhameliya");

  //function inner pass the object and get the data

  function preeCode(pt: { x: number; y: number }) {
    console.log("pt x Value is : - " + pt.x);

    console.log("pt y Value is : - " + pt.y);
  }

  preeCode({ x: 70, y: 30 });

  //Union ype :-
  //Here we can find the typeof id and apply the condition

  function getDetail(id: number | string) {
    if (typeof id === "number") {
      console.log("id is number");
    } else if (typeof id === "string") {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }

  getDetail(1234);

  //   const handleP = () => {
  //     console.log("clicked");
  //   };

  //type nd Interface :-

  interface obj {
    name: string;
    address: string;
    skill: string;
    married: boolean;
  }

  function getDetails(detail: obj) {
    console.log("My name is :- " + detail.name);
    console.log(" Address  is :- " + detail.address);
    console.log(" or Skill is :- " + detail.skill);
    console.log("Married Status :- " + detail.married);
  }

  getDetails({
    name: "khan",
    address: "123 , ramchowk",
    skill: "worker",
    married: true,
  });

  return (
    <>
      <h2>FirstComponent</h2>
      <p>Typescript number Datatype :- {num}</p>
      <p>Typescript string Datatype :- {name}</p>
      <p>Typescript Boolean Datatype :- {value.toString()}</p>
    </>
  );
};

export default FirstLearningfile;

//In Typescript DataTypes is Defined as a variable and its use like define any type like as number , string , boolean .........
//Function inner how to pass the data in perameter and how to get the data
//how pass the object inner function and how to get the data of object
