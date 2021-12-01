import React from "react";

interface IPerson {
    firstName: string;
    secondName:string;
}

const Person = ({ firstName, secondName }: IPerson) => {
    return (
        <div>
            {firstName} {secondName}
        </div>
    );
};

export default Person;