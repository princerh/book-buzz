/* eslint-disable react/prop-types */

import ReadListSingleBook from "./ReadListSingleBook";

const ReadList = ({readBooks}) => {



    return (


       <div className="flex flex-col gap-8 mt-8">

{
    readBooks.map(readBook => <ReadListSingleBook key={readBook.id} readBook={readBook}></ReadListSingleBook>)
}


       </div>
    );
};

export default ReadList;