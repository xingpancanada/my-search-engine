"use client"
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex py-4 justify-between items-center sm:justify-start sm:space-x-44 sm:px-0 text-sm">
      {startIndex >= 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-5"/>
            <p>Prev</p>
          </div>
        </Link>
      )}
       {startIndex <= 99 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5"/>
            <p>Next</p>
          </div>
        </Link>
      )}
      
    </div>
  )
}
