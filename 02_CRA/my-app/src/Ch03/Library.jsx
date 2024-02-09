import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="이상한 나라의 엘리스" numOfPage={300}/>
            <Book name="콩쥐팥쥐" numOfPage={400}/>
            <Book name="흥부와 놀부" numOfPage={500}/>
        </div>
    );
}

export default Library;