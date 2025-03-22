import { FaChevronLeft, FaChevronRight, FaFastForward, FaFastBackward } from "react-icons/fa";

export default function Pagination(){
    return (
     <div className="flex justify-center items-center gap-4 mt-8">
     <FaFastBackward className="cursor-pointer"></FaFastBackward>
     <FaChevronLeft 
     className="cursor-pointer"
    //    onClick={() => handlePageChange(currentPage - 1)}
    //    disabled={currentPage === 1}
       >
       Previous
     </FaChevronLeft>
     <span className="text-lg text-gray-300">
       Page 1 of 3
     </span>
     <FaChevronRight
     className="cursor-pointer"
    //    onClick={() => handlePageChange(currentPage + 1)}
    //    disabled={currentPage === totalPages}
       >
     </FaChevronRight>
     <FaFastForward
     className="cursor-pointer">

     </FaFastForward>
   </div>
    )
}