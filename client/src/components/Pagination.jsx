export default function Pagination(){
    return (
     <div className="flex justify-center gap-4 mt-8">
     <button
       className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-lg hover:bg-yellow-300"
    //    onClick={() => handlePageChange(currentPage - 1)}
    //    disabled={currentPage === 1}
       >
       Previous
     </button>
     <span className="text-lg text-gray-300">
       Page 1 of 3
     </span>
     <button
       className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-lg hover:bg-yellow-300"
    //    onClick={() => handlePageChange(currentPage + 1)}
    //    disabled={currentPage === totalPages}
       >
       Next
     </button>
   </div>
    )
}