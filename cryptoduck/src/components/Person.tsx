import React from "react";

interface IPerson {
    firstName: string;
    secondName:string;
}

const Person = ({ firstName, secondName }: IPerson) => {
    return (
        <h1>
            {firstName} {secondName}
        </h1>
    );
};

export default Person;