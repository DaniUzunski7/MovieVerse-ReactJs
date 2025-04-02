import { FaChevronLeft, FaChevronRight, FaFastForward, FaFastBackward } from "react-icons/fa";

export default function Pagination({
  page,
  onPageChange,
  totalPages
}){
    return (
     <div className="flex justify-center items-center gap-4 mt-8">
     <FaChevronLeft 
    className={`cursor-pointer ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={() => page > 1 && onPageChange(page - 1)} 
/>
     <span className="text-lg text-gray-300">
       Page {page} of {totalPages}
      </span>
     <FaChevronRight
    className={`cursor-pointer ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={() => page < totalPages && onPageChange(page + 1)} 
       >
     </FaChevronRight>
   </div>
    )
}